import React, {Component} from 'react';
import {Input, InputGroup, Button} from 'reactstrap';

/** CollapseInput is a stateful component, for adding elements */
class CollapseInput extends Component {
  /** Manage element name in state */
  state = {
    objectName: ''
  };

  /**
   * Manage on change event on input
   * @param {object} event - Input event
   */
  onChangeHandler = event => {
    this.setState({objectName: event.target.value});
  };

  /** Add an element */
  onAddItem = () => {
    this.props.clicked(this.state.objectName);
    this.setState({objectName: ''});
  };

  /**
   * Render CollapseInput
   * @returns {JSX}
   */
  render() {
    return (
      <div>
        <InputGroup size="lg">
          <Input
            type="text"
            value={this.state.objectName}
            onChange={this.onChangeHandler}
          />
        </InputGroup>
        <Button color="info" className="my-2" onClick={this.onAddItem}>
          add
        </Button>
      </div>
    );
  }
}

export default CollapseInput;
