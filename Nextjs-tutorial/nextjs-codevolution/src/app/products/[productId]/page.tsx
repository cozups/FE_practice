export default function ProductDetailPage({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return (
    <div>
      <h1>Product Detail page {params.productId}</h1>
    </div>
  );
}
