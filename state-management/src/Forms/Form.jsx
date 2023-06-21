import React, { useRef } from 'react';

const Form = () => {
  const form = useRef([]);

  const handleChange = (index, value) => {
    if (value.length === 10 && index < form.current.length - 1) {
      form.current[index + 1].focus();
    }
  };

  return (
    <form>
      {[...Array(5)].map((_, index) => (
        <input
          key={index}
          ref={(el) => (form.current[index] = el)}
          type="text"
          maxLength={10}
          onChange={(e) => handleChange(index, e.target.value)}
        />
      ))}
      <button type='submit'>Submit</button>
    </form>
    
  );
};

export default Form;
