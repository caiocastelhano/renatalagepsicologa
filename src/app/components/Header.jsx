"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./Header.module.css";

export default function Header() {
  const { language, setLanguage } = useContext(LanguageContext);

  const translations = {
    PT: {
      name: "Renata Lage Psicóloga | CRP 06/172041",
      whatsapp: "Fale comigo no WhatsApp",
    },
    EN: {
      name: "Renata Lage Psychologist | CRP 06/172041",
      whatsapp: "Message me on WhatsApp",
    },
    FR: {
      name: "Renata Lage Psychologue | CRP 06/172041",
      whatsapp: "Écrivez-moi sur WhatsApp",
    },
    ES: {
      name: "Renata Lage Psicóloga | CRP 06/172041",
      whatsapp: "Escríbeme por WhatsApp",
    },
  };

  const t = translations[language];
  const phone = "5511941650407";
  const message = {
    PT: "Olá, gostaria de agendar uma consulta.",
    EN: "Hello, I’d like to schedule an appointment.",
    FR: "Bonjour, je voudrais prendre rendez-vous.",
    ES: "Hola, me gustaría agendar una cita.",
  };

  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
    message[language]
  )}`;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>{t.name}</div>

      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
      >
        {t.whatsapp}
      </a>

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
