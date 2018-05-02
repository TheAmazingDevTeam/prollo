import React, {Component} from 'react';
import {Col} from 'reactstrap';
import {withRouter} from 'react-router-dom';

import CollapseButton from '../CollapseButton/CollapseButton';
import Card from '../Card/Card';
import CardModal from '../CardModal/CardModal';


class List extends Component {
  state = {
    cards: null,
    activeCard: {},
    modal: false,
    items: null
  };

  // get cards from API
  async componentDidMount() {
    const response = await fetch('https://prollo-8a5a5.firebaseio.com/cards.json');
    const cards = await response.json();
    const updatedCards = [];

    for (let key in cards) {
      updatedCards.push({
        id: key,
        ...cards[key]
      });
    };
    this.setState({cards: updatedCards});
  };

  // create card
  onCreate = async title => {
    const oldCards = [...this.state.cards];
    const listid = this.props.id;
    const response = await fetch('https://prollo-8a5a5.firebaseio.com/cards.json', {
      method: 'post',
      body:  JSON.stringify({title, listid})
    });

    const jsonResponse = await response.json();
    const card = {
      id: jsonResponse.name,
      listid,
      title
    };

    const cards = [
      ...oldCards,
      card
    ];
    this.setState({cards});
  };

  // add card description
  setDescription = async description => {
    const activeCard = {...this.state.activeCard, description};

    await fetch(`https://prollo-8a5a5.firebaseio.com/cards/${activeCard.id}.json`, {
      method: 'put',
      body:  JSON.stringify(activeCard)
    });

    const cards = this.state.cards.map((card) => card.id === activeCard.id ? activeCard : card);
    this.setState({cards, activeCard});
  };

  // add checklist
  setChecklist = async title => {
    const activeCard = this.state.activeCard;
    await fetch(`https://prollo-8a5a5.firebaseio.com/cards/${activeCard.id}/checklists.json`, {
      method: 'post',
      body:  JSON.stringify({title})
    });
    const response = await fetch(`https://prollo-8a5a5.firebaseio.com/cards/${activeCard.id}.json`);
    const newActiveCard = await response.json();

    this.setState({activeCard: newActiveCard});
  };

  // add checklist item title
  setCheckitem = async itemtitle => {
    const activeCard = {...this.state.activeCard};
    const checklistId = Object.keys(this.state.activeCard.checklists)
    await fetch(`https://prollo-8a5a5.firebaseio.com/cards/${activeCard.id}/checklists/${checklistId}/items.json`, {
      method: 'post',
      body: JSON.stringify({itemtitle, completed: false})
    });

    const response = await fetch(`https://prollo-8a5a5.firebaseio.com/cards/${activeCard.id}.json`);
    const newActiveCard = await response.json();

    this.setState({activeCard: newActiveCard});
  };

  // set active card and modal status
  toggle = card => {
    this.setState({
      modal: !this.state.modal,
      activeCard: card
    });
  };

  render() {
    let cards = <p>Loading...</p>;

    if (this.state.cards) {
      cards = (
        <Col xs="2">
          <div className="bg-light rounded px-3 py-1" boardid={this.props.boardId} key={this.props.id}>
            <h2 className="h4 my-2">{this.props.listTitle}</h2>
              {this.state.cards.map(card =>
                card.listid === this.props.id ?
                <Card card={card} key={card.id}
                toggled={this.toggle} /> : null
              )}
            <CollapseButton
              text="Karte hinzufügen..."
              classes=""
              id={this.props.id}
              clicked={this.onCreate} />
          </div>
          <CardModal
            toggle={this.toggle}
            toggled={this.setCheckitem}
            showModal={this.state.modal}
            modal={this.state.modal}
            card={this.state.activeCard}
            click={this.setChecklist}
            clicked={this.setDescription} />
        </Col>
      );
    }
    return cards;
  }
};

export default withRouter(List);
