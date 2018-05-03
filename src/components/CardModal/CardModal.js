import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, Progress, Row, Col} from 'reactstrap';

import Popover from '../Popover/Popover';
import CardDescription from '../CardDescription/CardDescriptrion';
import CardChecklist from '../CardChecklist/CardChecklist';

class CardModal extends Component {
  render() {
    let checklistid = this.props.checklists
      ? this.props.checklists.map(
          list => (list.cardid === this.props.card.id ? list.id : null)
        )
      : null;

    checklistid = checklistid.filter(id => id != null);
    checklistid = checklistid.toString();

    // console.log
    this.props.items ? console.log(checklistid) : null;

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
              {this.props.checklists
                ? this.props.checklists.map(
                    list =>
                      list.cardid === this.props.card.id ? (
                        <b key={list.id}>{list.title}</b>
                      ) : null
                  )
                : null}
              <ul>
                {this.props.items
                  ? this.props.items.map(
                      item =>
                        item.checklistid === checklistid ? (
                          <li key={item.id}>{item.itemtitle}</li>
                        ) : null
                    )
                  : null}
              </ul>
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
