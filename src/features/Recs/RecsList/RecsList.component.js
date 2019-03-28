import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import RecItem from './RecItem/RecItem.component';

const RecsListComponent = ({ recs }) => {
  return (
    <Row>
      <Col md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
        {recs.map(item => (
          <RecItem key={item.id} data={item}/>
        ))}
      </Col>
    </Row>
  )
}

RecsListComponent.propTypes = {
  recs: PropTypes.array
}

export default RecsListComponent;
