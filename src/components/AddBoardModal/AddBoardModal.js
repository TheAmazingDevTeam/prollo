import React, {Component} from 'react';
import {
  ModalBody,
  FormGroup,
  Form,
  Button,
  Input,
  InputGroup
} from 'reactstrap';

/**
 * AddBoardModal is a stateful component which has a form to enter a new board name
 */
class AddBoardModal extends Component {
  /** Manage the text entered in to the input field via state */
  state = {
    boardName: ''
  };

  /**
   * Map input text to state
   * @param {object} event - Input event
   */
  onChangeHandler = event => {
    this.setState({boardName: event.target.value});
  };

  /**
   * Render JSX
   * @returns {JSX} - Render the BoardOverview component
   */
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
            {/** Create board on click */}
            <Button
              color="info"
              onClick={() => this.props.clicked(this.state.boardName)}
            >
              create
            </Button>
          </div>
        </Form>
      </ModalBody>
    );
  }
}

export default AddBoardModal;
