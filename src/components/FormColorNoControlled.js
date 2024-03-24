import React, { useRef } from 'react';

const FormColorNoControlled = ({ onCreate }) => {
  const titleRef = useRef(null);
  const colorRef = useRef(null);

  const onCreateColor = (e) => {
    e.preventDefault();
    console.log('submit');
    const newColor = {
      title: titleRef.current.value,
      color: colorRef.current.value,
      feedback: 0,
    };
    onCreate(newColor);
    titleRef.current.value = '';
    colorRef.current.value = '';
  };

  return (
    <form onSubmit={(e) => onCreateColor(e)}>
      <label htmlFor="title">Title:</label>
      <input ref={titleRef} id="title" type="text" />
      <label htmlFor="color">Color:</label>
      <input ref={colorRef} id="color" type="color" />
      <button>ADD</button>
    </form>
  );
};

export default FormColorNoControlled;
