"use client";

import { useEffect } from "react";

const ClientSideScript: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if (window.PDCookieConsent) {
        window.PDCookieConsent.config({
          defaultLang: "es",
          brand: {
            dev: true,
            name: "DATA5",
            url: "https://data5.es",
            websiteOwner: "",
          },
          showRejectButton: true,
          cookiePolicyLink:
            "https://mudepo-frontend.vercel.app/politica-de-cookies",
          hideModalIn: [
            "https://mudepo-frontend.vercel.app/politica-de-cookies",
            "https://mudepo-frontend.vercel.app/politica-de-privacidad",
            "https://mudepo-frontend.vercel.app/aviso-legal",
          ],
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
        // window.PDCookieConsent.blockList([
        //   {
        //     domain: "google.com/recaptcha",
        //     name: "Google reCaptcha",
        //     report: true,
        //   },
        //   {
        //     contain: "gstatic",
        //     name: "Nombre Grupo",
        //     actived: true,
        //     editable: false,
        //     visible: false,
        //   },
        // ]);
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
