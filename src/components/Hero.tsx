import { Fragment, type CSSProperties } from 'react';
import { heroFacts, profile } from '../data/content';
import { IconArrowDown, IconGithub, IconLinkedin, IconMail } from './Icons';
import './Hero.css';

// Letters rise out of blur one by one; words stay unbreakable so wrapping is natural.
function Ignite({ text, from = 0 }: { text: string; from?: number }) {
  let i = from;
  return (
    <span aria-hidden="true">
      {text.split(' ').map((word, w) => (
        <Fragment key={word + w}>
          {w > 0 && ' '}
          <span className="ignite__word">
            {[...word].map((ch) => (
              <span className="ignite__ch" key={i} style={{ '--i': i++ } as CSSProperties}>
                {ch}
              </span>
            ))}
          </span>
        </Fragment>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="container hero__inner">
        <h1 className="hero__name">
          <span className="visually-hidden">{profile.name}</span>
          <span className="hero__first">
            <Ignite text={profile.firstName} />
          </span>
          <span className="hero__last">
            <Ignite text={profile.lastName} from={profile.firstName.length} />
          </span>
        </h1>

        <div className="hero__body">
          <p className="hero__role">
            {profile.role} <span aria-hidden="true">/</span> .NET &amp; C#
          </p>
          <p className="hero__lead">{profile.lead}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              <IconMail size={16} />
              Falar comigo
            </a>
            <a
              className="btn btn--ghost btn--icon"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
            >
              <IconGithub size={18} />
            </a>
            <a
              className="btn btn--ghost btn--icon"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <IconLinkedin size={18} />
            </a>
          </div>

          <ul className="hero__facts">
            {heroFacts.map((fact) => (
              <li key={fact.label}>
                <strong>{fact.value}</strong> {fact.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a className="hero__cue" href="#sobre">
        <span>Role para ver</span>
        <IconArrowDown size={14} />
      </a>
    </section>
  );
}
