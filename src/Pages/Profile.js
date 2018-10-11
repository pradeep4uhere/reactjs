import React from 'react';
import LeftSideBar from './profile/LeftSideBar.js';
import Center from './profile/Center.js';
import RightSideBar from './profile/RightSideBar.js';
import CreatePost from './profile/CreatePost.js';
class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event){
        alert(5454);

    }


    render () {
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
