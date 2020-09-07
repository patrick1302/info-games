import React, { useState } from 'react';
import './style.css';

const Dates = () => {
  const [date, setDate] = useState(new Date());

  const rerender = () => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  };
  const weekDays = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
  ];
  const dayMonthYear = date.toLocaleString().split(' ');

  rerender();

  return (
    <div className='date-box'>
      <div className='current-time'>
        <span>{dayMonthYear[1]}</span>
      </div>
      <div className='date'>
        <span>{weekDays[date.getDay()]}, </span>
        <span>{dayMonthYear[0].split('/').join('-')}</span>
      </div>
    </div>
  );
};

export default Dates;
