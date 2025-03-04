import css from './Home.module.css';
import usePageTitle from '../../scripts/usePageTitle.jsx';
import Slideshow from '../Slideshow/Slideshow.jsx';

const Home = () => {
  usePageTitle('Home');
  return (
    <div className={css.cont}>
      <Slideshow />
    </div>
  );
};

export default Home;
