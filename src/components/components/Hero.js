import React from 'react';
class Hero extends React.Component {
  render() {
    return (
    <div class="container text-center">
      <div class="row">
        <div class="col-md-12">
          <a class="hero-brand" href="index.html" title="Home">
          <img alt="Bell Logo" src="img/logo.png"/>
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
    )
  }
}

export default Hero;