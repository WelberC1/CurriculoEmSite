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
    <button type="button" className="contact__copy" onClick={copy} aria-live="polite">
      {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
      {copied ? 'E-mail copiado' : 'Copiar e-mail'}
    </button>
  );
}

export function Contact() {
  return (
    <section className="section contact" id="contato">
      <div className="container">
        <div className="contact__panel" data-reveal="hidden">
          <div className="contact__field" aria-hidden="true" />

          <div className="contact__intro">
            <h2>Vamos conversar</h2>
            <p>
              Se você tem um projeto em mente ou só uma pergunta técnica, me manda uma mensagem. Respondo
              todas.
            </p>

            <div className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                <IconMail size={16} />
                {profile.email}
              </a>
              <CopyEmail />
            </div>
          </div>

          <ul className="contact__links">
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
                <IconLinkedin size={18} />
                <span>
                  <strong>LinkedIn</strong>
                  <em className="mono">{profile.linkedinLabel}</em>
                </span>
                <IconArrowUpRight size={15} />
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer noopener">
                <IconGithub size={18} />
                <span>
                  <strong>GitHub</strong>
                  <em className="mono">{profile.githubLabel}</em>
                </span>
                <IconArrowUpRight size={15} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
