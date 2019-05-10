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



  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {

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
