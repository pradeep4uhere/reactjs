import React, { Component } from 'react';
class Register extends React.Component {
  render() {
    return (
     <div id="login">
        <h3 class="text-center text-white pt-5">Login</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
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

