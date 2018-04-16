import React from 'react';
import {Link} from 'react-router-dom';

const dropdownButton = props => (
  <div className="dropdown">
    <button className="btn btn-info btn-block dropdown-toggle" type="button" data-toggle="dropdown">
      Boards
    </button>
    <div className="dropdown-menu">
      {props.boards.map(board => (
        <Link to={`board/${board.id}`} key={board.id} className="dropdown-item">{board.title}</Link>
      ))}
    </div>
  </div>
);

export default dropdownButton;
