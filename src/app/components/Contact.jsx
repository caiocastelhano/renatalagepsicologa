"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./Contact.module.css";

export default function Contact() {
  const { language } = useContext(LanguageContext);

  const phone = "5511941650407";

  const messages = {
  PT: "Olá Renata, gostaria de agendar uma consulta. Podemos conversar?",
  EN: "Hello Renata, I’d like to schedule an appointment. Can we talk?",
  FR: "Bonjour Renata, je souhaiterais prendre rendez-vous. Pourrions-nous en parler ?",
  ES: "Hola Renata, me gustaría agendar una cita. ¿Podemos hablar?",
  };

  const text = {
    PT: {
      title: "Entre em contato",
      paragraph:
        "Se você sente que é hora de conversar ou precisa de apoio psicológico, estou disponível para escuta. Escreva quando quiser.",
      button: "Fale comigo no WhatsApp",
    },
    EN: {
      title: "Get in Touch",
      paragraph:
        "If you feel it's time to talk or you're looking for psychological support, I'm here to listen. Reach out when you're ready.",
      button: "Message me on WhatsApp",
    },
    FR: {
      title: "Contactez-moi",
      paragraph:
        "Si vous ressentez le besoin de parler ou cherchez un accompagnement psychologique, je suis là pour vous écouter. Écrivez-moi quand vous le souhaitez.",
      button: "Écrivez-moi sur WhatsApp",
    },
    ES: {
      title: "Contacto",
      paragraph:
        "Si sentís que es momento de hablar o buscás apoyo psicológico, estoy disponible para escucharte. Escribime cuando quieras.",
      button: "Escríbeme por WhatsApp",
    },
  };

  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(messages[language])}`;
  const t = text[language];

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>{t.title}</h2>

      <p className={styles.text}>{t.paragraph}</p>

      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
        title={messages[language]}
      >
        {t.button}
      </a>
    </section>
  );
}
