import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './components';
import styles from './styles.module.scss';

const DefaultLayout = () => {
  useEffect(() => {
    console.log('render');
  }, []);

  return (
    <div id={styles.__main}>
      <div id={styles.__header}>
        <Header />
      </div>
      <div id={styles.__content}>
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
