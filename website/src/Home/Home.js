import React, { Component } from 'react';

import './Home.css';

class Home extends Component {

  render() {
    const intro = <div className="intro">Welcome to the Esri Vienna, VA R&amp;D Center!</div>;

    const whoWeAre = 
      <div className="whoWeAre">
        <h3 className="whoTitle">Who We Are</h3>
        <p className="whoP">
          We are an Agile Software Development team working closely with the Defense and Intelligence community.
          We are a growing team covering a wide range of the development stack. Spread across multiple projects, 
          the team has a variety of skills and knowledge. We are proficient in programming languages such as 
          JavaScript, C++, Java, and many more. Our team consists of developers focused on front-end and user experience,
          back-end and server maintenence, and customer relations.
        </p>
      </div>;

    const whatWeDo = 
      <div className="whatWeDo">
        <p className="whatP">
          We at the Vienna R&amp;D Center strive to bring intelligent and useful ArcGIS software to a wide variety of teams and organizations. 
          Ultimately, our goal is to provide helpful software that allows its users to successfully analyze and make decisions during critical events.
          We build software for crucial governmental organizations and operations to provide users with the tools they need to make 
          intelligent decisions.
        </p>
        <h3 className="whatTitle">What We Do</h3>
      </div>;

    return (
      <div className="home">
        {intro}
        {whoWeAre}
        {whatWeDo}
      </div>
    );
  }
}

export default Home;