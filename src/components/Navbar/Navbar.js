import React from 'react';
import {Navbar} from 'reactstrap';
import {Link} from 'react-router-dom';

/**
 * Show a navbar
 * @param {object} props
 */
const navbar = props => (
  <Navbar color="light" light expand>
    <Link className="text-info mx-auto navbar-brand" to="/">
      Prollo
    </Link>
  </Navbar>
);

export default navbar;
