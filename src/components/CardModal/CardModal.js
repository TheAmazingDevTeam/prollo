import React from 'react';

import Modal from '../../hoc/Modal/Modal';

const cardModal = () => (
  <Modal>
    <div className="modal-header">
      <h5 className="modal-title">Card Title</h5>
      <button type="button" className="close" data-dismiss="modal">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">With textarea</span>
      </div>
        <textarea className="form-control"></textarea>
      </div>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
  </Modal>
);

export default cardModal;
