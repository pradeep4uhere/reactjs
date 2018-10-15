import React from 'react';
import LeftSideBar from './profile/LeftSideBar.js';
import Center from './profile/Center.js';
import RightSideBar from './profile/RightSideBar.js';
import CreatePost from './profile/CreatePost.js';
import { Redirect,withRouter } from 'react-router-dom'
import PostList from './PostList.js';
import axios from 'axios'
import Loader from '../bullet-svg-animated.gif';
import Pagination from "react-js-pagination";
import Menu from './profile/Menu.js';
import GuestMenu from './profile/GuestMenu.js';

class Blog extends React.Component {
    constructor() {
        super();
        let initialPost = [];
        this.state = {
            isLoading: true,
            isLoggedIn: false,
            initialPost:[],
            postList: [],

        };
        this.showPost = this.showPost.bind(this);
    }

    showPost(event){
        event.preventDefault();
        this.setState({ clicked : false,post : true });
    }

    componentDidMount() {
        if(localStorage.getItem('user_id')){
            this.setState({ isLoggedIn: true});    
        }else{
            this.setState({ isLoggedIn: false });    
        }
        setTimeout(function(){
        //Get User List with Update Data
            axios.get('http://localhost/React/blog/api/api.php?action=getuserpost')
              .then(data => {
                    console.log('After Respose Post:',data.data.post);
                        this.initialPost = data.data.post.map((values) => {
                        return values
                    });
                    this.setState({
                        isLoading: false,
                        postList: this.initialPost,
                    });
            }).catch(error => console.log(error));
        }.bind(this),1000); 

    }
    render () {
    const { isLoggedIn } = this.state;
    const { isLoading } = this.state;
    return (
        <div id="login">
        <br/>
            <div class="container">
            <div id="login-row" class="row align-items-top">
                  <div class="col-md-3  alert alert-info" style={{padding: 2}}>
                    {isLoggedIn ? (<Menu/>) : (<GuestMenu/>)}
                </div>
                <div class="col-md-9">
                     {!isLoading ? (<PostList state={this.state}/>):(<center><h4><img src={Loader}/></h4></center>)}
                </div>
            </div>
        </div>
        </div>
        )
    }
}
export default Blog;
