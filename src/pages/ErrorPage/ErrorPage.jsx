import { Link } from 'react-router-dom';
import Background from '../../components/Background/Background.jsx';
import Container from '../../components/Container/Container.jsx';
import css from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <>
      <div className={css.bcg}>
        <Container>
          <h1 className={css.fof}>404 - Page not found</h1>
          <h1 className={css.lost}>
            It appears you have become lost in the forest, friend!
          </h1>
          <Link to='/' className={css.return}>
            Fear not, the Hideout is nearby. You can return by clicking here
          </Link>
        </Container>
      </div>
    </>
  );
};

export default ErrorPage;
