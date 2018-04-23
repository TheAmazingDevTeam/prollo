import React, {Component} from 'react';

import CreateBoard from '../../components/CreateBoard/CreateBoard';
import Boards from '../../components/Boards/Boards';
import CreateBoardModal from '../../components/CreateBoardModal/CreateBoardModal';
import Layout from '../../hoc/Layout/Layout';

class BoardOverview extends Component {
  state = {
    boards: null
  };

  async componentDidMount() {
    const response = await fetch(
      'https://prollo-8a5a5.firebaseio.com/boards.json'
    );
    const boards = await response.json();
    const updatedBoards = [];

    for (let key in boards) {
      updatedBoards.push({
        id: key,
        ...boards[key]
      });
    }

    this.setState({boards: updatedBoards});
  }

  onCreate = async title => {
    const oldBoards = [...this.state.boards];
    const response = await fetch(
      'https://prollo-8a5a5.firebaseio.com/boards.json',
      {
        method: 'post',
        body: JSON.stringify({title})
      }
    );

    const jsonResponse = await response.json();
    const board = {
      id: jsonResponse.name,
      title
    };

    const boards = [...oldBoards, board];

    this.setState({boards});
    this.props.history.push(`/board/${board.id}`);
  };

  render() {
    let boards = <p>Loading...</p>;

    if (this.state.boards) {
      boards = (
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

    return boards;
  }
}

export default BoardOverview;
