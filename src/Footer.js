const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className='Footer'>
      <p>Copyright &copy; {currYear}</p>
    </footer>
  );
};

export default Footer;
