import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player'
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

const ReviewItemComponent = ({ data }) => {
  return (
    <div className='review-item'>
      <Row>
        <Col lg={{ size: 8, offset: 2 }}>
          <Card className="my-2 mx-auto">
            <CardHeader>
              <h5 className='mb-0'><span className='text-muted'>band: </span>{data.band}</h5>
            </CardHeader>
            <CardBody>
              <p className='mb-2'><span className='text-muted'>track: </span>{data.track}</p>
              <p className='mb-2'><span className='text-muted'>similar: </span>{data.similar}</p>
              <p className='mb-2'><span className='text-muted'>genre: </span>{data.genre}</p>
              <ReactPlayer url={data.link} width='100%' height='100%'/>
              <div className='d-flex'>
                <span className="small align-middle">{data.type} review by {data.user} </span>
                <Button color="primary btn-sm" className="ml-auto">More</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

ReviewItemComponent.propTypes = {
  recommendations: PropTypes.object
}

export default ReviewItemComponent;
