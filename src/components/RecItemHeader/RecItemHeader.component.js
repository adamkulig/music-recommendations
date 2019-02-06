import React, { Fragment } from 'react';
import moment from 'moment';
import { Row, Col } from 'reactstrap';

const RecItemHeader = ({ user, createdAt, band }) => {
  return (
    <Fragment>
      <Row noGutters>
        <Col xs='2' xl='1'>
          <span className='text-muted small'>
            author:
          </span>
        </Col>
        <Col>
          <span className='text-muted small'>
            {user}
          </span>
        </Col>
        <Col xs='3'>
          <span className='text-muted small float-right'>
            {moment(createdAt.toDate()).fromNow()}
          </span>
        </Col>
      </Row>
      <h4 className='mb-0'>{band}</h4> 
    </Fragment>
  )
}
 
export default RecItemHeader;