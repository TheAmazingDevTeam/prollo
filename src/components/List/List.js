import React, {Component} from 'react';

import Collapse from '../Collapse/Collapse';
import Card from '../Card/Card';
import {withRouter} from 'react-router-dom';

class List extends Component {

  state = {
    cards: []
  };

  onCreate = async title => {
    const cards = [...this.state.cards];
    this.setState({
      cards: [
        ...cards,
        {
          id: cards.length + 1,
          listid: this.props.id,
          boardid: this.props.match.params,
          title
        }]
    });
  };

  render() {
    return (
      <div className="col-2">
        <div className="bg-light rounded px-3 py-1" boardid={this.props.boardId} key={this.props.id}>
          <h2 className="h4 my-2">{this.props.listTitle}</h2>
            {this.state.cards.map(card => <Card title={card.title} key={card.id} />)}
          <Collapse text="Karte hinzufügen..." classes="" id={this.props.id} clicked={this.onCreate} />
        </div>
      </div>
    );
  }
};

export default withRouter(List);
