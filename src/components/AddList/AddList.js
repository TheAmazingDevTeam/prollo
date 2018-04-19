import React from 'react';

import Collapse from '../Collapse/Collapse';

const addList = props => (
  <div className="col-2">
    <div className="bg-light rounded px-3">
      <Collapse text="Liste hinzufügen.." classes="p-2" listId="newList" />
    </div>
  </div>
);

export default addList;
