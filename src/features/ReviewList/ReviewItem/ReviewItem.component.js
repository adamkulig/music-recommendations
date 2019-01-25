import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import moment from 'moment';
import VoteButton from '../../VoteButton/VoteButton.container';
import { Link } from 'react-router-dom';
import { 
  Row, 
  Col, 
  Card, 
  CardHeader,
  CardBody,
  CardFooter,
  Button 
} from 'reactstrap';

const ReviewItemComponent = ({ data }) => (
  <div className='review-item'>
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
                <span className='text-muted small d-inline-block mr-1'>similar:&nbsp;</span>
                <span>{data.similar}</span>
              </div>
              <div className='mb-1'>
                <span className='text-muted small d-inline-block mr-1'>genre:&nbsp;</span>
                <span>{data.genre}</span>
              </div>
            </div>
            <div className='player-wrapper mb-1'>
              <ReactPlayer className='player-wrapper__player' width='100%' height='100%' url={data.link} controls />
            </div>
          </CardBody>
          <CardFooter>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex'>
                <VoteButton likes={data.likes} reviewId={data.id} isLikeButton />
                <VoteButton likes={data.likes} reviewId={data.id}/>
              </div>
              <Link to={`/review/${data.id}`}>
                <Button color='primary' className='btn-sm'>More</Button>
              </Link>
            </div>
            
          </CardFooter>
        </Card>
      </Col>
    </Row>
  </div>
)

ReviewItemComponent.propTypes = {
  data: PropTypes.object
}

export default ReviewItemComponent;
