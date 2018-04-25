import React from 'react';
import {Button} from 'reactstrap';

import AddBoardModal from '../AddBoardModal/AddBoardModal';
import Modal from '../../hoc/Modal/Modal';

const createBoardModal = props => (
  <Modal modalId="cardModal">
    <div className="modal-header">
      <h5 className="modal-title">New board</h5>
      <Button
        className="close"
        data-dismiss="modal"
      ><span>&times;</span></Button>
    </div>
    <AddBoardModal clicked={props.clicked} />
  </Modal>
);

export default createBoardModal;
