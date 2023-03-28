import Image from 'next/image';
import Link from 'next/link';
import { Suspense, use } from 'react';
import { fetchWithDelay } from '../../utils/fetch';
import { Loader } from '../Loader/Loader';
import './header.css';

export const Header = () => {
  return (
    <header className="container">
      <nav className="nav">
        <div>
          <Link href="/" className="nav-el">
            Home
          </Link>
          <Link href="/products" className="nav-el">
            Products
          </Link>
          <Link href="/todos" className="nav-el">
            Todos
          </Link>
          <Link href="/quotes" className="nav-el">
            Quotes
          </Link>
          <Link href="/blog">Blog</Link>
        </div>
        <Suspense fallback={<Loader text="Loading user..." />}>
          <User />
        </Suspense>
      </nav>
    </header>
  );
};

const User = () => {
  const data = use(fetchWithDelay('https://dummyjson.com/users/1'));

  return (
    <div className="user">
      <div>
        {data.firstName} {data.lastName}
      </div>
      <Image src={data.image} alt="profile-image" width={50} height={50} />
    </div>
  );
};
