import React from 'react';
import LeftSideBar from './profile/LeftSideBar.js';
import Center from './profile/Center.js';
import RightSideBar from './profile/RightSideBar.js';
import CreatePost from './profile/CreatePost.js';
import { Redirect,withRouter } from 'react-router-dom'

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            isLoggedIn: true
        };
    }
    componentDidMount() {
        if(localStorage.getItem('user_id')){
            this.setState({ isLoggedIn: true });    
        }else{
            this.setState({ isLoggedIn: false });    
        }
        
    }
    render () {
    const { isLoggedIn } = this.state;
    if (!isLoggedIn) {
        return <Redirect to='/login' />;
    }
    return (
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <LeftSideBar/>
                <Center/>    
                <RightSideBar/>
            </div>
    </div>
        )
    }
}
export default Profile;
