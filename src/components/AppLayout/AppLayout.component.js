import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import AppNav from './AppNav/AppNav.container';
import AppFooter from './AppFooter/AppFooter.component';

const AppLayout = ({ children }) => (
  <div className='app-wrapper'>
    <AppNav />
    <div className='app-wrapper__content'>
      {/* <Row> */}
        {/* <Col md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}> */}
          {children}
        {/* </Col> */}
      {/* </Row> */}
    </div>
    <AppFooter />
  </div>  
)

export default AppLayout;