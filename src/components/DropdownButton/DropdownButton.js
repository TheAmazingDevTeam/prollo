import React from 'react';

const dropdownButton = props => (
  <div className="dropdown">
    <button className="btn btn-info btn-block dropdown-toggle" type="button" data-toggle="dropdown">
      Boards
    </button>
    <div className="dropdown-menu">
      {props.boards.map(board => (
        <button key={board.id} className="dropdown-item bg-info border" type="button">{board.title}</button>
      ))}
    </div>
  </div>
);

export default dropdownButton;
