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
    const mission = 
      <div className="mission-wrapper">
        <h1>Our Mission</h1>
        <p>
          Our mission is to be some pretty cool people who write software.
        </p>
      </div>;
      
    const cards = 
      <div className="flipcard-wrapper">
        <h1>Meet the Team</h1>
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
      </div>
      ;

    return (
      <div className="about">
        {mission}
        {cards}
      </div>
    );
  }
}

export default About;