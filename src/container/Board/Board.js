import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import {withRouter} from 'react-router-dom';

import List from '../../components/List/List';
import AddList from '../../components/AddList/AddList';
import {mapObjectToArray} from '../../utils';

class Board extends Component {
  state = {
    board: null,
    lists: null,
    modal: false
  };

  async componentDidMount() {
    const {boardId} = this.props.match.params;

    const boardResponse = await fetch(
      `https://prollo-8a5a5.firebaseio.com/boards/${boardId}.json`
    );
    const board = await boardResponse.json();

    const listsResponse = await fetch(
      `https://prollo-8a5a5.firebaseio.com/lists.json?orderBy="boardId"&equalTo="${boardId}"`
    );
    const lists = await listsResponse.json();

    this.setState({
      board,
      lists: mapObjectToArray(lists)
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location) {
      const activeBoardId = this.props.match.params.id;
      const activeBoardResponse = await fetch(
        `https://prollo-8a5a5.firebaseio.com/boards/${activeBoardId}.json`
      );
      const board = await activeBoardResponse.json();

      this.setState({board});
    }
  }

  onCreateList = async title => {
    if (title.trim()) {
      const oldLists = [...this.state.lists];
      const {boardId} = this.props.match.params;

      const response = await fetch(
        'https://prollo-8a5a5.firebaseio.com/lists.json',
        {
          method: 'post',
          body: JSON.stringify({title, boardId})
        }
      );

      const jsonResponse = await response.json();
      const list = {
        id: jsonResponse.name,
        boardId,
        title
      };

      const lists = [...oldLists, list];

      this.setState({lists});
    }
  };

  renderLists = () => {
    if (!this.state.lists) {
      return <p>Loading Lists...</p>;
    }

    return this.state.lists.map(list => (
      <List
        key={list.id}
        list={list}
        boardid={list.boardid}
        toggleModal={this.toggleModal}
      />
    ));
  };

  renderTitle = () => {
    if (!this.state.board) {
      return <p>Loading...</p>;
    }

    return <h1 className="h3 my-4">{this.state.board.title}</h1>;
  };

  toggleModal = () => {
    this.setState({showModal: !this.state.showModal});
  };

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
