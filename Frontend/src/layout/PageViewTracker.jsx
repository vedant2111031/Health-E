// src/components/Analytics/PageViewTracker.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "web.webPageDetails.pageView",
      web: {
        webPageDetails: {
          pageName: document.title,
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
