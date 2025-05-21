"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./Header.module.css";

export default function Header() {
  const { language, setLanguage } = useContext(LanguageContext);

  const translations = {
    PT: { name: "Renata Lage Psicóloga", about: "Sobre", contact: "Contato" },
    EN: { name: "Renata Lage Psychologist", about: "About", contact: "Contact" },
    FR: { name: "Renata Lage Psychologue", about: "À propos", contact: "Contact" },
    ES: { name: "Renata Lage Psicóloga", about: "Sobre mí", contact: "Contacto" },
  };

  const t = translations[language];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>{t.name}</div>

      <nav className={styles.nav}>
        <a href="#sobre" className={styles.link}>
          {t.about}
        </a>
        <a href="#contato" className={styles.link}>
          {t.contact}
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
        <img
          src="/flags/fr.png"
          alt="Français"
          className={`${styles.flag} ${language === "FR" ? styles.active : ""}`}
          onClick={() => setLanguage("FR")}
        />
        <img
          src="/flags/es.png"
          alt="Español"
          className={`${styles.flag} ${language === "ES" ? styles.active : ""}`}
          onClick={() => setLanguage("ES")}
        />
      </div>
    </header>
  );
}
