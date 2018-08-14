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
      
    const team = 
      <div className="meet-the-team">
        <h1>Meet the Team</h1>
        <div className="flipcard-wrapper">
          { MembersAPI.getAll().map(m => 
            <Flipcard key={m.id} member={m}/>
          ) }
        </div>
      </div>;

    return (
      <div className="about">
        {mission}
        {team}
      </div>
    );
  }

}

export default About;