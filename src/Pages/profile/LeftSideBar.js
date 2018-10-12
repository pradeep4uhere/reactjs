import React from 'react';
class LeftSideBar extends React.Component{
    render(){
        return(
            <div id="login-column" class="col-md-3">
                    <div id="login-box" class="col-md-12">
                     <hr/>
                        <a class="btn btn-success" onSubmit={this.handleClick}>Add New Blog</a>
                     <hr/>
                     <ul class="no-list">
                     <li><a href="#">My Profile</a></li>
                     <li><a href="#">My Post</a></li>
                     <li><a href="#">Photos(500)</a></li>
                     <li><a href="#">Comments(100)</a></li>
                     <li><a href="/logout">Sign Out</a></li>    
                     </ul>
                    </div>
                </div>
        );
    };
}
export default LeftSideBar;
