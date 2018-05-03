import React, {Component} from 'react';
import {Col} from 'reactstrap';
import {withRouter} from 'react-router-dom';

import CollapseButton from '../CollapseButton/CollapseButton';
import Card from '../Card/Card';
import {mapObjectToArray} from '../../utils';

class List extends Component {
  state = {
    cards: null
  };

  // get cards items from API
  async componentDidMount() {
    const response = await fetch(
      `https://prollo-8a5a5.firebaseio.com/cards.json?orderBy="listid"&equalTo="${
        this.props.id
      }"`
    );
    const cards = await response.json();

    this.setState({
      cards: mapObjectToArray(cards)
    });
  }

  // create card
  onCreate = async title => {
    const oldCards = [...this.state.cards];
    const listid = this.props.id;
    const response = await fetch(
      'https://prollo-8a5a5.firebaseio.com/cards.json',
      {
        method: 'post',
        body: JSON.stringify({title, listid})
      }
    );

    const jsonResponse = await response.json();
    const card = {
      id: jsonResponse.name,
      listid,
      title
    };

    const cards = [...oldCards, card];
    this.setState({cards});
  };

  // add card description
  setDescription = async description => {
    const activeCard = {...this.state.activeCard, description};

    await fetch(
      `https://prollo-8a5a5.firebaseio.com/cards/${activeCard.id}.json`,
      {
        method: 'put',
        body: JSON.stringify(activeCard)
      }
    );

    const cards = this.state.cards.map(
      card => (card.id === activeCard.id ? activeCard : card)
    );
    this.setState({cards, activeCard});
  };

  // add checklist

  // add checklist item title
  setCheckitem = async itemtitle => {
    const checklist = this.state.checklists.find(
      // schlechte lösung, checklist.cardid ist nicht die aktive list
      checklist => this.props.checklist.cardid === this.state.activeCard.id
    );
    const oldItems = [...this.state.items];
    const response = await fetch(
      'https://prollo-8a5a5.firebaseio.com/items.json',
      {
        method: 'post',
        body: JSON.stringify({
          itemtitle,
          completed: false,
          checklistid: checklist.id
        })
      }
    );

    const jsonResponse = await response.json();
    const item = {
      id: jsonResponse.name,
      itemtitle,
      completed: false,
      checklistid: checklist.id
    };

    const items = [...oldItems, item];

    this.setState({items});
  };

  renderCards = () => {
    if (!this.state.cards) {
      return <p>Loading...</p>;
    }

    return this.state.cards.map(card => (
      <Card card={card} key={card.id} toggleModal={this.props.toggleModal} />
    ));
  };

  render() {
    return (
      <Col xs="2">
        <div
          className="bg-light rounded px-3 py-1"
          boardid={this.props.boardId}
          key={this.props.id}
        >
          <h2 className="h4 my-2">{this.props.listTitle}</h2>
          {this.renderCards()}
          <CollapseButton
            text="Karte hinzufügen..."
            id={this.props.id}
            clicked={this.onCreate}
          />
        </div>
      </Col>
    );
  }
}

export default withRouter(List);
