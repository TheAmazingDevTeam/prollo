import React, {Component, Fragment} from 'react';
import {Modal, ModalHeader, ModalBody, Progress, Row, Col} from 'reactstrap';

import Popover from '../Popover/Popover';
import CardDescription from '../CardDescription/CardDescriptrion';
import CardChecklist from '../CardChecklist/CardChecklist';
import Checklist from '../Checklist/Checklist';

const renderChecklists = checklists => {
  if (checklists) {
    return checklists.map(checklist => <Checklist checklist={checklist} />);
  }
};

const cardModal = props => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>{props.card.title}</ModalHeader>
      <ModalBody>
        <Row>
          <Col xs="8">
            <CardDescription card={props.card} clicked={props.addDescription} />
            <Progress className="my-3" color="info" value="75" />
            {renderChecklists(props.card.checklists)}
          </Col>
          <Col xs="4">
            <Popover clicked={props.addChecklist} />
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default cardModal;
