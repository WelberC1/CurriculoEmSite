import { profile } from '../data/content';
import { IconGithub, IconLinkedin, IconMail, Monogram } from './Icons';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Monogram size={24} />
          <p>
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
          </p>
        </div>

        <ul className="footer__social">
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Enviar e-mail">
              <IconMail size={17} />
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
              <IconLinkedin size={17} />
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub">
              <IconGithub size={17} />
            </a>
          </li>
        </ul>

        <p className="footer__colophon">
          Feito com React e Vite <span aria-hidden="true">·</span> hospedado no GitHub Pages
        </p>
      </div>
    </footer>
  );
}
