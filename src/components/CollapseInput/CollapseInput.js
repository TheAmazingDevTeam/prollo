import React, {Component} from 'react';
import {Input, InputGroup, Button} from 'reactstrap';

class CollapseInput extends Component {
  state = {
    objectName: ''
  };

  onChangeHandler = event => {
    this.setState({objectName: event.target.value});
  };

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
        <Button
          color="info"
          className="my-2"
          onClick={() => this.props.clicked(this.state.objectName)}
        >
          hinzufügen
        </Button>
      </div>
    );
  }
}

export default CollapseInput;
