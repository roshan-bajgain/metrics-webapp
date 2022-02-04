import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../asset/Banner.jpg';
import { fetchDataApi } from '../redux/covid19Data/covid19Data';
import Categories from './homePageComponents/Categories';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  const [searchText, setSearchText] = useState('');
  const heading = 'COVID19 statestics';
  const covidData = useSelector((state) => state.covid19Data.countriesData);
  const globalData = useSelector((state) => state.covid19Data.globalData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataApi());
  }, [dispatch]);

  const searchFilter = (e) => {
    setSearchText(e.target.value);
  };
  const filtered = covidData.filter((item) => Object.keys(item).some((key) => item[key]
    .toString()
    .toLowerCase()
    .includes(searchText.toLocaleLowerCase())));

  return (
    <>
      <Header heading={heading} />
      <main>
        <div className="banner-div">
          <img src={Banner} alt="COVID-19" className="img-banner" />
          <div className="banner-details">
            <h2 className="banner-h2">
              COVID19 statestics
              <br />
              Over the world
            </h2>
            <h2 className="banner-h2">{globalData.TotalConfirmed}</h2>
            <h2 className="banner-h2">{globalData.Date}</h2>
          </div>
        </div>
        <div className="search-bar">
          <h3 className="search-bar-h3">Search</h3>
          <input onChange={searchFilter} type="text" placeholder="Search" className="search-bar-input" value={searchText} />
          <h4 className="search-bar-h4">STATS BY COUNTRY</h4>
        </div>
        <div className="categories">
          {
          filtered.map((data) => (
            <Categories key={data.ID} data={data} />
          ))
      }
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
