import React from 'react';
import {Card, CardBody} from 'reactstrap';

import './Card.css';

/**
 * Show a single card with a heading
 * @param {object} props - Props received
 */
const cardComponent = props => (
  <div onClick={() => props.toggleAndSetActive(props.card)}>
    <Card xs="2" className="Card mb-3">
      <CardBody>
        <h5>{props.card.title}</h5>
      </CardBody>
    </Card>
  </div>
);

export default cardComponent;
