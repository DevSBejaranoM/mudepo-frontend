interface PDCookieConsentConfig {
  config(options: {
    defaultLang: string;
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
  blockList(
    list: {
      domain?: string;
      name?: string;
      report?: boolean;
      contain?: string;
      actived?: boolean;
      editable?: boolean;
      visible?: boolean;
    }[]
  ): void;
}

interface Window {
  PDCookieConsent?: PDCookieConsentConfig;
}
