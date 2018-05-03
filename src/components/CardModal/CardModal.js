import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, Progress, Row, Col} from 'reactstrap';

import Popover from '../Popover/Popover';
import CardDescription from '../CardDescription/CardDescriptrion';
import CardChecklist from '../CardChecklist/CardChecklist';

class CardModal extends Component {
  getChecklists = () =>
    this.props.checklists.map(
      list =>
        list.cardid === this.props.card.id ? (
          <b key={list.id}>{list.title}</b>
        ) : null
    );

  getItems = checklist =>
    this.props.items.map(
      item =>
        item.checklistid === checklist.id ? <li key={item.id}>test</li> : null
    );

  render() {
    const checklist = this.props.checklists.find(
      checklist => checklist.cardid === this.props.card.id
    );
    checklist ? console.log(checklist.id) : null;
    checklist
      ? console.log(this.props.items.map(item => item.checklistid))
      : null;

    return (
      <Modal isOpen={this.props.showModal} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>
          {this.props.card.title}
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col xs="8">
              <CardDescription
                card={this.props.card}
                clicked={this.props.clicked}
              />
              <Progress className="my-3" color="info" value="75" />
              {this.getChecklists()}
              {checklist ? this.getItems(checklist) : null}
              <CardChecklist
                toggled={this.props.toggled}
                card={this.props.card}
                checklists={this.props.checklists}
              />
            </Col>
            <Col xs="4" className="text-center">
              <b>Hinzufügen</b>
              <Popover click={this.props.click} />
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    );
  }
}

export default CardModal;
