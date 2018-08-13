import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

import './About.css';

class About extends Component {
  constructor() {
    super();
    this.state = { isFlipped: false, };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  
  render() {
    return (

      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <div key="front">
          This is the FRONT
          <button onClick={ this.handleClick }>Flip</button>
        </div>

        <div key="back">
          This is the BACK
          <button onClick={ this.handleClick }>Flip</button>
        </div>
      </ReactCardFlip>
    );
  }
}

export default About;