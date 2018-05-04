import React, {Component, Fragment} from 'react';
import {Row, Col, Input, Button, ListGroup, ListGroupItem} from 'reactstrap';

class Checklist extends Component {
  state = {
    input: ''
  };

  onInputChange = event => {
    this.setState({input: event.target.value});
  };

  render() {
    return (
      <Fragment>
        <h3 className="mt-3">{this.props.checklist.title}</h3>
        <Row className="mb-3">
          <Col>
            <Input value={this.state.input} onChange={this.onInputChange} />
          </Col>
          <Col>
            <Button color="light">Add item</Button>
          </Col>
        </Row>
        <ListGroup>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>Item 3</ListGroupItem>
        </ListGroup>
      </Fragment>
    );
  }
}

export default Checklist;
