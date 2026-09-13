export default {
  title: 'Nadia Sultan Rana',
  tagline:
    'Data modeling, reconciliation, data quality and structured evaluation.',
  // Held on the github.io URL until a second real project lands. CONTENT.md
  // holds that gate, and there is deliberately no CNAME file in this repo.
  url: 'https://nadiasrana.github.io',
  // The site is not launched. CONTENT.md holds the launch gate; until then
  // every page carries noindex and the draft banner.
  draft: true,
  author: {
    name: 'Nadia Sultan Rana',
    email: 'nadiasrana@gmail.com',
    role: 'Data analyst',
  },
  // The résumé PDF. Confirmed text-based: 9 embedded fonts, 102 text
  // operators, 15,860 extractable characters, zero image XObjects. It is
  // selectable, searchable and ATS-parseable, not a scan.
  //
  // `cleared` is false because the file's CONTENT.md conflicts are unresolved
  // — it carries GPA 4.00, the Northstar figures, the superseded R² numbers
  // and her phone number, all of which CONTENT.md blocks. Publishing the link
  // publishes those. Flip `cleared` to true once a cleaned PDF replaces it
  // and the download wires itself up: the passthrough, the link and the file
  // size all key off this one flag.
  resume: {
    file: 'nadia-sultan-rana-resume.pdf',
    href: '/assets/doc/nadia-sultan-rana-resume.pdf',
    cleared: false,
  },

  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'Project', href: '/projects/' },
    { label: 'About', href: '/about/' },
  ],
};
