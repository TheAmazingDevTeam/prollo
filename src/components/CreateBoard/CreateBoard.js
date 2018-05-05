import React from 'react';
import {Card, CardTitle, CardBody, Button} from 'reactstrap';

/**
 * Card to toggle an modal
 * @param {object} props
 */
const createBoard = props => (
  <Card color="light">
    <CardBody>
      <CardTitle className="h5 text-center">Board</CardTitle>
      <Button
        color="secondary"
        className="btn-block mx-auto w-50"
        onClick={props.clicked}
      >
        create board
      </Button>
    </CardBody>
  </Card>
);

export default createBoard;
