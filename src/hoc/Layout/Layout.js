import React, {Fragment} from 'react';

import Navbar from '../../components/Navbar/Navbar';

const layout = props => (
  <Fragment>
    <Navbar boards={props.boards} changed={props.changed} />
    {props.children}
  </Fragment>
);

export default layout;
