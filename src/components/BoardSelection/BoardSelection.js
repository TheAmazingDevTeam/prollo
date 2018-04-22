import React from 'react';
import {Link} from 'react-router-dom';

const boardSelection = props => (
  <div className="card bg-light">
    <div className="card-body">
      <h5 className="card-title text-center">{props.title}</h5>
      <Link
        to={`board/${props.id}`}
        className="btn btn-info btn-block mx-auto w-25"
      >
        open
      </Link>
    </div>
  </div>
);

export default boardSelection;
