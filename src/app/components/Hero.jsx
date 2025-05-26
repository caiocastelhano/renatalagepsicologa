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
        "Um espaço para falar, escutar e sustentar o silêncio.",
        "No tempo de cada um, com escuta atenta e sem pressa.",
        "Sessões online para adolescentes e adultos.",
        "Quando a palavra encontra lugar, novos caminhos se abrem.",
        "Disponível em português, inglês, francês e espanhol."
        ]
    },
    EN: {
        title: "Online psychological support",
        lines: [
        "A space for speaking, listening, and even silence.",
        "At your own pace, with attentive and unhurried listening.",
        "Online sessions for teens and adults.",
        "When words find space, new paths begin to unfold.",
        "Available in Portuguese, English, French and Spanish."
        ]
    },
    FR: {
        title: "Accompagnement psychologique en ligne",
        lines: [
        "Un espace pour dire, écouter et accueillir le silence.",
        "Au rythme de chacun, dans une écoute attentive et sans hâte.",
        "Séances en ligne pour adolescents et adultes.",
        "Quand la parole trouve sa place, des chemins s'ouvrent.",
        "Disponible en portugais, anglais, français et espagnol."
        ]
    },
    ES: {
        title: "Atención psicológica en línea",
        lines: [
        "Un espacio para hablar, escuchar y también para el silencio.",
        "A tu ritmo, con una escucha atenta y sin prisa.",
        "Sesiones online para adolescentes y adultos.",
        "Cuando la palabra encuentra lugar, se abren nuevos caminos.",
        "Disponible en portugués, inglés, francés y español."
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
