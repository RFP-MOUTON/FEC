import React from 'react';

const TileUserDate = ({ user, date }) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateFormatted = new Date(date).toLocaleDateString(undefined, options);

  return (
    <div className="tileUser">
      {user}, {dateFormatted}
    </div>
  );
};

export default TileUserDate;
