import React from 'react';

const card = props => (
  <div data-toggle="modal" data-target="#cardModal">
    <div className="card my-2">
      <div className="card-body">
        <h5>{props.title}</h5>
      </div>
    </div>
  </div>
);

export default card;
