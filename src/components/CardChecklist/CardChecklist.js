import React, {Component} from 'react';
import {FormGroup, Button, Input} from 'reactstrap';

class CardChecklist extends Component {
  state = {
    itemName: '',
    editing: false
  };

  getInput = () =>
    this.props.checklists.map(
      list => (list.cardid === this.props.card.id ? 'Element hinzufügen' : null)
    );

  toggle = () => {
    this.setState({
      editing: !this.state.editing,
      itemName: ''
    });
  };

  // input for item title
  onChangeItemHandler = event => {
    this.setState({itemName: event.target.value});
  };

  // item button, sends item title
  onCreateItem = itemName => {
    this.toggle();
    this.props.toggled(itemName);
  };

  render() {
    return (
      <div>
        <u className="ml-4" onClick={this.toggle} style={{cursor: 'pointer'}}>
          {this.getInput()}
        </u>
        {this.state.editing ? (
          <FormGroup size="sm" className="mt-3">
            <Input
              type="text"
              value={this.state.itemName}
              onChange={this.onChangeItemHandler}
            />
            <Button
              size="sm"
              color="info"
              className="my-2"
              onClick={() => this.onCreateItem(this.state.itemName)}
            >
              add
            </Button>
          </FormGroup>
        ) : null}
      </div>
    );
  }
}

export default CardChecklist;
