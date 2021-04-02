import React from 'react'
import styled from 'styled-components';
import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button';
const LoginPagesStyles = styled.aside`
width:480px;
margin:6rem auto 0;
header{
    text-align:center;
}
h1{
    font-size:2.25rem;
}
p{
    margin-bottom:1rem;
}
`

const LoginPage = (props) => {
    return ( 
        <LoginPagesStyles>
            <header>
                <h1>Login Page</h1>
                <p>Please enter in your login information below</p>
            </header>
            <FormInput label="Email Address: " type="email"/>
            <FormInput label="Password: " type="text"/>
            <Button uiStyle="login" label="login"/>
        </LoginPagesStyles>
     );
}
 
export default LoginPage;