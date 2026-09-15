import { heroFacts, profile } from '../data/content';
import { IconArrowUpRight, IconGithub, IconLinkedin, IconMail } from './Icons';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="hero__field" aria-hidden="true" />
      <div className="hero__field hero__field--low" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__body">
          <h1 className="hero__name">
            <span className="hero__name-line">{profile.firstName} </span>
            <span className="hero__name-accent">{profile.lastName}</span>
          </h1>

          <p className="hero__role">{profile.role}</p>
          <p className="hero__lead">{profile.lead}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              <IconMail size={16} />
              Falar comigo
            </a>
          </div>

          <ul className="hero__facts mono">
            {heroFacts.map((fact) => (
              <li key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__aside">
          <figure className="hero__portrait">
            <img
              src={profile.avatar}
              width={320}
              height={320}
              alt={`Retrato de ${profile.name}`}
              fetchPriority="high"
            />
            <span className="hero__portrait-grade" aria-hidden="true" />
            <figcaption className="mono">{profile.githubLabel}</figcaption>
          </figure>

          <ul className="hero__social">
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer noopener">
                <IconGithub size={17} />
                GitHub
                <IconArrowUpRight size={14} />
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
                <IconLinkedin size={17} />
                LinkedIn
                <IconArrowUpRight size={14} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
