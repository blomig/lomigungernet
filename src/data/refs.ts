export type RefLink = {
  label: string;
  href: string;
};

export type RefItem = {
  year?: string;
  source: string;
  title: string;
  href: string;
  note?: string;
  extras?: RefLink[];
};

export type RefSection = {
  id: string;
  title: string;
  items: RefItem[];
};

export const REF_SECTIONS: RefSection[] = [
  {
    id: 'presse',
    title: 'Presse',
    items: [
      {
        year: '2020',
        source: 'We Demain',
        title: 'Lomig Unger, l’intrapreneur',
        href: 'https://www.wedemain.fr/sauver-la-planete/tendances-de-demain/lomig-unger-lintrapreneur-1130030',
        note: 'Portrait par Elli Luveri. Le Square, Creative People Lab, Renault.',
      },
      {
        year: '2018',
        source: 'Forbes France',
        title: 'Rencontre du Square, le lab d’émergence collaborative de Renault',
        href: 'https://www.forbes.fr/business/rencontre-du-square-le-lab-demergence-collaborative-de-renault/',
        note: 'Entretien avec Nathalie Rey et Lomig Unger, cofondateurs.',
      },
    ],
  },
  {
    id: 'textes',
    title: 'Textes',
    items: [
      {
        year: '2019',
        source: 'Finance & Gestion',
        title: 'Les Labs d’innovation : structures d’apprentissage évolutives',
        href: 'https://www.finance-gestion.com/dossier/les-labs-dinnovation-structures-dapprentissage-evolutives/',
        note: 'Article signé. Labs interne et externe, Creative Lab et Square.',
        extras: [
          {
            label: 'Fiche auteur',
            href: 'https://www.finance-gestion.com/auteur/lomig-unger/',
          },
        ],
      },
    ],
  },
  {
    id: 'videos',
    title: 'Vidéos',
    items: [
      {
        year: '2014',
        source: 'YouTube',
        title: 'Creative Day — Incubation d’idées et innovation',
        href: 'https://www.youtube.com/watch?v=uvri6faEW1o',
        note: 'Présentation du Renault Creative Lab. Innovation Channel / Trendemic, 11 min.',
      },
      {
        year: '2022',
        source: 'YouTube',
        title: 'Un Lab, pourquoi faire ?',
        href: 'https://www.youtube.com/watch?v=blh3rpJlIq4',
        note: 'Conférence MTI Talks, université Paris-Dauphine.',
      },
    ],
  },
  {
    id: 'recherche',
    title: 'Recherche',
    items: [
      {
        year: '2001',
        source: 'Thèse — auteur',
        title: 'Charge d’aérosol par décharge électrique pour la filtration d’effluents particulaires',
        href: 'https://theses.fr/2001PA112308',
        note: 'Doctorat de physique, Université Paris 11 (Orsay). Direction : Jean-Pascal Borra.',
        extras: [
          { label: 'Fiche personne', href: 'https://theses.fr/060759933' },
          { label: 'Sudoc', href: 'https://www.sudoc.fr/060757396' },
        ],
      },
      {
        year: '2017',
        source: 'Thèse — direction',
        title:
          'Modéliser l’expansion des imaginaires en conception : dynamique des imaginaires, ingénierie de stimulation et nouvelles organisations de l’innovation',
        href: 'https://theses.fr/2017PSLEM017',
        note: 'Laura Le Du, sciences de gestion, Mines Paris / PSL. Co-direction avec Pascal Le Masson, Sophie Hooge et Dominique Levent.',
        extras: [{ label: 'HAL', href: 'https://pastel.hal.science/tel-01692434' }],
      },
      {
        year: '2015',
        source: 'Thèse — jury',
        title:
          'Le développement de l’ambidextrie contextuelle à l’aide d’un outil de gestion : étude de cas exploratoire du Fab Lab interne chez Renault',
        href: 'https://theses.fr/2015LYO30064',
        note: 'Amadou Lo, sciences de gestion, Lyon 3. Examinateur.',
        extras: [
          { label: 'PDF', href: 'https://theses.fr/api/v1/document/2015LYO30064' },
        ],
      },
      {
        year: '2019',
        source: 'Thèse — jury',
        title:
          'Transformer les capacités d’innovation : l’impact et l’influence des Fab Labs d’entreprise au sein de grands groupes',
        href: 'https://theses.fr/2019PSLED045',
        note: 'Matthew Fuller, sciences de gestion, Université Paris Dauphine-PSL. Examinateur.',
      },
    ],
  },
  {
    id: 'labs',
    title: 'Autour du Creative Lab',
    items: [
      {
        year: '2017',
        source: 'Revue Française de Gestion',
        title: 'Un Fab Lab d’entreprise pour favoriser l’ambidextrie des salariés. Étude du cas Renault',
        href: 'https://www.cairn.info/revue-francaise-de-gestion-2017-3-page-81.htm',
        note: 'Amadou Lô. Terrain : Fab Lab interne Renault.',
      },
      {
        year: '2019',
        source: 'Scandinavian Journal of Management',
        title: 'Unsilencing power dynamics within third spaces. The case of Renault’s Fab Lab',
        href: 'https://www.sciencedirect.com/science/article/abs/pii/S0956522117301045',
        note: 'Lô & Fatien Diochon.',
      },
      {
        year: '2014',
        source: 'AIMS / HAL',
        title: 'Fab Lab en entreprise : proposition d’ancrage théorique',
        href: 'https://univ-lyon3.hal.science/hal-00988083/',
        note: 'Amadou Lô. Étude en cours chez Renault.',
      },
    ],
  },
];
