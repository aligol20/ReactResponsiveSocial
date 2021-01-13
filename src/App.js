import React from 'react';
import logo from './logo.svg';
import { Users } from './features/users/Users';
import { Posts } from './features/posts/Posts'
import { UserDetails } from './features/users/UserDetails'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserPosts from './features/posts/UserPosts';
import Profile from './features/profile/Profile';
import Tools from './features/tools/Tools';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Users />


    //   </header>
    // </div>
    <Router>
      <div className="App">

        {/* <header className="App-header">
        </header> */}
        {/* 
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/userDetails">UserDetails</Link>
              </li>
            </ul>
          </nav> */}

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>

          <Route exact path="/">
            <Users />
          </Route>
          <Route path="/userDetails/:id">
            <UserDetails />
          </Route>
          <Route path="/userPosts/:id">
            <UserPosts />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/tools">
            <Tools />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
