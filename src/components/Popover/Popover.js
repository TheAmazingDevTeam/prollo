import React, {Component} from 'react';
import {Button, Popover, PopoverHeader, PopoverBody, Input} from 'reactstrap';

class PopoverClass extends Component {
  state = {
    popoverOpen: false,
    objectName: ''
  };

  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  };

  onChangeHandler = event => {
    this.setState({objectName: event.target.value});
  };

  onCreateCheckTitle = objectName => {
    this.toggle();
    this.props.click(objectName);
  };

  render() {
    return (
      <div>
        <Button
          className="mt-2"
          color="light"
          id="Popover1"
          size="sm"
          onClick={this.toggle}
        >
          New Checklist
        </Button>
        <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}
        >
          <PopoverHeader>Your Checklist:</PopoverHeader>
          <PopoverBody>
            <Input
              type="text"
              onChange={this.onChangeHandler}
              className="my-1"
            />
            <Button
              color="info"
              size="sm"
              onClick={() => this.onCreateCheckTitle(this.state.objectName)}
            >
              add
            </Button>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default PopoverClass;
