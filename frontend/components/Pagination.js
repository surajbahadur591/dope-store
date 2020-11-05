import React from 'react'
import PaginationStyles from './styles/PaginationStyles'
import gql from 'graphql-tag'
import { Query } from 'react-apollo';
import  {perPage} from '../config'
import Head from 'next/head'
import Link from 'next/link'

const PAGINATION_QUERY =gql `

query PAGINATION_QUERY {
    itemsConnection {
        aggregate {
            count
        }
    }
}
`;
const Pagination = props => (
    

        <Query query={PAGINATION_QUERY}>
            {({data, loading, error}) => {
                if(loading ) return <p> loading....</p>

                const count = data.itemsConnection.aggregate.count;
                const pages =  Math.ceil(count/perPage);
                const page =  props.page

            return  (

                <div>

                

            
                <PaginationStyles>

                 <Head>
                    <title>
                    Dope Store | Page {page} of {pages}

                    </title>
                    
                </Head>

                <Link 
                prefetch
                href={{
                    pathname: 'items',
                    query : {page : page-1},

                }}> Prev </Link>
                
                 <p>You are on Page {props.page} of {pages}</p>
            <p>{count}  Items Total</p>

            <Link 
                prefetch
                href={{
                    pathname: 'items',
                    query : {page : page+1},

                }}> Next </Link>
            </PaginationStyles>
            </div>

            )

        }}
        </Query>



)

export default Pagination