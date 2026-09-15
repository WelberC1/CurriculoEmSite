import { about, cases, workAreas } from '../data/content';
import { CaseGlyph, WorkGlyph } from './Icons';
import { SectionHead } from './SectionHead';
import './About.css';

function Cases() {
  return (
    <ol className="cases">
      {cases.map((item) => (
        <li className="case" key={item.title} data-reveal="hidden">
          <div className="case__head">
            <span className="case__glyph" aria-hidden="true">
              <CaseGlyph name={item.icon} />
            </span>
            <h4>{item.title}</h4>
            <ul className="case__stack">
              {item.stack.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="case__stages">
            <div className="case__stage case__stage--problem">
              <p className="case__label mono">Problema</p>
              <p>{item.problem}</p>
            </div>
            <div className="case__stage case__stage--solution">
              <p className="case__label mono">Solução</p>
              <p>{item.solution}</p>
            </div>
            <div className="case__stage case__stage--result">
              <p className="case__label mono">Resultado</p>
              <p>{item.result}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function About() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <SectionHead title="Sobre mim" />

        <div className="about__text" data-reveal="hidden">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <div className="cases-block">
          <h3 className="block__title">O que eu entreguei na prática</h3>
          <Cases />
        </div>

        <div className="work">
          <h3 className="block__title">Principais áreas de atuação</h3>
          <ul className="work__list">
            {workAreas.map((area) => (
              <li key={area.title}>
                <span className="work__glyph" aria-hidden="true">
                  <WorkGlyph name={area.icon} />
                </span>
                <span className="work__body">
                  <strong>{area.title}</strong>
                  <span>{area.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
