/*
 *@Author : Pradeep Kumar
 *@Description: Import Center Section, for add new Post
 *@Created Date: 25-10-2018
 */
import React from 'react';
import LeftSideBar from './profile/LeftSideBar.js';
import Center from './profile/Center.js';
import RightSideBar from './profile/RightSideBar.js';
import { Redirect,withRouter } from 'react-router-dom'
import axios from 'axios'
import Loader from '../bullet-svg-animated.gif';
import Pagination from "react-js-pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import LeftMenu from './profile/LeftMenu.js';
import FadeIn from 'react-fade-in';
class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            isLoggedIn: true,
        };
    }
    render () {
    const { isLoggedIn } = this.state;
    const { clicked } = this.state;
    const { isLoading } = this.state;
    if (!isLoggedIn) {
        return <Redirect to='/login' />;
    }
    return (
            <div class="container" style={{'width':'100'}}>
                    <LeftMenu/>
             </div>
        )
    }
}
export default Dashboard;
