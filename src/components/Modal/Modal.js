import React from 'react';

import CreateBoardModal from '../CreateBoardModal/CreateBoardModal';

const modal = () => (
  <div className="modal fade" id="boardModal">
    <div className="modal-dialog">
      <CreateBoardModal />
    </div>
  </div>
);

export default modal;
