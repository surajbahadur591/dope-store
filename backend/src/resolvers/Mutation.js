const { compareSync } = require("bcryptjs");
const bcrypt = require ('bcryptjs')
const { randomBytes} = require('crypto')
const {promisify} = require('util')
const jwt = require("jsonwebtoken")
const {transport, makeANiceEmail} = require('../mail')




const Mutations = {
     async createItem(parent, args, ctx, info) {
        if(!ctx.request.userId) {
            throw new Error("You must be logged In")

        }

        const item =  await ctx.db.mutation.createItem({
            data: {
                user: {
                    connect: {
                        id: ctx.request.userId,
                    }
                },
                ...args,
            }
        }, info);

        // console.log(item)

        return item;

     },

     updateItem(parent, args, ctx, info){
        const updates = {...args};

        delete updates.id;

        return ctx.db.mutation.updateItem({
            data: updates,
            where: {
                id: args.id,
            }
        }, info)
     },
     async deleteItem(parent, args, ctx, info){
         const where = { id: args.id};

         const item = await ctx.db.query.item({where} , `{id, title}`);

         return ctx.db.mutation.deleteItem({where}, info);

     },

     async signUp(parent, args, ctx, info){

        args.email = args.email.toLowerCase();

        const password =  await bcrypt.hash(args.password, 10); 

    const user = await ctx.db.mutation.createUser({
        data: {
            ...args, 
            password: password,
            permissions: {set: ['USER']},
        }
    }, info);


    const token = jwt.sign(
        {userId: user.id,}, process.env.APP_SECRET)
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000*60*60*24*365,
        })

        return user;

     },

     async signin(parent, {email, password}, ctx, info){

        const user = await ctx.db.query.user({ where : {email }});
        if(!user) {
            throw new Error(`No such user Found!! ${email}`);
        }

        const valid = await bcrypt.compare(password, user.password);
        if(!valid) {
            throw new Error("Invalid password");
        }

        const token = jwt.sign(
            {userId: user.id,}, process.env.APP_SECRET);
        
            ctx.response.cookie('token' , token, {
                httpOnly: true,
                maxAge: 1000*60*60*24*365,
            })

            return user;


     },

     signout(parent, {email, password}, ctx, info){

        ctx.response.clearCookie('token');
        return {message : 'goodbye!'}


     },

      async requestReset(parent, args, ctx, info){
        const user = await ctx.db.query.user({ where: {email: args.email} })

        if(!user) {
            throw new Error(`No such user Found!! ${args.email}`);
        }

        const resetToken = (await promisify( randomBytes)(20)).toString('hex');
        const resetTokenExpiry = Date.now()+ 3600000;
        const res =  await ctx.db.mutation.updateUser({
            where: { email: args.email},
            data: { resetToken, resetTokenExpiry}
        });

        const mailRes = await transport.sendMail({
            from: 'surajbahadur58@gmail.com',
            to: user.email,
            subject: 'Your Password Reset Token',
            html: makeANiceEmail(`your reset token is here \n \n <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">click here</a>`)
        })

        return {message: 'thanks!'}
        

     },

     async resetPassword(parent, args, ctx, info){
         if(args.password !== args.confirmPassword){
            throw new Error("password do not match");
         }

         const [user] = await ctx.db.query.users({
             where: { 
                 resetToken: args.resetToken,
                 resetTokenExpiry_gte: Date.now() - 3600000,
             },
         })


         if(!user){
            throw new Error("Token Expired");
         }
         const password = await bcrypt.hash(args.password, 10);

         const updatedUser = await ctx.db.mutation.updateUser({
             where: { email: user.email},
             data: {
                 password,
                 resetToken: null,
                 resetTokenExpiry: null,
             }
         });

         const token = jwt.sign( { userId: updatedUser.id},
            process.env.APP_SECRET);
        
            ctx.response.cookie('token', token, {
                httpOnly:true,
                maxAge: 1000*60*60*24*365,
            });

            return updatedUser;
    },


};

module.exports = Mutations;
