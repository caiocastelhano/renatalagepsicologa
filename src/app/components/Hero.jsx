"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./Hero.module.css";

export default function Hero() {
  const { language } = useContext(LanguageContext);

  const content = {
    PT: {
        title: "Atendimento psicológico online",
        lines: [
        "Um espaço para falar, silenciar e ser ouvido.",
        "No tempo de cada um, com escuta cuidadosa e sem pressa.",
        "Sessões para adolescentes e adultos.",
        "Disponível em português, inglês, francês e espanhol.",
        "Quando a palavra encontra lugar, novos caminhos se abrem."
        ]
    },
    EN: {
        title: "Online psychological support",
        lines: [
        "A space to speak, be silent, and be heard.",
        "At your own pace, with careful and unhurried listening.",
        "Sessions for teens and adults.",
        "Available in Portuguese, English, French and Spanish.",
        "When words find space, new paths begin to unfold."
        ]
    },
    FR: {
        title: "Accompagnement psychologique en ligne",
        lines: [
        "Un espace pour parler, se taire et être écouté.",
        "Au rythme de chacun, dans une écoute attentive et sans hâte.",
        "Séances pour adolescents et adultes.",
        "Disponible en portugais, anglais, français et espagnol.",
        "Quand la parole trouve sa place, des chemins s'ouvrent."
        ]
    },
    ES: {
        title: "Atención psicológica en línea",
        lines: [
        "Un espacio para hablar, guardar silencio y ser escuchado.",
        "A tu ritmo, con una escucha cuidadosa y sin prisa.",
        "Sesiones para adolescentes y adultos.",
        "Disponible en portugués, inglés, francés y español.",
        "Cuando la palabra encuentra lugar, se abren nuevos caminos."
        ]
    }
  };

  const { title, lines } = content[language] || content.PT;

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>{title}</h1>
          {lines.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
