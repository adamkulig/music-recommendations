import React from 'react';
import { Row, Col } from 'reactstrap';

const RecoItemRow = ({header, data, dataInLink = false}) => (
  <Row noGutters>
    <Col xs='2' xl='1'>
      <span className='text-muted small'>
        {header}
      </span>
    </Col>
    <Col>{dataInLink ? <a href={data} target='_blank' rel='noopener noreferrer'>{data}</a> : data}</Col>
  </Row>
);

export default RecoItemRow;
