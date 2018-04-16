import React from 'react';

const modal = props => (
  <div className="modal fade" id="boardModal">
    <div className="modal-dialog">
      {props.children}
    </div>
  </div>
);

export default modal;
