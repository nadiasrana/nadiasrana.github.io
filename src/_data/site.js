export default {
  title: 'Nadia Sultan Rana',
  tagline:
    'Data modeling, reconciliation, data quality and structured evaluation.',
  // Held on the github.io URL until a second real project lands. CONTENT.md
  // holds that gate, and there is deliberately no CNAME file in this repo.
  url: 'https://nadiasrana.github.io',
  // Launched 13 Sep 2026 on the github.io URL. The custom domain is still
  // held on a second project; see CONTENT.md.
  draft: false,
  author: {
    name: 'Nadia Sultan Rana',
    email: 'nadiasrana@gmail.com',
    role: 'Data analyst',
    // Confirmed 13 Sep 2026 against her profile export, independently of the
    // résumé PDF — which remains unpublished for unrelated reasons.
    linkedin: 'https://www.linkedin.com/in/nadiasrana',
    location: 'Raleigh, NC. Open to remote contract work.',
  },
  // The résumé PDF. Confirmed text-based: 9 embedded fonts, 102 text
  // operators, 15,860 extractable characters, zero image XObjects. It is
  // selectable, searchable and ATS-parseable, not a scan.
  //
  // CLEARED 13 Sep 2026. The revised PDF fixed all three analytical errors —
  // the superseded R² pair, the $1,700 spread welded to Rapaport, and the
  // Fraqt title — and those were the only blockers.
  //
  // GPA, the Northstar figures, PostgreSQL, R and the phone number were
  // reviewed and deliberately RETAINED. They are accepted, not outstanding.
  // See CONTENT.md, "Résumé PDF".
  resume: {
    file: 'nadia-sultan-rana-resume.pdf',
    href: '/assets/doc/nadia-sultan-rana-resume.pdf',
    cleared: true,
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/#work' },
    { label: 'Project', href: '/projects/' },
    { label: 'About', href: '/about/' },
  ],
};
