export default function ReviewDetailPage({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <div>
      <h1>
        Review Detail page {params.reviewId} for product {params.productId}
      </h1>
    </div>
  );
}
