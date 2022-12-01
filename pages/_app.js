import { App } from 'konsta/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    // Wrap our app with App component
    <App theme="material">
      <Component {...pageProps} />
    </App>
  );
}

export default MyApp;
