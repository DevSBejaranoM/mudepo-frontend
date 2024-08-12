"use client";

import { useEffect } from "react";

const ClientSideScript: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pdcc.gdpr.es/pdcc.min.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = () => {
      if (window.PDCookieConsent) {
        window.PDCookieConsent.config({
          brand: {
            dev: true,
            name: "DATA5",
            url: "https://data5.es",
            websiteOwner: "",
          },
          showRejectButton: true,
          cookiePolicyLink: "https://mudepo-frontend.vercel.app/politica-de-cookies",
          hideModalIn: ["https://mudepo-frontend.vercel.app/politica-de-cookies",],
          styles: {
            primaryButton: {
              bgColor: "#EEEEEE",
              txtColor: "#333333",
            },
            secondaryButton: {
              bgColor: "#EEEEEE",
              txtColor: "#333333",
            },
            rejectButton: {
              bgColor: "#EEEEEE",
              txtColor: "#333333",
            },
          },
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ClientSideScript;
