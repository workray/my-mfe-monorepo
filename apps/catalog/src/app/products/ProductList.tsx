/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from 'semantic-ui-react';
import ProductCard from './ProductCard';
import { PRODUCT_LIST_MOCKS } from '@ebuy/mocks';
export function ProductList() {
  return (
    <Card.Group>
      {PRODUCT_LIST_MOCKS.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Card.Group>
  );
}
export default ProductList;