import { useAppContext } from '../../AppContext';
import usePageTitle from '../../scripts/usePageTitle.jsx';
import Map from './Map.jsx';
import FindUsEng from './FindUsEng.jsx';
import FindUsThai from './FindUsThai.jsx';
import css from './FindUs.module.css';

const gMapsUrl = 'https://maps.app.goo.gl/wyWQhVBCnvDWovod8';
const handleDirectionsClick = () => {
  window.open(gMapsUrl, '_blank').focus();
};

const FindUs = () => {
  usePageTitle('Find Us');
  const { language } = useAppContext();
  return (
    <>
      <h2 className={css.heading}>HIDEOUT ARI - BAR & RESTAURANT</h2>
      <div className='flexCenter'>
        <Map />
      </div>
      {language === 'english' && (
        <FindUsEng handleDirectionsClick={handleDirectionsClick} />
      )}
      {language === 'thai' && (
        <FindUsThai handleDirectionsClick={handleDirectionsClick} />
      )}
      <div className={css.spacer}></div>
    </>
  );
};

export default FindUs;
