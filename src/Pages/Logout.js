import React, { Component } from 'react';
import { Redirect,withRouter } from 'react-router-dom'
class Logout extends React.Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: false,
        };
    }

    componentDidMount() {
        localStorage.setItem('user_id', '');
        localStorage.setItem('name', '');
        localStorage.setItem('email', '');
        console.log(localStorage.getItem('email'))
        this.setState({ redirectToReferrer: true });
    }

  render() {
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
        return <Redirect to='/login' />;
    }
    return (
        <h3 class="text-center text-white pt-5">Thank You</h3>
    )
  }
}
export default Logout;

