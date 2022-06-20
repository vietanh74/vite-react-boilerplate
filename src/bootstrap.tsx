import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/vi_VN';

import store from './store/configureStore';

import 'antd/dist/antd.less';
import './assets/styles/app.scss';

export const bootstrap = (component: JSX.Element, element: string) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const root = createRoot(document.getElementById(element)!);

  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider locale={locale}>{component}</ConfigProvider>
      </BrowserRouter>
    </Provider>
  );
};
