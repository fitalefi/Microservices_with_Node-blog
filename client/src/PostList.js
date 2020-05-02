import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const { data } = await axios.get('http://localhost:4000/posts');
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map(({ id, title }) => {
    return (
      <div
        className='card'
        style={{ width: '30%', marginBottom: '20px' }}
        key={id}
      >
        <div className='card-body'>
          <h3>{title}</h3>
          <CommentList postId={id} />
          <CommentCreate postId={id} />
        </div>
      </div>
    );
  });

  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {renderedPosts}
    </div>
  );
};
