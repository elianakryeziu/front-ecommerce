import React from 'react';
import '../styles/globals.css';
import '../styles/antd.less';
import AppLayout from '../components/Layout';
import { Provider } from 'react-redux';
import store from '../redux/index';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
};

export default MyApp;
