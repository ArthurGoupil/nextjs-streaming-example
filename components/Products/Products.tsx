import { Suspense, use } from 'react';
import { fetchWithDelay } from '../../utils/fetch';
import { Cart } from '../Cart/Cart';
import { Loader } from '../Loader/Loader';
import './products.css';

export const Products = () => {
  return (
    <div className="products-cart-container">
      <div>
        <h1>Hello you are in the products page</h1>
        <Suspense fallback={<Loader text="Loading products..." />}>
          <ProductsList />
        </Suspense>
      </div>
      <Cart />
    </div>
  );
};

const ProductsList = () => {
  const data = use(fetchWithDelay('https://dummyjson.com/products'));

  return (
    <div>
      {data.products.map((product: any) => (
        <div key={product.id} className="product-item">
          <div>
            <b>{product.title}</b>
            <span>
              <Suspense fallback={<Loader text="Loading price..." />}>
                <ProductPrice id={product.id} />
              </Suspense>
            </span>
          </div>
          <div>{product.description}</div>
        </div>
      ))}
    </div>
  );
};

const ProductPrice = ({ id }: { id: number }) => {
  const data = use(fetchWithDelay(`https://dummyjson.com/product/${id}`));

  return <span> {data.price}$</span>;
};
