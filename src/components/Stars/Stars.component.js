import React from 'react';
import { object } from 'prop-types';
import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";

const Stars = ({ data }) => {
  const stars = value => {
    let stars = [];
    let valueRest = Number(value);
    while(stars.length < 5) {
      if (valueRest >= 2) {
        stars.push(<IoIosStar size={16} />)
        valueRest -= 2;
      } else if (valueRest === 1) {
        stars.push(<IoIosStarHalf size={16} />)
        valueRest -= 1;
      } else {
        stars.push(<IoIosStarOutline size={16} />)
      }
    }
    return stars;
  }
  const desiredStars = stars(data)
  return (
    <div className='stars d-flex justify-content-center'>
      {desiredStars.map((star,index) => <div key={index}>{star}</div>)}
    </div>
  )
}

Stars.propTypes = {
  data: object
}

export default Stars;
