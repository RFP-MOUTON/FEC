import React from 'react';

const SortingSelector = ({ reviews, handleSort }) => {
  const totalReviews = reviews.length;
  return (
    <div id="sortingSelector">
      {totalReviews} reviews, sorted by:
      <select onChange={handleSort}>
        <option key="relevant" value="relevant">
          relevance
        </option>
        <option key="helpful" value="helpful">
          helpfulness
        </option>
        <option key="newest" value="newest">
          newest
        </option>
      </select>
    </div>
  );
};

export default SortingSelector;
