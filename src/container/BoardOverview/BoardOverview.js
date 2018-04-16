import React, {Component} from 'react';

import CreateBoard from '../../components/CreateBoard/CreateBoard';
import Boards from '../../components/Boards/Boards';
import CreateBoardModal from '../../components/CreateBoardModal/CreateBoardModal';
import Layout from '../../hoc/Layout/Layout';

class BoardOverview extends Component {
  state = {
    boards : [{
      id: 1,
      title: 'Welcome board'
    }, {
      id: 2,
      title: 'summer projects'
    }]
  };

  onCreate = boardName => {
    const oldBoards = [...this.state.boards];
    const board = {
      id: oldBoards.length + 1,
      title: boardName
    };
    const boards = [
      ...oldBoards,
      board
    ];

    this.setState({boards});
    this.props.history.push(`/board/${board.id}`);
  };

  render() {
    return (
      <Layout boards={this.state.boards}>
        <div className="container">
          <h1 className="my-5">Personal Boards</h1>
          <div className="row">
            <Boards boards={this.state.boards} />
            <div className="col-4 mb-4">
              <CreateBoard />
            </div>
          </div>
          <CreateBoardModal clicked={this.onCreate} />
        </div>
      </Layout>
    );
  }
}

export default BoardOverview;
