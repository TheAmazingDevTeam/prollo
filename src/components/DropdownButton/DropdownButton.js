import React from 'react';
import {Dropdown, dropdownButton, DropdownMenu, DropdownItem} from 'reactstrap';
import {Link} from 'react-router-dom';

const dropdownButtonFunction = props => (
  <Dropdown>
    <dropdownButton
      color="info"
      className="btn-block"
    >Boards</dropdownButton>
    <DropdownMenu>
      {props.boards.map(board => (
        <Link
          to={`board/${board.id}`}
          key={board.id}
        ><DropdownItem>{board.title}</DropdownItem></Link>
      ))}
    </DropdownMenu>
  </Dropdown>
);

export default dropdownButtonFunction;
