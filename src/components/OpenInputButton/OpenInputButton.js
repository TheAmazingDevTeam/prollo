import React, {Component} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class OpenInputButton extends Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({dropdownOpen: !this.state.dropdownOpen});
  };

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color="info" caret>
          Boards
        </DropdownToggle>
        <DropdownMenu>
          {this.props.boards.map(board => (
            <Link to={`/board/${board.id}`} key={board.id}>
              <DropdownItem>{board.title}</DropdownItem>
            </Link>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default OpenInputButton;
