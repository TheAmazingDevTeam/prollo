import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import List from '../../components/List/List';
import AddList from '../../components/AddList/AddList';

class Board extends Component {
  state = {
    lists: []
  };

  async componentDidMount() {
    const response = await fetch('https://prollo-8a5a5.firebaseio.com/lists.json');
    const lists = await response.json();
    const updatedLists = [];

    for (let key in lists) {
      updatedLists.push({
        id: key,
        ...lists[key]
      });
    }

    this.setState({lists: updatedLists});
  };

  onCreateList = async title => {
    const oldLists = [...this.state.lists];
    const boardid = this.props.match.params.id;
    const response = await fetch('https://prollo-8a5a5.firebaseio.com/lists.json', {
      method: 'post',
      body:  JSON.stringify({title, boardid})
    });

    const jsonResponse = await response.json();
    const list = {
      id: jsonResponse.name,
      boardid,
      title
    };

    const lists = [
      ...oldLists,
      list
    ]

    this.setState({lists});
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1 className="h3 my-4">Board title</h1>
          <div className="row">
            {this.state.lists.map(list =>
              {if (list.boardid === this.props.match.params.id) return <List listTitle={list.title} key={list.id} id={list.id} boardid={list.boardid} />}
            )}
          <AddList clicked={this.onCreateList} id={this.state.lists.length} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Board);
