import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { 
  Row, 
  Col, 
  Card, 
  CardHeader,
  CardBody, 
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  Button, 
  Form, 
  FormGroup, 
  FormFeedback, 
  Label, 
  Input 
} from 'reactstrap';

const ReviewDetailsComponent = ({ data }) => {
  return (
    <div className='review-item'>
      <Row>
        <Col md={{ size: 8, offset: 2 }}>
          <Card className="my-2 mx-auto">
            <CardHeader><span className='text-muted'>type: </span>{data.type} {data.rating}</CardHeader>
            <CardBody>
              <CardTitle><span className='text-muted'>band: </span>{data.band}</CardTitle>
              {data.album && (
                <CardSubtitle><span className='text-muted'>album: </span>{data.album}</CardSubtitle>
              )}
              {data.track && (
                <CardSubtitle><span className='text-muted'>track: </span>{data.track}</CardSubtitle>
              )}
              <CardText><span className='text-muted'>genre: </span>{data.genre}</CardText>
              <CardLink><span className='text-muted'>link: </span>{data.link}</CardLink>
              <CardText><span className='text-muted'>text: </span>{data.text}</CardText>
              <CardText><span className='text-muted'>similar: </span>{data.similar}</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

ReviewDetailsComponent.propTypes = {
  recommendations: PropTypes.object
}

export default ReviewDetailsComponent;
