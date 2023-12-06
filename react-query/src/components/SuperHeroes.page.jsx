import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/superheroes')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>Super Heroes</h2>
      {data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </div>
  );
};
