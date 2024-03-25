import { Metadata } from 'next';

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

type Props = {
  params: {
    productId: string;
  };
};

export default function ProductDetailPage({ params }: Props) {
  return (
    <div>
      <h1>Product Detail page {params.productId}</h1>
    </div>
  );
}
