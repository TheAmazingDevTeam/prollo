import React, {Component} from 'react';
import {Row, Col, Input, Button, Progress} from 'reactstrap';

import './Checklist.css';

/** Checklist is a stateful component to render a checklist of items */
class Checklist extends Component {
  /** Manage input via state */
  state = {
    input: ''
  };

  /**
   * Get all completed todos
   * @returns {number} - Number of completed todos
   */
  getCompletedTodos = () =>
    this.props.checklist.items.filter(item => item.completed).length;

  /**
   * Calculate percentage of completed todos
   * @returns {number} - Percentage of completed todos
   */
  calculatePercentage = () => {
    if (!this.props.checklist.items) {
      return 0;
    }

    return this.getCompletedTodos() / this.props.checklist.items.length * 100;
  };

  /**
   * Map inputfield to state
   * @param {object} event - Input event
   */
  onInputChange = event => {
    this.setState({input: event.target.value});
  };

  /** Add Item to checklist */
  onAddItem = () => {
    this.props.addItemToChecklist(this.props.checklist.id, this.state.input);
    this.setState({input: ''});
  };

  /** Render items of checklist */
  renderChecklistItems = () => {
    if (!this.props.checklist.items) {
      return <p>Add some items</p>;
    }

    return this.props.checklist.items.map(item => (
      <li
        className="ChecklistItem"
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

  /**
   * Render Checklist component
   * @return {JSX}
   */
  render() {
    return (
      <div className="mb-4">
        <h5 className="mt-3">
          <span role="img" aria-label="Checkmark">
            ✔️
          </span>
          {this.props.checklist.title}
        </h5>
        <Row className="mb-3">
          <Col>
            <Input
              bsSize="sm"
              value={this.state.input}
              onChange={this.onInputChange}
            />
          </Col>
          <Col>
            <Button size="sm" onClick={this.onAddItem} color="light">
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
      </div>
    );
  }
}

export default Checklist;
