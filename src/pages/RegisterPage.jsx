import React from 'react';
import styled from 'styled-components';
import FormInput from './../components/forms/FormInput';
const RegisterPageStyles = styled.aside`
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
const RegisterPage = (props) => {
    return ( 
    <RegisterPageStyles>
        <header>
            <h2>Unlimited Free Trial Sign Up</h2>
            <p>no credit card required</p>
        </header>
        <FormInput label="name on the account: " type="text"/>
        <FormInput label="valid email address: " type="email"/>
        <FormInput label="password(min 6 characters): " type="text"/>
    </RegisterPageStyles>
     );
}
 
export default RegisterPage;