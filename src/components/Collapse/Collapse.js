import React from 'react';
import CollapseInput from '../CollapseInput/CollapseInput';

const collapse = props => (
  <div>
    <p className={props.classes} data-toggle="collapse" data-target={"#" + props.listId}>{props.text}</p>
    <div id={props.listId} className="collapse">
      <CollapseInput clicked={props.clicked} />
    </div>
  </div>
);

export default collapse;
