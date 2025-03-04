import css from './FindUsThai.module.css';

const FindUsThai = ({ handleDirectionsClick }) => {
  return (
    <>
      <div className='flexCenter'>
        <button className={css.getDirections} onClick={handleDirectionsClick}>
          รับทิศทาง
        </button>
      </div>
      <div>
        <p className={css.textCenter}>
          ชั้น 5{' '}
          <a href='https://www.facebook.com/thehubphaholari'>
            <strong>@เดอะฮับ</strong>
          </a>
        </p>
        <p className={css.textCenter}>466/1-39 ถนนพหลโยธิน</p>
        <p className={css.textCenter}>อารีย์ เขตพญาไท</p>
        <p className={css.textCenter}>กทม 10400</p>
        <br />
        <br />
        <p className={css.textCenter}>โทร. (+66) 085 085 1568</p>
        <p className={css.textCenter}>
          อีเมล:{' '}
          <a href='mailto:hideout.ari@gmail.com'>
            <strong>hideout.ari@gmail.com</strong>
          </a>
        </p>
        <p className={css.textCenter}>
          เฟสบุ๊ค:{' '}
          <a href='https://www.facebook.com/people/Hideout-ARI/61553971927398/'>
            <strong>Hideout Ari</strong>
          </a>
        </p>
      </div>
    </>
  );
};

export default FindUsThai;
