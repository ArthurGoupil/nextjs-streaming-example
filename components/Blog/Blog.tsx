import { Suspense, useState, useTransition } from 'react';
import { Loader } from '../Loader/Loader';
import './blog.css';
import { Comments } from './Comments/Comments';
import { Posts } from './Posts/Posts';

export const Blog = () => {
  const [tab, setTab] = useState<'posts' | 'comments'>('posts');
  const [, startTransition] = useTransition();

  const selectTab = (tab: 'posts' | 'comments') => {
    // startTransition(() => {
    setTab(tab);
    // });
  };

  return (
    <>
      <div>
        <button className="tab-button" onClick={() => selectTab('posts')}>
          Posts
        </button>
        <button onClick={() => selectTab('comments')}>Comments</button>
      </div>

      <Suspense fallback={<Loader text={`Loading`} />}>
        {tab === 'posts' ? <Posts /> : <Comments />}
      </Suspense>
    </>
  );
};
