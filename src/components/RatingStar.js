import React, { useState } from 'react';
import Star from './Star';
import { createArray } from '../util/utils';

const RatingStar = ({
  totalStars = 5,
  selectedStarsInit = 0,
  style = {},
  ...props
}) => {
  const [selectedStars, setSelectedStars] = useState(selectedStarsInit);
  const stars = createArray(totalStars);
  const defaultStyle = {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
  };
  return (
    <>
      <ul style={{ ...defaultStyle, ...style }} {...props}>
        {stars.map((_, i) => (
          <li key={i}>
            <Star
              selected={i < selectedStars}
              onSelect={() => setSelectedStars(i + 1)}
            />
          </li>
        ))}
      </ul>
      <p>
        {' '}
        {selectedStars} of {totalStars} Stars{' '}
      </p>
    </>
  );
};

export default RatingStar;
