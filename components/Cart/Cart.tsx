import { Suspense, use } from 'react';
import { fetchWithDelay } from '../../utils/fetch';
import { Loader } from '../Loader/Loader';
import './cart.css';

export const Cart = () => {
  return (
    <div className="cart-container">
      <h2>Your cart</h2>
      <Suspense fallback={<Loader text="Loading cart..." />}>
        <CartData />
      </Suspense>
    </div>
  );
};

const CartData = () => {
  const data = use(fetchWithDelay('https://dummyjson.com/carts/1'));

  return (
    <div>
      {data.products.map((product: any) => (
        <div key={product.id} className="cart-line">
          {product.title} <b>{product.price}$</b>
        </div>
      ))}
    </div>
  );
};
