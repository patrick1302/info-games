import React from 'react';

import './style.css';
const Checkbox = ({
  checkboxValues,
  handleToggle,
  filterName,
  id,
  filterType,
}) => {
  return (
    <div className='accordion'>
      <div>
        <label htmlFor={id} type='checkbox'>
          {filterName}
        </label>
      </div>
      <input id={id} className='input-accordion' type='checkbox' />
      <div className='scroll panel'>
        {checkboxValues.map((platform) => (
          <div key={platform}>
            <input
              className='input-checkbox'
              type='checkbox'
              onChange={() => handleToggle(filterType, platform)}
            />
            <span className='filter-name'>{platform}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkbox;
