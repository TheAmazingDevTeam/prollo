import React from 'react';
import {Col} from 'reactstrap';

import BoardSelection from '../../components/BoardSelection/BoardSelection';

const boards = props =>
  props.boards.map(board => (
    <Col
      xs="4"
      key={board.id}
      onClick={() => props.clicked(board)}
      className="mb-4"
    >
      <BoardSelection title={board.title} id={board.id} />
    </Col>
  ));

export default boards;
