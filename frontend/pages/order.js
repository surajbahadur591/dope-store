import Link from 'next/link'
import Order from '../components/Order'

import PleaseSignIn from '../components/PleaseSignIn'

const OrderPage = props => (
    <> 
    <PleaseSignIn>
<Order id={props.query.id}></Order>
    </PleaseSignIn>
        
        
    </>
)

export default OrderPage; 