import React,{useState,useContext} from 'react'
import styled from 'styled-components';
import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button';
import {Redirect} from 'react-router-dom';

import firebaseApp from './../firebase/firebaseConfig';
import AuthContext from 'auth/AuthContext';
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
    const auth = useContext(AuthContext)
    const[email, setEmail]= useState('')
    const[password, setPassword] = useState('')
    const[isValid, setIsValid] = useState(false)

    const handleClick = (e) =>{
        //test our auth in firebase
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential=>{
            //email and password input
            auth.isUser = true
            setIsValid(true)

        })
        .catch(error=>{
            console.log(error.code)
            console.log(error.message)
        })
    }
    //conditional rendering
    if(isValid){
        return <Redirect to="/dashboard"/>
    }else{
        return ( 
            <LoginPagesStyles>
                <header>
                    <h1>Login Page</h1>
                    <p>Please enter in your login information below</p>
                </header>
                <FormInput label="Email Address: " type="text" onChange={(e)=> setEmail(e.target.value.trim())}/>
                <FormInput label="Password: " type="text" onChange={(e)=> setPassword(e.target.value.trim())}/>
                <Button uiStyle="login" label="login" onClick={handleClick}/>
            </LoginPagesStyles>
         );
    }
}
 
export default LoginPage;