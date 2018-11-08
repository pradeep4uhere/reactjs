import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Hero from './components/Hero';
import About from './components/About';
import Parallax from './components/Parallax';
import Features from './components/Features';
import Call from './components/Call';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div style={{width:'100%'}}>	
        <Home />
        <Hero />
        <About />
        <Parallax />
        <Features />
        <Call />
        <Portfolio />
        <Team />
        
      </div>
    );
  }
}
export default App;


