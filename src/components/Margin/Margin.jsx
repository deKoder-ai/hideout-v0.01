import cocktail from '../../assets/img/cocktail-glass.svg';
import css from './Margin.module.css';

const Margin = () => {
  return (
    <div className={css.margin}>
      <img src={cocktail} alt='' className={css.marginGlass} />
    </div>
  );
};

export default Margin;
