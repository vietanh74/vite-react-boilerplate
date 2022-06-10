import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/vi_VN';

import store from './store/configureStore';
import App from './App';

import 'antd/dist/antd.less';
import './assets/styles/app.scss';

const Application = (
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={locale}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('__app')!);
root.render(Application);
