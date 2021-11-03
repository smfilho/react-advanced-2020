import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      // Below, it wont hold the correct previous value,
      // better to increase the value as a function
      // setValue(value + 1);

      setValue(prevState => {
        return prevState + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Simple Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue(value - 1)}>
          decrease
        </button>
        <button className='btn' onClick={() => setValue(0)}>
          reset
        </button>
        <button className='btn' onClick={() => setValue(value + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
