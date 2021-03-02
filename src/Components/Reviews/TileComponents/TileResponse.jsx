import React from 'react';

const TileResponse = ({ response }) => {
  if (!response) {
    return null;
  }
  return (
    <div className="response">
      <div>Response from seller:</div>
      <div>{response}</div>
    </div>
  );
};

export default TileResponse;
