import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path={['/', '/login']} component={Login} />
        <PrivateRoute exact path="/friends" component={FriendsList} />
        <PrivateRoute exact path="/friends/add" component={AddFriend} />
        <PrivateRoute exact path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
};

export default App;