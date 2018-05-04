import React, {Component, Fragment} from 'react';
import {
  Row,
  Col,
  Input,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from 'reactstrap';

class Checklist extends Component {
  state = {
    input: ''
  };

  getCompletedTodos = () =>
    this.props.checklist.items.filter(item => item.completed).length;

  calculatePercentage = () =>
    this.getCompletedTodos() / this.props.checklist.items.length * 100;

  onInputChange = event => {
    this.setState({input: event.target.value});
  };

  renderChecklistItems = () => {
    if (!this.props.checklist.items) {
      return <p>Add some items</p>;
    }

    return this.props.checklist.items.map(item => (
      <li
        style={{
          textDecoration: item.completed ? 'line-through' : ''
        }}
        onClick={() => this.props.toggleItem(this.props.checklist.id, item.id)}
        key={item.id}
      >
        {item.name}
      </li>
    ));
  };

  render() {
    return (
      <Fragment>
        <h5 className="mt-3">
          <span role="img" aria-label="Checkmark">
            ✔️
          </span>
          {this.props.checklist.title}
        </h5>
        <Row className="mb-3">
          <Col>
            <Input
              size="sm"
              value={this.state.input}
              onChange={this.onInputChange}
            />
          </Col>
          <Col>
            <Button
              size="sm"
              onClick={() =>
                this.props.addItemToChecklist(
                  this.props.checklist.id,
                  this.state.input
                )
              }
              color="light"
            >
              Add item
            </Button>
          </Col>
        </Row>
        <Progress
          className="my-3"
          color={this.calculatePercentage() === 100 ? 'success' : 'info'}
          value={this.calculatePercentage()}
        />
        <ul>{this.renderChecklistItems()}</ul>
      </Fragment>
    );
  }
}

export default Checklist;
