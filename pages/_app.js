import '../styles/globals.css';
import { Header, Footer } from '../components/';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <script src="https://cdn.tailwindcss.com"></script>;
      <div>
        <Header />
      </div>
      <Component {...pageProps} />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
