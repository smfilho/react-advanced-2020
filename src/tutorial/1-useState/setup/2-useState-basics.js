import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Initial Text');
  const handleClick = () => {
    if (text === 'Initial Text') {
      setText('NEW TEXT!');
    } else {
      setText('Initial Text');
    }
  };

  return (
    <>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
