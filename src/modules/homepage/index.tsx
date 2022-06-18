import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import { IRootState, setCounter } from '@/store';
import styles from './styles.module.scss';

const Homepage = () => {
  const counter = useSelector((state: IRootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="p-3 text-center">
        <img src="/favicon.ico" />
        <p className={styles.hello}>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => dispatch(setCounter())}>
            count is: {counter.payload}
          </button>
        </p>
        <Button type="primary">Click me</Button>
        <p className="text-gray-500">
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <Link to="/about">Go to about</Link>
        </p>
      </header>
    </div>
  );
};

export default Homepage;
