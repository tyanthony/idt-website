import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  handleClick = () => {
    console.log("clicked!");
  }

  render() {
    const headerLinks = ["Home", "Projects", "About"];
    const listItems = headerLinks.map((item) => 
      <a onClick={this.handleClick}>{item}</a>
    );
    const links = <div className="links">{listItems}</div>

    const title = <div className="title">Esri Vienna R &amp; D</div>

    return (
      <div className="header">
        {title}
        {links}
      </div>
    );
  }
}

export default Header;