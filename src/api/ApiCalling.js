import React, { useState } from 'react';
import axios from 'axios';
import Trigger from './Trigger';
import DisplayData from './DisplayData';

function ApiCalling() {
  const [data, setData] = useState(null);

  const repositories = async () => {
    try {
      const response = await axios.get('https://api.github.com/repositories'); //get public repositories from github
      setData(response.data);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Get Github Public Repositories</h1>
      <Trigger onClick={repositories} />
      {data && <DisplayData data={data} />}
    </div>
  );
}

export default ApiCalling;
