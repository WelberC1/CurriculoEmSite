import { useRef, useState, type KeyboardEvent } from 'react';
import { cases } from '../data/content';
import { CaseGlyph } from './Icons';
import './Cases.css';

const steps = [
  { key: 'problem', label: 'Problema' },
  { key: 'solution', label: 'Solução' },
  { key: 'result', label: 'Resultado' },
] as const;

export function Cases() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = cases[active];

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const moves: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next = active;
    if (e.key in moves) next = (active + moves[e.key] + cases.length) % cases.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = cases.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section className="section cases" id="casos">
      <div className="container">
        <header className="section__head" data-reveal="hidden">
          <h2 className="section__title">Problemas que resolvi</h2>
        </header>

        <div className="cases__explorer" data-reveal="hidden">
          <div className="cases__tabs" role="tablist" aria-label="Casos" onKeyDown={onKey}>
            {cases.map((c, i) => (
              <button
                key={c.title}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`caso-tab-${i}`}
                aria-selected={i === active}
                aria-controls="caso-painel"
                tabIndex={i === active ? 0 : -1}
                className="cases__tab"
                onClick={() => setActive(i)}
              >
                <span className="cases__tab-glyph" aria-hidden="true">
                  <CaseGlyph name={c.icon} size={18} />
                </span>
                <span className="cases__tab-title">{c.title}</span>
              </button>
            ))}
          </div>

          <div className="cases__panel" role="tabpanel" id="caso-painel" aria-labelledby={`caso-tab-${active}`} key={active}>
            <h3 className="cases__title">{item.title}</h3>
            <ol className="cases__path">
              {steps.map((step, i) => (
                <li key={step.key} className={`cases__step cases__step--${step.key}`} style={{ animationDelay: `${i * 90}ms` }}>
                  <span className="cases__label">{step.label}</span>
                  <p>{item[step.key]}</p>
                </li>
              ))}
            </ol>
            <ul className="cases__stack" aria-label="Tecnologias">
              {item.stack.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
