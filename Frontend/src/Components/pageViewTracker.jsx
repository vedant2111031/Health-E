export const pushPageViewData = (pathname) => {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "web.webpageview",
    web: {
      webPageDetails: {
        pageURL: window.location.href,
        pageName: pathname,
        pageReferrer: document.referrer || "",
      },
    },
  });

  console.log("[DL] Pageview pushed:", pathname);
};
