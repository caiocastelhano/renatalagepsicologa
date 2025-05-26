import Header from "./components/Header";
import About from "./components/About";
import ProfessionalPath from "./components/ProfessionalPath";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ConceptsBar from "./components/ConceptsBar";
import WhatsAppButton from "./components/WhatsAppButton";
import Hero from "./components/Hero";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ConceptsBar />
      <ProfessionalPath />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
