const About = () => {
  return (
    <main className='About'>
      <h2>About Project.</h2>
      <p>
        This is a fairly simple react project. It is build using react implementing react
        router dom that helps us to build single page application. Unfortunately all the
        blog data used in the project is hard coded and not coming from any backend. You
        can add and delete blog posts, but the changes are not going to persist. It will
        go back to initial state as the app reloads.
      </p>
      <br />
      <p className='ending-message'>Hoping to connect it to some backend one day...</p>
    </main>
  );
};

export default About;
