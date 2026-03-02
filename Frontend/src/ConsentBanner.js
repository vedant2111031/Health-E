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
    <div className="consent-overlay">
      <div className="consent-modal">

        {!showSettings ? (
          <>
            <h3>We value your privacy</h3>
            <p>
              We use cookies to enhance your experience.
            </p>

            <div className="consent-buttons">
              <button onClick={acceptAll}>Accept All</button>
              <button onClick={rejectAll}>Reject All</button>
              <button onClick={() => setShowSettings(true)}>
                Customize
              </button>
            </div>
          </>
        ) : (
          <>
            <h3>Privacy Preferences</h3>

            <label>
              <input type="checkbox" checked disabled />
              Strictly Necessary (Always Active)
            </label>

            <label>
              <input
                type="checkbox"
                checked={consent.performance}
                onChange={() =>
                  setConsent({ ...consent, performance: !consent.performance })
                }
              />
              Performance Cookies
            </label>

            <label>
              <input
                type="checkbox"
                checked={consent.functional}
                onChange={() =>
                  setConsent({ ...consent, functional: !consent.functional })
                }
              />
              Functional Cookies
            </label>

            <label>
              <input
                type="checkbox"
                checked={consent.targeting}
                onChange={() =>
                  setConsent({ ...consent, targeting: !consent.targeting })
                }
              />
              Targeting Cookies
            </label>

            <div className="consent-buttons">
              <button onClick={savePreferences}>Save</button>
              <button onClick={() => setShowSettings(false)}>Cancel</button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
