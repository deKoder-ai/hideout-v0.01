import { useState } from 'react';
import css from './ClickCounter.module.css';

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <button className={css.button} onClick={() => setCount((count) => count + 1)}>
      Clicks: {count}
    </button>
  );
};

export default ClickCounter;
