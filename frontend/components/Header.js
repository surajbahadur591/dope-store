import Nav from './Nav'
import Link from 'next/link'
import styled from 'styled-components'
import Router from 'next/router'
import Nprogress from 'nprogress'


Router.onRouteChangeStart = () => {
    Nprogress.start();
    console.log("onRouteChangeStart")
}
Router.onRouteChangeComplete = () => {
    Nprogress.done();
    console.log("onRouteChangeComplete")
}
Router.onRouteChangeError = () => {
    Nprogress.done();
    console.log("onRouteChangeError")
}

const theme = {
    red : '#FF0000',
    black : '#393939',
    grey :'#3A3A3A',
    lightgrey : '#E1E1E1',
    offWhite:'#EDEDED',
    maxWidth : '1000px',
    bs : '0 12px 24px 0 rgba(0,0,0,0.09)'
}

const Logo = styled.h1`
font-size:2rem;
margin-left: 2rem;
position: relative;
z-index :2;
transform: skew(-7deg);
a {
    padding:0.5rem 1rem;
    background: ${ props => props.theme.red};
    color:white;
    text-transform:uppercase;
    text-decoration:none;
}
@media (max-width:1300px){
    margin:0;
    text-align:center;
}
`;

const StyledHeader = styled.header`
.bar{
    border-bottom : 10px solid black;
    display:grid;
    grid-template-columns:auto 1fr;
    justify-content:space-between ;
    align-items: stretch; 
    @media (max-width:1300px){
        grid-template-columns:1fr;
        justify-content:center;
    }
}

.sub-bar{
        display:grid;
        grid-template-columns:1fr auto;
        border-bottom:1px solid ${theme.lightgrey};
    }
`;
const Header = () => {
    return (
        <StyledHeader>
        <div className='bar'>
            <Logo> 
                <Link href='/'>
                <a >Dope Store</a>
                </Link>
               
            </Logo>
            <Nav/>
        </div>
        

        <div className='sub-bar'> <p>Search</p></div>

        <div> Cart </div>

    </StyledHeader>

    )
    
}

export default Header;