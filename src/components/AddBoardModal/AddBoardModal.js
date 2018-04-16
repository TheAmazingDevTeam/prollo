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
    <div>
      <div className="modal-body">
        <input onChange={this.onChangeHandler} type="text" className="form-control" placeholder="board name" />
      </div>
      <div className="modal-footer">
        <button onClick={() => this.props.clicked(this.state.boardName)} type="button" className="btn btn-info" data-dismiss="modal">create board</button>
      </div>
    </div>
   );
 }
}

export default AddBoardModal;
