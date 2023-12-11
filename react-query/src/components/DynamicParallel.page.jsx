import { useQueries } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const DynamicParallelPage = ({ heroIds }) => {
  const queryResult = useQueries({
    queries: heroIds.map((heroId) => {
      return {
        queryKey: ['super-hero', heroId],
        queryFn: () => fetchSuperHero(heroId),
      };
    }),
  });

  return <div>DynamicParallel Page</div>;
};
