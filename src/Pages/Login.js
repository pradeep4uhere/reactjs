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
            isLoggedIn: false,
            user: [],
            message:'',
            classstr:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    /**********Login Form Handle********************/
    handleSubmit(event) {
        let initialUsers = [];
        var session;
        const urlStr = 'http://localhost:4209/serverport/login';
        event.preventDefault();
        const formData = {
            email_address:event.target.email_address.value,
            password:event.target.password.value
        }
        //Send Data to Node Server
        axios.post(urlStr, formData)
        .then((response) => {
          if(response.data.code==200) {
            this.setState({message:response.data.message});
            this.setState({classstr:'alert alert-success'});
            this.setState({className:true});
            setTimeout(function(){
                localStorage.setItem('user_id',response.data.res.user.id);
                localStorage.setItem('token',response.data.res.token);
                localStorage.setItem('name',response.data.res.user.first_name +" "+ response.data.res.user.last_name);
                this.setState({ redirectToReferrer: true });
              }.bind(this),3000)
          }else{
            this.setState({ redirectToReferrer: false });
            this.setState({message:response.data.message});
            this.setState({classstr:'alert alert-danger'});
            console.log(this.state);
          }
        })
        .catch((err) => {
          console.log("Error: ", err);
        })
    }




  

  componentDidMount() { 
    if(localStorage.getItem('user_id')){
      this.setState({ redirectToReferrer: true });
    }
   }

  render() {
    const { redirectToReferrer } = this.state;
    const { message } = this.state;
    const { classstr } = this.state;
    if (redirectToReferrer) {
        return <Redirect to='/profile' />;
    }
    return (
     <div id="login">
       <center>
       {message ? (<div className={this.state.classstr}>{this.state.message}</div>) : (<div></div>)}
        </center>
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
                                <input type="password" name="password" id="password" class="form-control" />
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

