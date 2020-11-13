import React from 'react'
import formatMoney from '../lib/formatMoney'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import RemoveFromCart from './RemoveFromCart'

const CartItemStyles = styled.li`
    padding: 5px 0;
    border-bottom: 2px solid ${props => props.theme.lightgrey};
    display: grid;
    align-items:center;
    grid-template-columns: auto 1fr auto;
    img {
        margin-right:10px;
    }
    h3, p {
        margin:0;
    }
`;

const CartItem = ({cartItem}) => (
    <CartItemStyles>
        <img width="60" src={cartItem.item.image} alt="cartItem.item.title"></img>
        <div className="cart-item-detais">
<h3>{cartItem.item.title}</h3>
<p>{formatMoney(cartItem.item.price * cartItem.quantity )} {'<---'}
<em>{cartItem.quantity} &times; {formatMoney(cartItem.item.price)} Each</em>
</p>
        </div>
    <RemoveFromCart id={cartItem.id}></RemoveFromCart>
    </CartItemStyles>
)

CartItem.propTypes = {
    cartItem: PropTypes.object.isRequired,
};

export default CartItem;
