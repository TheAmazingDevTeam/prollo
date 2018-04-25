import React, {Component} from 'react';
import {Card, CardBody} from 'reactstrap';

// state fürs modal

class CardComponent extends Component {
  render() {
    return (
      <div onClick={() => this.props.toggled(this.props.card)}>
        <Card xs="2">
          <CardBody>
            <h5>{this.props.card.title}</h5>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardComponent;
