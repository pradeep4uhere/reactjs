import React, { Component } from 'react';
import {$,jQuery} from 'jquery';
import UserList from './UserList.js';
var axios = require('axios')
class Register extends React.Component {
	constructor() {
	    super();
	    this.state = {
	    	isLoading: true,
	        userList: [],
	    };
	    this.handleSubmit = this.handleSubmit.bind(this);
	    

	}

	

	handleSubmit(event) {
		const urlStr = 'http://localhost/React/blog/api/api.php?action=register';
		event.preventDefault();
		const formData = {
			first_name:event.target.first_name.value,
			last_name:event.target.last_name.value,
			email_address:event.target.email_address.value,
			password:event.target.password.value,
			cpassword:event.target.cpassword.value
		}
		let initialUsers = [];
		fetch(urlStr,{
				method: 'POST',
				body  :  JSON.stringify(formData),
				mode  :  'no-cors'
			}).then(response => {
	        	console.log(response);
	        });
	}



	componentDidMount() {
		const urlStr = 'http://localhost/React/blog/api/api.php?action=getuser';
	    let initialUsers = [];
	    fetch(urlStr)
	        .then(response => {
	            return response.json();
	        }).then(data => {
		        initialUsers = data.results.map((values) => {
	            return values
	        });
	        console.log(initialUsers);
	        console.log(data);

	        this.setState({
	        	isLoading: false,
	            userList: initialUsers,
	        });
	    });
	}

  render() {
    return ( 
     <div id="login">
        <h3 class="text-center text-white pt-5">Login</h3>
        <div class="container">

            <div id="login-row" class="row justify-content-center align-items-center">

	            <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" onSubmit={this.handleSubmit}>
                            <h3 class="text-center text-info">Registration</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">First Name:</label><br />
                                <input type="text" name="first_name" id="first_name" class="form-control"  onChange={ this.changeValue } required />
                            </div>
                            <div class="form-group">
                                <label for="username" class="text-info">Last Name:</label><br />
                                <input type="text" name="last_name" id="last_name" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="username" class="text-info">Email Address:</label><br />
                                <input type="text" name="email_address" id="email_address" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br/>
                                <input type="text" name="password" id="password" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Confirm Password:</label><br/>
                                <input type="text" name="cpassword" id="cpassword" class="form-control" />
                            </div>
                            <div class="form-group">
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                
                	<UserList state={this.state}/>
               	
         </div>
            </div>
        </div>
    </div>
    )
  }
}
export default Register;

