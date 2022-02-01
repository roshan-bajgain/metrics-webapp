import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowRightCircle } from '@react-icons/all-files/fi/FiArrowRightCircle';

const Categories = (props) => {
  const { data: { country, TotalConfirmed } } = props;
  return (
    <div className="category-top">
      <h1>{country}</h1>
      <h1>{TotalConfirmed}</h1>
      <FiArrowRightCircle className="arrow-icon" />
    </div>
  );
};

Categories.propTypes = {
  data: PropTypes.shape({
    infected: PropTypes.number,
    country: PropTypes.string,
  }).isRequired,
};

export default Categories;
