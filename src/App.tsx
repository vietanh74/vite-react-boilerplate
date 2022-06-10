import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';

import { IRootState, setCounter } from '@/store';
import styles from './styles.module.scss';

function App() {
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
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
