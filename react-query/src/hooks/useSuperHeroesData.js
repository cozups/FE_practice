import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';

const addSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superheroes', hero);
};

export const useSuperHeroesData = () => {
  return useQuery({
    queryKey: ['super-heroes'],
    queryFn: () => {
      return axios.get('http://localhost:4000/superheroes');
    },
  });
};

export const useAddSuperHero = () => {
  return useMutation({
    mutationFn: addSuperHero,
  });
};
