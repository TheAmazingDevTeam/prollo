import React from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';

/**
 * A single card to click for navigation
 * @param {object} props
 */
const boardSelection = props => (
  <Card color="light">
    <CardBody>
      <CardTitle className="h5 text-center">{props.title}</CardTitle>
      <Link
        to={`board/${props.id}`}
        className="btn btn-info btn-block mx-auto w-25"
      >
        open
      </Link>
    </CardBody>
  </Card>
);

export default boardSelection;
