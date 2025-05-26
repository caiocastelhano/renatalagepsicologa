"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import styles from "./ProfessionalPath.module.css";

export default function ProfessionalPath() {
  const { language } = useContext(LanguageContext);

  const content = {
    PT: {
      sectionTitle: "Minha trajetória profissional",
      educationTitle: "Formação",
      education: [
        {
          instituicao: "FUMEC, Belo Horizonte (2013-2018)",
          curso: "Psicologia (formação superior)"
        },
        {
          instituicao: "UFMG, Belo Horizonte (2018)",
          curso: "Conceitos Fundamentais da Teoria Psicanalítica (extensão universitária)"
        },
        {
          instituicao: "PUC, São Paulo (2019-2020)",
          curso: "Semiótica Psicanalítica (pós-graduação)"
        }
      ],
      experienceTitle: "Experiência",
      experience: [
        {
          local: "Hemoservice",
          detalhes: "Belo Horizonte (2015-2016)"
        },
        {
          local: "Cersam Nordeste",
          detalhes: "Belo Horizonte (2016)"
        },
        {
          local: "Clínica escola FUMEC",
          detalhes: "Belo Horizonte (2017-2018)"
        },
        {
          local: "Clínica Psicolumen",
          detalhes: "São Paulo (2021-2022)"
        },
        {
          local: "Clínica Desenvolviver",
          detalhes: "São Paulo (2021-2023)"
        },
        {
          local: "Atendimento particular",
          detalhes: "desde 2018"
        }
      ],
      practiceTitle: "Atendimento",
      practice: [
        "Online",
        "Adolescentes e adultos",
        {
          title: "Idiomas disponíveis:",
          items: ["Português", "Inglês", "Francês", "Espanhol"]
        }
      ]
    },

    EN: {
      sectionTitle: "My professional path",
      educationTitle: "Education",
      education: [
        {
          instituicao: "FUMEC, Belo Horizonte (2013-2018)",
          curso: "Psychology (bachelor's degree)"
        },
        {
          instituicao: "UFMG, Belo Horizonte (2018)",
          curso: "Fundamental Concepts of Psychoanalytic Theory (university extension)"
        },
        {
          instituicao: "PUC, São Paulo (2019-2020)",
          curso: "Psychoanalytic Semiotics (postgraduate specialization)"
        }
      ],
      experienceTitle: "Experience",
      experience: [
        {
          local: "Hemoservice",
          detalhes: "Belo Horizonte (2015-2016)"
        },
        {
          local: "Cersam Nordeste",
          detalhes: "Belo Horizonte (2016)"
        },
        {
          local: "FUMEC School Clinic",
          detalhes: "Belo Horizonte (2017-2018)"
        },
        {
          local: "Psicolumen Clinic",
          detalhes: "São Paulo (2021-2022)"
        },
        {
          local: "Desenvolviver Clinic",
          detalhes: "São Paulo (2021-2023)"
        },
        {
          local: "Private practice",
          detalhes: "since 2018"
        }
      ],
      practiceTitle: "Practice",
      practice: [
        "Online",
        "Adolescents and adults",
        {
          title: "Languages available:",
          items: ["Portuguese", "English", "French", "Spanish"]
        }
      ],
    },

    FR: {
      sectionTitle: "Mon parcours professionnel",
      educationTitle: "Formation",
      education: [
        {
          instituicao: "FUMEC, Belo Horizonte (2013-2018)",
          curso: "Psychologie (formation universitaire)"
        },
        {
          instituicao: "UFMG, Belo Horizonte (2018)",
          curso: "Concepts fondamentaux de la théorie psychanalytique (cours d'extension universitaire)"
        },
        {
          instituicao: "PUC, São Paulo (2019-2020)",
          curso: "Sémiotique psychanalytique (spécialisation post-universitaire)"
        }
      ],
      experienceTitle: "Expérience",
      experience: [
        {
          local: "Hemoservice",
          details: "Belo Horizonte (2015-2016)"
        },
        {
          local: "Cersam Nordeste",
          details: "Belo Horizonte (2016)"
        },
        {
          local: "Clinique universitaire FUMEC",
          details: "Belo Horizonte (2017-2018)"
        },
        {
          local: "Clinique Psicolumen",
          details: "São Paulo (2021-2022)"
        },
        {
          local: "Clinique Desenvolviver",
          details: "São Paulo (2021-2023)"
        },
        {
          local: "Pratique privée",
          details: "depuis 2018"
        }
      ],
      practiceTitle: "Pratique",
      practice: [
        "En ligne",
        "Adolescents et adultes",
        {
          title: "Langues disponibles :",
          items: ["Portugais", "Anglais", "Français", "Espagnol"]
        }
      ],
    },

    ES: {
      sectionTitle: "Mi trayectoria profesional",
      educationTitle: "Formación",
      education: [
        {
          instituicao: "FUMEC, Belo Horizonte (2013-2018)",
          curso: "Psicología (título universitario)"
        },
        {
          instituicao: "UFMG, Belo Horizonte (2018)",
          curso: "Conceptos fundamentales de la teoría psicoanalítica (curso de extensión universitaria)"
        },
        {
          instituicao: "PUC, São Paulo (2019-2020)",
          curso: "Semiótica psicoanalítica (especialización de posgrado)"
        }
      ],
      experienceTitle: "Experiencia",
      experience: [
        {
          local: "Hemoservice",
          detalles: "Belo Horizonte (2015-2016)"
        },
        {
          local: "Cersam Nordeste",
          detalles: "Belo Horizonte (2016)"
        },
        {
          local: "Clínica universitaria FUMEC",
          detalles: "Belo Horizonte (2017-2018)"
        },
        {
          local: "Clínica Psicolumen",
          detalles: "São Paulo (2021-2022)"
        },
        {
          local: "Clínica Desenvolviver",
          detalles: "São Paulo (2021-2023)"
        },
        {
          local: "Consulta privada",
          detalles: "desde 2018"
        }
      ],
      practiceTitle: "Atención",
      practice: [
        "Online",
        "Adolescentes y adultos",
        {
          title: "Idiomas disponibles:",
          items: ["Portugués", "Inglés", "Francés", "Español"]
        }
      ],
    },
  };

  const section = content[language];

  return (
    <section className={styles.professionalSection}>
      <h2 className={styles.sectionHeading}>{section.sectionTitle}</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.icon}>🎓</div>
          <h3 className={styles.cardTitle}>{section.educationTitle}</h3>
          <ul className={styles.cardList}>
            {section.education.map((item, i) => (
              <li key={`edu-${i}`}>
                <strong>{item.instituicao}</strong><br />
                <span>{item.curso}</span><br />
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🧠</div>
          <h3 className={styles.cardTitle}>{section.experienceTitle}</h3>
          <ul className={styles.cardList}>
            {section.experience.map((item, i) =>
              typeof item === "string" ? (
                <li key={`exp-${i}`}>{item}</li>
              ) : (
                <li key={`exp-${i}`}>
                  <strong>{item.local}</strong><br />
                  <span>{item.detalhes}</span>
                </li>
              )
            )}
          </ul>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🗣️</div>
          <h3 className={styles.cardTitle}>{section.practiceTitle}</h3>
          <ul className={styles.cardList}>
            {section.practice.map((item, i) =>
              typeof item === "string" ? (
                <li key={`prac-${i}`}><strong>{item}</strong></li>
              ) : (
                <li key={`prac-${i}`}>
                  <strong>{item.title}</strong>
                  <ul>
                    {item.items.map((lang, j) => (
                      <li key={`prac-lang-${j}`}>{lang}</li>
                    ))}
                  </ul>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <img
        src="/images/cerebro.png"
        alt=""
        aria-hidden="true"
        className={styles.cerebroBackground}
      />
    </section>
  );
}
