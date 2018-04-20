import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import CardModal from '../../components/CardModal/CardModal';
import List from '../../components/List/List';
import AddList from '../../components/AddList/AddList';

class Board extends Component {
  state = {
    lists: []
  };

  onCreateList = async title => {
    const lists = [...this.state.lists];
    this.setState({
      lists: [
        ...lists,
        {
          id: lists.length + 1,
          boardid: this.props.match.params,
          title
        }]
    });
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1 className="h3 my-4">Board title</h1>
          <div className="row">
            {this.state.lists.map(list => <List listTitle={list.title} key={list.id} id={list.id} boardid={list.boardid} />)}
            <AddList clicked={this.onCreateList} id={this.state.lists.length + 1} />
          </div>
        </div>
        <CardModal />
      </div>
    );
  }
}

export default withRouter(Board);
