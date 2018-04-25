import React from 'react';
import {Navbar, Row, Col, Input, FormGroup} from 'reactstrap';
import {Link} from 'react-router-dom';

import DropdownButton from '../DropdownButton/DropdownButton';

const navbar = props => (
  <Navbar color="light" light expand>
    <Row className="w-100">
      <Col xs="1">
        <DropdownButton boards={props.boards} />
      </Col>
      <Col xs="2">
        <FormGroup>
        <Input />
        </FormGroup>
      </Col>
      <Col xs="6" className="text-center">
        <Link className="navbar-brand" to="/">Prollo</Link>
      </Col>
    </Row>
  </Navbar>
);

export default navbar;
