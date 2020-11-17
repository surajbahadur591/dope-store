import React, { Component } from 'react'
import Proptypes from 'prop-types'
import {Query} from 'react-apollo'
import {format} from 'date-fns'
import Head from 'next/head'
import gql from 'graphql-tag'
import formatMoney from '../lib/formatMoney'
import Error from './ErrorMessage'
import OrderStyles from './styles/OrderStyles'

const SINGLE_ORDER_QUERY = gql`
    query SINGLE_ORDER_QUERY($id: ID!){
        order(id: $id){
            id
            charge
            total
            # createdAt
            user {
                id
            }
            items{
                id
                title
                description
                price
                image
                quantity
            }
        }
    }
`;

class Order extends Component {

    static propTypes = {
        id: Proptypes.string.isRequired
    }

    render() {
        return (
            <Query query={SINGLE_ORDER_QUERY} variables={{id: this.props.id}}>
                {({data, loading, error})=>{
                if(error) return <Error error={error}></Error>
                if(loading) return <p> loading..</p>
                console.log(data)
                const order = data.order;

                return (
                    <OrderStyles>
                        <Head>
                <title>Dope Store - Order {order.id}</title>
                        </Head>

                        <p> 
                            <span>Order Id: </span>
                           <span>{this.props.id}</span> </p>

                           <p> 
                            <span>Charge </span>
                           <span>{order.charge}</span> </p>

                            <p>
                           <span>Order Total</span>
                           <span>{formatMoney(order.total/100)}</span> </p>

                           <p>
                           <span>item Count</span>
                           <span>{order.items.length}</span> </p>

                           <div className="items">
                               {order.items.map(item => (
                                   <div key={item.id}className="order-item">
                                   

                                    <div>
                                    <img src={item.image} alt={item.title}></img>
                               <h2>{ item.title}</h2>

                               <p> Qty {item.quantity}</p>
                               <p> Each {item.price}.00 Rs</p>
                               <p> Subtotal {item.price * item.quantity}.00 Rs</p>
                               <p>{item.description}</p>
                                    </div>

                                   </div>
                               ))}
                           </div>
                        
                                
                            

                    </OrderStyles>

               
            
             )
            }}</Query>
        )
    }
}
export default  Order;