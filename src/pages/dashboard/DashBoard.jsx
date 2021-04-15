import React, {useContext} from 'react'
import { Redirect, Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import AuthContext from './../../auth/AuthContext'
//local modules
import ViewAllPanel from 'pages/panels/ViewAllPanel';
import AddPanel from 'pages/panels/AddPanel';
import EditPanel from 'pages/panels/EditPanel';
import DeletePanel from 'pages/panels/DeletePanel';

const DashBoardStyles = styled.section`
    display:flex;
`
const SideBar = styled.aside`
    width:256px;
    box-shadow:0 0 5px 1px grey;
    height:calc(100vh - 64px);
    position:relative;
    z-index:1;
    padding:1rem;
    h1{
        font-size:1.5rem;
    }
    a{
        text-decoration:none;
        font-size:14px;
    }
    p{
        margin-bottom:1rem;
        color:grey;
    }
`
const Panels = styled.section`
    width:calc(100% - 256px);
    height:calc(100vh - 64px);
    background-color:#f4f4f4;
`
const DashBoard = (props) => {
    const {path, url} = useRouteMatch()
    //access the authContext
    const auth = useContext(AuthContext);
    //conditional rendering, if the auth.isUser is false it needs to redirect to the login page, if it returns true, render the dashboard
    if(auth.isUser){
        return(
            <DashBoardStyles>
            <SideBar>
                <header>
                    <h1>Firebase Whats App</h1>
                    <p>firebase who new</p>
                </header>
                <ul>
                    <li><Link to={`${url}`}>view all</Link></li>
                    <li><Link to={`${url}/add`}>add content</Link></li>
                    <li><Link to={`${url}/delete`}>remove content</Link></li>
                    <li><Link to={`${url}/edit`}>edit content</Link></li>
                </ul>
            </SideBar>
            <Panels>
                <Switch>
                    <Route exact path = {path}><ViewAllPanel/></Route>
                    <Route path={`${path}/add`}><AddPanel/></Route>
                    <Route path={`${path}/delete`}><DeletePanel/></Route>
                    <Route path={`${path}/edit`}><EditPanel/></Route>
                </Switch>
            </Panels>
        </DashBoardStyles>
        )
    }else{
        return <Redirect to="/login"/>
    }

}
 
export default DashBoard;
