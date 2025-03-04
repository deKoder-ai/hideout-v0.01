import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppProvider } from './AppContext.jsx';
import Background from './components/Background/Background.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import LeftBanner from './components/LeftBanner/LeftBanner.jsx';
import Margin from './components/Margin/Margin.jsx';
import usePageTitle from './scripts/usePageTitle.jsx';
import css from './App.module.css';

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 1025 });
  usePageTitle('Home');
  const [language, setLanguage] = useState('english');
  const toggleLanguage = () => {
    if (language === 'thai') {
      setLanguage('english');
    } else {
      setLanguage('thai');
    }
  };

  const contextValue = { language, toggleLanguage, isMobile };

  return (
    <>
      <AppProvider value={contextValue}>
        <NavBar props={{ language, toggleLanguage, isMobile }} />
        {!isMobile && (
          <div className={css.appGrid}>
            <LeftBanner />
            <Margin />
            <Background>
              <Outlet />
            </Background>
            <Margin />
          </div>
        )}
        {isMobile && (
          <Background>
            <Outlet />
          </Background>
        )}
        <Footer props={{ language, setLanguage, isMobile }} />
      </AppProvider>
    </>
  );
};

export default App;

{
  /* <h1>Hello from the main page of the app!</h1>
        <p>Here are some examples of links to other pages</p>
        <nav>
          <ul>
            <li>
              <Link to='profile'>Profile page</Link>
            </li>
          </ul>
        </nav> */
}
