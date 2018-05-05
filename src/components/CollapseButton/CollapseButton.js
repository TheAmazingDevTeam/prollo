import React, {Component} from 'react';
import {Collapse} from 'reactstrap';

import './CollapseButton.css';
import CollapseInput from '../CollapseInput/CollapseInput';

/** CollapseButton is a stateful Component which includes an input */
class CollapseButton extends Component {
  /** Manage collapse via state */
  state = {
    collapse: false
  };

  /** Toggle collapse */
  toggle = () => {
    this.setState({collapse: !this.state.collapse});
  };

  /**
   * Create a new Element
   * @param {string} objectName - Name of element
   */
  onCreateList = objectName => {
    this.props.clicked(objectName);
    this.toggle();
  };

  /**
   * Render CollapseButton
   * @return {JSX}
   */
  render() {
    return (
      <div className="CollapseButton">
        <p
          onClick={this.toggle}
          className={this.props.classes}
          style={{cursor: 'pointer'}}
        >
          {this.props.text}
        </p>
        <Collapse isOpen={this.state.collapse}>
          <CollapseInput clicked={this.onCreateList} />
        </Collapse>
      </div>
    );
  }
}

export default CollapseButton;
