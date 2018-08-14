import React, { Component } from 'react';

import './About.css';

import Flipcard from '../../Utils/FlipCardFactory';

class About extends Component {
  
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
        <Flipcard />
      </div>;

    return (
      <div className="about">
        {mission}
        {cards}
      </div>
    );
  }

}

export default About;