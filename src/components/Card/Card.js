import React, {Component} from 'react';
import {Card, CardBody} from 'reactstrap';

class CardComponent extends Component {
  render() {
    return (
      <div onClick={() => this.props.toggled(this.props.card)}>
        <Card xs="2" className="mb-3" style={{cursor: 'pointer'}}>
          <CardBody>
            <h5>{this.props.card.title}</h5>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CardComponent;
