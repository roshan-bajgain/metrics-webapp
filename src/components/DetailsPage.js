import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IoMdArrowRoundBack } from '@react-icons/all-files/io/IoMdArrowRoundBack';
import Header from './Header';
import Footer from './Footer';
import Banner from '../asset/Banner.jpg';
import { fetchDataApi } from '../redux/covid19Data/covid19Data';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const covid19Data = useSelector((state) => state.covid19Data.countriesData);
  if (covid19Data.length === 0) {
    dispatch(fetchDataApi());
  }
  const data = useLocation();
  const countryName = data.pathname.substring(1).replace('%20', ' ').replace('%20', ' ');
  const countryData = covid19Data.filter((data) => data.Country.localeCompare(countryName) === 0);
  return (
    <>
      <>
        <Header heading={countryName} />
        {covid19Data.length === 0 && (
        <p>Something went wrong!</p>
        )}
        {
        covid19Data.length > 0 && (
        <main>
          <NavLink to="/">
            <IoMdArrowRoundBack className="back-icon" />
          </NavLink>
          <div className="banner-div">
            <img src={Banner} alt="COVID19" className="img-banner" />
            <div className="banner-details">
              <h2 className="banner-h2">
                {countryName}
              </h2>
              <h2 className="banner-h2">{countryData[0].TotalConfirmed}</h2>
              <h2 className="banner-h2">{countryData[0].Date}</h2>
            </div>
          </div>
          <div className="details-div">
            <h1 className="detail-name">Total Confirmed</h1>
            <h1 className="detail-data">{countryData[0].TotalConfirmed}</h1>
          </div>
          <div className="details-div">
            <h1 className="detail-name">New Confirmed</h1>
            <h1 className="detail-data">{countryData[0].NewConfirmed}</h1>
          </div>
          <div className="details-div">
            <h1 className="detail-name">Total Recovered</h1>
            <h1 className="detail-data">{countryData[0].TotalRecovered}</h1>
          </div>
          <div className="details-div">
            <h1 className="detail-name">New Recovered</h1>
            <h1 className="detail-data">{countryData[0].NewRecovered}</h1>
          </div>
          <div className="details-div">
            <h1 className="detail-name">Total Deaths</h1>
            <h1 className="detail-data">{countryData[0].TotalDeaths}</h1>
          </div>
          <div className="details-div">
            <h1 className="detail-name">New Confirmed</h1>
            <h1 className="detail-data">{countryData[0].NewDeaths}</h1>
          </div>
          <div className="details-div">
            <h1 className="detail-name">Last Updated</h1>
            <h1 className="detail-data">{countryData[0].Date}</h1>
          </div>
        </main>
        )
    }
        <Footer />
      </>
    </>
  );
};

export default DetailsPage;
