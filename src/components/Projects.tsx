import { featuredProjects, otherRepos, type Project } from '../data/content';
import { IconArrowUpRight, IconDesktopOrWeb, IconGithub } from './ProjectIcons';
import { SectionHead } from './SectionHead';
import './Projects.css';

function Languages({ languages }: { languages: Project['languages'] }) {
  const total = languages.reduce((sum, lang) => sum + lang.bytes, 0);

  if (languages.length === 1) {
    return (
      <p className="langs langs--single mono">
        {languages[0].name} · {Math.round(languages[0].bytes / 1024)} kB
      </p>
    );
  }

  return (
    <div className="langs">
      <div className="langs__bar">
        {languages.map((lang, index) => (
          <span
            key={lang.name}
            style={{ width: `${(lang.bytes / total) * 100}%`, opacity: 1 - index * 0.22 }}
          />
        ))}
      </div>
      <ul className="langs__legend mono">
        {languages.map((lang, index) => (
          <li key={lang.name}>
            <span className="langs__swatch" style={{ opacity: 1 - index * 0.22 }} aria-hidden="true" />
            {lang.name}
            <em>{((lang.bytes / total) * 100).toFixed(1)}%</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="project" data-reveal="hidden">
      <div className="project__head">
        <h3>{project.name}</h3>
        <span className="project__kind">
          <IconDesktopOrWeb kind={project.kind} />
          {project.kindLabel}
        </span>
      </div>

      <p className="project__tagline">{project.tagline}</p>
      <p className="project__desc">{project.description}</p>

      <ul className="project__highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <ul className="project__stack">
        {project.stack.map((tech) => (
          <li key={tech} className="tag">
            {tech}
          </li>
        ))}
      </ul>

      <Languages languages={project.languages} />

      <div className="project__links">
        <a className="btn btn--ghost btn--sm" href={project.repo} target="_blank" rel="noreferrer noopener">
          <IconGithub size={15} />
          {project.repoLabel}
          <IconArrowUpRight size={13} />
        </a>
        {project.secondaryRepo && (
          <a
            className="btn btn--ghost btn--sm"
            href={project.secondaryRepo.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconGithub size={15} />
            {project.secondaryRepo.label}
            <IconArrowUpRight size={13} />
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section className="section" id="projetos">
      <div className="container">
        <SectionHead title="Projetos em destaque" meta="Código aberto no GitHub" />

        <div className="projects">
          {featuredProjects.map((project) => (
            <FeaturedProject key={project.name} project={project} />
          ))}
        </div>

        <div className="others" data-reveal="hidden">
          <h3 className="others__title">Outros repositórios públicos</h3>
          <ul className="others__list">
            {otherRepos.map((repo) => (
              <li key={repo.name}>
                <a href={repo.url} target="_blank" rel="noreferrer noopener">
                  <span className="others__name mono">{repo.name}</span>
                  <span className="others__desc">{repo.description}</span>
                  <span className="others__lang mono">{repo.language}</span>
                  <IconArrowUpRight size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
