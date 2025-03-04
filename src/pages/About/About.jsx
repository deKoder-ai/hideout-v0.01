import { useAppContext } from '../../AppContext';
import Logo from '../../assets/img/hideoutCut.png';
import AboutEng from './AboutEng.jsx';
import AboutThai from './AboutThai.jsx';
import Glass from '../../assets/img/cocktail-glass.svg';
import usePageTitle from '../../scripts/usePageTitle';
import css from './About.module.css';

const About = () => {
  usePageTitle('About');
  const { language } = useAppContext();
  return (
    <>
      <div className='flexCenter'>
        <img src={Logo} alt='' className={css.logo} />
      </div>
      {language === 'english' && <AboutEng />}
      {language === 'thai' && <AboutThai />}
      <div className='flexCenter'>
        <img src={Glass} alt='' className={css.glass} />
      </div>
    </>
  );
};

export default About;
