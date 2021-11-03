import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const [people2] = useState(data);

  const removeItem = id => {
    let newPeople = people.filter(person => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map(person => {
        const { id, name } = person;
        return (
          <div key='id' className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button type='button' className='btn' onClick={() => setPeople([])}>
        Remove All
      </button>
      <button type='button' className='btn' onClick={() => setPeople(people2)}>
        Add All
      </button>
    </>
  );
};

export default UseStateArray;
