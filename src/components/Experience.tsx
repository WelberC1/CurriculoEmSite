import { experience } from '../data/content';
import { IconBriefcase } from './Icons';
import { SectionHead } from './SectionHead';
import './Experience.css';

export function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <SectionHead title="Experiência" meta="2022 — hoje" />

        <ol className="timeline" data-reveal="hidden">
          {experience.map((job) => (
            <li className="timeline__item" key={job.company}>
              <div className="timeline__marker" aria-hidden="true">
                <span className={job.current ? 'is-current' : undefined}>
                  <IconBriefcase size={14} />
                </span>
              </div>

              <div className="timeline__body">
                <div className="timeline__head">
                  <h3>{job.role}</h3>
                  <p className="timeline__period mono">{job.period}</p>
                </div>
                <p className="timeline__company">
                  {job.company} <span aria-hidden="true">·</span> {job.location}
                </p>
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
