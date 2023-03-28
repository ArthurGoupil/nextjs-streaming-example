import { use, useEffect, useState } from 'react';
import { fetchWithDelay } from '../../../utils/fetch';
import { Loader } from '../../Loader/Loader';
import './posts.css';

export const Posts = () => {
  const [posts, setPosts] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWithDelay('https://dummyjson.com/posts');
      setPosts(data.posts);
    };

    fetchData();
  }, []);

  return (
    <div>
      {posts ? (
        posts.map((post: any) => (
          <div key={post.id}>
            <div className="post-title">{post.title}</div>
            <div className="post-body">{post.body}</div>
          </div>
        ))
      ) : (
        <Loader text="Loading posts..." />
      )}
    </div>
  );
};
