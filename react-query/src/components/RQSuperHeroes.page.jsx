import React from 'react';
import { useSuperHeroesData } from '../hooks/useSuperHeroesData';
import { Link } from 'react-router-dom';

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
      {data?.data.map((hero) => (
        <div key={hero.id}>
          <Link to={`${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  );
};
