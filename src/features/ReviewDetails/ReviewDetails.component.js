import React from 'react';
import PropTypes from 'prop-types';
// import { map } from 'lodash';
import ReactPlayer from 'react-player';
import moment from 'moment';
import VoteButton from '../VoteButton/VoteButton.container';
import { 
  Row, 
  Col, 
  Card, 
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from 'reactstrap';
import { collectionToString } from '../../helpers/collections.helpers';


const ReviewDetailsComponent = ({ data }) => {
  return (
    <div className='review-details'>
      { data && (
        <Row>
        <Col md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
        <Card className='my-2 mx-auto'>
          <CardHeader>
            <div className='small text-muted d-flex justify-content-between mb-1'>
              <span className='d-inline-block mr-1'>author: {data.user}</span>
              <span>{moment(data.createdAt.toDate()).fromNow()}</span>
            </div>
            <h5 className='mb-0'><span className='text-muted'></span>{data.band}</h5>
          </CardHeader>
          <CardBody>
            <div className='d-flex flex-column'>
              <div className='mb-1'>
                <span className='text-muted small d-inline-block mr-1'>country:&nbsp;</span>
                <span>{data.country}</span>
              </div>
              <div className='mb-1'>
                <span className='text-muted small d-inline-block mr-1'>genres:&nbsp;</span>
                <span>{collectionToString(data.genres)}</span>
              </div>
              <div className='mb-1'>
                <span className='text-muted small d-inline-block mr-1'>similar:&nbsp;</span>
                <span>{data.similar}</span>
              </div>
              <div className='mb-1'>
                <span className='text-muted small d-inline-block mr-1'>facebook:&nbsp;</span>
                <span>{data.facebookLink}</span>
              </div>
              <div className='mb-1'>
                <span className='text-muted small d-inline-block mr-1'>opinion:&nbsp;</span>
                <span>{data.opinion}</span>
              </div>
              <div className='mb-1'>
                <span className='text-muted small d-inline-block mr-1'>author rating:&nbsp;</span>
                <span>{data.rating}</span>
              </div>
            </div>
            <div className='player-wrapper mb-1'>
              <ReactPlayer className='player-wrapper__player' width='100%' height='100%' url={data.youtubeLink} controls />
            </div>
          </CardBody>
          <CardFooter>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex'>
                <VoteButton likes={data.likes} reviewId={data.id} isLikeButton={true} />
                <VoteButton likes={data.likes} reviewId={data.id} isLikeButton={false}/>
              </div>
            </div>
            
          </CardFooter>
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
