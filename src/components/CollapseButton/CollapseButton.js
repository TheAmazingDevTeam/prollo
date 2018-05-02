import React, {Component} from 'react';
import {Collapse} from 'reactstrap';

import CollapseInput from '../CollapseInput/CollapseInput';

class CollapseButton extends Component {
  state = {
    collapse: false
  };

  toggle = () => {
    this.setState({collapse: !this.state.collapse});
  };

  onCreateList = objectName => {
    this.props.clicked(objectName);
    this.toggle();
  };

  render() {
    return (
      <div>
        <p onClick={this.toggle} className={this.props.classes} style={{cursor: 'pointer'}}>{this.props.text}</p>
        <Collapse isOpen={this.state.collapse}>
          <CollapseInput clicked={this.onCreateList} />
        </Collapse>
      </div>
    );
  }
}

export default CollapseButton;
