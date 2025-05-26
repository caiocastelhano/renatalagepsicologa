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
    <section className={styles.bar}>
      <ul className={styles.list}>
        {concepts.map((concept, index) => (
          <li key={index}>
            <span className={styles.symbol}>Ψ</span> {concept}
          </li>
        ))}
      </ul>
    </section>
  );
}
