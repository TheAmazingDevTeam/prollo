import React, {Component} from 'react';
import {Input, FormGroup, Button} from 'reactstrap';

class CardDescription extends Component {
  state = {
    editing: false,
    objectName: ''
  };

  // get card description from API
  toggle = () => {
    this.setState({
      editing: !this.state.editing,
      objectName: this.props.card.description
    });
  };

  // input for description
  onChangeHandler = event => {
    this.setState({objectName: event.target.value});
    this.setState({editing: true});
  };
  
  // description button, sends description
  onCreateCard = objectName => {
    this.toggle();
    this.props.clicked(objectName);
  };

  render() {
    return (
      <div>
        <u onClick={this.toggle} className={this.props.classes} style={{cursor: 'pointer'}}>
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
            <Button size="sm" color="info" onClick={() => this.onCreateCard(this.state.objectName)}>add</Button>
          </FormGroup>
        ) : <p onClick={this.toggle} style={{cursor: 'pointer'}}>{this.props.card.description}</p>}
      </div>
    );
  }
}

export default CardDescription;
