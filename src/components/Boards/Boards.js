import React from 'react';
import {Col} from 'reactstrap';

import BoardSelection from '../../components/BoardSelection/BoardSelection';

/**
 * Render a list of boards
 * @param {object} props
 */
const boards = props =>
  /** Map over the boards and a return a board for each element */
  props.boards.map(board => (
    /** Use a column */
    <Col xs="4" key={board.id} className="mb-4">
      {/** Pass on title and id of the board via props */}
      <BoardSelection title={board.title} id={board.id} />
    </Col>
  ));

export default boards;
