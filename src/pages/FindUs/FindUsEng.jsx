import css from './FindUsEng.module.css';

const FindUsEng = ({ handleDirectionsClick }) => {
  return (
    <>
      <div className='flexCenter'>
        <button className={css.getDirections} onClick={handleDirectionsClick}>
          GET DIRECTIONS
        </button>
      </div>
      <div className={css.container}>
        <p className={css.textCenter}>
          5th Floor{' '}
          <a
            href='https://www.facebook.com/thehubphaholari'
            target='_blank'
            rel='noopener noreferrer'
          >
            <strong>@The Hub</strong>
          </a>
        </p>
        <p className={css.textCenter}>466/1-39 Phahon Yothin Road</p>
        <p className={css.textCenter}>Ari, Phaya Thai</p>
        <p className={css.textCenter}>BKK, 10400</p>
        <br />
        <br />
        <p className={css.textCenter}>Phone: (+66) 085 085 1568</p>
        <p className={css.textCenter}>
          Email:{' '}
          <a href='mailto:hideout.ari@gmail.com'>
            <strong>hideout.ari@gmail.com</strong>
          </a>
        </p>
        <p className={css.textCenter}>
          Facebook:{' '}
          <a
            href='https://www.facebook.com/people/Hideout-ARI/61553971927398/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <strong>Hideout Ari</strong>
          </a>
        </p>
      </div>
    </>
  );
};

export default FindUsEng;
