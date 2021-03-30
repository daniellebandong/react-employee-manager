import React from 'react';
import styled from 'styled-components';

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


`
const RegisterPage = (props) => {
    return ( 
    <RegisterPageStyles>
        <header>
            <h2>Unlimited Free Trial Sign Up</h2>
            <p>no credit card required</p>
        </header>
    </RegisterPageStyles>
     );
}
 
export default RegisterPage;