import React from 'react';
import {Card, CardBody, CardTitle, Button, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

/**
 * A single card to click for navigation
 * @param {object} props
 */
const boardSelection = props => (
  <Card color="light">
    <CardBody>
      <CardTitle className="h5 text-center">{props.title}</CardTitle>
      <Row>
        <Col xs="12" lg={{size: 6, offset: 3}}>
          <Link to={`board/${props.id}`}>
            <Button color="info" className="btn-block mx-auto w-50">
              open
            </Button>
          </Link>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default boardSelection;
