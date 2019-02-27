import React from 'react';
import ReactPlayer from 'react-player';
import { isNil } from 'lodash';
import { IoLogoFacebook } from "react-icons/io";

import VoteButtonsGroup from '../VoteButtonsGroup/VoteButtonsGroup.component';
import { 
  Row, 
  Col, 
  Card, 
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from 'reactstrap';

import { collectionToString } from 'helpers/collections.helpers';
import RecItemRow from 'components/RecItemRow/RecItemRow.component';
import RecItemRowLink from 'components/RecItemRowLink/RecItemRowLink.component';
import RecItemHeader from 'components/RecItemHeader/RecItemHeader.component';
import Stars from 'components/Stars/Stars.component';
import history from 'history.js';

const RecDetailsComponent = ({ data }) => {
  const { user, createdAt, band, country, genres, youtubeLink, likes, id, similar, facebookLink, opinion, rating } = data;
  return (
    <Row>
      <Col md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
        <Card className='my-2 mx-auto'>
          <CardHeader>
            <RecItemHeader user={user} createdAt={createdAt} />
          </CardHeader>
          <CardBody>
            <RecItemRow header='band:' data={band} large />
            <RecItemRow header='country:' data={country} />
            <RecItemRow header='genres:' data={collectionToString(genres)} />
            <RecItemRow header='similar:' data={similar} />
            {!isNil(facebookLink) && <RecItemRowLink header='facebook:' data={facebookLink} colorClass='c-fb'>
              <IoLogoFacebook size={24}/>
            </RecItemRowLink>}
            <RecItemRow header='opinion:' data={opinion} />
            <RecItemRow header='rating:' data={rating} />
            <div className='player-wrapper mt-2'>
              <ReactPlayer className='player-wrapper__player' width='100%' height='100%' url={youtubeLink} controls />
            </div>
          </CardBody>
          <CardFooter>
            <div className='d-flex justify-content-between align-items-center'>
              <VoteButtonsGroup likes={likes} recId={id} />
              <Button color='primary' className='btn-sm' onClick={() => history.goBack()}>Back</Button>
            </div>
          </CardFooter>
        </Card>
      </Col>
    </Row>
  )
}

export default RecDetailsComponent;
