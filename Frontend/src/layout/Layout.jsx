// src/layout/Layout.jsx

import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'; // If you're using Redux
import { pushPageDataToDataLayer } from '../utils/dataLayer';

const Layout = () => {
  const location = useLocation();

  // Get user details from Redux or Context (replace with your own logic)
  const user = useSelector((state) => state.auth?.user || null);

  useEffect(() => {
    pushPageDataToDataLayer({
      pathname: location.pathname,
      title: document.title,
      user: user,
    });
  }, [location]);

  return (
    <>
    <Header/>
    <main>
      <Routers/>
      <Chatbot/>
    </main>
    <Footer/>
    </>
  )
};

export default Layout;
