import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { configure } from 'axios-hooks'
import LRU from 'lru-cache'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '~/styles/GlobalStyles';
import theme from '~/styles/theme';
import createAxios from '~/api/createAxios';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    // Configure axios instance
    // Skip SSR support for this for now.
    const axios = createAxios();

    const cache = new LRU({ max: 10 });

    configure({ axios, cache });
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
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
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
