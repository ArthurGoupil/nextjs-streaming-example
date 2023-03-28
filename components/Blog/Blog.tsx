import { Suspense, useState, useTransition } from 'react';
import { Loader } from '../Loader/Loader';
import './blog.css';
import { Comments } from './Comments/Comments';
import { Posts } from './Posts/Posts';

export const Blog = () => {
  const [tab, setTab] = useState<'posts' | 'comments'>('posts');
  const [isPending, startTransition] = useTransition();

  const selectTab = (tab: 'posts' | 'comments') => {
    startTransition(() => {
      setTab(tab);
    });
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
        {tab === 'posts' ? (
          <div style={{ opacity: isPending ? 0.8 : 1 }}>
            <Posts />
          </div>
        ) : (
          <div style={{ opacity: isPending ? 0.8 : 1 }}>
            <Comments />
          </div>
        )}
      </Suspense>
    </>
  );
};
