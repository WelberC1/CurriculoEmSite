import { certifications, education } from '../data/content';
import { IconBadge, IconCap } from './Icons';
import './Education.css';

export function Education() {
  return (
    <section className="section" id="formacao">
      <div className="container education">
        <div>
          <header className="section__head" data-reveal="hidden">
            <h2 className="section__title">Formação</h2>
          </header>

          <ol className="degrees">
            {education.map((item) => (
              <li key={item.course} className="degree" data-reveal="hidden">
                <span className="degree__glyph" aria-hidden="true">
                  <IconCap size={20} />
                </span>
                <div>
                  <p className="degree__period mono">
                    {item.period}
                    {item.current && <span className="degree__state">Em andamento</span>}
                  </p>
                  <h3>{item.course}</h3>
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
        </div>

        <aside className="certs" data-reveal="hidden" aria-labelledby="certs-title">
          <h3 id="certs-title" className="certs__title">
            Certificações
          </h3>
          <ul>
            {certifications.map((cert) => (
              <li key={cert.name}>
                <span className="certs__glyph" aria-hidden="true">
                  <IconBadge size={16} />
                </span>
                <span>
                  <strong>{cert.name}</strong>
                  <span className="certs__meta">
                    {cert.issuer} <span aria-hidden="true">·</span> <span className="mono">{cert.year}</span>
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
