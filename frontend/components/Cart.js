import React from 'react'
import {Query, Mutation} from 'react-apollo'
import gql from 'graphql-tag'
import CartStyles from './styles/CartStyles'
import Supreme from './styles/Supreme'
import CloseButton from './styles/CloseButton'
import SickButton from './styles/SickButton'
import { de } from 'date-fns/locale'
import User from './User'
import CartItem from './CartItem'
import calcTotalPrice from '../lib/calcTotalPrice'
import formatMoney from '../lib/formatMoney'
import TakeMyMoney from './TakeMyMoney'


const LOCAL_STATE_QUERY = gql`
    query {
        cartOpen @client
    }
`;

const TOGGLE_CART_MUTATION = gql`

mutation {
    toggleCart @client
}
`;


const Cart = () => {

return ( 
<User>{(data)=> {
    if(!data.data.me) return null;
    console.log(data.data.me)
    const me = data.data.me;
    const userName = data.data.me.name;
    console.log(userName)
    return (

  
<Mutation mutation={TOGGLE_CART_MUTATION}>
    {toggleCart => (
    <Query query={LOCAL_STATE_QUERY}>
    {(data) =>(  <CartStyles open={data.data.cartOpen}>
        <header>
            <CloseButton onClick={toggleCart}title="close"> &times;</CloseButton>
    <Supreme> {userName}'s Bag</Supreme>
            <p> Your have {me.cart.length} item{me.cart.length ===1? '':'s'} in your Bag</p>
        </header>

        <ul>
        {me.cart.map( cartItem => <CartItem key={cartItem.id} cartItem={cartItem}>{cartItem.id}</CartItem>)}

        </ul>

        <footer>
            <p>{formatMoney(calcTotalPrice(me.cart))}</p>

            <TakeMyMoney>
            <SickButton> CheckOut</SickButton>
            </TakeMyMoney>
            
        </footer>
    </CartStyles>
    )}</Query>
    )}</Mutation>
    )
}}</User>
)
}

export default Cart;
export {LOCAL_STATE_QUERY};
export {TOGGLE_CART_MUTATION};