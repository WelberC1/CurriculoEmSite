import type { CSSProperties } from 'react';
import { skillGroups } from '../data/content';
import { SkillGlyph } from './Icons';
import './Skills.css';

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <header className="section__head" data-reveal="hidden">
          <h2 className="section__title">Stack</h2>
        </header>

        <dl className="skills">
          {skillGroups.map((group, i) => (
            <div className="skills__row" key={group.label} data-reveal="hidden" style={{ '--d': i % 4 } as CSSProperties}>
              <dt>
                <span className="skills__glyph" aria-hidden="true">
                  <SkillGlyph name={group.icon} size={17} />
                </span>
                {group.label}
              </dt>
              <dd>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
