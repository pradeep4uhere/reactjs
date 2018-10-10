import React, { Component } from 'react';
import {$,jQuery} from 'jquery';
var axios = require('axios')
//var app = express()
//app.use(cors())
class Register extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
  	 event.preventDefault();
    const data = new FormData(event.target);
    const urlStr = 'http://localhost/React/blog/api/api.php';
    //const urlStr = 'http://127.0.0.1/blogServer/public/index.php/api/api/v1/users';
    //const urlStr = 'https://jsonplaceholder.typicode.com/todos/1';

  	/***************************Node.js******************************/
  	/****************************************************************/
  	/*
  	const http = require('http');

	http.get(urlStr, { json: true , mode : 'no-cors'}, (resp) => {
	  let data = '';

	  // A chunk of data has been recieved.
	  resp.on('data', (chunk) => {
	    data += chunk;
	  });

	  // The whole response has been received. Print out the result.
	  resp.on('end', () => {
	    console.log(data);
	  });

	}).on("error", (err) => {
	  console.log("Error: " + err.message);
	});

	*/
	/***************************Node.js******************************/
  	/****************************************************************/



  	/***************************axios******************************/
  	/****************************************************************/
  	const axios = require('axios');
	axios.get(urlStr)
  	.then(response => {
    	console.log(response);
  	})
  	.catch(error => {
    	console.log(error);
  	});
  	/***************************axios******************************/
  	/****************************************************************/
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
                                <input type="text" name="first_name" id="first_name" class="form-control" />
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
            </div>
        </div>
    </div>
    )
  }
}
export default Register;
