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
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import Menu from './profile/Menu.js';


class Profile extends React.Component {
    constructor() {
        super();
        let initialPost = [];
        this.state = {
            isLoading: true,
            isLoggedIn: true,
            clicked: false,
            post : true,
            initialPost:[],
            postList: [],
            activePage: 15

        };
        this.handleClick = this.handleClick.bind(this);
        this.showPost = this.showPost.bind(this);
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    handleClick(event){
        this.setState({ clicked : true,post : false  });
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
    const { clicked } = this.state;
    const { isLoading } = this.state;
    if (!isLoggedIn) {
        return <Redirect to='/login' />;
    }
    return (

        <div id="logins">
        <br/>
            <div class="container">
            <div class="row align-items-top">
                  <div class="col-md-3 alert alert-info"  style={{padding: 2}}>
                    <Menu/>

                </div>
                <div class="col-md-9">
                    <CreatePost/>
                    <br/>
                     {!isLoading ? (<PostList state={this.state}/>):(<center><h4><img src={Loader}/></h4></center>)}
                </div>
            </div>
        </div>
        </div>
        )
    }
}
export default Profile;
