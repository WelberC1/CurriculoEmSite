const base = import.meta.env.BASE_URL;

export const profile = {
  name: 'Welber Caetano Santos',
  firstName: 'Welber Caetano',
  lastName: 'Santos',
  role: 'Desenvolvedor de Software Pleno',
  lead: 'Cerca de 3 anos de experiência em .NET e C#. Desenvolvo aplicações web, sistemas desktop, APIs REST e automações, além de integrações com APIs, arquivos e ERPs como SAP e Protheus.',
  email: 'welbercaetanos1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/welber-caetano/',
  linkedinLabel: 'linkedin.com/in/welber-caetano',
  github: 'https://github.com/WelberC1',
  githubLabel: 'github.com/WelberC1',
  avatar: `${base}avatar.jpg`,
} as const;

export const heroFacts = [
  { value: '3 anos', label: 'de experiência' },
  { value: 'Pós-graduando', label: 'no IFSP' },
] as const;

export const about = {
  paragraphs: [
    'Desenvolvo sistemas de ponta a ponta: aplicações web em ASP.NET Core e Razor Pages, sistemas desktop em Windows Forms e Avalonia UI, APIs REST em .NET 8+ e automações de processos. No dia a dia trabalho com C#, Python, JavaScript, SQL e VBA.',
    'Atuo no ciclo completo, do levantamento de requisitos e da modelagem de dados em SQL Server e PostgreSQL ao deploy automatizado por CI/CD no Azure DevOps, incluindo relatórios com KPIs para a gestão.',
    'Também integro sistemas: consumo APIs governamentais e bancárias, gero arquivos em layout fechado (JSON, XML, TXT e Excel) que os clientes usam nos próprios ERPs, como SAP e Protheus, e automatizo rotinas com Selenium, OCR (Azure Document Intelligence) e macros VBA.',
  ],
} as const;

export type CaseIcon = 'portal' | 'laptop' | 'bank' | 'file' | 'ocr' | 'automation';

