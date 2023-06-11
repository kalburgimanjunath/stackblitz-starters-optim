import '../styles/globals.css';
import Header from '../components/Header';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <script src="https://cdn.tailwindcss.com"></script>;
      <div>
        <Header />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
