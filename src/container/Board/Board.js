import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import {withRouter} from 'react-router-dom';

import List from '../../components/List/List';
import AddList from '../../components/AddList/AddList';

class Board extends Component {
  state = {
    lists: [],
    activeBoard: null
  };

  async componentDidMount() {
    const response = await fetch(
      'https://prollo-8a5a5.firebaseio.com/lists.json'
    );
    const lists = await response.json();
    const updatedLists = [];

    for (let key in lists) {
      updatedLists.push({
        id: key,
        ...lists[key]
      });
    }

    const activeBoardId = this.props.match.params.id;
    const activeBoardResponse = await fetch(
      `https://prollo-8a5a5.firebaseio.com/boards/${activeBoardId}.json`
    );
    const board = await activeBoardResponse.json();

    this.setState({
      activeBoard: board,
      lists: updatedLists
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location) {
      const activeBoardId = this.props.match.params.id;
      const activeBoardResponse = await fetch(
        `https://prollo-8a5a5.firebaseio.com/boards/${activeBoardId}.json`
      );
      const board = await activeBoardResponse.json();

      this.setState({activeBoard: board});
    }
  }

  onCreateList = async title => {
    const oldLists = [...this.state.lists];
    const boardid = this.props.match.params.id;
    const response = await fetch(
      'https://prollo-8a5a5.firebaseio.com/lists.json',
      {
        method: 'post',
        body: JSON.stringify({title, boardid})
      }
    );

    const jsonResponse = await response.json();
    const list = {
      id: jsonResponse.name,
      boardid,
      title
    };

    const lists = [...oldLists, list];

    this.setState({lists});
  };

  render() {
    let boards = <p>Loading...</p>;

    if (this.state.activeBoard) {
      boards = (
        <div>
          <Container fluid>
            <h1 className="h3 my-4">{this.state.activeBoard.title}</h1>
            <Row>
              {this.state.lists.map(
                list =>
                  list.boardid === this.props.match.params.id ? (
                    <List
                      listTitle={list.title}
                      key={list.id}
                      id={list.id}
                      boardid={list.boardid}
                    />
                  ) : null
              )}
              <AddList
                clicked={this.onCreateList}
                id={this.state.lists.length}
              />
            </Row>
          </Container>
        </div>
      );
    }
    return boards;
  }
}

export default withRouter(Board);
