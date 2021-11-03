import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('We got some text');
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h2>{text || 'Or conditional'}</h2>
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/* <h2>{!text || 'Not And Conditional'}</h2> */}
      {isError ? (
        <h1>ERROR INSIDE CURLY BRACKETS</h1>
      ) : (
        <h1>isError is False!</h1>
      )}
    </>
  );
};

export default ShortCircuit;
