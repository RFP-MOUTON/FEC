import React from 'react';

const TileUserDate = ({ user, date }) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const dateFormatted = new Date(date).toLocaleDateString(undefined, options);

  return (
    <div>
      <div>
        {user}, {dateFormatted}
      </div>
    </div>
  );
};

export default TileUserDate;
