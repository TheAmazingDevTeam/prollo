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
            <input onChange={this.onChangeHandler} type="text" className="form-control" placeholder="My cool Todos" />
          </div>
          <div className="d-flex flex-row-reverse">
            <button onClick={() => this.props.clicked(this.state.boardName)} type="button" className="btn btn-info" data-dismiss="modal">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBoardModal;
