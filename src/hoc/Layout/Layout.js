import React, {Fragment} from 'react';

import Navbar from '../../components/Navbar/Navbar';

const layout = props => (
  <Fragment>
    <Navbar />
    {props.children}
  </Fragment>
);

export default layout;
