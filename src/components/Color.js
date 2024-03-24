import React from 'react';
import RatingStar from './RatingStar';
import { FaTrash } from 'react-icons/fa';
const Color = ({ title, color, feedback, onRemove, id }) => {
  return (
    <div>
      <FaTrash onClick={() => onRemove(id)} />
      <h1>{title}</h1>
      <div
        style={{
          width: 'auto',
          height: '50px',
          backgroundColor: color,
        }}
      ></div>
      <RatingStar selectedStarsInit={feedback} />
    </div>
  );
};

export default Color;
