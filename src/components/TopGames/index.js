import React from 'react';

import './style.css';

const TopGames = ({ topGames }) => {
  return (
    <div className='top-sales'>
      <h2 className='header-top-games'>Top 10 Games</h2>
      <div className='container-table'>
        <table>
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Nome</th>
              <th>Vendas Total</th>
            </tr>
          </thead>
          {topGames.map((game, index) => (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{game['Name']}</td>
                <td>{game['Global_Sales']}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TopGames;
