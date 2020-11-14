import React from 'react'
import {Mutation} from 'react-apollo'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {CURRENT_USER_QUERY } from './User'
import gql from 'graphql-tag'
import CartItem from './CartItem'

const REMOVE_FROM_CART_MUTATION = gql`
    mutation removeFromCart($id: ID!){
        removeFromCart(id: $id){
            id
        }
    }
`;

const BigButton = styled.button`
    font-size: 2rem;
    background: lightblue;
    border: 0;
    &:hover {
        color: ${props => props.theme.red};
        cursor: pointer;
    }
`;

class RemoveFromCart extends React.Component{
    static propTypes = {
        id: PropTypes.string.isRequired,
    };

    update=(cache, payload) => {
        console.log("remove")
        const data = cache.readQuery({
            query: CURRENT_USER_QUERY
        });

        console.log(data);
        const cartItemId = payload.data.removeFromCart.id;
        data.me.cart = data.me.cart.filter( CartItem => 
            CartItem.id !== cartItemId)
        
            cache.writeQuery({
                query : CURRENT_USER_QUERY, data
            })

    }

    render(){
        return ( <Mutation mutation={REMOVE_FROM_CART_MUTATION}
        variables={{
            id: this.props.id
        }}
        update={this.update}
        optimisticResponse={{
            __typename : 'Mutation',
            removeFromCart:{
                __typename:'Cartitem',
                id: this.props.id,
            },
        }}
        refetchQueries={[{query: CURRENT_USER_QUERY}]}>
            {(removeFromCart, {loading, error})=>(
            <BigButton disabled={loading} onClick={ () => {
                removeFromCart().catch( err => alert(err.message));
            }} title="Detele Item"> &times;</BigButton>
            )}
            </Mutation>
        )
    }
}

export default RemoveFromCart;