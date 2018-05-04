import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import CreateBoard from '../../components/CreateBoard/CreateBoard';
import Boards from '../../components/Boards/Boards';
import CreateBoardModal from '../../components/CreateBoardModal/CreateBoardModal';
import {mapObjectToArray} from '../../utils';

class BoardOverview extends Component {
  state = {
    boards: null,
    modal: false
  };

  async componentDidMount() {
    const response = await fetch(
      'https://prollo-8a5a5.firebaseio.com/boards.json'
    );
    const boards = await response.json();

    this.setState({boards: mapObjectToArray(boards)});
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

  toggle = () => {
    this.setState({modal: !this.state.modal});
  };

  setActiveBoard = board => {
    this.setState({activeBoard: board});
  };

  render() {
    return (
      <Container>
        <h1 className="my-5">Personal Boards</h1>
        <Row>
          <Boards boards={this.state.boards} clicked={this.props.clicked} />
          <Col xs="4" className="mb-4">
            <CreateBoard clicked={this.toggle} />
          </Col>
        </Row>
        <CreateBoardModal
          toggle={this.toggle}
          showModal={this.state.modal}
          create={this.onCreate}
        />
      </Container>
    );
  }
}

export default BoardOverview;
