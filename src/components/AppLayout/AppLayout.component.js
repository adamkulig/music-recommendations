import React from 'react';
import { Container } from 'reactstrap';

import AppNav from './AppNav/AppNav.container';
import AppFooter from './AppFooter/AppFooter.component';

const AppLayout = ({ children }) => (
  <div className='app-wrapper'>
    <AppNav />
      <Container className='app-wrapper__content'>
        {children}
      </Container>
    <AppFooter />
  </div>  
)

export default AppLayout;
