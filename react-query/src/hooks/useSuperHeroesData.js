import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useSuperHeroesData = () => {
  return useQuery({
    queryKey: ['super-heroes'],
    queryFn: () => {
      return axios.get('http://localhost:4000/superheroes');
    },
    select: (data) => {
      const superHeroNames = data.data.map((hero) => hero.name);
      return superHeroNames;
    },
  });
};