export const cases: { icon: CaseIcon; title: string; problem: string; solution: string; result: string; stack: string[] }[] = [
  {
    icon: 'portal',
    title: 'Portal do cliente e intranet',
    problem:
      'O portal que os clientes usam e a intranet da empresa já existiam, e recebem demanda nova o tempo todo: mais um relatório, mais uma métrica, mais um dashboard, mais uma tela de acompanhamento.',
    solution:
      'Entrego essas evoluções nos dois, com novos relatórios, indicadores, dashboards e telas de acompanhamento, junto das APIs REST em .NET 8+ que alimentam as telas e da manutenção do front em Razor Pages, JavaScript, HTML e CSS.',
    result: 'O portal cobre hoje mais relatórios e indicadores do que cobria antes.',
    stack: ['C#', '.NET 8+', 'ASP.NET Core', 'Razor Pages', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    icon: 'laptop',
    title: 'Aplicações desktop',
    problem:
      'Nem toda necessidade da operação cabe no navegador: parte do fluxo precisa de um programa rodando na máquina do usuário, e cada área pede uma coisa diferente.',
    solution:
      'Desenvolvo aplicações desktop em Windows Forms e Avalonia UI, como automações a programas que a equipe usa todo dia para acompanhar e gerenciar o fluxo da empresa.',
    result: 'Cada área tem a ferramenta que precisa, rodando onde o trabalho acontece.',
    stack: ['C#', '.NET', 'Windows Forms', 'Avalonia UI', 'Selenium', 'Playwright', 'SQL Server'],
  },

  {
    icon: 'bank',
    title: 'Conciliação bancária',
    problem: 'A conferência dos lançamentos bancários era feita à mão.',
    solution:
      'Desenvolvi a integração com as APIs dos bancos que baixa os lançamentos e concilia com a base automaticamente.',
    result: 'Uma ferramenta desenvolvida para apoiar a rotina do setor financeiro da empresa, facilitando a conciliação das transações.',
    stack: ['C#', '.NET 8+', 'APIs bancárias', 'CNAB', 'SQL Server'],
  },

  {
    icon: 'file',
    title: 'Arquivos para emissão de nota fiscal',
    problem:
      'Cada cliente precisava dos dados em um formato e um layout diferentes para emitir a nota fiscal no ERP dele.',
    solution:
      'Desenvolvi soluções para a emissão de arquivos personalizados para cada layout aceito pelo ERP do cliente, em vários formatos distintos, como JSON, XML, TXT e Excel. O cliente recebe este arquivo e integra ele no seu ERP como SAP e Protheus.',
    result: 'Um sistema atende clientes com ERPs e layouts diferentes, sem versão separada para cada um.',
    stack: ['C#', 'ASP.NET Core', 'VBA', 'SAP', 'Protheus', 'XML', 'JSON', 'TXT'],
  },
  {
    icon: 'ocr',
    title: 'Leitura de documentos com OCR',
    problem:
      'Informações operacionais chegavam dentro de PDFs e precisavam ser digitadas no sistema à mão, campo por campo.',
    solution:
      'Automatizei a leitura com OCR usando Azure Document Intelligence e outras ferramentas, que extrai os campos do documento e devolve os dados já estruturados para o sistema.',
    result: 'O conteúdo dos documentos entra no sistema sem digitação.',
    stack: ['Azure Document Intelligence', 'C#', '.NET 8+'],
  },
  {
    icon: 'automation',
    title: 'RPA e automação de processos',
    problem:
      'Rotinas operacionais e financeiras exigiam repetir as mesmas etapas em sistemas de terceiros, todos os dias.',
    solution:
      'Desenvolvi robôs em Selenium, com C# e Python, que executam essas etapas sozinhos, além de macros VBA para as rotinas que vivem dentro do Excel.',
    result: 'As rotinas repetitivas passaram a rodar sem operador.',
    stack: ['Selenium', 'C#', 'Python', 'VBA'],
  },
];

export type WorkIcon = 'web' | 'desktop' | 'automation' | 'exchange' | 'database' | 'pipeline';

export const workAreas: { icon: WorkIcon; title: string; text: string }[] = [
  {
    icon: 'web',
    title: 'Aplicações web',
    text: 'Sistemas web em ASP.NET Core, Razor Pages e JavaScript, com APIs REST em .NET 8+ por trás.',
  },
  {
    icon: 'desktop',
    title: 'Sistemas desktop',
    text: 'Aplicações em Windows Forms e Avalonia UI para a operação do dia a dia.',
  },
  {
    icon: 'automation',
    title: 'Automação de processos',
    text: 'Robôs em Selenium (C# e Python), OCR com Azure Document Intelligence e macros VBA.',
  },
  {
    icon: 'exchange',
    title: 'Integrações',
    text: 'APIs governamentais e bancárias, troca de arquivos (JSON, XML, TXT, Excel) e ERPs como SAP e Protheus.',
  },
  {
    icon: 'database',
    title: 'Dados e persistência',
    text: 'Modelagem e otimização da camada de dados em SQL Server e PostgreSQL com Entity Framework.',
  },
  {
    icon: 'pipeline',
    title: 'CI/CD e Azure',
    text: 'Pipelines no Azure DevOps automatizando build e deploy, com a infraestrutura hospedada em Azure.',
  },
];

export type ProjectStatus = 'desktop' | 'web';

export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  repo: string;
  repoLabel: string;
  secondaryRepo?: { url: string; label: string };
  kind: ProjectStatus;
  kindLabel: string;
  languages: { name: string; bytes: number }[];
};

