import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Page from './App';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Loadable from 'react-loadable';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


const BaseLayout = () => (
	<div>
	<Navigation />
    <Route path="/" exact component={HomePage} />
	<Route path="/login" component={LoginPage} />
	<Route path="/register" component={RegisterPage} />
	<Route path="/me" component={ProfilePage} />
	<Footer />
	</div>
)



const HomePage = () => <Page/>
const LoginPage = () => <div><Login/></div>
const RegisterPage = () => <div><Register/></div>
const ProfilePage = () => <div>This is the Profile Page</div>
const AboutPage = () => <div>This is an About Page</div>
const ContactPage = () => <div>This is a Contact Page</div>



const App = () => (
  <BrowserRouter>
	<BaseLayout />
    
  </BrowserRouter>
)
ReactDOM.render(<App />, document.getElementById('root'));
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
