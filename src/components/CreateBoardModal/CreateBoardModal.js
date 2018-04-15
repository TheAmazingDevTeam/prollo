import React from 'react';

const createBoardModal = () => (
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title">New board</h5>
      <button type="button" className="close" data-dismiss="modal">
        <span>&times;</span>
      </button>
    </div>
    <div className="modal-body">
      <input type="text" className="form-control" placeholder="board name" />
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-primary" data-dismiss="modal">create board</button>
    </div>
  </div>
);

export default createBoardModal;
