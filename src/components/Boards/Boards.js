import React from 'react';

import BoardSelection from '../../components/BoardSelection/BoardSelection';

const boards = props =>
  props.boards.map(board => (
    <div key={board.id} className="col-4 mb-4">
      <BoardSelection title={board.title} id={board.id} />
    </div>
  ));

export default boards;
