import React from 'react';

const TileUserDate = ({ user, date }) => {
  console.log(date);
  return (
    <div>
      <div>
        {user}, {date}
      </div>
    </div>
  );
};

export default TileUserDate;
