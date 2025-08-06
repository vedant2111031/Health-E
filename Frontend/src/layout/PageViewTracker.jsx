import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const lastSegment = pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : "home";

    // Capitalize first letter for browser tab
    const formattedSegment = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
    const titleName = `Health-E | ${formattedSegment}`;
    document.title = titleName;

    // Lowercase for data layer
    const dataLayerPageName = `health-e | ${lastSegment.toLowerCase()}`;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "web.webPageDetails.pageView",
      web: {
        webPageDetails: {
          pageName: dataLayerPageName,
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
