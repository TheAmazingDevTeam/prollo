import React from 'react';
import {Navbar, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

const navbar = props => (
  <Navbar color="light" light expand>
    <Row className="w-100">
      <Col xs="6" className="text-center">
        <Link className="navbar-brand" to="/">
          Prollo
        </Link>
      </Col>
    </Row>
  </Navbar>
);

export default navbar;
