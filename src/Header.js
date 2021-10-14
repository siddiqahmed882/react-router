const Header = ({ title }) => {
  return (
    <header className='Header'>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: 'Title of the page',
};

export default Header;
