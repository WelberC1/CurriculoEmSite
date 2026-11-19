import type { CaseIcon, SkillIcon, WorkIcon } from '../data/content';

type IconProps = {
  size?: number;
  className?: string;
};

const s = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function Svg({ size = 16, className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className ? `icon ${className}` : 'icon'}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Svg {...props}>
      <rect {...s} x="2.75" y="4.75" width="18.5" height="14.5" rx="2.5" />
      <path {...s} d="M3.5 7.5 11.02 12.6a1.75 1.75 0 0 0 1.96 0L20.5 7.5" />
    </Svg>
  );
}

export function IconArrowUpRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...s} d="M7.5 16.5 16.5 7.5" />
      <path {...s} d="M9.25 7.5h7.25v7.25" />
    </Svg>
  );
}

export function IconArrowDown(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...s} d="M12 4.75v14.5" />
      <path {...s} d="m6.5 13.75 5.5 5.5 5.5-5.5" />
    </Svg>
  );
}

export function IconCopy(props: IconProps) {
  return (
    <Svg {...props}>
      <rect {...s} x="9" y="9" width="11.25" height="11.25" rx="2" />
      <path {...s} d="M15 6.25v-.5a2 2 0 0 0-2-2H5.75a2 2 0 0 0-2 2V13a2 2 0 0 0 2 2h.5" />
    </Svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...s} d="m5 12.5 4.5 4.5L19 7.5" />
    </Svg>
  );
}

export function IconGithub(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M12 2.25a9.75 9.75 0 0 0-3.08 19c.49.09.67-.21.67-.47v-1.84c-2.71.59-3.29-1.16-3.29-1.16-.44-1.13-1.08-1.43-1.08-1.43-.89-.6.07-.59.07-.59.98.07 1.5 1.01 1.5 1.01.87 1.5 2.29 1.07 2.85.82.09-.63.34-1.07.62-1.31-2.17-.25-4.45-1.08-4.45-4.82 0-1.07.38-1.94 1-2.62-.1-.25-.44-1.24.1-2.58 0 0 .82-.26 2.68 1a9.3 9.3 0 0 1 4.88 0c1.86-1.26 2.68-1 2.68-1 .54 1.34.2 2.33.1 2.58.63.68 1 1.55 1 2.62 0 3.75-2.29 4.57-4.47 4.81.35.3.67.9.67 1.82v2.7c0 .26.18.57.68.47A9.75 9.75 0 0 0 12 2.25Z"
      />
    </Svg>
  );
}

export function IconLinkedin(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M4.98 3.5a2.02 2.02 0 1 0 0 4.04 2.02 2.02 0 0 0 0-4.04ZM3.25 9.06h3.46V20.5H3.25V9.06Zm5.66 0h3.32v1.56h.05c.46-.87 1.59-1.79 3.28-1.79 3.5 0 4.15 2.3 4.15 5.3v6.37h-3.46v-5.65c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.99v5.74H8.91V9.06Z"
      />
    </Svg>
  );
}

export function IconApi(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...s} d="M8.25 7.5 4 12l4.25 4.5" />
      <path {...s} d="M15.75 7.5 20 12l-4.25 4.5" />
      <path {...s} d="M13.5 5.5 10.5 18.5" />
    </Svg>
  );
}

function IconExchange(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...s} d="M3.75 8.75h13.5" />
      <path {...s} d="m14 5.5 3.25 3.25L14 12" />
      <path {...s} d="M20.25 15.25H6.75" />
      <path {...s} d="M10 12l-3.25 3.25L10 18.5" />
    </Svg>
  );
}

function IconFile(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...s} d="M13.5 3.75H7a2 2 0 0 0-2 2v12.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.25l-5.5-5.5Z" />
      <path {...s} d="M13.25 4v5.25h5.25" />
      <path {...s} d="M8.75 14h6.5" />
      <path {...s} d="M8.75 17h4" />
    </Svg>
  );
}

