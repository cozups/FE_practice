import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};

const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends');
};

export const ParallelQueriesPage = () => {
  const { data: superHeroes } = useQuery({
    queryKey: ['super-heroes'],
    queryFn: fetchSuperHeroes,
  });
  const { data: friends } = useQuery({
    queryKey: ['friends'],
    queryFn: fetchFriends,
  });

  return <div>ParallelQueries.page</div>;
};
