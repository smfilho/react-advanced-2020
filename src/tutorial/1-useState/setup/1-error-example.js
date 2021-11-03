import React from 'react';

const ErrorExample = () => {
  let title = 'Qualquer title';
  const handleClick = () => {
    title = 'some other title';
    console.log(title);
  };

  return (
    <>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default ErrorExample;
