import React from 'react';
import {Modal, ModalHeader, ModalBody, Row, Col} from 'reactstrap';

import Popover from '../Popover/Popover';
import CardDescription from '../CardDescription/CardDescriptrion';
import Checklist from '../Checklist/Checklist';

/**
 * Render checklists depending on whether checklists are defined or not
 * @param {Array} checklists - Checklists to render
 * @param {function} addItemToChecklist - Function to add an item to a checklist
 * @param {function} toggleItem - Function to toggle and Item
 * @returns {JSX}
 */
const renderChecklists = (checklists, addItemToChecklist, toggleItem) => {
  /** If checklists is undefined */
  if (!checklists) {
    /** Return some text */
    return <p>add checklist</p>;
  }

  /** Map over checklists and return a Checklist component for each element */
  return checklists.map(checklist => (
    <Checklist
      key={checklist.id}
      addItemToChecklist={addItemToChecklist}
      checklist={checklist}
      toggleItem={toggleItem}
    />
  ));
};

/**
 * Render a Modal to edit a card
 * @param {object} props - Props received
 */
const cardModal = props => (
  <Modal isOpen={props.modal} toggle={props.toggle}>
    <ModalHeader className="bg-light" toggle={props.toggle}>
      {props.card.title}
    </ModalHeader>
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

export default cardModal;
