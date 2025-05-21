"use client";

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  const { language } = useContext(LanguageContext);

 const text = {
  PT: {
    paragraphs: [
      "Olá, meu nome é Renata Lage, sou psicóloga formada pela FUMEC, em Belo Horizonte, com experiência clínica desde 2018. Minha escuta é orientada pela psicanálise, abordagem com a qual trabalho no acompanhamento de adultos e adolescentes.",
      "Durante minha formação, estagiei no CERSAM Nordeste e na clínica escola da FUMEC, onde tive supervisão em atendimentos psicanalíticos. Em 2018, participei de um curso de extensão na UFMG sobre conceitos fundamentais da teoria psicanalítica. No ano seguinte, iniciei minha pós-graduação em Semiótica Psicanalítica - Clínica da Cultura, pela PUC-SP, concluída em 2020.",
      "Atuei em diferentes clínicas, como a Psicolumen e a Desenvolviver, além de manter atendimentos particulares presenciais e online ao longo desses anos. Atualmente, realizo atendimentos online.",
      "Em minha prática, busco oferecer um espaço de escuta acolhedora e ética, onde seja possível elaborar medos, angústias e conflitos, compreender os modos de se relacionar com o mundo e construir, com o tempo, novas formas de estar na vida.",
    ],
  },

  EN: {
    paragraphs: [
      "My name is Renata Lage, I'm a psychologist from FUMEC University in Belo Horizonte, with clinical experience since 2018. My work is based on psychoanalysis, and I provide therapy for adults and adolescents.",
      "During my training, I interned at CERSAM Nordeste and at the FUMEC school clinic, where I was supervised in psychoanalytic cases. In 2018, I took an extension course at UFMG on fundamental psychoanalytic theory. The following year, I began my postgraduate studies in Psychoanalytic Semiotics - Culture Clinic at PUC-SP, which I completed in 2020.",
      "I have worked in clinics such as Psicolumen and Desenvolviver, and have also maintained private practice, both in person and online. Currently, I offer online sessions.",
      "In my practice, I aim to create a safe and ethical space for listening — where fears, anxieties, and conflicts can be processed, relationships better understood, and new ways of being in the world gradually built.",
    ],
  },

  FR: {
    paragraphs: [
      "Je m'appelle Renata Lage, je suis psychologue diplômée de l'université FUMEC à Belo Horizonte, avec une expérience clinique depuis 2018. Ma pratique est orientée par la psychanalyse, auprès d'adultes et d'adolescent·es.",
      "Pendant ma formation, j'ai effectué des stages au CERSAM Nordeste et à la clinique universitaire de la FUMEC, où j'ai bénéficié d'une supervision en clinique psychanalytique. En 2018, j'ai suivi un cours d'extension à l'UFMG sur les concepts fondamentaux de la théorie psychanalytique. L'année suivante, j'ai commencé un diplôme de spécialisation en Sémiotique Psychanalytique - Clinique de la Culture à la PUC-SP, terminé en 2020.",
      "J'ai travaillé dans différentes cliniques, comme Psicolumen et Desenvolviver, en plus de suivre des patient·es en cabinet privé, en présentiel et en ligne. Actuellement, je propose des consultations en ligne.",
      "Dans ma pratique, je cherche à offrir un espace d'écoute éthique et accueillant, où il soit possible d'élaborer peurs, angoisses et conflits, de mieux comprendre sa manière de se relier au monde, et de construire, petit à petit, de nouvelles formes d'existence.",
    ],
  },

  ES: {
    paragraphs: [
      "Mi nombre es Renata Lage, soy psicóloga graduada de la universidad FUMEC en Belo Horizonte, con experiencia clínica desde 2018. Mi trabajo se basa en el psicoanálisis, acompañando a adultos y adolescentes.",
      "Durante mi formación, realicé prácticas en el CERSAM Nordeste y en la clínica escuela de FUMEC, con supervisión en atención clínica psicoanalítica. En 2018, participé en un curso de extensión de la UFMG sobre conceptos fundamentales de la teoría psicoanalítica. Al año siguiente, comencé una especialización en Semiótica Psicoanalítica - Clínica de la Cultura en la PUC-SP, que finalicé en 2020.",
      "Trabajé en clínicas como Psicolumen y Desenvolviver, además de mantener consultas particulares tanto presenciales como en línea. Actualmente, realizo exclusivamente atención en línea.",
      "En mi práctica, busco ofrecer un espacio de escucha acogedor y ético, donde sea posible elaborar miedos, angustias y conflictos, comprender las formas de relacionarse con el mundo y construir, con el tiempo, nuevas formas de habitar la vida.",
    ],
  },
};

  const t = text[language];

  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.name}>RENATA LAGE MARTINS ROSA – CRP 06/172041</h2>

      {/* Ilustração 
      <div className={styles.illustrationWrapper}>
        <Image
          src="/images/illustration-psychology.png"
          alt="Ilustração relacionada à psicologia"
          width={150}
          height={150}
          className={styles.illustration}
        />
      </div>
      */}

      <div className={styles.content}>
        <div className={styles.photoWrapper}>
          <Image
            src="/images/renatalage.jpg"
            alt="Foto profissional de Renata Lage"
            width={220}
            height={220}
            className={styles.photo}
          />
        </div>

        {t.paragraphs.map((p, i) => (
          <p key={i} className={styles.paragraph}>{p}</p>
        ))}
      </div>
    </section>
  );
}
