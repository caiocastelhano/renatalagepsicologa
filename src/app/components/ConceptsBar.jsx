"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./ConceptsBar.module.css";

export default function ConceptsBar() {
  const { language } = useContext(LanguageContext);

  const terms = {
    PT: [
      "Acolhimento",
      "Escuta",
      "Inconsciente",
      "Vínculo",
      "Presença",
      "Cuidado",
      "Disponibilidade",
      "Confiança",
    ],
    EN: [
      "Care",
      "Listening",
      "Unconscious",
      "Bond",
      "Presence",
      "Support",
      "Availability",
      "Trust",
    ],
    FR: [
      "Accueil",
      "Écoute",
      "Inconscient",
      "Lien",
      "Présence",
      "Soutien",
      "Disponibilité",
      "Confiance",
    ],
    ES: [
      "Acogida",
      "Escucha",
      "Inconsciente",
      "Vínculo",
      "Presencia",
      "Cuidado",
      "Disponibilidad",
      "Confianza",
    ],
  };

  const concepts = terms[language] || terms.PT;

  return (
    <section className={styles.bar} aria-labelledby="concepts-heading">
      <h2 id="concepts-heading" className={styles.visuallyHidden}>
        Palavras que representam a prática clínica
      </h2>
      <ul className={styles.list}>
        {concepts.map((concept, index) => (
          <li key={index}>
            <span className={styles.symbol} aria-hidden="true">
              Ψ
            </span>
            <span>{concept}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
