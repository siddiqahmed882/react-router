import { Link } from 'react-router-dom';
const Nav = ({ search, setSearch }) => {
  const path = window.location.pathname;
  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search Posts</label>
        <input
          id='search'
          type='text'
          placeholder='Search Posts'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <li className={path === '/' ? 'active' : null}>
          <Link to='/'>Home</Link>
        </li>
        <li className={path === '/post' ? 'active' : null}>
          <Link to='/post'>Post</Link>
        </li>
        <li className={path === '/about' ? 'active' : null}>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
