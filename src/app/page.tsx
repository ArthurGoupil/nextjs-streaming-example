import { Inter } from 'next/font/google';
import Image from 'next/image';
import HomeGif from '../../public/home.gif';

export default function Home() {
  return (
    <>
      <h1>Hey ! Welcome to my new website xD</h1>
      <h1>And happy new year 2002 !</h1>
      <Image src={HomeGif} alt="gif" width={200} height={200} />
    </>
  );
}
