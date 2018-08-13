import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  handleClick = (item) => {
    console.log(item + " was clicked");
  }

  render() {
    // const headerLinks = ["Home", "Projects", "About"];
    // const listItems = headerLinks.map((item) => 
    //   <Link to={`/${item}`} key={item}><a onClick={this.handleClick(item)} className="listItems">{item}</a></Link>
    // );

    const homeLink = <Link to="/Home" className="listItems">Home</Link>;
    const projectsLink = <Link to="/Projects" className="listItems">Projects</Link>;
    const aboutLink = <Link to="/About" className="listItems">About</Link>;

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