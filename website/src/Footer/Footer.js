import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
  render() {
    const logo = <div className="logo">logo here</div>;

    const links = 
      <div className="linksContainer">
        <a className="footerLinks" href="https://www.esri.com/en-us/home">Esri</a>
        <a className="footerLinks" href="https://www.esri.com/en-us/about/careers/job-search#@careerPath=@location=US-VA-Vienna@jobSearch=">Careers</a>
        <a className="footerLinks" href="https://developers.arcgis.com/javascript/">ArcGIS API</a>
        <Link to="/about"><a className="footerLinks">About</a></Link>
        <a className="footerLinks">Contact Us</a>
      </div>;

    return (
      <div className="footerContainer">
        {logo}
        {links}
      </div>
    );
  }
}

export default Footer;