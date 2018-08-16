import React, { Component } from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';

import './Projects.css';

class Projects extends Component {
  constructor() {
    super();
    this.state = { 
      spyderOpen: false,
      excaliburOpen: false,
      fmvOpen: false,
      cmpOpen: false
    };
  }
  render() {
    const title = <h1>Our Projects</h1>

    const spyder = 
      <div className="wrappers">
        <h4 className="wrapper-title">Spyder</h4>
        <Button onClick={() => this.setState({ spyderOpen: !this.state.spyderOpen })} className="wrapper-button">Learn More</Button>
        <Collapse in={this.state.spyderOpen}>
          <div className="projects-well">
            <Well>
              This tells about the Spyder App and gives information about it and can even have a link at the bottom
            </Well>
          </div>
        </Collapse>
      </div>;

    const excalibur = 
      <div className="wrappers">
        <h4 className="wrapper-title">Excalibur</h4>
        <Button onClick={() => this.setState({ excaliburOpen: !this.state.excaliburOpen })} className="wrapper-button">Learn More</Button>
        <Collapse in={this.state.excaliburOpen}>
          <div className="projects-well">
            <Well>
              This tells about the Excalibur App and gives information about it and can even have a link at the bottom
            </Well>
          </div>
        </Collapse>
      </div>;

    const fmv = 
      <div className="wrappers">
        <h4 className="wrapper-title">FMV</h4>
        <Button onClick={() => this.setState({ fmvOpen: !this.state.fmvOpen })} className="wrapper-button">Learn More</Button>
        <Collapse in={this.state.fmvOpen}>
          <div className="projects-well">
            <Well>
              This tells about the FMV App and gives information about it and can even have a link at the bottom
            </Well>
          </div>
        </Collapse>
      </div>;

    const cmp = 
      <div className="wrappers">
        <h4 className="wrapper-title">CMP</h4>
        <Button onClick={() => this.setState({ cmpOpen: !this.state.cmpOpen })} className="wrapper-button">Learn More</Button>
        <Collapse in={this.state.cmpOpen}>
          <div className="projects-well">
            <Well>
              This tells about the CMP App and gives information about it and can even have a link at the bottom
            </Well>
          </div>
        </Collapse>
      </div>;
    
    return (
      <div className="projects">
        {title}
        {spyder}
        {excalibur}
        {fmv}
        {cmp}
      </div>
    );
  }
}

export default Projects;