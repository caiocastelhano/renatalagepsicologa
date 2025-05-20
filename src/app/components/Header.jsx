"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./Header.module.css";

export default function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const setLanguage = (lang) => {
    if (lang !== language) {
      toggleLanguage();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {language === "PT" ? "Renata Lage Psicóloga" : "Renata Lage Psychologist"}
      </div>

      <nav className={styles.nav}>
        <a href="#sobre" className={styles.link}>
          {language === "PT" ? "Sobre" : "About"}
        </a>
        <a href="#contato" className={styles.link}>
          {language === "PT" ? "Contato" : "Contact"}
        </a>
      </nav>

      <div className={styles.langSwitch}>
        <img
          src="/flags/br.png"
          alt="Português"
          className={`${styles.flag} ${language === "PT" ? styles.active : ""}`}
          onClick={() => setLanguage("PT")}
        />
        <img
          src="/flags/us.png"
          alt="English"
          className={`${styles.flag} ${language === "EN" ? styles.active : ""}`}
          onClick={() => setLanguage("EN")}
        />
      </div>
    </header>
  );
}
