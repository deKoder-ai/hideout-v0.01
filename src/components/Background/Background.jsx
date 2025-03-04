import { useAppContext } from '../../AppContext';
import css from './Background.module.css';

let bcgClass;
const Background = ({ children }) => {
  const { isMobile } = useAppContext();
  if (isMobile) {
    bcgClass = css.background;
  } else {
    bcgClass = `${css.background} ${css.desktop}`;
  }
  return <div className={bcgClass}>{children}</div>;
};

export default Background;
