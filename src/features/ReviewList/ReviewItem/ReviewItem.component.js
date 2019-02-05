import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import moment from 'moment';

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
import VoteButtonsGroup from '../../VoteButtonsGroup/VoteButtonsGroup.component';
import { collectionToString } from '../../../helpers/collections.helpers';
import RecoItemRow from '../../../components/RecoItemRow/RecoItemRow.component';
import RecoItemHeader from '../../../components/RecoItemHeader/RecoItemHeader.component';

const ReviewItemComponent = ({ data }) => {
  const { user, createdAt, band, country, genres, youtubeLink, likes, id } = data;
  return (
  <div className='review-item'>
    <Row>
      <Col md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
        <Card className='mb-3 mx-auto'>
          <CardHeader>
            <RecoItemHeader user={user} createdAt={createdAt} band={band} />
          </CardHeader>
          <CardBody>
            <RecoItemRow header='country:' data={country} />
            <RecoItemRow header='genres:' data={collectionToString(genres)} />
            <div className='player-wrapper mt-2'>
              <ReactPlayer className='player-wrapper__player' width='100%' height='100%' url={youtubeLink} controls />
            </div>
          </CardBody>
          <CardFooter>
            <div className='d-flex justify-content-between align-items-center'>
              <VoteButtonsGroup likes={likes} reviewId={id} />
              <Link to={`/reco/${id}`}>
                <Button color='primary' className='btn-sm'>More</Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  </div>
)
}

ReviewItemComponent.propTypes = {
  data: PropTypes.object
}

export default ReviewItemComponent;
