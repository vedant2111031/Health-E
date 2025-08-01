

export const pushPageLoadData = ({ pageName, pageUrl, user = {} }) => {
  window.digitalData = window.digitalData || {};
  window.digitalData.page = {
    pageName,
    pageUrl,
    pageType: "content", // Or dynamic like "home", "contact", etc.
    referrer: document.referrer || "",
    timestamp: new Date().toISOString(),
  };

  if (user && user.id) {
    window.digitalData.user = {
      id: user.id,
      email: user.email,
      name: user.name,
      loginStatus: "logged-in",
    };
  } else {
    window.digitalData.user = {
      loginStatus: "guest",
    };
  }

  console.log("[DataLayer] Page Load Data:", window.digitalData);
};
