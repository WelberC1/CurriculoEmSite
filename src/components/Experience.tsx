import { experience } from '../data/content';
import './Experience.css';

export function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <header className="section__head" data-reveal="hidden">
          <h2 className="section__title">Experiência</h2>
        </header>

        <ol className="timeline">
          {experience.map((job) => (
            <li className={`timeline__item${job.current ? ' is-current' : ''}`} key={job.company} data-reveal="hidden">
              <div className="timeline__meta">
                <p className="timeline__period mono">{job.period}</p>
                <p className="timeline__company">{job.company}</p>
                <p className="timeline__place">{job.location}</p>
              </div>
              <div className="timeline__body">
                <h3>{job.role}</h3>
                <ul className="timeline__bullets">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
