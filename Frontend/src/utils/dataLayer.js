export const pushPageDataToDataLayer = ({ pageName, pageUrl, user }) => {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: 'page_view',
    page: {
      name: pageName,
      url: pageUrl,
    },
    user: user
      ? {
          id: user.id,
          email: user.email,
          isLoggedIn: true,
        }
      : {
          isLoggedIn: false,
        },
    timestamp: new Date().toISOString(),
  });
};
