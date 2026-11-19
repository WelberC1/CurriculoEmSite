import { About } from './components/About';
import { Cases } from './components/Cases';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Field } from './components/Field';
import { useReveal } from './hooks/useReveal';

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <Field />
      <Nav />

      <main id="conteudo">
        <Hero />
        <About />
        <Cases />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
