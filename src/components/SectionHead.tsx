export function SectionHead({ title, meta }: { title: string; meta?: string }) {
  return (
    <div className="section__head" data-reveal="hidden">
      <h2>{title}</h2>
      <span className="section__rule" aria-hidden="true" />
      {meta && <span className="section__meta mono">{meta}</span>}
    </div>
  );
}
