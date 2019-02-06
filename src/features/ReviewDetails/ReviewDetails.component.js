import React from 'react';
import PropTypes from 'prop-types';
// import { map } from 'lodash';
import ReactPlayer from 'react-player';
import moment from 'moment';
import VoteButtonsGroup from '../VoteButtonsGroup/VoteButtonsGroup.component';
import { 
  Row, 
  Col, 
  Card, 
  CardHeader,
  CardBody,
  CardFooter
} from 'reactstrap';
import { collectionToString } from '../../helpers/collections.helpers';
import RecoItemRow from '../../components/RecoItemRow/RecoItemRow.component';
import RecoItemHeader from '../../components/RecoItemHeader/RecoItemHeader.component';

const ReviewDetailsComponent = ({ data }) => {
  const { user, createdAt, band, country, genres, youtubeLink, likes, id, similar, facebookLink, opinion, rating } = data;
  return (
    <Row>
      <Col md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
        <Card className='my-2 mx-auto'>
          <CardHeader>
            <RecoItemHeader user={user} createdAt={createdAt} band={band} />
          </CardHeader>
          <CardBody>
            <RecoItemRow header='country:' data={country} />
            <RecoItemRow header='genres:' data={collectionToString(genres)} />
            <RecoItemRow header='similar:' data={similar} />
            <RecoItemRow header='facebook:' data={facebookLink} dataInLink />
            <RecoItemRow header='opinion:' data={opinion} />
            <RecoItemRow header='rating:' data={rating} />
                      <div className='player-wrapper mt-2'>
              <ReactPlayer className='player-wrapper__player' width='100%' height='100%' url={youtubeLink} controls />
            </div>
          </CardBody>
          <CardFooter>
            <div className='d-flex justify-content-between align-items-center'>
              <VoteButtonsGroup likes={likes} reviewId={id} />
            </div>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  )
}

ReviewDetailsComponent.propTypes = {
  recommendations: PropTypes.object
}

export default ReviewDetailsComponent;
