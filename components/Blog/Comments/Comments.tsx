import { use, useEffect, useState } from 'react';
import { fetchWithDelay } from '../../../utils/fetch';
import { Loader } from '../../Loader/Loader';
import './comments.css';

export const Comments = () => {
  const [comments, setComments] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchWithDelay('https://dummyjson.com/comments');
      setComments(data.comments);
    };

    fetchData();
  }, []);

  return (
    <div>
      {comments ? (
        comments.map((comment: any) => (
          <div key={comment.id}>
            <div className="comment-title">{comment.user.username}</div>
            <div className="comment-body">{comment.body}</div>
          </div>
        ))
      ) : (
        <Loader text="Loading comments..." />
      )}
    </div>
  );
};
