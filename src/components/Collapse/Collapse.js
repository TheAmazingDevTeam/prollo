import React from 'react';
import CollapseInput from '../CollapseInput/CollapseInput';

const collapse = props => (
  <div>
    <p className={props.classes} data-toggle="collapse" data-target={"#" + props.id}>{props.text}</p>
    <div id={props.id} className="collapse">
      <CollapseInput clicked={props.clicked} />
    </div>
  </div>
);

export default collapse;
