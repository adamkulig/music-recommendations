import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { 
  Row, 
  Col, 
  Card, 
  CardHeader,
  CardBody
} from 'reactstrap';

const ReviewDetailsComponent = ({ data }) => {
  return (
    <div className='review-details'>
      { data && (
        <Row>
        <Col lg={{ size: 8, offset: 2 }}>
          <Card className="my-3">
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
                <div className="small">{data.type} review rated <strong>{data.rating}</strong> by <strong>{data.user}</strong> </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      )}
      { !data && (
        <div>loading...</div>
      )}
    </div>
  )
}

ReviewDetailsComponent.propTypes = {
  recommendations: PropTypes.object
}

export default ReviewDetailsComponent;
