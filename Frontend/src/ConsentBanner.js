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

  const buildActiveGroups = (consent) => {
    let groups = ["C0001"]; // strictly necessary always

    if (consent.performance) groups.push("C0002");
    if (consent.functional) groups.push("C0003");
    if (consent.targeting) groups.push("C0004");

    window.OptanonActiveGroups = "," + groups.join(",") + ",";
  };

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);

    if (!stored) {
      setShowBanner(true);
    } else {
      const parsed = JSON.parse(stored);
      setConsent(parsed);
      buildActiveGroups(parsed);
    }
  }, []);

  const saveConsent = (updatedConsent) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(updatedConsent));
    buildActiveGroups(updatedConsent);
    setShowBanner(false);
    setShowSettings(false);
    window.location.reload();
  };

  const acceptAll = () => {
    saveConsent({
      performance: true,
      functional: true,
      targeting: true
    });
  };

  const rejectAll = () => {
    saveConsent({
      performance: false,
      functional: false,
      targeting: false
    });
  };

  const savePreferences = () => {
    saveConsent(consent);
  };

  if (!showBanner && !showSettings) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>

        {!showSettings ? (
          <>
            <h3>We value your privacy</h3>
            <p>
              We use cookies to enhance your experience.
            </p>

            <div style={styles.buttons}>
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

            <div style={styles.buttons}>
              <button onClick={savePreferences}>
                Save Preferences
              </button>
              <button onClick={() => setShowSettings(false)}>
                Cancel
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    background: "rgba(0,0,0,0.6)",
    zIndex: 9999
  },
  modal: {
    background: "#fff",
    padding: "20px",
    margin: "20px",
    borderRadius: "6px"
  },
  buttons: {
    marginTop: "15px",
    display: "flex",
    gap: "10px"
  }
};
