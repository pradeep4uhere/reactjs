import React from 'react';
import Logo from '../bell/img/logo.png';
class Hero extends React.Component {
  render() {
    return (
    <section class="hero">
    <div class="container text-center">
      <div class="row">
        <div class="col-md-12">
          <a class="hero-brand" href="index.html" title="Home">
          <img alt="Bell Logo" src={Logo}/>
          </a>
        </div>
      </div>

      <div class="col-md-12">
        <h1>
            A theme with personality
          </h1>

        <p class="tagline">
          This is a powerful theme with some great features that you can use in your future projects.
        </p>
        <a class="btn btn-full" href="#about">Get Started Now</a>
      </div>
    </div>
    </section>
    )
  }
}

export default Hero;
