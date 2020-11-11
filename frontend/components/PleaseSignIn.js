import {Query} from 'react-apollo'
import {CURRENT_USER_QUERY} from './User'
import Signin  from './Signin'
import { render } from 'nprogress'
import React, { Component } from 'react'





const PleaseSignIn = props => {
    return <Query query={CURRENT_USER_QUERY}>
        {({data, loading})=>{
            if(loading) return <p>loading....</p>
            if(!data.me) {
                return (<div> <p>Please sing in!!</p>
                <Signin/></div>)
                
            }
    
            return props.children;
        }}</Query>
    
    
    
}

    


export default PleaseSignIn