function IconBank(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...s} d="M3.75 9.25 12 4.5l8.25 4.75" />
      <path {...s} d="M5.75 9.75v8" />
      <path {...s} d="M10 9.75v8" />
      <path {...s} d="M14 9.75v8" />
      <path {...s} d="M18.25 9.75v8" />
      <path {...s} d="M3.5 19.75h17" />
    </Svg>
  );
}

function IconAutomation(props: IconProps) {
  return (
    <Svg {...props}>
      <rect {...s} x="4.25" y="8.25" width="15.5" height="11" rx="2.5" />
      <path {...s} d="M12 4.5v3.75" />
      <circle {...s} cx="9" cy="13" r="1.1" />
      <circle {...s} cx="15" cy="13" r="1.1" />
      <path {...s} d="M9.5 16.5h5" />
    </Svg>
  );
}

function IconDatabase(props: IconProps) {
  return (
    <Svg {...props}>
      <ellipse {...s} cx="12" cy="6.25" rx="7.25" ry="2.75" />
      <path {...s} d="M4.75 6.25v11.5c0 1.52 3.25 2.75 7.25 2.75s7.25-1.23 7.25-2.75V6.25" />
      <path {...s} d="M4.75 12c0 1.52 3.25 2.75 7.25 2.75s7.25-1.23 7.25-2.75" />
    </Svg>
  );
}

function IconPipeline(props: IconProps) {
  return (
    <Svg {...props}>
      <circle {...s} cx="6" cy="6.5" r="2.25" />
      <circle {...s} cx="6" cy="17.5" r="2.25" />
      <circle {...s} cx="18" cy="12" r="2.25" />
      <path {...s} d="M8.25 6.5h3.5a4 4 0 0 1 4 4v.5" />
      <path {...s} d="M8.25 17.5h3.5a4 4 0 0 0 4-4v-.5" />
    </Svg>
  );
}

function IconCode(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...s} d="M8.5 8 4.75 12l3.75 4" />
      <path {...s} d="M15.5 8 19.25 12l-3.75 4" />
    </Svg>
  );
}

function IconServer(props: IconProps) {
  return (
    <Svg {...props}>
      <rect {...s} x="3.75" y="4.25" width="16.5" height="6" rx="1.75" />
      <rect {...s} x="3.75" y="13.75" width="16.5" height="6" rx="1.75" />
      <path {...s} d="M7.25 7.25h.01" />
      <path {...s} d="M7.25 16.75h.01" />
    </Svg>
  );
}

function IconFrontend(props: IconProps) {
  return (
    <Svg {...props}>
      <rect {...s} x="3.25" y="4.75" width="17.5" height="14.5" rx="2" />
      <path {...s} d="M3.5 9h17" />
      <path {...s} d="M9 9.25v10" />
    </Svg>
  );
}

function IconAi(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...s} d="M11 3.75 12.4 7.6 16.25 9 12.4 10.4 11 14.25 9.6 10.4 5.75 9 9.6 7.6 11 3.75Z" />
      <path {...s} d="m17.5 14 .75 2 2 .75-2 .75-.75 2-.75-2-2-.75 2-.75.75-2Z" />
    </Svg>
  );
}

function IconCloud(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        {...s}
        d="M7.5 18.25h9.25a3.75 3.75 0 0 0 .4-7.48 5.5 5.5 0 0 0-10.6-1.3A4.09 4.09 0 0 0 7.5 18.25Z"
      />
    </Svg>
  );
}

function IconDesktop(props: IconProps) {
  return (
    <Svg {...props}>
      <rect {...s} x="3.25" y="4.75" width="17.5" height="11.5" rx="2" />
      <path {...s} d="M9 19.75h6" />
      <path {...s} d="M12 16.5v3.25" />
    </Svg>
  );
}

function IconGlobe(props: IconProps) {
  return (
    <Svg {...props}>
      <circle {...s} cx="12" cy="12" r="8.25" />
      <path {...s} d="M3.75 12h16.5" />
      <path {...s} d="M12 3.75c2.1 2.25 3.25 5.15 3.25 8.25S14.1 18 12 20.25C9.9 18 8.75 15.1 8.75 12S9.9 6 12 3.75Z" />
    </Svg>
  );
}

