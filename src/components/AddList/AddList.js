import React from 'react';
import {Col} from 'reactstrap';

import CollapseButton from '../CollapseButton/CollapseButton';

const addList = props => (
  <Col xs="2">
    <div className="bg-light rounded px-3">
      <CollapseButton text="Liste hinzufügen.." classes="p-2" clicked={props.clicked} />
    </div>
  </Col>
);

export default addList;
