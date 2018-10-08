import React from 'react';
import ReactDOM from 'react-dom';
import Route from './Route';
import * as serviceWorker from './serviceWorker';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './bell/lib/bootstrap/css/bootstrap.min.css';
import './bell/lib/font-awesome/css/font-awesome.min.css';
import './bell/css/style.css';
import App from './App';
import jQuery from 'jquery'
//import './bell/lib/jquery/jquery-migrate.min.js';
//import './bell/lib/superfish/hoverIntent.js';
//import './bell/lib/superfish/superfish.min.js';
//import './bell/lib/tether/js/tether.min.js';
//import './bell/lib/stellar/stellar.min.js';
//import './bell/lib/bootstrap/js/bootstrap.bundle.min.js';
//import './bell/lib/counterup/counterup.min.js';
//import './bell/lib/waypoints/waypoints.min.js';
//import './bell/lib/easing/easing.js';
//import './bell/lib/stickyjs/sticky.js';
//import './bell/lib/parallax/parallax.js';
//import './bell/lib/lockfixed/lockfixed.min.js';
//import './bell/js/custom.js';
import Loadable from 'react-loadable';
ReactDOM.render(<App />, document.getElementById('root'));
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
