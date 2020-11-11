import Link from 'next/link'
import CreateItem from '../components/CreateItem'

import Reset from '../components/Reset'
const Sell = props => (
    <> 
      <p>Reset your Password {props.query.resetToken}</p>      
      <Reset resetToken={props.query.resetToken}></Reset>    
    </>
)

export default Sell; 