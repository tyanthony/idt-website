import React, { Component } from 'react';

import './App.css';

import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Main from './Main/Main.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <Header />
        </header>
        <main className="main">
          <Main />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
