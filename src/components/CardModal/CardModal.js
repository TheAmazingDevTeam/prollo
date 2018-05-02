import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, Progress, Row, Col} from 'reactstrap';

import Popover from '../Popover/Popover';
import CardDescription from '../CardDescription/CardDescriptrion';
import CardChecklist from '../CardChecklist/CardChecklist';

class CardModal extends Component {

  render() {
    const res = this.props.card.checklists ? Object.values(this.props.card.checklists)[0].items : null;

     return (
      <Modal isOpen={this.props.showModal} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>
          {this.props.card.title}
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col xs="8">
              <CardDescription card={this.props.card} clicked={this.props.clicked} />
              <Progress className="my-3" color="info" value="75" />
              {this.props.card.checklists ? Object.values(this.props.card.checklists).map(i => <b>{i.title}</b>) : null}
              <ul>
                {res ?
                Object.values(res).map(i => <li>{i.itemtitle}</li>)
                : null}
              </ul>
              <CardChecklist toggled={this.props.toggled} card={this.props.card} />
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
