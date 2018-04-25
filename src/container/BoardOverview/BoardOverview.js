import React, {Component} from 'react';
import {Container, Row} from 'reactstrap';

import CreateBoard from '../../components/CreateBoard/CreateBoard';
import Boards from '../../components/Boards/Boards';
import CreateBoardModal from '../../components/CreateBoardModal/CreateBoardModal';

class BoardOverview extends Component {
  render() {
    return (
      <Container>
        <h1 className="my-5">Personal Boards</h1>
        <Row>
          <Boards boards={this.props.boards} />
          <div className="col-4 mb-4">
            <CreateBoard />
          </div>
        </Row>
        <CreateBoardModal clicked={this.props.onCreate} />
      </Container>
    );
  }
}

export default BoardOverview;
