import React, {Component} from 'react';

import CardModal from '../../components/CardModal/CardModal';
import List from '../../components/List/List';
import AddList from '../../components/AddList/AddList';
import Card from '../../components/Card/Card';

class Board extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1 className="h3 my-4">Board title</h1>
          <div className="row">
            <List listTitle="List One" listId="listOne" clicked={this.props.onCreate}>
              <Card title="Card title" />
              <Card title="Card title" />
              <Card title="Card title" />
            </List>
            <List listTitle="List One" listId="listTwo" clicked={this.props.onCreateList}>
              <Card title="Card title" />
              <Card title="Card title" />
            </List>
            <AddList />
          </div>
        </div>
        <CardModal />
      </div>
    );
  }
}

export default Board;
