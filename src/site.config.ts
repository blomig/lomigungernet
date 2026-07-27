// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Lomig Unger',
  role: 'Concepteur de choses',
  email: 'lomig.unger@gmail.com',
  tagline: 'J''aime construire des choses. Si possible utiles',
  description:
    'Portfolio de Lomig Unger — conception et fabrication de choses, avec un souci de clarté, de détail et d’usage réel.',
  status: 'En train de construire des trucs · ouvert aux échanges',
  social: [
    { label: 'GitHub', href: 'https://github.com/blomig' },
    // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/...' },
    // { label: 'X', href: 'https://x.com/...' },
  ],
  locale: 'fr',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
] as const;
