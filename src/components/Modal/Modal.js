import React from 'react';

import CreateBoardModal from '../CreateBoardModal/CreateBoardModal';

const modal = props => (
  <div className="modal fade" id="boardModal">
    <div className="modal-dialog">
      <CreateBoardModal clicked={props.clicked} />
    </div>
  </div>
);

export default modal;
