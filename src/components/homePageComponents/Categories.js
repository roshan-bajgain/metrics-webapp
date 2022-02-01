import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowRightCircle } from '@react-icons/all-files/fi/FiArrowRightCircle';

const Categories = (props) => {
  const { data: { country, TotalConfirmed } } = props;
  return (
    <div className="category-top">
      <h1 className="category-country">{country}</h1>
      <h1 className="category-infected">{TotalConfirmed}</h1>
      <FiArrowRightCircle className="arrow-icon" />
    </div>
  );
};

Categories.propTypes = {
  data: PropTypes.shape({
    TotalConfirmed: PropTypes.number,
    country: PropTypes.string,
  }).isRequired,
};

export default Categories;
