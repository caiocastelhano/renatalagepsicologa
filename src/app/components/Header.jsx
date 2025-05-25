"use client";

import { useContext, useState, useRef, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./Header.module.css";

export default function Header() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const translations = {
    PT: {
      name: "RENATA LAGE PSICÓLOGA",
      whatsapp: "Fale comigo no WhatsApp",
    },
    EN: {
      name: "RENATA LAGE PSYCHOLOGIST",
      whatsapp: "Message me on WhatsApp",
    },
    FR: {
      name: "RENATA LAGE PSYCHOLOGUE",
      whatsapp: "Écrivez-moi sur WhatsApp",
    },
    ES: {
      name: "RENATA LAGE PSICÓLOGA",
      whatsapp: "Escríbeme por WhatsApp",
    },
  };

  const t = translations[language];
  const phone = "5511941650407";
  const message = {
    PT: "Olá, gostaria de agendar uma consulta.",
    EN: "Hello, I’d like to schedule an appointment.",
    FR: "Bonjour, je voudrais prendre rendez-vous.",
    ES: "Hola, me gustaría agendar uma cita.",
  };

  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
    message[language]
  )}`;

  const handleLanguageChange = (code) => {
    setLanguage(code);
    setShowDropdown(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoGroup}>
        <h1 className={styles.logo}>{t.name}</h1>
        <img
          src="/images/cerebro.png"
          alt=""
          aria-hidden="true"
          className={styles.cerebroBackground}
        />
      </div>

      <div className={styles.rightGroup}>
        {/* Botão do WhatsApp (desktop) */}
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappButton}
        >
          {t.whatsapp}
        </a>

        {/* Ícone WhatsApp (mobile) */}
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappIcon}
          aria-label={t.whatsapp}
        >
          <img src="/icons/whatsapp.png" alt="WhatsApp" width="28" height="28" />
        </a>

        {/* Bandeiras para desktop */}
        <div className={styles.langSwitch}>
          <img
            src="/flags/br.png"
            alt="Português"
            className={`${styles.flag} ${language === "PT" ? styles.active : ""}`}
            onClick={() => setLanguage("PT")}
            width="32"
            height="24"
          />
          <img
            src="/flags/us.png"
            alt="English"
            className={`${styles.flag} ${language === "EN" ? styles.active : ""}`}
            onClick={() => setLanguage("EN")}
            width="32"
            height="24"
          />
          <img
            src="/flags/fr.png"
            alt="Français"
            className={`${styles.flag} ${language === "FR" ? styles.active : ""}`}
            onClick={() => setLanguage("FR")}
            width="32"
            height="24"
          />
          <img
            src="/flags/es.png"
            alt="Español"
            className={`${styles.flag} ${language === "ES" ? styles.active : ""}`}
            onClick={() => setLanguage("ES")}
            width="32"
            height="24"
          />
        </div>

        {/* Globo com dropdown (mobile) */}
        <div className={styles.langSwitchMobile}>
          <button
            className={styles.globeButton}
            onClick={() => setShowDropdown(!showDropdown)}
            aria-label="Selecionar idioma"
            aria-expanded={showDropdown}
            aria-controls="language-menu"
            type="button"
          >
            🌐
          </button>

          {showDropdown && (
            <ul
              className={styles.dropdown}
              id="language-menu"
              role="menu"
              ref={dropdownRef}
            >
              <li role="menuitem" tabIndex={0} onClick={() => handleLanguageChange("PT")}>
                <img
                  src="/flags/br.png"
                  alt="Português"
                  className={styles.flagIcon}
                  width="20"
                  height="15"
                />
                Português
              </li>
              <li role="menuitem" tabIndex={0} onClick={() => handleLanguageChange("EN")}>
                <img
                  src="/flags/us.png"
                  alt="English"
                  className={styles.flagIcon}
                  width="20"
                  height="15"
                />
                English
              </li>
              <li role="menuitem" tabIndex={0} onClick={() => handleLanguageChange("FR")}>
                <img
                  src="/flags/fr.png"
                  alt="Français"
                  className={styles.flagIcon}
                  width="20"
                  height="15"
                />
                Français
              </li>
              <li role="menuitem" tabIndex={0} onClick={() => handleLanguageChange("ES")}>
                <img
                  src="/flags/es.png"
                  alt="Español"
                  className={styles.flagIcon}
                  width="20"
                  height="15"
                />
                Español
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
