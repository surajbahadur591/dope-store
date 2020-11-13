import React from 'react'
import {Mutation} from 'react-apollo'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {CURRENT_USER_QUERY } from './User'
import gql from 'graphql-tag'

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

    render(){
        return ( <Mutation mutation={REMOVE_FROM_CART_MUTATION}>
            {(removeFromCart, {loading, error})=>(
            <BigButton title="Detele Item"> &times;</BigButton>
            )}
            </Mutation>
        )
    }
}

export default RemoveFromCart;