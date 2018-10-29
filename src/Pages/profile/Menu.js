import React from 'react';
import Avatar from '../../images.jpeg';

class Menu extends React.Component{
    render(){
        return(
    <div className="row profiles ">
        <div className="col-md-12">
          <div className="profile-sidebar ">
            <div className="profile-userpic profile-usertitle-name">
              <center><img src={Avatar} classname="img-responsive" alt /></center>
            </div>
            <div className="profile-usertitle">
              <div className="profile-usertitle-name">
                {localStorage.getItem('name')}
              </div>
                </div>
            <div className="profile-userbuttons">
              <a href="/profile" className="btn btn-success btn-sm">Create New Post</a>
            </div>
            <div className="profile-usermenu">
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="/profile">Profile</a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="/allpost">Post</a>
                  <span className="badge badge-primary badge-pill">500</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="/dashboard">Admin</a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <a href="/logout">Sign Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        ); 
    }
}
export default Menu;
