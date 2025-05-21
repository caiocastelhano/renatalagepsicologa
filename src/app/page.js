import Header from "./components/Header";
import About from "./components/About";
import ProfessionalPath from "./components/ProfessionalPath";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <About />
      <ProfessionalPath />
      <Contact />
      <Footer />
    </>
  );
}
