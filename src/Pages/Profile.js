/*
 *@Author : Pradeep Kumar
 *@Description: Import Center Section, for add new Post
 *@Created Date: 25-10-2018
 */
import React from 'react';
import LeftSideBar from './profile/LeftSideBar.js';
import Center from './profile/Center.js';
import RightSideBar from './profile/RightSideBar.js';

/*
 *@Description: Import Center Section, for add new Post
 */
import CreatePost from './profile/AddPost.js';




import { Redirect,withRouter } from 'react-router-dom'
import PostList from './PostList.js';
import axios from 'axios'
import Loader from '../bullet-svg-animated.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import Menu from './profile/Menu.js';
import FadeIn from 'react-fade-in';



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
        var userId= localStorage.getItem('user_id');
        if(localStorage.getItem('user_id')){
            this.setState({ isLoggedIn: true});    
        }else{
            this.setState({ isLoggedIn: false });    
        }
        const urlStr = 'http://localhost:4209/serverport/getuserpost';
        const formData = {
            user_id:localStorage.getItem('user_id'),
            token:localStorage.getItem('token')
        }
        setTimeout(function(){
        //Get User List with Update Data
            axios.post(urlStr,formData)
              .then(data => {
                        console.log(data);
                        this.initialPost = data.data.result.map((values) => {
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
                    
                     {!isLoading ? (<FadeIn><PostList state={this.state}/></FadeIn>):(<center><h4><img src={Loader}/></h4></center>)}

                </div>
            </div>
        </div>
        </div>
        )
    }
}
export default Profile;
