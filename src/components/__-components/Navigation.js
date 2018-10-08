import React from 'react';
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
      isToggleOn: false
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

      <div id="logo" class="pull-left">
        <a href="index.html">
        <img src="img/logo-nav.png" alt="" title="" /></a>
      </div>
      <nav id="nav-menu-container">
        <ul class="nav-menu">
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