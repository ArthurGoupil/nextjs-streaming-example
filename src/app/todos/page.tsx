'use client';
import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export default function TodosPage() {
  const [, setValueA] = useState(false);
  const [, setValueB] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      flushSync(() => {
        setValueA(true);
      });
      flushSync(() => {
        setValueB(true);
      });
    }, 100);
  }, []);

  let numberOfRendersRef = useRef(0);

  numberOfRendersRef.current++;

  return (
    <>
      <h1>Without automatic batching</h1>
      <div>Number of renders: {numberOfRendersRef.current}</div>
    </>
  );
}
