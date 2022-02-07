/* eslint-disable react/prop-types */
import '../styles/index.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
