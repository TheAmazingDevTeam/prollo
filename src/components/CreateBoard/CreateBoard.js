import React from 'react';

const createBoard = props => (
  <div className="card bg-light">
    <div className="card-body">
      <h5 className="card-title text-center">Board</h5>
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#boardModal">
        create board
      </button>
    </div>
  </div>
);

export default createBoard;