export const featuredProjects: Project[] = [
  {
    name: 'Trilha da Multiplicação',
    tagline: 'Aplicação desktop gamificada para o ensino da multiplicação',
    description:
      'Aplicação desktop gamificada em Avalonia UI, nascida do meu Trabalho de Graduação sobre o uso das TICs no ensino da multiplicação para o Ensino Fundamental I, aprovado com nota máxima. O aluno avança por uma trilha de fases, ganha estrelas e pontos, disputa o ranking e desbloqueia conquistas. Por trás dela, uma API própria em ASP.NET Core guarda conta, progresso e ranking.',
    highlights: [
      'Trilha de 12 fases em Avalonia UI, com progressão sequencial, estrelas por fase e barra de progresso',
      'Interface ilustrada e animada para o público infantil, com avatares e telas de conta, ranking e conquistas',
      'Sistema de pontos que alimenta o ranking, e conquistas desbloqueadas conforme o aluno avança',
      'API em ASP.NET Core com EF Core e SQL Server por trás, cuidando de login, progresso e ranking',
    ],
    stack: ['C#', '.NET 10', 'Avalonia UI', 'ASP.NET Core', 'EF Core', 'SQL Server'],
    repo: 'https://github.com/WelberC1/TrilhaDaMultiplicacao.Desktop',
    repoLabel: 'TrilhaDaMultiplicacao.Desktop',
    secondaryRepo: {
      url: 'https://github.com/WelberC1/TrilhaDaMultiplicacaoAPI',
      label: 'TrilhaDaMultiplicacaoAPI',
    },
    kind: 'desktop',
    kindLabel: 'Desktop + API',
    languages: [{ name: 'C#', bytes: 175154 }],
  },
  {
    name: 'WorldExplorer',
    tagline: 'Navegue pelos continentes, países e cidades do planeta',
    description:
      'Uma aplicação web em Razor Pages onde um único campo de busca cobre país, capital, região e cidade ao mesmo tempo. Cada resultado abre uma página com bandeira, população, moeda, idiomas, fuso horário e países vizinhos — e, para cidades, foto e resumo reais puxados da Wikipédia.',
    highlights: [
      'Dados reais buscados ao vivo de serviços públicos, sem chave de API e sem cadastro',
      'Busca única resolvendo quatro tipos de entidade diferentes: país, capital, região e cidade',
      'Páginas de detalhe com bandeira, população, moeda, idiomas, fuso horário e vizinhos',
      'Front-end escrito à mão em HTML e CSS, sem framework de UI',
    ],
    stack: ['C#', '.NET 10', 'Razor Pages', 'HTML', 'CSS'],
    repo: 'https://github.com/WelberC1/WorldExplorer',
    repoLabel: 'WorldExplorer',
    kind: 'web',
    kindLabel: 'Aplicação web',
    languages: [
      { name: 'C#', bytes: 34786 },
      { name: 'HTML', bytes: 25700 },
      { name: 'CSS', bytes: 21575 },
    ],
  },
];

export const otherRepos = [
  {
    name: 'PizzaSys',
    description: 'Backend de pizzaria em Clean Architecture. Ainda na fase de proposta e arquitetura.',
    language: 'C#',
    url: 'https://github.com/WelberC1/PizzaSys',
  },
  {
    name: 'MinhaApiComSQLite',
    description: 'API de produtos com persistência em SQLite.',
    language: 'C#',
    url: 'https://github.com/WelberC1/MinhaApiComSQLite',
  },
] as const;

export type SkillIcon =
  | 'code'
  | 'frontend'
  | 'server'
  | 'database'
  | 'cloud'
  | 'desktop'
  | 'pipeline'
  | 'exchange'
  | 'ai'
  | 'globe';

