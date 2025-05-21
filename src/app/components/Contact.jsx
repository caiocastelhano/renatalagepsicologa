"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./Contact.module.css";

export default function Contact() {
  const { language } = useContext(LanguageContext);

  const phone = "5511941650407";

  const messages = {
    PT: "Olá, gostaria de agendar uma consulta.",
    EN: "Hello, I’d like to schedule an appointment.",
    FR: "Bonjour, je voudrais prendre rendez-vous.",
    ES: "Hola, me gustaría agendar una cita.",
  };

  const text = {
    PT: {
      title: "Entre em contato",
      paragraph: "Para agendamentos ou mais informações, envie uma mensagem pelo WhatsApp:",
      button: "Falar com Renata Lage no WhatsApp",
    },
    EN: {
      title: "Get in Touch",
      paragraph: "To schedule an appointment or ask questions, send a message on WhatsApp:",
      button: "Talk to Renata Lage on WhatsApp",
    },
    FR: {
      title: "Contactez-moi",
      paragraph: "Pour prendre rendez-vous ou poser vos questions, envoyez un message sur WhatsApp :",
      button: "Parler à Renata Lage sur WhatsApp",
    },
    ES: {
      title: "Contacto",
      paragraph: "Para agendar una cita o hacer preguntas, envía un mensaje por WhatsApp:",
      button: "Hablar con Renata Lage en WhatsApp",
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
        aria-label={t.button}
      >
        {t.button}
      </a>
    </section>
  );
}
