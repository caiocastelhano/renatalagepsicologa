"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        {language === "PT"
          ? "Renata Lage Psicóloga | © 2025 Todos os direitos reservados | "
          : "Renata Lage Psychologist | © 2025 All rights reserved | "}
        <a
          href="https://caiocastelhano.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {language === "PT"
            ? "Desenvolvido por Caio Castelhano"
            : "Developed by Caio Castelhano"}
        </a>
      </p>
    </footer>
  );
}
