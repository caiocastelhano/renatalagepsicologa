"use client";

import { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const { language } = useContext(LanguageContext);

  const phone = "5511941650407";

  const messages = {
    PT: "Olá Renata, gostaria de agendar uma consulta. Podemos conversar?",
    EN: "Hello Renata, I’d like to schedule an appointment. Can we talk?",
    FR: "Bonjour Renata, je souhaiterais prendre rendez-vous. Pourrions-nous en parler ?",
    ES: "Hola Renata, me gustaría agendar una cita. ¿Podemos hablar?",
  };

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(messages[language] || messages.PT)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Fale com Renata no WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
