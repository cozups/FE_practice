import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery({
    queryKey: ['super-heroes'],
    queryFn: () => {
      return axios.get('http://localhost:4000/superheroes');
    },
    staleTime: 30000,
  });

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Super Heroes</h2>
      {data?.data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};
