import React, {Component} from 'react';
import {Collapse} from 'reactstrap';

import CollapseInput from '../CollapseInput/CollapseInput';

class CollapseButton extends Component {
  state = {
    collapse: false
  }

  toggle = () => {
    this.setState({collapse: !this.state.collapse});
  }

  render() {
    return (
      <div>
        <p onClick={this.toggle} className={this.props.classes}>{this.props.text}</p>
        <Collapse isOpen={this.state.collapse}>
          <CollapseInput clicked={this.props.clicked} />
        </Collapse>
      </div>
    );
  }
}

export default CollapseButton;
