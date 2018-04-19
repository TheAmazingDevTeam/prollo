import React from 'react';

import Collapse from '../Collapse/Collapse';

const list = props => (
  <div className="col-2">
    <div className="bg-light rounded px-3 py-1">
      <h2 className="h4 my-2">{props.listTitle}</h2>
        {props.children}
      <Collapse text="Karte hinzufügen..." classes="" listId={props.listId} clicked={props.clicked}/>
    </div>
  </div>
);

export default list;
