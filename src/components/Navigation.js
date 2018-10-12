import React from 'react';
import { Redirect,withRouter } from 'react-router-dom'
import LogoNavImg from '../bell/img/logo-nav.png';
import $ from 'jquery';
const NavItem = props => {
const pageURI = window.location.pathname+window.location.search
const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
const aClassName = props.disabled ? "nav-link disabled" : "nav-link"
return (
    <li className={liClassName}>
      <a href={props.path} className={aClassName}>
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </a>
    </li>
  );
}
class NavDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }


  componentDidMount() {
      const user_id = localStorage.getItem('user_id');
      if(user_id){
          const urlStr = 'http://localhost/React/blog/api/api.php?action=getuserinfo&id='+user_id;
          $.ajax({
          url: urlStr,
          type: 'GET',
          success: function(data) {
          const res = JSON.parse(data);
          if(res.code==200){
            if(res.user.id>0){
              localStorage.setItem('user_id', res.user.id);
              localStorage.setItem('name', res.user.name);
              localStorage.setItem('email', res.user.email_address);
              this.setState({ isLoggedIn: true});
            }else{
              this.setState({ isLoggedIn: false});
            }
          }
          //Redirect to Login Page After Showing the Message  
          }.bind(this),
          error: function(xhr, status, err) {
            this.setState({ isLoggedIn: false});
            console.error(this.props.url, status, err.toString());
          }.bind(this)
        });

        
      }else{
        this.setState({ isLoggedIn: false});
      }
  }


  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
        return <Redirect to='/profile' />;
    }

    const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false"
          onClick={(e) => {this.showDropdown(e)}}>
          {this.props.name}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    )
  }
}


class Navigation extends React.Component {
  render() {
    return (
    <header id="header">
    <div class="container">

      <div id="logo" className="pull-left">
        <a href="index.html">
        <img src="{LogoNavImg}" alt="" title="" /></a>
      </div>
      <nav id="nav-menu-container">
        <ul class="nav-menu">
          <NavItem path="/" name="Home" />
          <NavItem path="#about" name="About Us" />
          <NavItem path="#features" name="Features" />
          <NavItem path="#portfolio" name="Portfolio" />
          <NavItem path="#team" name="Team" />
              <NavDropdown name="Dropdown">
                <a className="dropdown-item" href="/action">Action</a>
                <a className="dropdown-item" href="/aaction">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/aaaction">Something else here</a>
              </NavDropdown>
          <NavItem path="/blog" name="Blog" />
          <NavItem path="/login" name="Login" />
          <NavItem path="/register" name="Register" />
          <NavItem path="#contact" name="Contact Us" />
        </ul>
      </nav>
      <nav class="nav social-nav pull-right d-none d-lg-inline">
        <a href="#"><i class="fa fa-twitter"></i></a> <a href="#"><i class="fa fa-facebook"></i></a> <a href="#"><i class="fa fa-linkedin"></i></a> <a href="#"><i class="fa fa-envelope"></i></a>
      </nav>
    </div>
    </header>
    )
  }
}

export default Navigation;
