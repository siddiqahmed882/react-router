const NewPost = ({ handleSubmit, postTitle, setPostTitle, postBody, setPostBody }) => {
  return (
    <main className='NewPost'>
      <h2>Create a new post...</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title:</label>
        <input
          id='postTitle'
          type='text'
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor='postBody'>Post:</label>
        <textarea
          id='postBody'
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <input type='submit' value='Submit' />
      </form>
    </main>
  );
};

export default NewPost;
