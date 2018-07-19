import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
  render() {
    const whoWeAre = <div className="whoWeAre">Who we are here</div>;

    return (
      <div className="home">
        Welcome home!
        {whoWeAre}
      </div>
    );
  }
}

export default Home;