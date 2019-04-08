import React from 'react';
import { string } from 'prop-types';
import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";

const Stars = ({ rating }) => {
  const stars = value => {
    let stars = [];
    let valueRest = Number(value);
    while(stars.length < 5) {
      if (valueRest >= 2) {
        stars.push(<IoIosStar size={18} style={{verticalAlign: 'text-bottom'}}/>)
        valueRest -= 2;
      } else if (valueRest === 1) {
        stars.push(<IoIosStarHalf size={18} style={{verticalAlign: 'text-bottom'}}/>)
        valueRest -= 1;
      } else {
        stars.push(<IoIosStarOutline size={18} style={{verticalAlign: 'text-bottom'}}/>)
      }
    }
    return stars;
  }
  const desiredStars = stars(rating)
  return (
    <div className='d-flex justify-content-center text-info'>
      {desiredStars.map((star, i) => <div key={i}>{star}</div>)}
    </div>
  )
}

Stars.propTypes = {
  rating: string
}

export default Stars;
