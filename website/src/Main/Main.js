import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '.././About/About';
import Projects from '.././Projects/Projects';
import Home from '.././Home/Home';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects}/>
        <Route path="/about" component={About}/>
      </Switch>
    );
  }
}

export default Main;