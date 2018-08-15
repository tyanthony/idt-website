import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {

  render() {
    const homeLink = <div className="link-wrapper"><Link to="/" className="list-items">Home</Link></div>;
    const projectsLink =<div className="link-wrapper"><Link to="/projects" className="list-items">Projects</Link></div>;
    const aboutLink = <div className="link-wrapper"><Link to="/about" className="list-items">About</Link></div>;

    const links = 
      <div className="header-links">
        {homeLink}
        {projectsLink}
        {aboutLink}
      </div>;

    const title = <div className="title">Esri Vienna R &amp; D</div>;

    return (
      <div className="header-container">
        {title}
        {links}
      </div>
    );
  }
}

export default Header;