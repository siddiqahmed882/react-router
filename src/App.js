import Header from './Header.js';
import Nav from './Nav';
import Footer from './Footer';

import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';

import { posts as defaultPosts } from './data';

import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

function App() {
  const [posts, setPosts] = useState(defaultPosts);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const history = useHistory();

  useEffect(() => {
    const filteredPosts = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.trim().toLowerCase()) ||
        post.title.toLowerCase().includes(search.trim().toLowerCase())
    );
    setSearchResults(filteredPosts.reverse());
  }, [posts, search]);

  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id.toString() !== id);
    setPosts(postsList);
    history.push('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'mmmm dd yyyy pp');
    const newPostObj = { id, title: postTitle, datetime, body: postBody };
    const postsList = [...posts, newPostObj];
    setPosts(postsList);
    setPostTitle('');
    setPostBody('');
    history.push('/');
  };

  return (
    <div className='App'>
      <Header title='ReactJS Blog' />
      <Nav search={search} setSearch={setSearch} />

      <Switch>
        <Route exact path='/'>
          <Home posts={searchResults} />
        </Route>

        <Route exact path='/post'>
          <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />
        </Route>

        <Route path='/post/:id'>
          <PostPage posts={posts} handleDelete={handleDelete} />
        </Route>

        {/* If you are not going to pass props you can do like this */}
        <Route path='/about' component={About} />
        <Route path='*' component={Missing} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
