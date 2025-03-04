import { useState } from 'react';
import usePageTitle from '../../scripts/usePageTitle.jsx';
import { thai, snacks, cocktails, beer } from '../../data/menu.js';
import css from './Menu.module.css';

const Menu = () => {
  usePageTitle('Menu');
  const [type, setType] = useState('mains');
  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
  let mainsClass, snacksClass, drinksClass;
  const handleMainsClick = () => {
    setType('mains');
    mainsClass = css.tabSelected;
    snacksClass = css.menuSelector;
    drinksClass = css.menuSelector;
  };
  const handleSnacksClick = () => {
    setType('snacks');
    mainsClass = css.menuSelector;
    snacksClass = css.tabSelected;
    drinksClass = css.menuSelector;
  };
  const handleDrinksClick = () => {
    setType('drinks');
    mainsClass = css.menuSelector;
    snacksClass = css.menuSelector;
    drinksClass = css.tabSelected;
  };
  return (
    <>
      <div className={css.menuSelectors}>
        <button
          className={`${css.mains} ${
            type === 'mains' ? css.tabSelected : css.menuSelector
          }`}
          onClick={handleMainsClick}
        >
          Mains
        </button>
        <button
          className={`${css.snacks} ${
            type === 'snacks' ? css.tabSelected : css.menuSelector
          }`}
          onClick={handleSnacksClick}
        >
          Snacks
        </button>
        <button
          className={`${css.drinks} ${
            type === 'drinks' ? css.tabSelected : css.menuSelector
          }`}
          onClick={handleDrinksClick}
        >
          Drinks
        </button>
      </div>
      <div className={css.menu}>
        {type === 'mains' && (
          <div>
            <h2 className={css.category}>Thai Dishes</h2>
            {thai.map((item) => (
              <div key={item.id} className={css.menuItem}>
                <p className={css.name}>
                  {item.name}{' '}
                  <span className={css.description}>- {item.description}</span>
                </p>
                <p className={css.price}>{item.price}</p>
              </div>
            ))}
          </div>
        )}

        {type === 'snacks' && (
          <div>
            <h2 className={css.category}>Bar Snacks</h2>
            {snacks.map((item) => (
              <div key={item.id} className={css.menuItem}>
                <p className={css.name}>
                  {item.name}{' '}
                  <span className={css.description}>- {item.description}</span>
                </p>
                <p className={css.price}>{item.price}</p>
              </div>
            ))}
          </div>
        )}

        {type === 'drinks' && (
          <div>
            <h2 className={css.category}>Cocktails</h2>
            {cocktails.map((item) => (
              <div key={item.id} className={css.menuItem}>
                <p className={css.name}>
                  {item.name}{' '}
                  <span className={css.description}>- {item.description}</span>
                </p>
                <p className={css.price}>{item.price}</p>
              </div>
            ))}
            <h2 className={css.category}>Beer</h2>
            {beer.map((item) => (
              <div key={item.id} className={css.menuItem}>
                <p className={css.name}>
                  {item.name}{' '}
                  <span className={css.description}>- {item.description}</span>
                </p>
                <p className={css.price}>{item.price}</p>
              </div>
            ))}
          </div>
        )}

        <div className={css.spacer}>
          <button className={css.top} onClick={scrollToTop}>
            TOP
          </button>
        </div>
        <div className={css.bottom}></div>
      </div>
    </>
  );
};

export default Menu;
