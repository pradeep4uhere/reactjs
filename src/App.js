import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
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
      <div>	
        <Hero />
        <Navigation />
        <About />
        <Parallax />
        <Features />
        <Call />
        <Portfolio />
        <Team />
        <Footer />
      </div>
    );
  }
}
export default App;