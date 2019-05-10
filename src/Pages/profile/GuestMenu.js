import React from 'react';
import Avatar from '../../images.jpeg';
class GuestMenu extends React.Component{
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
                Welcome, Guest
              </div>
                </div>
            <div className="profile-userbuttons">
              <a href="/profile" className="btn btn-success btn-sm">Create New Post</a>
            </div>
          </div>
        </div>
      </div>
        ); 
    }
}
export default GuestMenu;
