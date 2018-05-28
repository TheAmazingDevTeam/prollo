import React from 'react';
import {Col} from 'reactstrap';

import CollapseButton from '../CollapseButton/CollapseButton';

const addList = props => (
  <Col xs="12" md="2">
    <div className="bg-light rounded px-3">
      <CollapseButton text="Add list.." classes="p-2" clicked={props.clicked} />
    </div>
  </Col>
);

export default addList;
