import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../pages/Home/Home.jsx';
import About from '../pages/About/About.jsx';
import Menu from '../pages/Menu/Menu.jsx';
import FindUs from '../pages/FindUs/FindUs.jsx';
// import Events from '../pages/Events/Events.jsx';
// import News from '../pages/News/News.jsx';
// import Contact from '../pages/Contact/Contact.jsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App.jsx stays persistent
    errorElement: <ErrorPage />, // Full-page error replacement
    children: [
      { index: true, element: <Home /> }, // Redirect "/" to "/home"
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'menu', element: <Menu /> },
      { path: 'find-us', element: <FindUs /> },
      // { path: 'events', element: <Events /> },
      // { path: 'news', element: <News /> },
      // { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default routes;
