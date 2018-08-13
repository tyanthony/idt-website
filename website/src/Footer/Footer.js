import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    const logo = <div className="logo">logo here</div>;

    const links = 
      <div className="linksContainer">
        <a className="footerLinks">About</a>
        <a className="footerLinks">Contact Us</a>
        <a className="footerLinks" href="https://www.esri.com/en-us/about/careers/job-search#@careerPath=@location=US-VA-Vienna@jobSearch=">Careers</a>
        <a className="footerLinks" href="https://www.esri.com/en-us/home">Esri</a>
        <a className="footerLinks" href="https://developers.arcgis.com/javascript/">ArcGIS API</a>
      </div>;

    return (
      <div className="footer">
        {logo}
        {links}
      </div>
    );
  }
}

export default Footer;