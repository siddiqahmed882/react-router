import { useParams, Link } from 'react-router-dom';

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <main className='PostPage'>
      <article className='post'>
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <button className='btn' onClick={() => handleDelete(id)}>
              Delete Post
            </button>
          </>
        ) : (
          <>
            <p>Post can not be found</p>
            <p>Well that's disappointing</p>
            <Link to='/'>Check out other articles...</Link>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
