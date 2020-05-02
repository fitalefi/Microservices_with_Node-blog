import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map(({ content, id }) => {
    return <li key={id}>{content}</li>;
  });
  return <ul>{renderedComments}</ul>;
};
