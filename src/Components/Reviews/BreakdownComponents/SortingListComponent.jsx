import React from 'react';

const SortingList = ({ sortingList }) => {
  if (sortingList.size === 0) {
    return null;
  }
  let message = 'Showing reviews with the following star ratings: ';
  sortingList.forEach((rating) => {
    message = `${message + rating},`;
  });
  const finalMessage = message.substring(0, message.length - 1);
  return <div>{finalMessage}</div>;
};

export default SortingList;
