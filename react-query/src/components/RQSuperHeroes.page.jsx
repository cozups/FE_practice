import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery({
    queryKey: ['super-heroes'],
    queryFn: () => {
      return axios.get('http://localhost:4000/superheroes');
    },
    select: (data) => {
      const superHeroNames = data.data.map((hero) => hero.name);
      return superHeroNames;
    },
  });

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Super Heroes</h2>
      {data.map((heroName) => (
        <li key={heroName}>{heroName}</li>
      ))}
    </>
  );
};
