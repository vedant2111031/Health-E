import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const lastSegment = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : "home";

    const pageName = `Health-E | ${lastSegment}`;

    document.title = pageName; // 👈 Set the title here

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "web.webPageDetails.pageView",
      web: {
        webPageDetails: {
          pageName: pageName,
          pageURL: window.location.href,
          referrer: document.referrer || "direct",
          device: {
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            userAgent: navigator.userAgent
          }
        }
      }
    });
  }, [location]);

  return null;
};

export default PageViewTracker;
