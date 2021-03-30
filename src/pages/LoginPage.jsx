import React from 'react'
import styled from 'styled-components';
import FormInput from './../components/forms/FormInput'

const LoginPagesStyles = styled.aside`
width:480px;
margin:6rem auto 0;
header{
    text-align:center;
}
h2{
    font-size:2rem;
    font-weight:700;
}
p{
    margin-bottom:1rem;
}
`

const LoginPage = (props) => {
    return ( 
        <LoginPagesStyles>
            <header>
                <h2>Login Page</h2>
                <p>Please enter in your login information below</p>
            </header>
            <FormInput label="Email Address: " type="email"/>
            <FormInput label="Password: " type="text"/>
        </LoginPagesStyles>
     );
}
 
export default LoginPage;