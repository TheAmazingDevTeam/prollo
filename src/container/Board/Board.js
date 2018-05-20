import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import {withRouter} from 'react-router-dom';

import List from '../../components/List/List';
import AddList from '../../components/AddList/AddList';
import {mapObjectToArray} from '../../utils';

/**
 * Board is a stateful component which represents a single board.
 * Its purpose is to render Lists which contain the cards
 */
class Board extends Component {
  /** Manage current board, all lists and modal via state */
  state = {
    board: null,
    lists: null,
    modal: false
  };

  /** Fetch current board and lists */
  async componentDidMount() {
    /** Store boardId accessing the route params */
    const {boardId} = this.props.match.params;

    /** Fetch current board */
    const boardResponse = await fetch(
      `https://prollo-8a5a5.firebaseio.com/boards/${boardId}.json`
    );
    const board = await boardResponse.json();

    /** Fetch lists with the boardId */
    const listsResponse = await fetch(
      `https://prollo-8a5a5.firebaseio.com/lists.json?orderBy="boardId"&equalTo="${boardId}"`
    );
    const lists = await listsResponse.json();

    /** Set board and lists state */
    this.setState({
      board,
      /** Store lists as an array */
      lists: mapObjectToArray(lists)
    });
  }

  /**
   * Create a list with a title and a boardId
   * @param {string} title - Title of the new List
   */
  onCreateList = async title => {
    /** Only create list if title is not empty */
    if (title.trim()) {
      /** Copy old lists */
      const oldLists = [...this.state.lists];
      /** Store boardId */
      const {boardId} = this.props.match.params;

      /** POST new list to API and store result in response */
      const response = await fetch(
        'https://prollo-8a5a5.firebaseio.com/lists.json',
        {
          method: 'post',
          body: JSON.stringify({title, boardId})
        }
      );
      const jsonResponse = await response.json();

      /** Create a new list object */
      const list = {
        id: jsonResponse.name,
        boardId,
        title
      };

      /** Merge oldLists and new list */
      const lists = [...oldLists, list];

      /** Set state of lists equal to new lists */
      this.setState({lists});
    }
  };

  /**
   * Render current lists depending on whether they are fetched
   * @returns {JSX} - Returns markup
   */
  renderLists = () => {
    /** Show loading if not fetched yet */
    if (!this.state.lists) {
      /** Returns some loading text */
      return <p>Loading Lists...</p>;
    }

    /** Map over fetched lists and return a List component for each list element */
    return this.state.lists.map(list => (
      <List
        key={list.id}
        list={list}
        boardid={list.boardid}
        toggleModal={this.toggleModal}
      />
    ));
  };

  /**
   * Render title depending on whether board is fetched or not
   * @return {JSX} - Returns markup
   */
  renderTitle = () => {
    /** If board is not fetched yet */
    if (!this.state.board) {
      /** Show some loading text */
      return <p>Loading...</p>;
    }

    /** Return JSX */
    return <h1 className="h3 my-4">{this.state.board.title}</h1>;
  };

  /** Toggle modal state */
  toggleModal = () => {
    this.setState(prevState => ({showModal: !this.state.showModal}));
  };

  /** Render the Board component */
  render() {
    return (
      <Container fluid>
        {this.renderTitle()}
        <Row>
          {this.renderLists()}
          <AddList clicked={this.onCreateList} />
        </Row>
      </Container>
    );
  }
}

export default withRouter(Board);
