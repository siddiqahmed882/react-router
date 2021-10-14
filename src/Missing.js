import { Link } from 'react-router-dom';
const Missing = () => {
  return (
    <main className='Missing'>
      <p>Page can not be found</p>
      <p>Well that's disappointing</p>
      <Link to='/'>Check out other articles...</Link>
    </main>
  );
};

export default Missing;
