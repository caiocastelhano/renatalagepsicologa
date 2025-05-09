import Header from "./components/Header";
import About from "./components/About";
import Practice from "./components/Practice";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <About />
      <Practice />
      <Contact />
      <Footer />
    </>
  );
}
