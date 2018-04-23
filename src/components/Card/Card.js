import React, {Component} from 'react';

// state fürs modal

class Card extends Component {
  render() {
    return (
      <div data-toggle="modal" data-target="#cardModal">
        <div className="card my-2">
          <div className="card-body">
            <h5>{this.props.title}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
