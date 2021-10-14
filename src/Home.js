import Feeds from './Feeds';

const Home = ({ posts }) => {
  return (
    <main className='Home'>
      {posts.length ? (
        <Feeds posts={posts} />
      ) : (
        <p style={{ marginTop: '2rem' }}>No posts to display...</p>
      )}
    </main>
  );
};

export default Home;
