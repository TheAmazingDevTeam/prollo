import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import CreateBoard from '../../components/CreateBoard/CreateBoard';
import Boards from '../../components/Boards/Boards';
import CreateBoardModal from '../../components/CreateBoardModal/CreateBoardModal';
import {mapObjectToArray} from '../../utils';

/**
 * BoardOverview is class based stateful component.
 * Its purpose is to fetch all boards from firebase and display them to the User.
 */
class BoardOverview extends Component {
  /** BoardOverview shows all boards and controls a modal */
  state = {
    boards: null,
    modal: false
  };

  /** Fetch all boards when mounted */
  async componentDidMount() {
    /** Request to API */
    const response = await fetch(
      'https://prollo-8a5a5.firebaseio.com/boards.json'
    );
    const boards = await response.json();

    /** Set state.boards equal to the array of fetched boards */
    this.setState({boards: mapObjectToArray(boards)});
  }

  /**
   * Create a new Board
   * @param {string} title - The title of the new Board
   */
  onCreate = async title => {
    /** Copy old boards */
    const oldBoards = [...this.state.boards];

    /** Only create board if the title is not empty */
    if (title.trim()) {
      /** Create new board in database */
      const response = await fetch(
        'https://prollo-8a5a5.firebaseio.com/boards.json',
        {
          method: 'post',
          body: JSON.stringify({title})
        }
      );
      const jsonResponse = await response.json();

      /** Create object with id of the board and the title */
      const board = {
        id: jsonResponse.name,
        title
      };

      /** Merge old boards with the new board */
      const boards = [...oldBoards, board];

      /** Set state.boards equal to new boards */
      this.setState({boards});
      /** Navigate to new board */
      this.props.history.push(`/board/${board.id}`);
    }
  };

  /** Toggle the modal */
  toggleModal = () => {
    this.setState(prevState => ({
      modal: !this.state.modal
    }));
  };

  /**
   * Render boards depending on whether boards are fetched or not
   * @returns {JSX} - Return markup
   */
  renderBoards = () => {
    /** If boards is undefined */
    if (!this.state.boards) {
      /** Return some loading text */
      return <p>Loading Boards...</p>;
    }

    /** Return Boards component with boards as props */
    return <Boards boards={this.state.boards} />;
  };

  /**
   * Render JSX
   * @returns {JSX} - Render the BoardOverview component
   */
  render() {
    return (
      <Container>
        <h1 className="my-5">Personal Boards</h1>
        <Row>
          {this.renderBoards()}
          <Col xs="4" className="mb-4">
            <CreateBoard clicked={this.toggleModal} />
          </Col>
        </Row>
        <CreateBoardModal
          toggle={this.toggleModal}
          showModal={this.state.modal}
          create={this.onCreate}
        />
      </Container>
    );
  }
}

export default BoardOverview;
