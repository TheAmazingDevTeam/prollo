import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, FormGroup, Input, Button} from 'reactstrap';


class CardModal extends Component {
  state = {
    editing: false,
    objectName: ''
  };

  toggle = () => {
    this.setState({
      editing: !this.state.editing,
      objectName: this.props.card.description
    });
  };

  onChangeHandler = event => {
    this.setState({objectName: event.target.value});
    this.setState({editing: true});
  };

  onCreateCard = objectName => {
    this.toggle();
    this.props.clicked(objectName);
  };

  render() {
    return (
      <Modal isOpen={this.props.showModal} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>
          {this.props.card.title}
        </ModalHeader>
        <ModalBody>
          <u onClick={this.toggle} className={this.props.classes}>
            {this.props.card.description 
            ? 'Beschreibung bearbeiten:' 
            : 'Beschreibung hinzufügen:'}
          </u>
          {this.state.editing || !this.props.card.description ? (
            <FormGroup size="md">
              <Input
                type="textarea"
                value={this.state.objectName}
                onChange={this.onChangeHandler}
                className="my-3" 
              />
            </FormGroup>
          ) : <p onClick={this.toggle}>{this.props.card.description}</p>}
          <Button size="sm" color="secondary" className="my-2" onClick={() => this.onCreateCard(this.state.objectName)}>bearbeiten</Button>
          <p>{this.props.card.checklists ? this.props.card.checklists.map(item => item.title) : null}</p>
          <ul>
            {this.props.card.checklists ?
              Object.values(this.props.card.checklists[0].items).map(i => <li>{i.itemtitle}</li>)
              : null}
          </ul>
        </ModalBody>
      </Modal>
    );
  }
}

export default CardModal;
