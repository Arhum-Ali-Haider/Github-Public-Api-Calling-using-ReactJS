import React from 'react';
// This is the Trigger component to get trigger the api in ApiCalling.js
const Trigger = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Click To Get Public Repositories
    </button>
  );
};

export default Trigger;
