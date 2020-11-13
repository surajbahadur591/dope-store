import Link from 'next/link'
import NavStyles from './styles/NavStyles'
import User from './User'
import Signout  from '../components/Signout'
import {Mutation } from 'react-apollo'
import {TOGGLE_CART_MUTATION} from '../components/Cart'

const Nav = () =>{
    return (
        
            <User>{
                ({data: {me}}) => (
                    <NavStyles> 
                        
                        <Link href='/items'><a>Shop</a></Link>

                        {me && (
                            <>
                            
                            <Link href='/sell'><a>Sell</a></Link>
                        <Link href='/orders'><a>Orders</a></Link>
                        <Link href='/account'><a>Account</a></Link>
                        <Signout/>

                        <Mutation mutation={TOGGLE_CART_MUTATION}>
                            {(toggleCart)=> (
                            <button onClick={toggleCart}>My Cart</button>
                            )}
                    </Mutation>
                        </>
                        

                        )}
                        

                        {!me && (<Link href='/signup'><a>Sign In</a></Link> )}
                        
                        
                        
                    </NavStyles>

                )
                
                }
                </User>
            
    )
}

export default Nav; 