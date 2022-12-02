import * as React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [cheers, setCheers] = useState([]);
  const cheerUrl = 'http://localhost:3000/api/v1/cheers';

  const fetchCheers = async () => {
    const response = await fetch(cheerUrl, { mode: 'cors' });
    const data = await response.json();
    setCheers(data);
  };
  useEffect(() => {
    fetchCheers();
  }, []);

  return (

    <div className="row">
      {cheers.map((cheer) => <h1 key={cheers.id}>{cheer.greeting}</h1>)}
    </div>
  );
}

export default App;
