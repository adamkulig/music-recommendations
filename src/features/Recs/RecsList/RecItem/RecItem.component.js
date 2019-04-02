import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardHeader,
  CardBody,
  CardFooter,
  Button 
} from 'reactstrap';

import VoteButtonsGroup from '../../VoteButtonsGroup/VoteButtonsGroup.component';
import { collectionToString } from 'helpers/collections.helpers';
import RecItemRow from '../../components/RecItemRow/RecItemRow.component';
import RecItemHeader from '../../components/RecItemHeader/RecItemHeader.component';

const RecItemComponent = ({ data }) => {
  const { user, createdAt, band, country, genres, youtubeLink, likes, id } = data;
  return (
    <div className='rec-item'>
      <Card className='mb-3 mx-auto'>
        <CardHeader>
          <RecItemHeader user={user} createdAt={createdAt} />
        </CardHeader>
        <CardBody>
          <RecItemRow header='band:' data={band} large />  
          <RecItemRow header='country:' data={country} />
          <RecItemRow header='genres:' data={collectionToString(genres)} />
          <div className='player-wrapper mt-2'>
            <ReactPlayer className='player-wrapper__player' width='100%' height='100%' url={youtubeLink} controls />
          </div>
        </CardBody>
        <CardFooter>
          <div className='d-flex justify-content-between align-items-center'>
            <VoteButtonsGroup likes={likes} recId={id} />
            <Link to={`/rec/${id}`}>
              <Button color='primary' className='btn-sm'>More</Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default RecItemComponent;
