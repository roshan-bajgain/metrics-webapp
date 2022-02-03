import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../asset/Banner.jpg';
import { fetchDataApi } from '../redux/covid19Data/covid19Data';
import  Countries from './homePageComponents/Countries';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  const heading = 'COVID19 statestics';
  const covidData = useSelector((state) => state.covid19Data.countriesData);
  const globalData = useSelector((state) => state.covid19Data.globalData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataApi());
  }, [dispatch]);
  return (
    <>
      <Header heading={heading} />
      <main>
        <div className="banner-div">
          <img src={Banner} alt="COVID-19" className="img-banner" />
          <h2 className="banner-h2">
            COVID19 statestics
            <br />
            Over the world
          </h2>
          <h2 className="banner-h2">{globalData.TotalConfirmed}</h2>
          <h2 className="banner-h2">{globalData.Date}</h2>
        </div>
        <div className="search-bar">
          <h3 className="search-bar-h3">Search</h3>
          <input type="text" placeholder="Search" className="search-bar-input" />
          <h4 className="search-bar-h4">STATS BY COUNTRY</h4>
        </div>
        <div className="categories">
          {
          covidData.map((data) => (
            <Countries key={data.ID} data={data} />
          ))
      }
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
