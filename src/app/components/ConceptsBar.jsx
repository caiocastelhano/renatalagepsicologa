import styles from "./ConceptsBar.module.css";

export default function ConceptsBar() {
  const concepts = [
    "Acolhimento",
    "Escuta",
    "Inconsciente",
    "Vínculo",
    "Presença",
    "Cuidado",
    "Disponibilidade",
    "Confiança",
  ];

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
