import React from 'react';
import Gadgets from '../bell/img/gadgets.png';
import ParallaxBg from '../bell/img/parallax-bg.jpg';


class Parallax extends React.Component {
  render() {
    return (
    <div class="block bg-primary block-pd-lg block-bg-overlay text-center" data-bg-img={ParallaxBg} data-settings='{"stellar-background-ratio": 0.6}' data-toggle="parallax-bg">
    <h2>
        Welcome to a perfect theme
      </h2>

    <p>
      This is the most powerful theme with thousands of options that you have never seen before.
    </p>
    <img alt="Bell - A perfect theme" class="gadgets-img hidden-md-down" src={Gadgets}/>
  </div>
    )
  }
}

export default Parallax;