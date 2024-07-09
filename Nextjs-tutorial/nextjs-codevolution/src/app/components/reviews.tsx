import React from 'react';

export const Reviews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>Reviews</div>;
};
