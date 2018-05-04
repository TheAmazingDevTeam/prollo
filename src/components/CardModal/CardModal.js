import React from 'react';
import {Modal, ModalHeader, ModalBody, Row, Col} from 'reactstrap';

import Popover from '../Popover/Popover';
import CardDescription from '../CardDescription/CardDescriptrion';
import Checklist from '../Checklist/Checklist';

const renderChecklists = (checklists, addItemToChecklist, toggleItem) => {
  if (!checklists) {
    return <p>add checklist</p>;
  }

  console.log(checklists);
  return checklists.map(checklist => (
    <Checklist
      key={checklist.id}
      addItemToChecklist={addItemToChecklist}
      checklist={checklist}
      toggleItem={toggleItem}
    />
  ));
};

const cardModal = props => {
  return (
    <Modal isOpen={props.modal} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>{props.card.title}</ModalHeader>
      <ModalBody>
        <Row>
          <Col xs="8">
            <CardDescription card={props.card} clicked={props.addDescription} />
            {renderChecklists(
              props.card.checklists,
              props.addItemToChecklist,
              props.toggleItem
            )}
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
