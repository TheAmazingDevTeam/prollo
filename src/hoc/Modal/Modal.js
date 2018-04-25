import React from 'react';

const modal = props => (
  <div className="modal fade" id={props.modalId}>
    <div className="modal-dialog">
      <div className="modal-content">
        {props.children}
      </div>
    </div>
  </div>
);

export default modal;
