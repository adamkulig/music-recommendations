import React from 'react';
import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";

const Stars = ({ data }) => {
  const stars = value => {
    let stars = [];
    let valueRest = Number(value);
    while(stars.lenght <= 5) {
      if (valueRest >= 2) {
        stars.push(<IoIosStar size={16} />)
        valueRest =- 2;
      } else if (valueRest === 1) {
        stars.push(<IoIosStarHalf size={16} />)
        valueRest =- 1;
      } else {
        stars.push(<IoIosStarOutline size={16} />)
      }
    }
    return stars;
  }
  return (
    <div className='stars d-flex'>
      {stars(data)}
    </div>
  )
}

export default Stars;