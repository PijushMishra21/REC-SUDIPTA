import  { useState, useEffect } from 'react';
import './InfiniteScroll.css';

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Simulate delay for demonstration purpose
        await new Promise(resolve => setTimeout(resolve, 500));
        setPosts(prevPosts => [...prevPosts, ...data]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, [page]);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <h1>Infinite Scroll</h1>
      <ul className="post-list">
        {posts.map((post, index) => (
          <li key={post.id} style={{ transitionDelay: `${index * 0.1}s` }} className={loading && index >= posts.length - 1 ? "post-item loading" : "post-item"}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
