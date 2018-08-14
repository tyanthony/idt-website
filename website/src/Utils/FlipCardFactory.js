import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

import './FlipCardFactory.css';

class Flipcard extends Component {
  constructor() {
    super();
    this.state = { isFlipped: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <section className="flipcard-section">
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div key="front" className="flipcard">
            This is the FRONT
            <button onClick={ this.handleClick } className="flipcard-button">Flip</button>
          </div>

          <div key="back" className="flipcard">
            This is the BACK
            <button onClick={ this.handleClick } className="flipcard-button">Flip</button>
          </div>
        </ReactCardFlip>
      </section>
    );
  }
}


export default Flipcard;