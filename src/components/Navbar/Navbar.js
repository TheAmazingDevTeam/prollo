import React from 'react';

import {Link} from 'react-router-dom';

const navbar = props => (
  <nav className="navbar navbar-expand navbar-light bg-light">
    <div className="row w-100">
      <div className="col-1">
        <button className="btn btn-primary btn-block">Boards</button>
      </div>
      <div className="col-2">
        <form>
          <input className="form-control" />
        </form>
      </div>
      <div className="col-6 text-center">
        <Link className="navbar-brand" to="/">Prollo</Link>
      </div>
    </div>
  </nav>
);

export default navbar;
