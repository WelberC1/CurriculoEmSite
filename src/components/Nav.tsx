import { useCallback, useEffect, useState } from 'react';
import { navSections, profile } from '../data/content';
import { useActiveSection } from '../hooks/useReveal';
import { IconMail, Monogram } from './Icons';
import './Nav.css';

const sectionIds = navSections.map((s) => s.id);

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState(false);

  useActiveSection(sectionIds, useCallback((id: string) => setActive(id), []));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav__inner container">
        <a className="nav__brand" href="#topo" aria-label={`${profile.name} — início`}>
          <Monogram size={26} />
          <span className="nav__brand-text">{profile.name}</span>
        </a>

        <nav className="nav__links" aria-label="Seções da página">
          <ul>
            {navSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={active === section.id ? 'is-active' : undefined}
                  aria-current={active === section.id ? 'true' : undefined}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <a className="btn btn--primary btn--sm nav__cta" href={`mailto:${profile.email}`}>
            <IconMail size={15} />
            Falar comigo
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-mobile"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="visually-hidden">{menuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
            <span className={`nav__bars${menuOpen ? ' is-open' : ''}`} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div id="nav-mobile" className={`nav__mobile${menuOpen ? ' is-open' : ''}`} hidden={!menuOpen}>
        <ul className="container">
          {navSections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} onClick={() => setMenuOpen(false)}>
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
