import { certifications, education } from '../data/content';
import { IconBadge, IconCap } from './Icons';
import { SectionHead } from './SectionHead';
import './Education.css';

export function Education() {
  return (
    <section className="section" id="formacao">
      <div className="container">
        <SectionHead title="Formação acadêmica" meta="2021 — em andamento" />

        <ol className="degrees">
          {education.map((item) => (
            <li
              key={item.course}
              className={`degree${item.current ? ' degree--current' : ''}`}
              data-reveal="hidden"
            >
              <span className="degree__glyph" aria-hidden="true">
                <IconCap size={20} />
              </span>

              <div className="degree__body">
                <div className="degree__head">
                  <h3>{item.course}</h3>
                  {item.current && <span className="degree__state">Em andamento</span>}
                  <p className="degree__period mono">{item.period}</p>
                </div>

                <p className="degree__school">{item.school}</p>

                {item.notes.length > 0 && (
                  <ul className="degree__notes">
                    {item.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="certs" data-reveal="hidden">
          <h3 className="certs__title">Certificações</h3>
          <ul className="certs__list">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <span className="certs__glyph" aria-hidden="true">
                  <IconBadge size={16} />
                </span>
                <span className="certs__body">
                  <strong>{cert.name}</strong>
                  <span>
                    {cert.issuer} <span aria-hidden="true">·</span>{' '}
                    <span className="mono">{cert.year}</span>
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
