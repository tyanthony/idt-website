import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

import './Footer.css';

class Footer extends Component {
  render() {
    const logo = 
      <div className="logo">
        <Image src="http://ecoexplorer.arcgis.com/eco/images/esri.png" responsive className="logo-image"/>
      </div>;
    
    const links = 
      <div className="links-container">
        <h4 className="links-title">Learn more</h4>
        <a className="footer-links" href="https://www.esri.com/en-us/home">Esri</a>
        <a className="footer-links" href="https://www.esri.com/en-us/about/careers/job-search#@careerPath=@location=US-VA-Vienna@jobSearch=">Careers</a>
        <a className="footer-links" href="https://developers.arcgis.com/javascript/">ArcGIS API</a>
        <Link to="/about" className="footer-links">About</Link>
        <Link to="/contact-us" className="footer-links">Contact Us</Link>
      </div>;

    return (
      <div className="footer-container">
        {logo}
        {links}
      </div>
    );
  }
}

export default Footer;