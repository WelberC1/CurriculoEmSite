import { skillGroups } from '../data/content';
import { SkillGlyph } from './Icons';
import { SectionHead } from './SectionHead';
import './Skills.css';

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead title="Skills e tecnologias" />

        <dl className="skills" data-reveal="hidden">
          {skillGroups.map((group) => (
            <div className="skills__group" key={group.label}>
              <dt>
                <span className="skills__glyph" aria-hidden="true">
                  <SkillGlyph name={group.icon} size={16} />
                </span>
                {group.label}
              </dt>
              <dd>
                <ul>
                  {group.items.map((item) => (
                    <li key={item} className="tag">
                      {item}
                    </li>
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
