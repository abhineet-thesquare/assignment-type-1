import React, { useReducer } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import createCache from '@emotion/cache';
import theme from '../src/theme';
import '../styles/index.css';
import '../styles/index.scss';

import { withRouter } from 'next/router';

import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import store from '../src/store';

import ImageDataInterface from '../src/interface/imageData';
import ImageDataContext from '../src/contextApi/context/imageDataContext';
import ImageDataReducer from '../src/contextApi/reducer/imageDataReducer';

export const cache = createCache({ key: 'css', prepend: true });

const MyApp = (props) => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const imageDataArrayDefault: ImageDataInterface[] = [];
  const [imageDataArray, dispatchImageDataArray] = useReducer(
    ImageDataReducer,
    imageDataArrayDefault,
  );

  return (
    <Provider store={store}>
      <CacheProvider value={cache}>
        <ImageDataContext.Provider
          value={{ dispatchImageDataArray, imageDataArray }}
        >
          <Head>
            <title>The Squa.re</title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
            <meta
              content={'Serviced Apartments'}
              name={'description'}
			      />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* <GlobalStyles /> */}
            <Component {...pageProps} />
          </ThemeProvider>
        </ImageDataContext.Provider>
      </CacheProvider>
    </Provider>
  );
};

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(withReduxSaga(withRouter(MyApp)));
