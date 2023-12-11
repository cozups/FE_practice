import React from 'react';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData();

  console.log({ isLoading, isFetching });

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
