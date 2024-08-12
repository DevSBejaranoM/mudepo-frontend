interface PDCookieConsentConfig {
    config(options: {
      brand: {
        dev: boolean;
        name: string;
        url: string;
        websiteOwner: string;
      };
      showRejectButton: boolean;
      cookiePolicyLink: string;
      hideModalIn: string[];
      styles: {
        primaryButton: {
          bgColor: string;
          txtColor: string;
        };
        secondaryButton: {
          bgColor: string;
          txtColor: string;
        };
        rejectButton: {
          bgColor: string;
          txtColor: string;
        };
      };
    }): void;
  }
  
  interface Window {
    PDCookieConsent?: PDCookieConsentConfig;
  }