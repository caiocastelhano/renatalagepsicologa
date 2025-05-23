"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { language } = useContext(LanguageContext);

  const text = {
    PT: {
      copyright: "© 2025 Renata Lage. Todos os direitos reservados",
      developer: "Desenvolvido por Caio Castelhano",
    },
    EN: {
      copyright: "© 2025 Renata Lage. All rights reserved",
      developer: "Developed by Caio Castelhano",
    },
    FR: {
      copyright: "© 2025 Renata Lage. Tous droits réservés",
      developer: "Développé par Caio Castelhano",
    },
    ES: {
      copyright: "© 2025 Renata Lage. Todos los derechos reservados",
      developer: "Desarrollado por Caio Castelhano",
    },
  };

  const t = text[language];

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        <span>{t.copyright}</span>
        <span className={styles.separator}> | </span>
        <a
          href="https://caiocastelhano.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          aria-label="Site do desenvolvedor Caio Castelhano"
        >
          {t.developer}
        </a>
      </p>
    </footer>
  );
}
