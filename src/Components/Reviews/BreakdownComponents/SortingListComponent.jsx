import React from 'react';

const SortingList = ({ sortingList }) => {
  if (sortingList.size === 0) {
    return null;
  }
  const message = 'Showing reviews with the following star ratings: ';
  let filterMessage = '';
  sortingList.forEach((rating) => {
    filterMessage = `${filterMessage + rating}, `;
  });
  const finalFilterMessage = filterMessage.substring(
    0,
    filterMessage.length - 2
  );
  return (
    <div>
      <div>{message}</div>
      <div>{finalFilterMessage}</div>
    </div>
  );
};

export default SortingList;
