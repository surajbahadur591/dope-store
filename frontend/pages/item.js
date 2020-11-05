import Link from 'next/link'
import { render } from 'nprogress'
import Items from '../components/Items'
import SingleItem from '../components/SingleItem'


const item = props => (
        <div>
            
            <SingleItem id={props.query.id}/>
        </div>

);

export default item