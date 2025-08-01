// App.jsx
import './App.css';
import Layout from './layout/Layout';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pushPageLoadData } from './utils/datalayer';

function App() {
  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || null;
    const pageName = location.pathname === '/' ? 'Home' : location.pathname.replace('/', '');
    pushPageLoadData({ pageName, user });
  }, [location]);

  return <Layout />;
}

export default App;
