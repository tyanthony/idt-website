import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import About from './About/About';
import Projects from './Projects/Projects';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/home" component={App} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
    </div>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
