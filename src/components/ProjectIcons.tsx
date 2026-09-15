import type { ProjectStatus } from '../data/content';

export { IconArrowUpRight, IconGithub } from './Icons';

const s = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function IconDesktopOrWeb({ kind }: { kind: ProjectStatus }) {
  return (
    <svg className="icon" width={14} height={14} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {kind === 'desktop' ? (
        <>
          <rect {...s} x="3.25" y="4.75" width="17.5" height="11.5" rx="2" />
          <path {...s} d="M9 19.75h6" />
          <path {...s} d="M12 16.5v3.25" />
        </>
      ) : (
        <>
          <circle {...s} cx="12" cy="12" r="8.25" />
          <path {...s} d="M3.75 12h16.5" />
          <path {...s} d="M12 3.75c2.1 2.25 3.25 5.15 3.25 8.25S14.1 18 12 20.25C9.9 18 8.75 15.1 8.75 12S9.9 6 12 3.75Z" />
        </>
      )}
    </svg>
  );
}
