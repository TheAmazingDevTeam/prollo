import React from 'react';

import Collapse from '../Collapse/Collapse';
// state für die cards
const list = props => (
  <div className="col-2">
    <div className="bg-light rounded px-3 py-1" boardid={props.boardId} key={props.id}>
      <h2 className="h4 my-2">{props.listTitle}</h2>
        {props.children}
      <Collapse text="Karte hinzufügen..." classes="" id={props.id} />
    </div>
  </div>
);

export default list;
