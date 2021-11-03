import React, { useState } from 'react';

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: 'Sam',
  //   age: 40,
  //   message: 'Alive and Kicking',
  // });

  // Many useStates can be created instead of an object

  const [name, setName] = useState('Peter');
  const [age, setAge] = useState(30);
  const [message, setMessage] = useState('Inicial message');

  const handleChangeMessage = () => {
    // using spread to keep the previous values and modify only the message
    // setPerson({ ...person, message: 'Updated Message!' });
    setMessage('New message');
  };
  return (
    <>
      {/* <h3>{person.name}</h3> */}
      <h3>{name}</h3>
      {/* <h3>{person.age}</h3> */}
      <h3>{age}</h3>
      {/* <h3>{person.message}</h3> */}
      <h3>{message}</h3>
      <button className='btn' onClick={handleChangeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
