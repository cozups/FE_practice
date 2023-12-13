import { keepPreviousData, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

export const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['colors', pageNumber],
    queryFn: () => fetchColors(pageNumber),
    placeholderData: keepPreviousData,
  });

  console.log(isLoading);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      {data?.data.map((color) => (
        <div key={color.id}>
          <h2>
            {color.id}. {color.label}
          </h2>
        </div>
      ))}
      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          prev page
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
        >
          next page
        </button>
      </div>
    </div>
  );
};
