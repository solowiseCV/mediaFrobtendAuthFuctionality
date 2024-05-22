import React, { useState } from 'react';
import "./Components.css";

export const Inputs = ({ type, placeholder, names, inputStyles, inputIcon }) => {
  // const [inputValue, setInputValue] = useState({ [names]: '' });
  const [inputValue, setInputValue] = useState('');


  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    // setInputValue({ ...inputValue, [name]: value });
    setInputValue(e.target.value);
  }

  return (
    <div className='inputWrapper'>
      <input
        className={`${inputStyles}`}
        type={type}
        placeholder={placeholder}
        name={names}
        // value={inputValue[names] || ""}
        value={inputValue}
        onChange={handleChange}
        required
      />
      <span className='inputIcon'>{inputIcon}</span>
    </div>
  );
}
