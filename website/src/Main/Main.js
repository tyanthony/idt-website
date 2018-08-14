import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';
import Home from '../Components/Home/Home';
import ContactUs from '../Components/ContactUs/ContactUs';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact-us" component={ContactUs} />
      </Switch>
    );
  }
}

export default Main;