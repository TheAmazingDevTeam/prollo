import React from 'react';

import AddBoardModal from '../AddBoardModal/AddBoardModal';
import Modal from '../../hoc/Modal/Modal';

const createBoardModal = props => (
  <Modal modalId="boardModal">
    <div className="modal-header">
      <h5 className="modal-title">New board</h5>
      <button type="button" className="close" data-dismiss="modal">
        <span>&times;</span>
      </button>
    </div>
    <AddBoardModal clicked={props.clicked} />
  </Modal>
);

export default createBoardModal;
