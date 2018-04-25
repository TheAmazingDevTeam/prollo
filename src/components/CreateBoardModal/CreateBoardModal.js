import React from 'react';
import {Modal, ModalHeader} from 'reactstrap';

import AddBoardModal from '../AddBoardModal/AddBoardModal';

const createBoardModal = props => (
  <Modal isOpen={props.showModal} toggle={props.toggle}>
    <ModalHeader toggle={props.toggle}>New board</ModalHeader>
    <AddBoardModal clicked={props.create} />
  </Modal>
);

export default createBoardModal;
