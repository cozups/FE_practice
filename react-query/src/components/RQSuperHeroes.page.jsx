import React, { useState } from 'react';
import {
  useAddSuperHero,
  useSuperHeroesData,
} from '../hooks/useSuperHeroesData';
import { Link } from 'react-router-dom';

export const RQSuperHeroesPage = () => {
  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData();

  const { mutate: addHero } = useAddSuperHero();

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const onAddHero = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };

  return (
    <>
      <div>
        <label>name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>alterEgo</label>
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={onAddHero}>Add Hero</button>
      </div>
      <h2>Super Heroes</h2>
      {data?.data.map((hero) => (
        <div key={hero.id}>
          <Link to={`${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  );
};
