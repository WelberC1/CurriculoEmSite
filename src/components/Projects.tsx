import type { PointerEvent } from 'react';
import { featuredProjects, otherRepos, type Project } from '../data/content';
import { IconArrowUpRight, IconDesktopOrWeb, IconGithub } from './ProjectIcons';
import './Projects.css';

// The cursor carries a small light across the panel and its border.
const track = (e: PointerEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
};

function Languages({ languages }: { languages: Project['languages'] }) {
  const total = languages.reduce((sum, lang) => sum + lang.bytes, 0);
  return (
    <div className="langs">
      <div className="langs__bar" aria-hidden="true">
        {languages.map((lang, i) => (
          <span key={lang.name} style={{ flexGrow: lang.bytes, opacity: 1 - i * 0.28 }} />
        ))}
      </div>
      <ul className="langs__legend mono">
        {languages.map((lang) => (
          <li key={lang.name}>
            {lang.name} <em>{languages.length === 1 ? `${Math.round(lang.bytes / 1024)} kB` : `${((lang.bytes / total) * 100).toFixed(1)}%`}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const repos = [{ url: project.repo, label: project.repoLabel }, ...(project.secondaryRepo ? [project.secondaryRepo] : [])];
  return (
    <article className="project" data-reveal="hidden" onPointerMove={track}>
      <div className="project__main">
        <h3>{project.name}</h3>
        <p className="project__tagline">{project.tagline}</p>
        <p className="project__desc">{project.description}</p>
        <div className="project__links">
          {repos.map((repo) => (
            <a key={repo.url} className="btn btn--ghost btn--sm" href={repo.url} target="_blank" rel="noreferrer noopener">
              <IconGithub size={15} />
              <span className="mono">{repo.label}</span>
              <IconArrowUpRight size={13} />
            </a>
          ))}
        </div>
      </div>

      <div className="project__spec">
        <ul className="project__highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <ul className="project__stack" aria-label="Tecnologias">
          <li className="tag project__kind">
            <IconDesktopOrWeb kind={project.kind} />
            {project.kindLabel}
          </li>
          {project.stack.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>
        <Languages languages={project.languages} />
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="container">
        <header className="section__head" data-reveal="hidden">
          <h2 className="section__title">Projetos</h2>
        </header>

        <div className="projects">
          {featuredProjects.map((project) => (
            <FeaturedProject key={project.name} project={project} />
          ))}
        </div>

        <ul className="others" data-reveal="hidden">
          {otherRepos.map((repo) => (
            <li key={repo.name}>
              <a href={repo.url} target="_blank" rel="noreferrer noopener">
                <span className="others__name mono">{repo.name}</span>
                <span className="others__desc">{repo.description}</span>
                <span className="others__lang mono">{repo.language}</span>
                <IconArrowUpRight size={15} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
