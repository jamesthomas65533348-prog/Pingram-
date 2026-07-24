// Pingr - Global Config
// This is the ONLY file that holds your Supabase keys
// All pages (signup.html, login.html, etc) will import from here

const PINGR_CONFIG = {
  SUPABASE_URL: "https://porntvgraxgqxpwnuymy.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvcm50dmdyYXhncXhwd251eW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1NTE4OTAsImV4cCI6MjEwMDEyNzg5MH0.rio52V3TA2cRUYB0C2nsYnR5f33IJsGMN9ZYoZf7jEA",
  
  // Edge Functions - keep names consistent so we don't cause errors later
  FUNCTIONS: {
    SEND_OTP: "send-pingr-otp",
    VERIFY_OTP: "verify-pingr-otp"
  },

  // App Settings
  APP_NAME: "Pingr",
  OTP_EXPIRY_MINUTES: 3,
  SESSION_DAYS: 30
};

// Make it available globally for all single-file HTML pages
window.PINGR_CONFIG = PINGR_CONFIG;