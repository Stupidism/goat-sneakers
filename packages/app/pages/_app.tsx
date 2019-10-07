import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import GlobalStyles from '~/styles/GlobalStyles';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Shop All Sneakers | GOAT</title>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    );
  }
}

MyApp.getInitialProps = async function getInitialProps ({ Component, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}

export default MyApp;
