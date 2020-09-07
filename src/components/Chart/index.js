import React from 'react';
import Chart from 'react-apexcharts';

import './style.css';

const SalesChart = ({ datas }) => {
  const [categories = [], data = []] = datas;
  console.log(categories);
  console.log(data);

  const options = {
    chart: {
      id: 'apexchart-example',
      group: 'social',
      type: 'line',
      heigth: 160,
      background: '#333F50',
      foreColor: '#fff',
    },
    stroke: { width: 5 },
    colors: ['#fff'],
    xaxis: {
      categories,
    },
    title: {
      text: 'Histórico',
      offsetY: 10,
      margin: 20,
      style: { fontSize: '20px' },
    },
    markers: {
      size: 6,
    },
    grid: {
      row: {
        colors: ['#333F50'],
      },
      column: {
        colors: ['#333F50'],
      },
    },
  };
  const series = [
    {
      name: 'Valor (U$ MM)',
      data,
    },
  ];
  return (
    <div className='chart'>
      <Chart
        type='line'
        series={series}
        options={options}
        width={500}
        height={320}
      />
    </div>
  );
};

export default React.memo(SalesChart);
