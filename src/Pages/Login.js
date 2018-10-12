import React, { Component } from 'react';
import { Redirect,withRouter } from 'react-router-dom'
import $ from 'jquery';
var axios = require('axios')

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: false,
            className: false,
            classNameError: false,
            user: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    /**********Login Form Handle********************/
    handleSubmit(event) {
        let initialUsers = [];
        const urlStr = 'http://localhost/React/blog/api/api.php?action=login';
        event.preventDefault();
        const formData = {
            email_address:event.target.email_address.value,
            password:event.target.password.value
        }

        $.ajax({
          url: urlStr,
          dataType: 'json',
          type: 'POST',
          data: formData,
          success: function(data) {
            console.log(data);
            if(data.code==200){
                console.log(data);
                //Redirect to Login Page After Showing the Message  
                setTimeout(function(){
                    //Set All the values Of USer into Local Storage
                    localStorage.setItem('user_id', data.user.id);
                    localStorage.setItem('name', data.user.name);
                    localStorage.setItem('email', data.user.email_address);
                    this.setState({ redirectToReferrer: true });
                }.bind(this),1000); 
                this.setState({ classNameError: false});
                this.setState({ className: true});

            }else{
                this.setState({ classNameError: true });
            }
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });
    }



    componentDidMount() {
    }

  render() {
    const { redirectToReferrer } = this.state;
    const { className } = this.state;
    const { classNameError }  = this.state;
    if (redirectToReferrer) {
        return <Redirect to='/profile' />;
    }
    return (
     <div id="login">
     {className ? (
            <div class="alert alert-success"><center>!! You LoggedIn     !!</center></div>
          ) : (<div></div>)}
     {classNameError ? (
            <div class="alert alert-danger"><center>!! Invalid Credentials !!</center></div>
          ) : (<div></div>)}
        <h3 class="text-center text-white pt-5">Login form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" onSubmit={this.handleSubmit}>
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br />
                                <input type="email" name="email_address" id="email_address" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br/>
                                <input type="text" name="password" id="password" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span>Remember me, </span> <span>
                                <input id="remember-me" name="remember-me" type="checkbox"/></span></label> &nbsp;&nbsp; | &nbsp;&nbsp;<a href="/register" class="text-info">Register here</a><br/>
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit"/>&nbsp;<input type="button" name="for" class="btn btn-info btn-md" value="Forgot Your Password?"/>
                            </div>
                            <div id="register-link" class="text-right">
                                
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
export default Login;

