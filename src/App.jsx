import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PageNotFound from './pages/404';
import { Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {

  return (
    <Router>
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
