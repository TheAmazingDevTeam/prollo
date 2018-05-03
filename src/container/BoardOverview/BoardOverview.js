import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import CreateBoard from '../../components/CreateBoard/CreateBoard';
import Boards from '../../components/Boards/Boards';
import CreateBoardModal from '../../components/CreateBoardModal/CreateBoardModal';

class BoardOverview extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({modal: !this.state.modal});
  };

  render() {
    return (
      <Container>
        <h1 className="my-5">Personal Boards</h1>
        <Row>
          <Boards boards={this.props.boards} clicked={this.props.clicked} />
          <Col xs="4" className="mb-4">
            <CreateBoard clicked={this.toggle} />
          </Col>
        </Row>
        <CreateBoardModal
          toggle={this.toggle}
          showModal={this.state.modal}
          create={this.props.onCreate}
        />
      </Container>
    );
  }
}

export default BoardOverview;
