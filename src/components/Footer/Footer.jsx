import css from './Footer.module.css';
import mob from './FooterMobile.module.css';

const fbUrl = 'https://www.facebook.com/people/Hideout-ARI/61553971927398/';
const handleFbClick = () => {
  window.open(fbUrl, '_blank').focus();
};
let thaiClass, ukClass, flag;

const Footer = ({ props }) => {
  if (props.isMobile) {
    if (props.language === 'thai') {
      flag = mob.uk;
    } else {
      flag = mob.thai;
    }
    const handleLanguageClick = () => {
      if (props.language === 'thai') {
        props.setLanguage('english');
        flag = mob.thai;
      } else {
        props.setLanguage('thai');
        flag = mob.uk;
      }
    };
    return (
      <>
        <footer className={mob.footer}>
          <div className='flexCenter'>
            <p className={mob.logo}>HIDEOUT</p>
          </div>
          <button
            className={`${mob.langButton} ${flag}`}
            onClick={handleLanguageClick}
          ></button>
          <button className={mob.fbButton} onClick={handleFbClick}></button>
        </footer>
      </>
    );
  } else {
    if (props.language === 'english') {
      thaiClass = `${css.thaiBtn}`;
      ukClass = `${css.ukBtn}  ${css.ukSelected}`;
    } else {
      thaiClass = `${css.thaiBtn} ${css.thaiSelected}`;
      ukClass = css.ukBtn;
    }

    const handleLanguageSwitch = () => {
      if (props.language === 'english') {
        props.setLanguage('thai');
        thaiClass = `${css.thaiBtn} ${css.thaiSelected}`;
        ukClass = css.ukBtn;
      } else {
        props.setLanguage('english');
        thaiClass = css.thaiBtn;
        ukClass = `${css.ukBtn} ${css.ukSelected}`;
      }
    };
    return (
      <>
        <footer className={css.footer}>
          <div className={css.left}>
            <span className={css.copyright}>©</span> HIDEOUT 2024
          </div>
          <div className={css.langRadio}>
            <div className={css.langRadioIn}>
              <button className={ukClass} onClick={handleLanguageSwitch}></button>
              <button className={thaiClass} onClick={handleLanguageSwitch}></button>
            </div>
          </div>
          <button className={css.fbButton} onClick={handleFbClick}></button>
        </footer>
      </>
    );
  }
};

export default Footer;
