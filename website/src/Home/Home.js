import React, { Component } from 'react';

import './Home.css';

class Home extends Component {

  render() {
    const intro = <div className="intro">Welcome to the Esri Vienna, VA R&amp;D Center!</div>;

    const whoWeAre = 
      (<div className="whoWeAre">
        <p>
          We are an Agile Software Development team working closely with the Defense and Intelligence community. We strive to bring 
          intelligent and useful ArcGIS software to a wide variety of teams and organizations. Ultimately, our goal is to provide
          helpful software that allows its users to successfully analyize and make decisions during critical events.
        </p>
      </div>);

    return (
      <div className="home">
        {intro}
        {whoWeAre}
      </div>
    );
  }
}

export default Home;