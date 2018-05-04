import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';
import {withRouter} from 'react-router-dom';

import List from '../../components/List/List';
import AddList from '../../components/AddList/AddList';
import CardModal from '../../components/CardModal/CardModal';
import {mapObjectToArray} from '../../utils';

class Board extends Component {
  state = {
    lists: null,
    cards: null,
    activeBoard: null,
    activeCard: null,
    showModal: false
  };

  async componentDidMount() {
    const activeBoardId = this.props.match.params.id;

    const cardsResponse = await fetch(
      'https://prollo-8a5a5.firebaseio.com/cards.json'
    );
    const cards = await cardsResponse.json();

    const response = await fetch(
      `https://prollo-8a5a5.firebaseio.com/lists.json?orderBy="boardid"&equalTo="${activeBoardId}"`
    );
    const lists = await response.json();

    const activeBoardResponse = await fetch(
      `https://prollo-8a5a5.firebaseio.com/boards/${activeBoardId}.json`
    );
    const board = await activeBoardResponse.json();

    this.setState({
      activeBoard: board,
      lists: mapObjectToArray(lists),
      cards: mapObjectToArray(cards)
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

  addChecklist = async (id, checklistTitle) => {
    const card = {
      ...this.state.activeCard,
      checklists: [
        ...this.state.activeCard.checklists,
        {
          title: checklistTitle,
          items: []
        }
      ]
    };

    await fetch(`https://prollo-8a5a5.firebaseio.com/cards/${id}.json`, {
      method: 'put',
      body: JSON.stringify({...card})
    });

    this.setState({activeCard: card});
  };

  renderLists = () => {
    if (!this.state.lists) {
      return <p>Loading...</p>;
    }

    return this.state.lists.map(list => (
      <List
        listTitle={list.title}
        key={list.id}
        id={list.id}
        boardid={list.boardid}
        toggleModal={this.toggleModal}
      />
    ));
  };

  renderTitle = () => {
    if (!this.state.activeBoard) {
      return <p>Loading...</p>;
    }

    return <h1 className="h3 my-4">{this.state.activeBoard.title}</h1>;
  };

  renderModal = () => {
    if (this.state.activeCard) {
      return (
        <CardModal
          card={this.state.activeCard}
          toggleModal={this.toggleModal}
          showModal={this.state.showModal}
          addChecklist={this.addChecklist}
        />
      );
    }
  };

  setActiveCard = card => {
    this.setState({activeCard: card});
  };

  toggleModal = card => {
    this.setActiveCard(card);
    this.setState({showModal: !this.state.showModal});
  };

  render() {
    return (
      <div>
        <Container fluid>
          {this.renderTitle()}
          <Row>
            {this.renderLists()}
            <AddList clicked={this.onCreateList} />
          </Row>
        </Container>
        {this.renderModal()}
      </div>
    );
  }
}

export default withRouter(Board);
