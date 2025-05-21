"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./ProfessionalPath.module.css";

export default function ProfessionalPath() {
  const { language } = useContext(LanguageContext);

  const content = {
    PT: {
      educationTitle: "Formação",
      education: [
        "FUMEC, Belo Horizonte (2013-2018): formação superior em Psicologia",
        "UFMG, Belo Horizonte (2018): curso de Conceitos Fundamentais da Teoria Psicanalítica (extensão universitária)",
        "PUC, São Paulo (2019-2020): especialização em Semiótica Psicanalítica (pós-graduação)",
      ],
      experienceTitle: "Experiência Profissional",
      experience: [
        "Hemoservice, Belo Horizonte (2015-2016)",
        "Cersam Nordeste, Belo Horizonte (2016)",
        "Clínica escola FUMEC, Belo Horizonte (2017-2018)",
        "Clínica Psicolumen, São Paulo (2021-2022)",
        "Clínica Desenvolviver, São Paulo (2021-2023)",
        "Atendimento particular (desde 2018)",
      ],
      practiceTitle: "Atendimento",
      practice: [
        "Online",
        "Adolescentes e adultos",
        "Falantes de português, inglês, francês e espanhol",
      ],
    },

    EN: {
      educationTitle: "Education",
      education: [
        "FUMEC, Belo Horizonte (2013-2018): Bachelor's degree in Psychology",
        "UFMG, Belo Horizonte (2018): University extension course in Fundamental Concepts of Psychoanalytic Theory",
        "PUC, São Paulo (2019-2020): Postgraduate specialization in Psychoanalytic Semiotics",
      ],
      experienceTitle: "Professional Experience",
      experience: [
        "Hemoservice, Belo Horizonte (2015-2016)",
        "Cersam Nordeste, Belo Horizonte (2016)",
        "FUMEC School Clinic, Belo Horizonte (2017-2018)",
        "Psicolumen Clinic, São Paulo (2021-2022)",
        "Desenvolviver Clinic, São Paulo (2021-2023)",
        "Private practice (since 2018)",
      ],
      practiceTitle: "Practice",
      practice: [
        "Online",
        "Adolescents and adults",
        "Speakers of Portuguese, English, French, and Spanish",
      ],
    },

    FR: {
      educationTitle: "Formation",
      education: [
        "FUMEC, Belo Horizonte (2013-2018) : Licence en Psychologie",
        "UFMG, Belo Horizonte (2018) : Cours d'extension universitaire sur les Concepts Fondamentaux de la Théorie Psychanalytique",
        "PUC, São Paulo (2019-2020) : Spécialisation en Sémiotique Psychanalytique (post-graduation)",
      ],
      experienceTitle: "Expérience Professionnelle",
      experience: [
        "Hemoservice, Belo Horizonte (2015-2016)",
        "Cersam Nordeste, Belo Horizonte (2016)",
        "Clinique universitaire FUMEC, Belo Horizonte (2017-2018)",
        "Clinique Psicolumen, São Paulo (2021-2022)",
        "Clinique Desenvolviver, São Paulo (2021-2023)",
        "Pratique privée (depuis 2018)",
      ],
      practiceTitle: "Pratique",
      practice: [
        "En ligne",
        "Adolescents et adultes",
        "Langues parlées : portugais, anglais, français et espagnol",
      ],
    },

    ES: {
      educationTitle: "Formación",
      education: [
        "FUMEC, Belo Horizonte (2013-2018): Título universitario en Psicología",
        "UFMG, Belo Horizonte (2018): Curso de extensión en Conceptos Fundamentales de la Teoría Psicoanalítica",
        "PUC, São Paulo (2019-2020): Especialización en Semiótica Psicoanalítica (postgrado)",
      ],
      experienceTitle: "Experiencia Profesional",
      experience: [
        "Hemoservice, Belo Horizonte (2015-2016)",
        "Cersam Nordeste, Belo Horizonte (2016)",
        "Clínica universitaria FUMEC, Belo Horizonte (2017-2018)",
        "Clínica Psicolumen, São Paulo (2021-2022)",
        "Clínica Desenvolviver, São Paulo (2021-2023)",
        "Consulta privada (desde 2018)",
      ],
      practiceTitle: "Atención",
      practice: [
        "Online",
        "Adolescentes y adultos",
        "Idiomas: portugués, inglés, francés y español",
      ],
    },
  };

  const section = content[language];

  return (
    <section className={styles.section}>

      <div className={styles.block}>
        <h3 className={styles.subtitle}>{section.educationTitle}</h3>
        <ul className={styles.list}>
          {section.education.map((item, i) => (
            <li key={`edu-${i}`}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.block}>
        <h3 className={styles.subtitle}>{section.experienceTitle}</h3>
        <ul className={styles.list}>
          {section.experience.map((item, i) => (
            <li key={`exp-${i}`}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.block}>
        <h3 className={styles.subtitle}>{section.practiceTitle}</h3>
        <ul className={styles.list}>
          {section.practice.map((item, i) => (
            <li key={`prac-${i}`}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
