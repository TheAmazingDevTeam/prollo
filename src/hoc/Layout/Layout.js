import React, {Fragment} from 'react';

import Navbar from '../../components/Navbar/Navbar';

const layout = props => (
  <Fragment>
    <Navbar boards={props.boards} />
    {props.children}
  </Fragment>
);

export default layout;
