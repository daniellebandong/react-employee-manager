import React from 'react'
import styled from 'styled-components';
import Logo from './../components/icons/Logo';
import {Link} from 'react-router-dom';
const HomePageStyles = styled.header `
    text-align:center;
    margin:6rem auto 0;
    svg{
        width:80px;
    }
    h1{
        font-size:2.5rem;
    }
    p{
        color:#767484;
        margin-bottom:3rem;
    }
    .homeLinks{
        margin:1rem 1rem;
        text-decoration:none;
        color:black;
        background-color:#d3d3d3;
        padding:1rem;
        border-radius:6px;
        border:1px solid #000;
    }
    .homeLinks:hover{
        background-color:white;
    }
`

const HomePage = (props) => {
    return (
        <HomePageStyles>
            <Logo/>
            <h1>Employee Manager</h1>
            <p>focus on people and we'll focus on the paperwork</p>
            <Link className="homeLinks" to="/login">Login</Link>
            <Link className="homeLinks" to="/register">Register</Link>
        </HomePageStyles>
     );
}
 
export default HomePage;