import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {

  render() {
    const homeLink = <Link to="/" className="listItems">Home</Link>;
    const projectsLink = <Link to="/projects" className="listItems">Projects</Link>;
    const aboutLink = <Link to="/about" className="listItems">About</Link>;

    const links = 
      <div className="headerLinks">
        {homeLink}
        {projectsLink}
        {aboutLink}
      </div>

    const title = <div className="title">Esri Vienna R &amp; D</div>

    return (
      <div className="headerContainer">
        {title}
        {links}
      </div>
    );
  }
}

export default Header;