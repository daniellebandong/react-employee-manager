import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PageNotFound from './pages/404';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AppBar from './components/appbar/AppBar';
function App() {

  return (
    <Router>
      <AppBar/>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route path="/login"><LoginPage/></Route>
          <Route path="/register"><RegisterPage/></Route>
          <Route path="*"><PageNotFound/></Route>
        </Switch>
    </Router>
  );
}

export default App;
