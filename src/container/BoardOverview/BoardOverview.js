import React, {Component} from 'react';

import CreateBoard from '../../components/CreateBoard/CreateBoard';
import Boards from '../../components/Boards/Boards';
import CreateBoardModal from '../../components/CreateBoardModal/CreateBoardModal';

class BoardOverview extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="my-5">Personal Boards</h1>
        <div className="row">
          <Boards boards={this.props.boards} />
          <div className="col-4 mb-4">
            <CreateBoard />
          </div>
        </div>
        <CreateBoardModal clicked={this.props.onCreate} />
      </div>
    );
  }
}

export default BoardOverview;
