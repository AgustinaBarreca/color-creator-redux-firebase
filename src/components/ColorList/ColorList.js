import React from 'react';
import Color from '../Color';
// import { useSelector } from 'react-redux';

export const ColorList = ({ colors, onRemove, loading }) => {
  // const { loading } = useSelector((state) => state.ui);
  if (!colors.length && !loading) return <p> dont have colors! </p>;
  return (
    <ul>
      {colors.map((color) => (
        <Color key={color.id} {...color} onRemove={onRemove} />
      ))}
    </ul>
  );
};
