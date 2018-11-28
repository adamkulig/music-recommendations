import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import moment from 'moment';
import { Link } from 'react-router-dom';
import routes from '../../../config/routes';
import './ReviewItem.scss';
import { 
  Row, 
  Col, 
  Card, 
  CardHeader,
  CardBody, 
  Button 
} from 'reactstrap';

const ReviewItemComponent = ({ data }) => (
  <div className='review-item'>
    <Row>
      <Col lg={{ size: 8, offset: 2 }}>
        <Card className='my-2 mx-auto'>
          <CardHeader>
            <h5 className='mb-0'><span className='text-muted'>band: </span>{data.band}</h5>
          </CardHeader>
          <CardBody>
            {data.track && (
              <p className='mb-2'><span className='text-muted'>track: </span>{data.track}</p>
            )}
            {data.album && (
              <p className='mb-2'><span className='text-muted'>album: </span>{data.album}</p>
            )}
            <p className='mb-2'><span className='text-muted'>similar: </span>{data.similar}</p>
            <p className='mb-2'><span className='text-muted'>genre: </span>{data.genre}</p>
            <div className='player-wrapper mb-2'>
              <ReactPlayer className='player-wrapper__player' width='100%' height='100%' url={data.link}/>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='small'>{data.type} review rated <strong>{data.rating}</strong> by <strong>{data.user}</strong> </div>
              <div className='small text-muted'>{moment(data.createdAt.toDate()).fromNow()}</div>
              <Link to={`/review/${data.id}`}>
                <Button color='primary btn-sm'>More</Button>
              </Link>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
)

ReviewItemComponent.propTypes = {
  recommendations: PropTypes.object
}

export default ReviewItemComponent;
