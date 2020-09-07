import React from 'react';

import './style.css';

const Sales = ({ sales }) => {
  const {
    globalSales,
    northAmericaSales,
    europeSales,
    japanSales,
    otherSales,
  } = sales;
  return (
    <div className='sales-box'>
      <div className='total-sales-box'>
        <h3>Vendas Total </h3>
        <span>(Em U$ MM)</span>
        <span className='sales-value'>{globalSales}</span>
      </div>
      <div className='continent-sales-box'>
        <h3>Vendas por Continente </h3>
        <span>(Em U$ MM)</span>
        <div className='content-continent-sales'>
          <div className='continent-sales'>
            <span className='sales-value'>{northAmericaSales}</span>
            <span className='continent'>América do Norte</span>
          </div>
          <div className='continent-sales'>
            <span className='sales-value'>{europeSales}</span>
            <span className='continent'>Europa</span>
          </div>
          <div className='continent-sales'>
            <span className='sales-value'>{japanSales}</span>
            <span className='continent'>Japão</span>
          </div>
          <div className='continent-sales'>
            <span className='sales-value'>{otherSales}</span>
            <span className='continent'>Resto do mundo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
