import React, { useReducer } from 'react';
import { reducer } from '../Components/reducer';



const Form2 = () => {
  const [formState, dispatch] = useReducer(reducer, Array(10).fill(''));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    dispatch({ type: 'RESET' });
  };

  const handleInputChange = (index, value) => {
    dispatch({ type: 'UPDATE', payload: { index, value } });
  };

  return (
    <form onSubmit={handleSubmit}>
      {formState.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={10}
          value={value}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form2;
