// config.js - Konfigurasi API
// Ganti API_URL dengan URL Web App dari Google Apps Script

const CONFIG = {
  // Ganti dengan URL Web App Anda setelah deploy
  // Format: https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
  API_URL: 'https://script.google.com/macros/s/AKfycbxmuUfEwm5tNhBw4x8711fl2Ou3PkCRBnsm9RihYdI9GXrwcvD4x8ZKOD1GhRtqAvHC/exec',
  
  // API Actions
  ACTIONS: {
    GET_PASSWORDS: 'getPasswords'
  },
  
  // App Settings
  APP: {
    TITLE: 'Password Manager',
    SUBTITLE: 'Klik tombol untuk copy username atau password',
    FOOTER_TEXT: 'Powered by',
    FOOTER_BRAND: 'CA Digital BIkalbar'
  },
  
  // Retry settings untuk API calls
  RETRY: {
    MAX_ATTEMPTS: 3,
    DELAY_MS: 1000
  }
};

// Fungsi helper untuk get API URL
function getApiUrl(action) {
  return `${CONFIG.API_URL}?action=${action}`;
}