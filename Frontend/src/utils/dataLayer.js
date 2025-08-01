// src/utils/datalayer.js
export const pushPageLoadData = ({ pageName, user }) => {
  const data = {
    event: 'pageLoad',
    page: {
      name: pageName,
      path: window.location.pathname,
      title: document.title,
      url: window.location.href,
    },
    user: user || null,
    timestamp: new Date().toISOString(),
    device: {
      width: window.innerWidth,
      height: window.innerHeight,
      userAgent: navigator.userAgent,
    },
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);

  console.log('[DataLayer] Page Load Pushed:', data);
};
