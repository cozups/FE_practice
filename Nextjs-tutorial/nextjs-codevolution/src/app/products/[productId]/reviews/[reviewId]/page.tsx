'use client';

import { notFound } from 'next/navigation';

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default function ReviewDetailPage({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error('Error with review id');
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Review Detail page {params.reviewId} for product {params.productId}
      </h1>
    </div>
  );
}
