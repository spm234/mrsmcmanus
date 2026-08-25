// Fill this in with your own Firebase project's config to turn on cross-device
// sync. Until you do, the app works exactly as it does today — everything
// stays on this device only, nothing changes.
//
// Where to get these values, and how to set the project up in the first
// place, is in the "Sync setup" section of README.md.
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// True once the placeholder values above have actually been replaced.
export const isFirebaseConfigured = () =>
  Boolean(firebaseConfig.apiKey) && !firebaseConfig.apiKey.startsWith("YOUR_");
