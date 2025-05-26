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
      <>
        Olá, meu nome é <strong>Renata Lage Martins Rosa (CRP 06/172041)</strong>, sou psicóloga formada pela <strong>FUMEC</strong>, em <strong>Belo Horizonte</strong>, com experiência clínica desde <strong>2018</strong>. Minha escuta é orientada pela <strong>psicanálise</strong>, abordagem com a qual trabalho no acompanhamento de <strong>adultos</strong> e <strong>adolescentes</strong>.
      </>,
      <>
        Durante minha formação, estagiei no <strong>CERSAM Nordeste</strong> e na <strong>clínica escola da FUMEC</strong>, onde tive supervisão em atendimentos psicanalíticos. Em <strong>2018</strong>, participei de um curso de extensão na <strong>UFMG</strong> sobre <strong>conceitos fundamentais da teoria psicanalítica</strong>. No ano seguinte, iniciei minha pós-graduação em <strong>Semiótica Psicanalítica - Clínica da Cultura</strong>, pela <strong>PUC-SP</strong>, concluída em <strong>2020</strong>.
      </>,
      <>
        Atuei em diferentes clínicas, como a <strong>Psicolumen</strong> e a <strong>Desenvolviver</strong>, além de manter atendimentos particulares <strong>presenciais</strong> e <strong>online</strong> ao longo desses anos. Atualmente, realizo <strong>atendimentos online</strong>.
      </>,
      <>
        Em minha prática, busco oferecer um <strong>espaço de escuta acolhedora e ética</strong>, onde seja possível elaborar <strong>medos</strong>, <strong>angústias</strong> e <strong>conflitos</strong>, compreender os <strong>modos de se relacionar com o mundo</strong> e construir, com o tempo, <strong>novas formas de estar na vida</strong>.
      </>
    ]
  },

  EN: {
    paragraphs: [
      <>
        My name is <strong>Renata Lage Martins Rosa (CRP 06/172041)</strong>, I'm a psychologist from <strong>FUMEC University</strong> in <strong>Belo Horizonte</strong>, with clinical experience since <strong>2018</strong>. My work is based on <strong>psychoanalysis</strong>, and I provide therapy for <strong>adults</strong> and <strong>adolescents</strong>.
      </>,
      <>
        During my training, I interned at <strong>CERSAM Nordeste</strong> and at the <strong>FUMEC school clinic</strong>, where I was supervised in psychoanalytic cases. In <strong>2018</strong>, I took an extension course at <strong>UFMG</strong> on <strong>fundamental psychoanalytic theory</strong>. The following year, I began my postgraduate studies in <strong>Psychoanalytic Semiotics - Culture Clinic</strong> at <strong>PUC-SP</strong>, which I completed in <strong>2020</strong>.
      </>,
      <>
        I have worked in different clinics, such as <strong>Psicolumen</strong> and <strong>Desenvolviver</strong>, and have also maintained <strong>private practice</strong>, both <strong>in person</strong> and <strong>online</strong>. Currently, I offer <strong>online sessions</strong>.
      </>,
      <>
        In my practice, I aim to create a <strong>safe and ethical space for listening</strong> — where <strong>fears</strong>, <strong>anxieties</strong>, and <strong>conflicts</strong> can be processed, relationships better understood, and <strong>new ways of being in the world</strong> gradually built.
      </>
    ]
  },

  FR: {
    paragraphs: [
      <>
        Je m'appelle <strong>Renata Lage Martins Rosa (CRP 06/172041)</strong>, je suis psychologue diplômée de l'<strong>université FUMEC</strong> à <strong>Belo Horizonte</strong>, avec une expérience clinique depuis <strong>2018</strong>. Ma pratique est orientée par la <strong>psychanalyse</strong>, auprès d'<strong>adultes</strong> et d'<strong>adolescent·es</strong>.
      </>,
      <>
        Pendant ma formation, j'ai effectué des stages au <strong>CERSAM Nordeste</strong> et à la <strong>clinique universitaire de la FUMEC</strong>, où j'ai bénéficié d'une supervision en clinique psychanalytique. En <strong>2018</strong>, j'ai suivi un cours d'extension à l'<strong>UFMG</strong> sur les <strong>concepts fondamentaux de la théorie psychanalytique</strong>. L'année suivante, j'ai commencé un diplôme de spécialisation en <strong>Sémiotique Psychanalytique - Clinique de la Culture</strong> à la <strong>PUC-SP</strong>, terminé en <strong>2020</strong>.
      </>,
      <>
        J'ai travaillé dans différentes cliniques, comme <strong>Psicolumen</strong> et <strong>Desenvolviver</strong>, en plus de suivre des patient·es en <strong>cabinet privé</strong>, en <strong>présentiel</strong> et en <strong>ligne</strong>. Actuellement, je propose des <strong>consultations en ligne</strong>.
      </>,
      <>
        Dans ma pratique, je cherche à offrir un <strong>espace d'écoute éthique et accueillant</strong>, où il soit possible d'élaborer <strong>peurs</strong>, <strong>angoisses</strong> et <strong>conflits</strong>, de mieux comprendre sa manière de se relier au monde, et de construire, petit à petit, <strong>de nouvelles formes d'existence</strong>.
      </>
    ]
  },

  ES: {
    paragraphs: [
      <>
        Mi nombre es <strong>Renata Lage Martins Rosa (CRP 06/172041)</strong>, soy psicóloga graduada de la <strong>universidad FUMEC</strong> en <strong>Belo Horizonte</strong>, con experiencia clínica desde <strong>2018</strong>. Mi trabajo se basa en el <strong>psicoanálisis</strong>, acompañando a <strong>adultos</strong> y <strong>adolescentes</strong>.
      </>,
      <>
        Durante mi formación, realicé prácticas en el <strong>CERSAM Nordeste</strong> y en la <strong>clínica escuela de FUMEC</strong>, con supervisión en atención clínica psicoanalítica. En <strong>2018</strong>, participé en un curso de extensión de la <strong>UFMG</strong> sobre <strong>conceptos fundamentales de la teoría psicoanalítica</strong>. Al año siguiente, comencé una especialización en <strong>Semiótica Psicoanalítica - Clínica de la Cultura</strong> en la <strong>PUC-SP</strong>, que finalicé en <strong>2020</strong>.
      </>,
      <>
        Trabajé en diferentes clínicas, como <strong>Psicolumen</strong> y <strong>Desenvolviver</strong>, además de mantener <strong>consultas particulares</strong> tanto <strong>presenciales</strong> como <strong>en línea</strong>. Actualmente, realizo exclusivamente <strong>atención en línea</strong>.
      </>,
      <>
        En mi práctica, busco ofrecer un <strong>espacio de escucha acogedor y ético</strong>, donde sea posible elaborar <strong>miedos</strong>, <strong>angustias</strong> y <strong>conflictos</strong>, comprender <strong>las formas de relacionarse con el mundo</strong> y construir, con el tiempo, <strong>nuevas formas de habitar la vida</strong>.
      </>
    ]
  },
};

  const t = text[language];

  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.visuallyHidden}>Sobre Renata Lage Martins Rosa</h2>
      <div className={styles.photoBlock}>
        <Image
          src="/images/renata3.jpeg"
          alt="Foto profissional de Renata Lage"
          width={320}
          height={400}
          priority
          className={styles.photo}
        />
      </div>
      <div className={styles.textBlock}>
        {t.paragraphs.map((p, i) => (
          <p key={i} className={styles.paragraph}>{p}</p>
        ))}
      </div>
    </section>
  );
}
