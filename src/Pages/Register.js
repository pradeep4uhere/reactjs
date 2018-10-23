import React, { Component } from 'react';
import $ from 'jquery';
import UserList from './UserList.js';
import { createBrowserHistory } from 'history'
import { browserHistory } from 'react-router';
import { Redirect,withRouter } from 'react-router-dom'
const axios = require('axios');
class Register extends React.Component {
	constructor() {
	    super();
	    this.state = {
	    	isLoading: false,
	    	redirectToReferrer: false,
	    	className: false,
	        userList: [],
	        initialUsers:[]
	    };
	    this.handleSubmit = this.handleSubmit.bind(this);
	}
    handleSubmit(event) {
		let initialUsers = [];
	 	event.preventDefault();
	 	const formData = {
			first_name:event.target.first_name.value,
			last_name:event.target.last_name.value,
			email_address:event.target.email_address.value,
			password:event.target.password.value,
			cpassword:event.target.cpassword.value
		}
        //Send Data to Node Server
        axios.post('http://localhost:4209/serverport/register', formData)
        .then(res =>this.setState({
                result:res.data,
                className: true
                }),
            setTimeout(function(){
	        		this.setState({ redirectToReferrer: true });
		    }.bind(this),3000) 
         );
	 }



  render() {
  	console.log(this.state);
  	const { redirectToReferrer } = this.state;
  	const { className } = this.state;
  	const { isLoading } = this.state;

  	if (redirectToReferrer) {
    	return <Redirect to='/login' />;
	}
    return ( 
     <div id="login">
	     {className ? (
    	    <div class="alert alert-success"><center>Thank you !! You will redirect to llgin page, please wait...</center></div>
	      ) : (<div></div>)}
        <h3 class="text-center text-white pt-5">Login</h3>
        <div class="container">

            <div id="login-row" class="row justify-content-center align-items-center">

	            <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" onSubmit={this.handleSubmit}>
                            <h3 class="text-center text-info">Registration</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">First Name:</label><br />
                                <input type="text" name="first_name" id="first_name" class="form-control" value={this.state.first_name}   required />
                            </div>
                            <div class="form-group">
                                <label for="username" class="text-info">Last Name:</label><br />
                                <input type="text" name="last_name" id="last_name" class="form-control" required  value={this.state.last_name}/>
                            </div>
                            <div class="form-group">
                                <label for="username" class="text-info">Email Address:</label><br />
                                <input type="text" name="email_address" id="email_address" class="form-control" required  value={this.state.email_address}/>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br/>
                                <input type="text" name="password" id="password" class="form-control" required  value={this.state.password}/>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Confirm Password:</label><br/>
                                <input type="text" name="cpassword" id="cpassword" class="form-control" required  value={this.state.cpassword}/>
                            </div>
                            <div class="form-group">
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
               <div class="col-md-6">
               {isLoading ? (
	    	    <div class="alert alert-success"><center>please wait...</center></div>
			      ) : (<div></div>)}
	           <UserList state={this.state}/>
	           </div>
                
            </div>
        </div>
    </div>
    )
  }
}
export default Register;

