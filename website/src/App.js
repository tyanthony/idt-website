import React, { Component } from 'react';

import './App.css';

import Header from './Header/Header.js';
import Footer from './Footer/Footer.js'
import Home from './Home/Home.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Home />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
