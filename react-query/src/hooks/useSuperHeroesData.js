import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
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
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addSuperHero,
    onSuccess: () => {
      queryClient.invalidateQueries(['super-heroes']);
    },
  });
};
