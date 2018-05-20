import React, {Component} from 'react';
import {Input, FormGroup, Button} from 'reactstrap';

/** CardDescription is a stateful component, to edit a card description */
class CardDescription extends Component {
  /** Manage inputtext and editing mode */
  state = {
    editing: false,
    objectName: ''
  };

  /** Toggle editing and input text */
  toggle = () => {
    this.setState(prevState => ({
      editing: !this.state.editing,
      objectName: this.props.card.description
    }));
  };

  /** Map input text to staste */
  onChangeHandler = event => {
    this.setState({
      objectName: event.target.value,
      editing: true
    });
  };

  /**
   * Toggle editing mode and create description
   * @param {string} objectName - Input text
   */
  onCreateCard = objectName => {
    this.toggle();
    this.props.clicked(objectName);
  };

  /** Render CardDescription */
  render() {
    return (
      <div className="mb-4">
        <u
          onClick={this.toggle}
          className={this.props.classes}
          style={{cursor: 'pointer'}}
        >
          {this.props.card.description
            ? 'Edit description:'
            : 'Add description:'}
        </u>
        {this.state.editing || !this.props.card.description ? (
          <FormGroup size="md">
            <Input
              type="textarea"
              value={this.state.objectName}
              onChange={this.onChangeHandler}
              className="my-3"
            />
            <Button
              size="sm"
              color="info"
              onClick={() => this.onCreateCard(this.state.objectName)}
            >
              add
            </Button>
          </FormGroup>
        ) : (
          <p onClick={this.toggle} style={{cursor: 'pointer'}}>
            {this.props.card.description}
          </p>
        )}
      </div>
    );
  }
}

export default CardDescription;
