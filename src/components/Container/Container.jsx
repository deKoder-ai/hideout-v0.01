import css from './Container.module.css';

const Container = ({ children }) => {
  console.log(css);
  return <div className={css.container}>{children}</div>;
};

export default Container;
