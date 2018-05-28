import React from 'react';
import {Card, CardTitle, CardBody, Button, Row, Col} from 'reactstrap';

/**
 * Card to toggle an modal
 * @param {object} props
 */
const createBoard = props => (
  <Card color="light">
    <CardBody>
      <CardTitle className="h5 text-center">Board</CardTitle>
      <Row>
        <Col xs="12" lg={{size: 8, offset: 2}}>
          <Button
            color="secondary"
            className="btn-block mx-auto w-75"
            onClick={props.clicked}
          >
            create board
          </Button>
        </Col>
      </Row>
    </CardBody>
  </Card>
);

export default createBoard;
