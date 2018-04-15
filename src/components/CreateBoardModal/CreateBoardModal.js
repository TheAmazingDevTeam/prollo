import React from 'react';

import AddBoardModal from '../AddBoardModal/AddBoardModal';

const createBoardModal = props => (
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title">New board</h5>
      <button type="button" className="close" data-dismiss="modal">
        <span>&times;</span>
      </button>
    </div>
    <AddBoardModal clicked={props.clicked} />
  </div>
);

export default createBoardModal;
