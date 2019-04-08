import React from 'react';
import ReactPlayer from 'react-player';

const PlayerWrapper = ({ url }) => (
  <div className='player-wrapper mt-2'>
    <ReactPlayer className='player-wrapper__player' width='100%' height='100%' url={url} controls />
  </div>
)

export default PlayerWrapper;
