import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../../scripts/usePageTitle.jsx';
import navBarDropdownLinks from '../../data/navBarDropdownLinks.js';
import css from './NavBar.module.css';

const NavBar = ({ props }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const ddLinks = navBarDropdownLinks.map((link) => (
    <Link
      to={link.address}
      onClick={() => {
        setMenuOpen(false);
      }}
      key={link.id}
      className={css.dropdownLink}
    >
      {link.text}
    </Link>
  ));

  const handleOpenDropdown = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  // Close menu - click outside / escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(`.${css.dropdownMenu}`) &&
        !event.target.closest(`.${css.dropdownButton}`)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  let navClass, homeClass;
  if (props.isMobile) {
    navClass = css.navBarMobi;
    homeClass = css.homeMobi;
  } else {
    navClass = css.navBar;
    homeClass = css.home;
  }
  const handleToggleLanguage = () => {
    props.toggleLanguage();
    setMenuOpen(false);
  };
  return (
    <nav className={navClass}>
      <Link to={navBarDropdownLinks[0].address} className={homeClass}>
        HIDEOUT
      </Link>
      <div></div>
      {!props.isMobile && (
        <Link to={navBarDropdownLinks[1].address} className={css.navBarLink}>
          {navBarDropdownLinks[1].text}
        </Link>
      )}
      {!props.isMobile && (
        <Link to={navBarDropdownLinks[2].address} className={css.navBarLink}>
          {navBarDropdownLinks[2].text}
        </Link>
      )}
      {!props.isMobile && (
        <Link to={navBarDropdownLinks[3].address} className={css.navBarLink}>
          {navBarDropdownLinks[3].text}
        </Link>
      )}
      <button className={css.dropdownButton} onClick={handleOpenDropdown}></button>
      {menuOpen && (
        <menu className={css.dropdownMenu}>
          {ddLinks}
          <button className={css.toggleLanguage} onClick={handleToggleLanguage}>
            เปลี่ยนภาษา
          </button>
        </menu>
      )}
    </nav>
  );
};

export default NavBar;
