import React, {Component} from 'react';
import {
  ModalBody,
  FormGroup,
  Form,
  Button,
  Input,
  InputGroup
} from 'reactstrap';

class AddBoardModal extends Component {
  state = {
    boardName: ''
  };

  onChangeHandler = event => {
    this.setState({boardName: event.target.value});
  };

  render() {
    return (
      <ModalBody>
        <Form>
          <FormGroup>
            <label>Board name:</label>
            <InputGroup>
              <Input
                required
                type="text"
                onChange={this.onChangeHandler}
                placeholder="My cool Todos"
              />
            </InputGroup>
          </FormGroup>
          <div className="d-flex flex-row-reverse">
            <Button
              color="info"
              onClick={() => this.props.clicked(this.state.boardName)}
            >
              Create
            </Button>
          </div>
        </Form>
      </ModalBody>
    );
  }
}

export default AddBoardModal;
