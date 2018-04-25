import React from 'react';
import {Col, Alert} from 'reactstrap';

import Collapse from '../Collapse/Collapse';

const addList = props => (
  <Col xs="2">
    <div className="bg-light rounded px-3">
      <Collapse text="Liste hinzufügen.." classes="p-2" id={props.id} clicked={props.clicked} />
    </div>
  </Col>
);

export default addList;
