import React,{useContext, useState } from 'react';
import styled from 'styled-components';
import FormInput from './../components/forms/FormInput';
import Button from './../components/buttons/Button'
import {Redirect} from 'react-router-dom';

import AuthContext from 'auth/AuthContext';
import firebaseApp from 'firebase/firebaseConfig';
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
    button{
        margin-top:3rem;
    }

`
const RegisterPage = (props) => {
    const auth = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const[isValid, setIsValid] = useState(false)

    const handleClick = (e) =>{
        firebaseApp.auth().createUserWithEmailAndPassword(email,password)
        .then(userCredential =>{
            auth.isUser = true;
            setIsValid(true)
        })
        .catch(error=>{

        })
    }
    if(isValid){
        return <Redirect to="/login"/>
    }
    else{
        return ( 
            <RegisterPageStyles>
                <header>
                    <h2>Unlimited Free Trial Sign Up</h2>
                    <p>no credit card required</p>
                </header>
                <FormInput label="name on the account: " type="text" onChange = {(e)=> setUser(e.target.value.trim())}/>
                <FormInput label="valid email address: " type="email" onChange={(e)=> setEmail(e.target.value.trim())}/>
                <FormInput label="password(min 6 characters): " type="text" onChange={(e)=> setPassword(e.target.value.trim())}/>
                <Button uiStyle="signup" label="Create a free account" onClick = {handleClick}/>
            </RegisterPageStyles>
             );
    }
}
 
export default RegisterPage;