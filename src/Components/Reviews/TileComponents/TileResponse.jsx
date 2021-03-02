import React from 'react';

const TileResponse = ({ response }) => {
  if (!response) {
    return null;
  }
  return (
    <div>
      <div>{response}</div>
    </div>
  );
};

export default TileResponse;
