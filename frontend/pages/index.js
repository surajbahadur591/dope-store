import Link from 'next/link'
import { render } from 'nprogress'
import Items from '../components/Items'
// commentg
const Home = props => (
        <div>
            <Items page={parseFloat(props.query.page) || 1}/>
        </div>

); 

export default Home