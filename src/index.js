import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from 'react-router-dom'
import { BrowserRouter,Route,Redirect,withRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {AuthProvider} from "react-check-auth";


import Page from './App';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Loadable from 'react-loadable';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Logout from './Pages/Logout.js';
import Blog from './Pages/Blog.js';
import Dashboard from './Pages/Dashboard.js';


const HomePage = () => <Page/>
const ProfilePage = () =><div><Profile/></div>
const LoginPage = () => <div><Login/></div>
const LogoutPage = () => <div><Logout/></div>
const RegisterPage = () => <div><Register/></div>
const BlogPage = () => <div><Blog/></div>
const DashboardPage = () => <div><Dashboard/></div>


const BaseLayout = () => (
<div style={{width:'100%'}}>
	<Route path="/logout" component={LogoutPage} />
	<Navigation />
    <Route path="/" exact component={HomePage} />
	<Route path="/login" component={LoginPage} />
	<Route path="/profile" component={ProfilePage} />
	<Route path="/register" component={RegisterPage} />
	<Route path="/blog" component={BlogPage} />
	<Route path="/dashboard" component={DashboardPage} />
	<Footer />
</div>
)





const App = () => (
  <BrowserRouter>
	<BaseLayout />
  </BrowserRouter>
)
ReactDOM.render(<App />, document.getElementById('root'));
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
