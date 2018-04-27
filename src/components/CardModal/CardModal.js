import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, Collapse, InputGroup, Input, Button} from 'reactstrap';


class CardModal extends Component {
  state = {
    collapse: false,
    objectName: ''
  };

  toggle = () => {
    this.setState({collapse: !this.state.collapse});
  };

  onChangeHandler = event => {
    this.setState({objectName: event.target.value});
  };

  render() {
    return (
      <Modal isOpen={this.props.showModal} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>
          {this.props.card.title}
        </ModalHeader>
        <ModalBody>
          <u onClick={this.toggle} className={this.props.classes}>Beschreibung bearbeiten:</u>
          {this.state.collapse ? null : <p>{this.props.card.description}</p>}
          <Collapse className="m-3" isOpen={this.state.collapse}>
            <InputGroup size="lg">
              <Input
                type="text"
                value={this.state.objectName.description}
                onChange={this.onChangeHandler}
              />
            </InputGroup>
            <Button color="info" className="my-2" onClick={() => this.props.clicked(this.state.objectName)}>hinzufügen</Button>
          </Collapse>
        </ModalBody>
      </Modal>
    );
  }
}

export default CardModal;
