"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { language } = useContext(LanguageContext);

  const text = {
    PT: {
      copyright: "Renata Lage Psicóloga | © 2025 Todos os direitos reservados | ",
      developer: "Desenvolvido por Caio Castelhano",
    },
    EN: {
      copyright: "Renata Lage Psychologist | © 2025 All rights reserved | ",
      developer: "Developed by Caio Castelhano",
    },
    FR: {
      copyright: "Renata Lage Psychologue | © 2025 Tous droits réservés | ",
      developer: "Développé par Caio Castelhano",
    },
    ES: {
      copyright: "Renata Lage Psicóloga | © 2025 Todos los derechos reservados | ",
      developer: "Desarrollado por Caio Castelhano",
    },
  };

  const t = text[language];

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        {t.copyright}
        <a
          href="https://caiocastelhano.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {t.developer}
        </a>
      </p>
    </footer>
  );
}
