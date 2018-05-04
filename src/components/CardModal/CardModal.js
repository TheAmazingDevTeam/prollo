import React, {Component, Fragment} from 'react';
import {Modal, ModalHeader, ModalBody, Progress, Row, Col} from 'reactstrap';

import Popover from '../Popover/Popover';
import CardDescription from '../CardDescription/CardDescriptrion';
import CardChecklist from '../CardChecklist/CardChecklist';

const cardModal = props => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>Test</ModalHeader>
      <ModalBody>
        <Row>
          <Col xs="8">
            {/* <CardDescription card={props.card} clicked={props.clicked} /> */}
            <Progress className="my-3" color="info" value="75" />
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default cardModal;
