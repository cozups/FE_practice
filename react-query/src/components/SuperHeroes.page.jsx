import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then((response) => {
      setData(response.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
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
