import React from 'react';
import {Modal, ModalHeader} from 'reactstrap';

const cardModal = props => (
  <Modal isOpen={props.showModal} toggle={props.toggle}>
    <ModalHeader toggle={props.toggle}>
      {props.card.title }
    </ModalHeader>
  </Modal>
);

export default cardModal;