export const skillGroups: { label: string; icon: SkillIcon; items: string[] }[] = [

  { label: 'Linguagens', icon: 'code', items: ['C#', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'VBA'] },
  {
    label: 'Front-end',
    icon: 'frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'],
  },
  {
    label: 'Back-end',
    icon: 'server',

    items: ['.NET 8+', 'ASP.NET Core', 'Entity Framework', 'APIs REST', 'Razor Pages', 'JWT'],
  },
  { label: 'Bancos de dados', icon: 'database', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'T-SQL'] },
  { label: 'Cloud', icon: 'cloud', items: ['Azure App Service', 'Azure SQL', 'Azure DevOps Pipelines'] },
  { label: 'Desktop', icon: 'desktop', items: ['Windows Forms', 'Avalonia UI'] },
  { label: 'DevOps', icon: 'pipeline', items: ['Azure DevOps', 'CI/CD', 'Git'] },
  {
    label: 'Integrações',
    icon: 'exchange',
    items: [
      'APIs governamentais',
      'APIs bancárias',
      'Integração com SAP',
      'Integração com Protheus',
      'CNAB',
      'Azure Document Intelligence',
      'OCR',
      'Selenium',
    ],
  },
  {
    label: 'Ferramentas de IA',
    icon: 'ai',
    items: ['Claude Code', 'Codex', 'Replit', 'MCPs'],
  },
  { label: 'Idiomas', icon: 'globe', items: ['Português (nativo)', 'Inglês (avançado)', 'Espanhol (básico)'] },
];

export const experience = [
  {
    role: 'Desenvolvedor .NET Pleno',
    company: 'J. Moraes Solução em Logística Internacional',
    location: 'São Paulo, SP',
    period: '2024 — Atual',
    current: true,
    bullets: [
      'Desenvolvimento e manutenção de aplicações web em ASP.NET Core com Razor Pages e de APIs REST em .NET 8+ que servem dados aos sistemas internos e a clientes externos.',
      'Aplicações desktop em Windows Forms e Avalonia UI para a operação da empresa.',
      'Automação de processos com Selenium (C# e Python), OCR para extrair dados de PDFs e macros VBA em Excel.',
      'Integração com APIs externas governamentais e bancárias para automação de processos operacionais e financeiros.',
      'Conciliação bancária automatizada consumindo APIs de bancos, substituindo a conferência manual de lançamentos.',
      'Sistema que gera os arquivos em layout fechado — JSON, XML, TXT e Excel — usados pelos clientes para emitir nota fiscal em ERPs como SAP e Protheus.',
      'Relatórios com KPIs operacionais e financeiros usados como apoio à decisão pela gestão.',
      'Pipelines de CI/CD no Azure DevOps automatizando build e deploy, com infraestrutura em Azure.',
      'Modelagem e otimização da persistência em SQL Server e PostgreSQL com Entity Framework.',
    ],
  },
  {
    role: 'Desenvolvedor .NET Júnior',
    company: 'FATEC Guarulhos',
    location: 'Guarulhos, SP',
    period: '2022 — 2023',
    current: false,
    bullets: [
      'Liderança da equipe de desenvolvimento de uma aplicação desktop acadêmica em Windows Forms, definindo padrões de código, divisão de tarefas e prazos.',
      'Implementação da camada de persistência em MySQL, incluindo modelagem do banco e escrita das consultas.',
    ],
  },
] as const;

export const education = [
  {
    course: 'Pós-graduação Lato Sensu, Especialização em Computação Aplicada a Sistemas',
    school: 'Instituto Federal de Educação, Ciência e Tecnologia de São Paulo — IFSP',
    period: '2026 — Atual',
    current: true,
    notes: [],
  },
  {
    course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    school: 'FATEC Guarulhos',
    period: '2021 — 2024',
    current: false,
    notes: [
      'TCC aprovado com nota máxima (10): aplicativo de apoio ao ensino de matemática para o Ensino Fundamental I.',
      'Monitor da disciplina de Programação em Microinformática.',
      'Instrutor de workshop de Robótica com Arduino.',
    ],
  },
] as const;

export const certifications = [
  { name: 'AWS Machine Learning Foundations', issuer: 'AWS Educate', year: '2023' },
  { name: 'Cybersecurity Essentials', issuer: 'Cisco', year: '2022' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco', year: '2022' },
  { name: 'Instrutor de Oficina de Robótica', issuer: 'FATEC Guarulhos', year: '2023' },
] as const;

export const navSections = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'casos', label: 'Casos' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'skills', label: 'Stack' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'contato', label: 'Contato' },
] as const;
