import React, { useState, useEffect } from 'react';

import game_info from '../../data/datas.json';
import Header from '../../components/Header';
import Checkbox from '../../components/Checkbox';
import CheckboxWithSearchInput from '../../components/CheckboxWithSearchInput';
import TopGames from '../../components/TopGames';
import Dates from '../../components/Date';
import SalesChart from '../../components/Chart';
import Sales from '../../components/Sales';

import './style.css';

function Dashboard() {
  const [checked, setChecked] = useState({
    Platform: [],
    Genre: [],
    Developer: [],
  });
  const [filteredGames, setFilteredGames] = useState(game_info);
  const [chartValues, setChartValues] = useState([]);

  useEffect(() => {
    const sortGames = top10GamesBestSelling.sort(
      (a, b) => Number(a['Year']) - Number(b['Year'])
    );
    const getAllYears = sortGames.map((game) => game['Year']);
    const getAllGlobalSales = sortGames.map((game) => game['Global_Sales']);
    setChartValues([getAllYears, getAllGlobalSales]);
  }, [filteredGames]);

  const getAllPlatforms = game_info.map((game) => game['Platform']);
  const uniquePlatform = [...new Set(getAllPlatforms)];

  const getAllGenres = game_info.map((game) => game['Genre']);
  const uniqueGenre = [...new Set(getAllGenres)];

  const getAllDeveloper = game_info.map((game) => game['Publisher']);
  const uniqueDeveloper = [...new Set(getAllDeveloper)];

  const handleFilters = () => {
    const { Platform, Genre, Developer } = checked;

    let games = [];
    let filteredByGenre = [];
    let filteredByDeveloper = [];

    for (let i = 0; i < Platform.length; i++) {
      const getFilteredGames = game_info.filter(
        (game) => game['Platform'] === Platform[i]
      );
      games.push(...getFilteredGames);
    }
    for (let i = 0; i < Genre.length; i++) {
      if (games.length) {
        const getFilteredGames = games.filter(
          (game) => game['Genre'] === Genre[i]
        );
        filteredByGenre.push(...getFilteredGames);
      } else {
        const getFilteredGames = game_info.filter(
          (game) => game['Genre'] === Genre[i]
        );
        filteredByGenre.push(...getFilteredGames);
      }
    }

    if (filteredByGenre.length) {
      games = filteredByGenre;
    }
    if (Genre.length && filteredByGenre.length === 0) {
      games = [];
    }

    for (let i = 0; i < Developer.length; i++) {
      if (games.length) {
        const getFilteredGames = games.filter(
          (game) => game['Publisher'] === Developer[i]
        );
        filteredByDeveloper.push(...getFilteredGames);
      } else {
        const getFilteredGames = game_info.filter(
          (game) => game['Publisher'] === Developer[i]
        );
        filteredByDeveloper.push(...getFilteredGames);
      }
    }
    if (filteredByDeveloper.length) {
      games = filteredByDeveloper;
    }
    if (Developer.length && filteredByDeveloper.length === 0) {
      games = [];
    }

    setFilteredGames(games);
  };

  const handleToggle = (filterType, filterValue) => {
    const currentIndex = checked[filterType].indexOf(filterValue);
    const newChecked = checked;
    currentIndex === -1
      ? newChecked[filterType].push(filterValue)
      : newChecked[filterType].splice(currentIndex, 1);

    setChecked(newChecked);
    handleFilters();
  };

  const sortByGlobalSales = (a, b) => {
    return Number(a['Global_sales']) - Number(b['Global_sales']);
  };

  const top10GamesBestSelling = filteredGames
    .sort(sortByGlobalSales)
    .slice(0, 10);

  const getTotalSales = (salesLocation) => {
    const totalSales = top10GamesBestSelling.reduce(
      (acc, curr) => (acc += Number(curr[salesLocation])),
      0
    );
    return totalSales.toFixed(2);
  };

  const sales = {
    globalSales: getTotalSales('Global_Sales'),
    northAmericaSales: getTotalSales('NA_Sales'),
    europeSales: getTotalSales('EU_Sales'),
    japanSales: getTotalSales('JP_Sales'),
    otherSales: getTotalSales('Other_Sales'),
  };

  return (
    <>
      <Header />
      <div className='dashboard'>
        <aside>
          <Checkbox
            checkboxValues={uniquePlatform}
            handleToggle={handleToggle}
            id='accordion1'
            filterName='Plataforma'
            filterType='Platform'
          />
          <Checkbox
            checkboxValues={uniqueGenre}
            handleToggle={handleToggle}
            id='accordion2'
            filterName='Gênero'
            filterType='Genre'
          />
          <CheckboxWithSearchInput
            checkboxValues={uniqueDeveloper}
            handleToggle={handleToggle}
            id='accordion3'
            filterType='Desenvolvedora'
          />
        </aside>
        <main>
          <div className='section1'>
            <Sales sales={sales} />
            <Dates />
          </div>
          <div className='section2'>
            <TopGames topGames={top10GamesBestSelling} />
            <SalesChart datas={chartValues} />
          </div>
        </main>
      </div>
    </>
  );
}

export default Dashboard;
