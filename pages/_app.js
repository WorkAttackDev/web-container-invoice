import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="bg-workattack flex justify-center">
        <a className="text-white" href="/">
          WorkAttack
        </a>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
