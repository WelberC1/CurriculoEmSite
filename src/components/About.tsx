import type { CSSProperties } from 'react';
import { about, profile, workAreas } from '../data/content';
import { WorkGlyph } from './Icons';
import './About.css';

export function About() {
  return (
    <section className="section about" id="sobre">
      <div className="container about__grid">
        <div className="about__lead">
          <figure className="about__portrait" data-reveal="hidden">
            <img src={profile.avatar} width={320} height={320} alt={`Retrato de ${profile.name}`} loading="lazy" />
          </figure>
          <h2 className="section__title" data-reveal="hidden">
            Sobre mim
          </h2>
        </div>

        <div className="about__body">
          {about.paragraphs.map((paragraph, i) => (
            <p key={paragraph.slice(0, 24)} data-reveal="hidden" style={{ '--d': i } as CSSProperties}>
              {paragraph}
            </p>
          ))}

          <ul className="about__areas">
            {workAreas.map((area, i) => (
              <li key={area.title} data-reveal="hidden" style={{ '--d': i } as CSSProperties}>
                <span className="about__glyph" aria-hidden="true">
                  <WorkGlyph name={area.icon} />
                </span>
                <strong>{area.title}</strong>
                <span>{area.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
