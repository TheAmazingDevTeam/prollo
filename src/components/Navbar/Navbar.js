import React from 'react';
import {Navbar} from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';

const navbar = props => (
  <Navbar color="light" light expand>
    {props.location.pathname !== '/' ? <Link to="/">⬅</Link> : null}
    <Link className="mx-auto navbar-brand" to="/">
      Prollo
    </Link>
  </Navbar>
);

export default withRouter(navbar);
