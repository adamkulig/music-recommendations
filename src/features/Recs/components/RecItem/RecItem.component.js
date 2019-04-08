import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';
import { object, bool } from 'prop-types';
import { isNil } from 'lodash';
import { IoLogoFacebook } from "react-icons/io";

import VoteButtonsGroup from '../VoteButtonsGroup/VoteButtonsGroup.component';
import { collectionToString } from 'helpers/collections.helpers';
import RecItemRow from '../RecItemRow/RecItemRow.component';
import RecItemHeader from '../RecItemHeader/RecItemHeader.component';
import RecItemRowLink from '../RecItemRowLink/RecItemRowLink.component';
import Stars from 'components/Stars/Stars.component';
import PlayerWrapper from 'components/PlayerWrapper/PlayerWrapper.component';
import history from 'history.js';

const RecItemComponent = ({ data, isSingleRecPage }) => {
  const { user, createdAt, band, country, genres, youtubeLink, likes, id, rating, similar, facebookLink, opinion } = data;
  return (
    <div className='rec-item'>
      <Card className='mb-3 mx-auto'>
        <CardHeader>
          <RecItemHeader user={user} createdAt={createdAt} />
        </CardHeader>
        <CardBody>
          <RecItemRow header='rating:' >
            <Stars rating={rating} />
          </RecItemRow>
          <RecItemRow header='band:' >
            {band}
          </RecItemRow>
          <RecItemRow header='country:' >
            {country}
          </RecItemRow>
          <RecItemRow header='genres:' >
            {collectionToString(genres)}
          </RecItemRow>
          {isSingleRecPage && !isNil(similar) && (
            <RecItemRow header='similar:' >
              {similar}
            </RecItemRow>
          )}
          {isSingleRecPage && !isNil(facebookLink) && (
            <RecItemRowLink header='facebook:' url={facebookLink} colorClass='c-fb'>
              <IoLogoFacebook size={24} />
            </RecItemRowLink> //move to single fbIcon component, player move to single youtubePlayer component
          )}
          {isSingleRecPage && (
            <RecItemRow header='opinion:' >{opinion}</RecItemRow>
          )}
          <PlayerWrapper url={youtubeLink} />
        </CardBody>
        <CardFooter>
          <div className='d-flex justify-content-between align-items-center'>
            <VoteButtonsGroup likes={likes} recId={id} />
            {isSingleRecPage ? (
              <Button color='primary' className='btn-sm' onClick={() => history.goBack()}>Back</Button>
            ) : (
              <Link to={`/rec/${id}`}>
                <Button color='primary' className='btn-sm'>More</Button>
              </Link>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

RecItemComponent.propTypes = {
  data: object,
  isSingleRecPage: bool
}

RecItemComponent.defaultProps = {
  isSingleRecPage: false
}

export default RecItemComponent;
