"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./Contact.module.css";

export default function Contact() {
  const { language } = useContext(LanguageContext);

  const phone = "5511941650407";
  const message =
    language === "PT"
      ? "Olá, gostaria de agendar uma consulta."
      : "Hello, I’d like to schedule an appointment.";

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
  };

  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>{text[language].title}</h2>
      <p className={styles.text}>{text[language].paragraph}</p>
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
        aria-label={text[language].button}
      >
        {text[language].button}
      </a>
    </section>
  );
}
