const JOBS = [
  { id:1, title:'Senior Frontend Engineer', dept:'Engineering', apps:42, status:'active', posted:'Jan 15, 2025', keywords:['React','TypeScript','CSS','Git','REST'] },
  { id:2, title:'Product Designer', dept:'Design', apps:28, status:'active', posted:'Jan 18, 2025', keywords:['Figma','UX','Prototyping','Design Systems'] },
  { id:3, title:'Backend Node.js Developer', dept:'Engineering', apps:35, status:'active', posted:'Jan 20, 2025', keywords:['Node.js','Express','MongoDB','Docker','AWS'] },
  { id:4, title:'Data Analyst', dept:'Data', apps:19, status:'active', posted:'Jan 22, 2025', keywords:['SQL','Python','Tableau','Excel','Statistics'] },
  { id:5, title:'Marketing Manager', dept:'Marketing', apps:53, status:'closed', posted:'Dec 10, 2024', keywords:['SEO','Content','Analytics','Campaigns'] },
  { id:6, title:'Sales Engineer', dept:'Sales', apps:31, status:'active', posted:'Jan 25, 2025', keywords:['CRM','SaaS','Demos','Proposals'] },
];

const CANDIDATES = [
  { id:1, name:'Alex Johnson', role:'Senior Frontend Engineer', score:92, stage:'interview', email:'alex.j@email.com', skills:['React','TypeScript','CSS','Git'] },
  { id:2, name:'Maria Garcia', role:'Product Designer', score:88, stage:'reviewing', email:'m.garcia@email.com', skills:['Figma','UX','Prototyping'] },
  { id:3, name:'James Lee', role:'Backend Node.js Developer', score:76, stage:'applied', email:'j.lee@email.com', skills:['Node.js','Express','MongoDB'] },
  { id:4, name:'Priya Patel', role:'Data Analyst', score:84, stage:'hired', email:'p.patel@email.com', skills:['Python','SQL','Tableau'] },
  { id:5, name:'Tom Wilson', role:'Senior Frontend Engineer', score:61, stage:'applied', email:'t.wilson@email.com', skills:['React','CSS'] },
  { id:6, name:'Aisha Ndiaye', role:'Marketing Manager', score:90, stage:'interview', email:'a.ndiaye@email.com', skills:['SEO','Content','Analytics'] },
  { id:7, name:'Carlos Reyes', role:'Backend Node.js Developer', score:55, stage:'applied', email:'c.reyes@email.com', skills:['Node.js','Docker'] },
  { id:8, name:'Sophie Müller', role:'Product Designer', score:79, stage:'reviewing', email:'s.muller@email.com', skills:['Figma','Design Systems'] },
  { id:9, name:'Liam O\'Brien', role:'Sales Engineer', score:83, stage:'interview', email:'l.obrien@email.com', skills:['CRM','SaaS','Demos'] },
  { id:10,'name':'Yuki Tanaka', role:'Data Analyst', score:70, stage:'reviewing', email:'y.tanaka@email.com', skills:['SQL','Python'] },
];

const STAGES = ['applied','reviewing','interview','hired'];
const STAGE_LABELS = { applied:'Applied', reviewing:'Reviewing', interview:'Interviewing', hired:'Hired' };
const STAGE_COLORS = { applied:'muted', reviewing:'blue', interview:'orange', hired:'green' };

let draggedId = null;