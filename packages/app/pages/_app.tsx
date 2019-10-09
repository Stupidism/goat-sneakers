import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { configure } from 'axios-hooks'
import LRU from 'lru-cache'
import Axios from 'axios'

import GlobalStyles from '~/styles/GlobalStyles';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    // Configure axios instance
    // Skip SSR support for this for now.
    const axios = Axios.create({
      baseURL: process.env.NODE_ENV === 'production' 
        ? '//my-json-server.typicode.com/stupidism/goat-sneakers' 
        : 'http://localhost:5000',
    });

    const cache = new LRU({ max: 10 })

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
