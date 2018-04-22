import React, {Component} from 'react';

class AddBoardModal extends Component {
  state = {
    boardName: ''
  };

  onChangeHandler = event => {
    this.setState({boardName: event.target.value});
  };

  render() {
    return (
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label>Board name:</label>
            <input
              className="form-control"
              type="text"
              onChange={this.onChangeHandler}
              placeholder="My cool Todos"
            />
          </div>
          <div className="d-flex flex-row-reverse">
            <button
              className="btn btn-info"
              onClick={() => this.props.clicked(this.state.boardName)}
              type="button"
              data-dismiss="modal"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBoardModal;
