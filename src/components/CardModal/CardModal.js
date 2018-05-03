import React, {Component, Fragment} from 'react';
import {Modal, ModalHeader, ModalBody, Progress, Row, Col} from 'reactstrap';

import Popover from '../Popover/Popover';
import CardDescription from '../CardDescription/CardDescriptrion';
import CardChecklist from '../CardChecklist/CardChecklist';

const getChecklists = (checklists, card, items, toggled) =>
  checklists.map(
    list =>
      list.cardid === card.id ? (
        <Fragment key={list.id}>
          <b>{list.title}</b>
          <ul>
            {items.map(
              item =>
                item.checklistid === list.id ? (
                  <li key={item.id}>{item.itemtitle}</li>
                ) : null
            )}
          </ul>
          <CardChecklist
            toggled={toggled}
            card={card}
            checklists={checklists}
          />
        </Fragment>
      ) : null
  );

const renderAddChecklist = (checklists, click) => {
  if (checklists) {
    return <p>Checkliste bereits vorhanden</p>;
  }

  return (
    <Fragment>
      <b>Hinzufügen</b>
      <Popover click={click} />
    </Fragment>
  );
};

const cardModal = props => {
  // const checklist = props.checklists.find(
  //   checklist => checklist.cardid === props.card.id
  // );

  return (
    <Modal isOpen={props.showModal} toggle={props.toggleModal}>
      <ModalHeader toggle={props.toggleModal}>{props.card.title}</ModalHeader>
      <ModalBody>
        <Row>
          <Col xs="8">
            <CardDescription card={props.card} clicked={props.clicked} />
            <Progress className="my-3" color="info" value="75" />
            {/* {getChecklists(checklist)} */}
          </Col>
          <Col xs="4" className="text-center">
            <Fragment>
              <b>Hinzufügen</b>
              <Popover cardId={props.card.id} click={props.addChecklist} />
            </Fragment>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default cardModal;
