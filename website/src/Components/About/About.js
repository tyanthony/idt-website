import React, { Component } from 'react';

import './About.css';

import Flipcard from '../../Utils/FlipCardFactory';
import { MembersAPI } from '../../Utils/MembersAPI';

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
        <div>
          { MembersAPI.getAll().map(m => 
            <Flipcard key={m.id}/>
          ) }
        </div>
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