function IconOcr(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...s} d="M4.25 8.5V6.25a2 2 0 0 1 2-2H8.5" />
      <path {...s} d="M15.5 4.25h2.25a2 2 0 0 1 2 2V8.5" />
      <path {...s} d="M19.75 15.5v2.25a2 2 0 0 1-2 2H15.5" />
      <path {...s} d="M8.5 19.75H6.25a2 2 0 0 1-2-2V15.5" />
      <path {...s} d="M7.75 12h8.5" />
    </Svg>
  );
}

function IconPortal(props: IconProps) {
  return (
    <Svg {...props}>
      <rect {...s} x="3.25" y="4.75" width="17.5" height="14.5" rx="2" />
      <path {...s} d="M3.5 9.25h17" />
      <path {...s} d="M6.5 7h.01" />
      <path {...s} d="M9 7h.01" />
    </Svg>
  );
}

function IconLaptop(props: IconProps) {
  return (
    <Svg {...props}>
      <rect {...s} x="4.25" y="5.25" width="15.5" height="10" rx="1.75" />
      <path {...s} d="M2.5 18.75h19" />
    </Svg>
  );
}

function IconCap(props: IconProps) {
  return (
    <Svg {...props}>
      <path {...s} d="M12 4.25 21.25 8.5 12 12.75 2.75 8.5 12 4.25Z" />
      <path {...s} d="M6.5 10.75v4.5c0 1.52 2.46 2.75 5.5 2.75s5.5-1.23 5.5-2.75v-4.5" />
      <path {...s} d="M20.5 9v5.25" />
    </Svg>
  );
}

function IconBadge(props: IconProps) {
  return (
    <Svg {...props}>
      <circle {...s} cx="12" cy="9.25" r="5.5" />
      <path {...s} d="m8.75 13.75-1.5 6 4.75-2.5 4.75 2.5-1.5-6" />
    </Svg>
  );
}

function IconBriefcase(props: IconProps) {
  return (
    <Svg {...props}>
      <rect {...s} x="3.25" y="7.25" width="17.5" height="12" rx="2" />
      <path {...s} d="M9 7.25V6a1.75 1.75 0 0 1 1.75-1.75h2.5A1.75 1.75 0 0 1 15 6v1.25" />
      <path {...s} d="M3.5 12.25h17" />
    </Svg>
  );
}

export { IconCap, IconBadge, IconBriefcase };

const workIcons: Record<WorkIcon, (p: IconProps) => React.JSX.Element> = {
  web: IconFrontend,
  desktop: IconDesktop,
  automation: IconAutomation,
  exchange: IconExchange,
  database: IconDatabase,
  pipeline: IconPipeline,
};

const caseIcons: Record<CaseIcon, (p: IconProps) => React.JSX.Element> = {
  portal: IconPortal,
  laptop: IconLaptop,
  bank: IconBank,
  file: IconFile,
  ocr: IconOcr,
  automation: IconAutomation,
};

const skillIcons: Record<SkillIcon, (p: IconProps) => React.JSX.Element> = {
  code: IconCode,
  frontend: IconFrontend,
  ai: IconAi,
  server: IconServer,
  database: IconDatabase,
  cloud: IconCloud,
  desktop: IconDesktop,
  pipeline: IconPipeline,
  exchange: IconExchange,
  globe: IconGlobe,
};

export function WorkGlyph({ name, size = 20 }: { name: WorkIcon; size?: number }) {
  const Glyph = workIcons[name];
  return <Glyph size={size} />;
}

export function CaseGlyph({ name, size = 20 }: { name: CaseIcon; size?: number }) {
  const Glyph = caseIcons[name];
  return <Glyph size={size} />;
}

export function SkillGlyph({ name, size = 17 }: { name: SkillIcon; size?: number }) {
  const Glyph = skillIcons[name];
  return <Glyph size={size} />;
}

export function Monogram({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="8"
        fill="#0c0c12"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="1.5"
      />
      <path
        d="M7.5 10.5 11.4 21.5 16 13.4 20.6 21.5 24.5 10.5"
        fill="none"
        stroke="#a78bfa"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
