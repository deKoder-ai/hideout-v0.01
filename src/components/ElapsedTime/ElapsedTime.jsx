import { useEffect, useState } from 'react';
import css from './ElapsedTime.module.css';

const ElapsedTime = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return <p className={css.para}>{counter} seconds have passed</p>;
};

export default ElapsedTime;
