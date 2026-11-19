import { useEffect, useState } from 'react';
import { profile } from '../data/content';
import { IconArrowUpRight, IconCheck, IconCopy, IconGithub, IconLinkedin, IconMail } from './Icons';
import './Contact.css';

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button type="button" className="btn btn--ghost" onClick={copy} aria-live="polite">
      {copied ? <IconCheck size={15} /> : <IconCopy size={15} />}
      {copied ? 'E-mail copiado' : 'Copiar e-mail'}
    </button>
  );
}

export function Contact() {
  return (
    <section className="contact" id="contato">
      <div className="container contact__inner">
        <h2 className="contact__title" data-reveal="hidden">
          Vamos conversar
        </h2>
        <p className="contact__lead" data-reveal="hidden">
          Se você tem uma vaga, um projeto ou só uma pergunta técnica, me manda uma mensagem. Respondo todas.
        </p>

        <div className="contact__actions" data-reveal="hidden">
          <a className="btn btn--primary contact__mail" href={`mailto:${profile.email}`}>
            <IconMail size={17} />
            {profile.email}
          </a>
          <CopyEmail />
        </div>

        <ul className="contact__links" data-reveal="hidden">
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
              <IconLinkedin size={16} />
              {profile.linkedinLabel}
              <IconArrowUpRight size={13} />
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer noopener">
              <IconGithub size={16} />
              {profile.githubLabel}
              <IconArrowUpRight size={13} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
