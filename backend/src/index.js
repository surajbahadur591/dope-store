// let's go!
require('dotenv').config({path :'variables.env'});

const cookieParser = require('cookie-parser');
const createServer = require('./createServer');
const db= require('./db');

const server = createServer();

//handle cookie JWT
// populate current user

server.express.use(cookieParser());



server.start({
    cors: {
        credentials:true,
        origin : process.env.FRONTEND_URL,
    },
    }, deets =>{
        console.log(`RUNNING http://localhost:${deets.port}`)
})