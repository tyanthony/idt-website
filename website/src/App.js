import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header.js';
import Footer from './Footer/Footer.js'
import Home from './Home/Home.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <Header />
        </header>
        <main className="main">
          <Home />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
