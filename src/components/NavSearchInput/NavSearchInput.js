import React, {Component} from 'react';

class NavSearchInput extends Component {
  state = {
    filteredBoard: [{
      id: 100,
      title: 'test'
    }]
  };

  // onChangeFilter = event => {
  //   const filterTerm = event.target.value;
  //   const oldBoards = this.props.boards;

  //   oldBoards.map(board => {
  //     if (board.title === filterTerm) {
  //       this.setState({filteredBoards: board});
  //     }
  //   });
  // };

  render() {
    return (
      <input className="form-control" onChange={() => this.props.changed(this.state.filteredBoard)} />
    );
  }
};

export default NavSearchInput;
