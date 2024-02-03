import React, { useState } from 'react'
import './NameInput.css';

export const NameInput = () => {

  const [value, setValue] = useState('User');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="name">
        <span><i className="far fa-user"></i></span>
          <input type="text"
          id="name-input" className="name-input" 
          value={value} maxLength="20" onChange={handleChange}>
          </input>
    </div>
  )
}
