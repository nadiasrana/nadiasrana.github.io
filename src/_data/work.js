/* The five work entries.
 *
 * Recovered from commit c80a500, where they were removed by the "Field Notes"
 * rebuild, then re-verified field by field against CONTENT.md rather than
 * trusted: that commit predates several corrections.
 *
 * These live as DATA, not markup, because the redesign's central rule is that
 * every instance of a component has the same shape. A shared schema enforced
 * in one file is what makes that true; five hand-written <article> blocks are
 * what made it false. See DESIGN_SYSTEM.md, RecordMetadata / Schema A.
 *
 * The schema is fixed. Every entry fills every slot:
 *
 *   org       the employer, as she would say it
 *   role      job title
 *   dates     as CONTENT.md instructs them printed
 *   tools     practices first, then named tools
 *   evidence  EXACTLY ONE headline figure: { value, label }
 *   body      prose paragraphs
 *   marker    a [NEEDS CONTENT]/[VERIFY] note, or null
 *
 * Nothing here may carry a figure that is not in CONTENT.md.
 */

export default [
  {
    // CONTENT.md, Q-ATTRIB, closed 12 Sep 2026: the entity resolution, the
    // geographic-corroboration rule, the routed records, the dictionary, the
    // defect log and the release audit are all Archroma's. An earlier session
    // put the routed records under Fraqt and was wrong.
    org: 'Archroma',
    role: 'Data analytics intern, Commercial Excellence',
    dates: 'Summer 2026',
    // SAP, Power BI and Excel are the ONLY tools attributable to Archroma.
    // Source: her own public LinkedIn post about the internship. The work-log
    // export names none, so nothing else joins them on a guess.
    tools: [
      'Entity resolution',
      'Reconciliation',
      'Data dictionary',
      'Human review',
      'SAP',
      'Power BI',
      'Excel',
    ],
    // One figure, and this is the one: CONTENT.md calls it "the strongest
    // single thing on the page ... the judgement call, not the volume."
    // The 3 systems, 203 fields, 31-item log and 40-point audit are all in
    // the prose below, where they already read well.
    evidence: { value: '1,080', label: 'ambiguous records routed to human review' },
    body: [
      'Three source systems held records for the same commercial entities and had never been linked. I did the entity resolution across them, using a matching rule that had to corroborate a candidate geographically before it would accept the match, and wrote the 203-field data dictionary that fixed the definitions in place afterwards.',
      'Roughly 1,080 records stayed ambiguous under that rule. Those went to human review rather than being resolved silently, which is the decision in the whole job: a match nobody can justify is worse than a gap everybody can see.',
      'The same pass produced a 31-item defect log and a 40-point release audit.',
    ],
    marker: null,
  },

  {
    org: 'Fraqt',
    // Q-FRAQT, CONTENT.md open question 2. No title on file. The slot stays
    // in the schema and carries a visible marker rather than a plausible
    // guess or a quietly dropped row.
    role: null,
    dates: 'Pre-launch',
    // CONTENT.md: design decisions only. No framework names, no index types,
    // no dimensions, no test counts.
    tools: ['Schema design', 'Corpus structuring'],
    // One figure is what is on record for this role. Padding it out with
    // Archroma's numbers is how an earlier version got the attribution wrong.
    evidence: { value: '1,194', label: 'federal source passages structured' },
    body: [
      'Structured 1,194 passages of public federal source material into the retrieval corpus: deciding what counts as one passage, what has to travel with it for a citation to hold, and where a document should be split.',
    ],
    marker: '[NEEDS CONTENT: Fraqt job title and dates — Q-FRAQT. The entry prints "Pre-launch." until they land.]',
  },

  {
    org: 'Summer Conference, University of the Pacific',
    role: 'Operations analytics assistant',
    dates: 'May – August 2025',
    tools: ['Data validation', 'SQL', 'Excel', 'SPSS', 'Power BI'],
    evidence: { value: '3,000+', label: 'participants in the program reported on' },
    body: [
      'A program serving more than 3,000 participants in Stockton, California, reported on from datasets held in three different tools. I validated the SQL, Excel and SPSS data behind the reporting, then published Power BI dashboards that could be re-run for each recurring report instead of rebuilt for it.',
    ],
    // This role is the source that confirms SQL. See CONTENT.md, Q-SQL.
    marker: null,
  },

  {
    org: 'Eberhardt Student Investment Fund',
    role: 'Student investment analyst',
    dates: 'January – May 2025',
    tools: ['Financial analysis', 'Valuation', 'Research documentation'],
    // The $6M is stated ONCE, here, so the VERIFY gate has one thing to drop.
    evidence: { value: '$6M', label: 'student-managed portfolio, approaching' },
    body: [
      'Equity research on S&P 500 companies at the University of the Pacific in Stockton, California, for a student-managed portfolio: financial statements, earnings materials, the assumptions a valuation rests on, and what the downside looked like if those assumptions were wrong.',
      'Each write-up carried its sources, its thesis, the catalysts, the valuation logic and the risk factors, because it had to survive a faculty-led investment committee arguing with it.',
    ],
    marker:
      '[VERIFY before launch: the $6M figure. Confirm the fund states its portfolio size publicly. Student-managed fund AUM usually is, but this is her only unverified public number and it names a real institution. If it is not public, the entry drops the figure and keeps the rest.]',
  },

  {
    org: 'Northstar Insight Group',
    role: 'Co-founder',
    dates: 'January 2023 – December 2024',
    tools: ['Scoping', 'Analysis', 'Reporting'],
    // CONTENT.md: the role can be named; $45K, 20 engagements and 12 clients
    // wait on Q1. The slot is filled honestly rather than left ragged.
    evidence: { value: 'Held', label: 'engagement and revenue figures, until confirmed' },
    body: [
      'Co-founded a student consulting group and ran the analyst side: scoping engagements, working out what a client’s question could actually be answered with, and writing up the findings.',
      'The engagement and revenue figures stay off this page until they are confirmed.',
    ],
    marker: null,
  },
];
