import { notFound } from 'next/navigation';

export default function ReviewDetailPage({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
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
