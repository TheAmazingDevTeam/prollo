import React, {Component} from 'react';

import CreateBoard from '../../components/CreateBoard/CreateBoard';
import Boards from '../../components/Boards/Boards';
import Modal from '../../components/Modal/Modal';

class BoardOverview extends Component {
  state = {
    boards : [{
      id: 1,
      title: 'Welcome board'
    }, {
      id: 2,
      title: 'summer projects'
    }, {
      id: 3,
      title: 'things to do'
    }]
  }

  // onClickBoardCreator = event => {
  //   const oldBoards = [...this.state.boards];
  //   this.setState(
  //     ...oldBoards,
  //     {
  //       id: oldBoards.length,
  //       title: event.target.value
  //     });
  // }

  render() {
    return (
      <div className="container">
        <h1 className="my-5">Personal Boards</h1>
        <div className="row">
          <Boards boards={this.state.boards} />
          <div className="col-4 mb-4">
            <CreateBoard />
          </div>
        </div>
        <Modal />
      </div>
    );
  }
}

export default BoardOverview;
