export const eventConfig = {
  name: 'ONTI 2027',
  fullName: 'Olimpiada Națională de Tehnologia Informației',
  host: 'Colegiul Național „Ștefan cel Mare” Suceava',
  shortHost: 'Colegiul Național „Ștefan cel Mare” Suceava',
  city: 'Suceava',
  country: 'România',
  year: 2027,
  // Singura sursă a datei. Completați ISO 8601 cu fus orar, de ex. 2027-04-20T09:00:00+03:00
  startDate: null as string | null,
  durationDays: 5,
  resultsAnonymized: true,
  resultsPollIntervalMs: 60_000,
  venue: 'Colegiul Național „Ștefan cel Mare” Suceava',
  address: '[DE COMPLETAT: adresă oficială]',
  email: '[DE COMPLETAT: email oficial]',
  phone: '[DE COMPLETAT: telefon oficial]',
  social: { facebook: '', instagram: '', youtube: '' },
  sections: [
    { id: 'tic-ix', short: 'TIC IX', title: 'TIC · clasa a IX-a', color: '#c45b3f', grade: 'IX', kind: 'tic' },
    { id: 'tic-x', short: 'TIC X', title: 'TIC · clasa a X-a', color: '#a97819', grade: 'X', kind: 'tic' },
    { id: 'tic-xi', short: 'TIC XI', title: 'TIC · clasa a XI-a', color: '#397765', grade: 'XI', kind: 'tic' },
    { id: 'tic-xii', short: 'TIC XII', title: 'TIC · clasa a XII-a', color: '#5269a7', grade: 'XII', kind: 'tic' },
    { id: 'csharp', short: 'C#', title: 'C# · clasele IX–XII', color: '#8055a6', grade: 'IX–XII', kind: 'csharp' }
  ]
} as const;

export const dateIsKnown = Boolean(eventConfig.startDate);
