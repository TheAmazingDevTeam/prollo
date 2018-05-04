import React from 'react';
import {Card, CardBody} from 'reactstrap';

const cardComponent = props => (
  <div onClick={props.toggle}>
    <Card xs="2" className="mb-3" style={{cursor: 'pointer'}}>
      <CardBody>
        <h5>{props.card.title}</h5>
      </CardBody>
    </Card>
  </div>
);

export default cardComponent;
