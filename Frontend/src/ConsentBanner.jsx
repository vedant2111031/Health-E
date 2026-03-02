import { useEffect, useState } from "react";

const CONSENT_KEY = "site_consent";

export default function ConsentBanner() {

  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [consent, setConsent] = useState({
    performance: false,
    functional: false,
    targeting: false
  });

  // 🔹 Build OneTrust-style variable
  const buildActiveGroups = (consentData) => {
    let groups = ["C0001"]; // Necessary always ON

    if (consentData.performance) groups.push("C0002");
    if (consentData.functional) groups.push("C0003");
    if (consentData.targeting) groups.push("C0004");

    window.OptanonActiveGroups = "," + groups.join(",") + ",";
  };

  // 🔹 Initialize on load
  useEffect(() => {

    const stored = localStorage.getItem(CONSENT_KEY);

    if (!stored) {
      // First visit → show banner
      buildActiveGroups({
        performance: false,
        functional: false,
        targeting: false
      });
      setShowBanner(true);
    } else {
      const parsed = JSON.parse(stored);
      setConsent(parsed);
      buildActiveGroups(parsed);
    }

  }, []);

  // 🔹 Save Consent
  const saveConsent = (updatedConsent) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(updatedConsent));
    setConsent(updatedConsent);
    buildActiveGroups(updatedConsent);
    setShowBanner(false);
    setShowSettings(false);
  };

  // 🔹 Accept All
  const acceptAll = () => {
    saveConsent({
      performance: true,
      functional: true,
      targeting: true
    });
  };

  // 🔹 Reject All
  const rejectAll = () => {
    saveConsent({
      performance: false,
      functional: false,
      targeting: false
    });
  };

  // 🔹 Save Custom
  const savePreferences = () => {
    saveConsent(consent);
  };

  // 🔹 Always expose variable (even before React runs)
  if (!window.OptanonActiveGroups) {
    window.OptanonActiveGroups = ",C0001,";
  }

  if (!showBanner && !showSettings) return null;

  return (
  <div className="consent-backdrop">
    <div className="consent-modal">

      {!showSettings ? (
        <>
          <h2>We value your privacy</h2>
          <p>
            We use cookies to enhance your experience and analyze traffic.
            You can choose your preferences.
          </p>

          <div className="consent-actions">
            <button className="primary" onClick={acceptAll}>
              Accept All
            </button>

            <button className="secondary" onClick={rejectAll}>
              Reject All
            </button>

            <button className="link" onClick={() => setShowSettings(true)}>
              Customize Preferences
            </button>
          </div>
        </>
      ) : (
        <>
          <h2>Privacy Preferences</h2>

          <div className="consent-option">
            <input type="checkbox" checked disabled />
            <span>
              <strong>Strictly Necessary</strong>
              <small>Always Active</small>
            </span>
          </div>

          <div className="consent-option">
            <input
              type="checkbox"
              checked={consent.performance}
              onChange={() =>
                setConsent({ ...consent, performance: !consent.performance })
              }
            />
            <span>Performance Cookies</span>
          </div>

          <div className="consent-option">
            <input
              type="checkbox"
              checked={consent.functional}
              onChange={() =>
                setConsent({ ...consent, functional: !consent.functional })
              }
            />
            <span>Functional Cookies</span>
          </div>

          <div className="consent-option">
            <input
              type="checkbox"
              checked={consent.targeting}
              onChange={() =>
                setConsent({ ...consent, targeting: !consent.targeting })
              }
            />
            <span>Targeting Cookies</span>
          </div>

          <div className="consent-actions">
            <button className="primary" onClick={savePreferences}>
              Save Preferences
            </button>

            <button className="secondary" onClick={() => setShowSettings(false)}>
              Back
            </button>
          </div>
        </>
      )}

    </div>
  </div>
);
