import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Button, Image } from 'react-bootstrap';

import './FlipCardFactory.css';

class Flipcard extends Component {
  constructor() {
    super();
    this.state = { isFlipped: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <section className="flipcard-section">
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div key="front" className="flipcard">
            <Image circle/>
            <h4>{this.props.member.name}</h4>
            <Button onClick={ this.handleClick } className="flipcard-button" bsStyle="primary" bsSize="small">Flip</Button>
          </div>

          <div key="back" className="flipcard">
            <h4>{this.props.member.name}</h4>
            <p>{this.props.member.funFact}</p>
            <Button onClick={ this.handleClick } className="flipcard-button" bsStyle="primary" bsSize="small">Flip</Button>
          </div>
        </ReactCardFlip>
      </section>
    );
  }
}

export default Flipcard;