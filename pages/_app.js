import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Layout from '../components/Layout';
import '../styles/globals.css'
import Nprogress from 'nprogress'
import Head from 'next/head'
import Router from 'next/router'

//Bar de progression entre les pages
Router.events.on("routeChangeStart", () => {
  Nprogress.start();
});

Router.events.on("routeChangeComplete", () => {
  Nprogress.done()
});
Router.events.on("routeChangeError", () => {
Nprogress.done()
});

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
