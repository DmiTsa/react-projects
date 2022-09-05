import { useState, useEffect } from 'react';
import Post from './Post';

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
