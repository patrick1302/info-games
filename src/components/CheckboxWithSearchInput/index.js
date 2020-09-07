import React, { useState } from 'react';

import './style.css';

const CheckboxWithSearchInput = ({ checkboxValues, handleToggle, id }) => {
  const [search, setSearch] = useState('');

  return (
    <div className='accordion'>
      <label htmlFor={id} type='checkbox'>
        Desenvolvedora
      </label>
      <input id={id} className='input-accordion' type='checkbox' />
      <div className='scroll panel'>
        <input
          type='text'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className='search-input'
          placeholder='Filtre pelo nome'
        />
        {checkboxValues
          .filter((developer) =>
            developer.toLowerCase().includes(search.toLowerCase())
          )
          .map((developer) => (
            <div key={developer}>
              <input
                className='input-checkbox'
                type='checkbox'
                onChange={() => handleToggle('Developer', developer)}
              />
              <span className='filter-name'>{developer}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CheckboxWithSearchInput;
