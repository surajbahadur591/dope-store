import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {Mutation} from 'react-apollo'
import Router from 'next/router'
import NProgress from 'nprogress'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import calcTotalPrice from '../lib/calcTotalPrice'
import Error from './ErrorMessage'
import User, { CURRENT_USER_QUERY} from './User'
import formatMoney from '../lib/formatMoney'
import CartItem from './CartItem'
// import {PaymentRequestButtonElement, useStripe} from '@stripe/react-stripe-js';

const CREATE_ORDER_MUTATION = gql`
 mutation createOrder($token: String!) {
     createOrder(token: $token){
         id
         charge
         total
         items {
             id
             title 
         }
     }
 }
`;

function totalItems(cart){
    return cart.reduce((tally, CartItem) => tally+CartItem.quantity, 0)
}
class TakeMyMoney extends React.Component{

    onToken = async (res, createOrder) => {
        NProgress.start();
        console.log(res.id)
        const order = await createOrder({
            variables: {
                token: res.id,
            }
        }).catch(err => {
            alert(err.message)
        })
        Router.push({
            pathname:'/order',
            query:{ id: order.data.createOrder.id},
        })
    }
    render(){
        return (
            <User>
                {({data: {me}})=>(

                    <Mutation mutation={CREATE_ORDER_MUTATION}
                refetchQueries={[{query: CURRENT_USER_QUERY}]}>{ (createOrder)=>(


                
                    <StripeCheckout 
                    amount={calcTotalPrice(me.cart)*100}
                    name="dope Store"
                    image={ me.cart.length && me.cart[0].item && me.cart[0].item.image}
                    email={me.email}
                    token={res => this.onToken(res, createOrder)}
                    stripeKey='pk_test_SS8bk2Ip97dz806IAJrFOSBa001rT4Ls01'
                    currency="INR"
                    description={`Order of ${totalItems(me.cart)} Items`}
                    >{this.props.children}</StripeCheckout>

                    )}</Mutation>
                    
                )}
            </User>
        )
    }
}

export default TakeMyMoney;