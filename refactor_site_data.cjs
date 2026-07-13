const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/site-data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. ORG.mission
content = content.replace(
  'coaching over 5 lakh young Indians',
  'coaching young Indians'
);

// 2. Program type
content = content.replace(
  'outcomes: { label: string; value: string }[];',
  'impact: string[];'
);

// 3. PROGRAMS array - Replace outcomes with impact
content = content.replace(
  /outcomes:\s*\[\s*\{\s*label:\s*"Sessions delivered".*?\]/s,
  `impact: [\n      "Widespread community outreach",\n      "Consistent student engagement",\n      "Expanding educational partnerships",\n    ]`
);
content = content.replace(
  /outcomes:\s*\[\s*\{\s*label:\s*"Bootcamps run".*?\]/s,
  `impact: [\n      "Frequent innovation bootcamps",\n      "New student ventures launched",\n      "Growing mentor network",\n    ]`
);
content = content.replace(
  /outcomes:\s*\[\s*\{\s*label:\s*"Wellness camps".*?\]/s,
  `impact: [\n      "Regular wellness camps",\n      "Large-scale participation",\n      "Expanding city presence",\n    ]`
);
content = content.replace(
  /outcomes:\s*\[\s*\{\s*label:\s*"Trees planted".*?\]/s,
  `impact: [\n      "Extensive tree plantation drives",\n      "Continuous environmental campaigns",\n      "Dedicated volunteer force",\n    ]`
);
content = content.replace(
  /outcomes:\s*\[\s*\{\s*label:\s*"Educators trained".*?\]/s,
  `impact: [\n      "Empowered educators",\n      "Transformed learning environments",\n      "Massive student outreach",\n    ]`
);
content = content.replace(
  /outcomes:\s*\[\s*\{\s*label:\s*"Communities".*?\]/s,
  `impact: [\n      "Supported local communities",\n      "Uplifted families",\n      "Diverse grassroots programs",\n    ]`
);

// 4. STATS, IMPACT_TRENDS, IMPACT_BY_PROGRAM
content = content.replace(
  /export const STATS = \[.*?\];/s,
  ''
);
content = content.replace(
  /export const IMPACT_TRENDS = \[.*?\];/s,
  ''
);
content = content.replace(
  /export const IMPACT_BY_PROGRAM = \[.*?\];/s,
  ''
);

// 5. TESTIMONIALS
content = content.replace(
  'associated with Disha for the last 5 years',
  'associated with Disha for years'
);
content = content.replace(
  'for over 5 years',
  'for many years'
);

// 6. STORIES
content = content.replace(
  'landed her first paid internship in 9 months.',
  'landed her first paid internship.'
);
content = content.replace(
  'employs four peers.',
  'employs peers.'
);
content = content.replace(
  'Taught financial literacy to 500 students',
  'Taught financial literacy to students'
);
content = content.replace(
  'for over 500 rural students.',
  'for rural students.'
);
content = content.replace(
  'Guided 12 first-generation founders',
  'Guided first-generation founders'
);
content = content.replace(
  'guiding 12 aspiring student founders',
  'guiding aspiring student founders'
);
content = content.replace(
  'across 300 households and planted 1,200 trees.',
  'across households and planted trees.'
);

// 7. EVENTS
content = content.replace(
  'planted 1,200 trees',
  'planted trees'
);

// 8. BLOGS
content = content.replace(
  '5 Money Skills Every Indian Student Needs Before 20',
  'Money Skills Every Indian Student Needs'
);
content = content.replace(
  'A simple 50-30-20 split',
  'A simple split of needs, wants and savings'
);
content = content.replace(
  'starts at 18 always beats the one who starts at 28.',
  'starts young always beats the one who starts later.'
);
content = content.replace(
  'These four habits',
  'These habits'
);
content = content.replace(
  'ten real users',
  'real users'
);
content = content.replace(
  '12 is real',
  'school is real'
);

// 9. VOLUNTEER_ROLES (hours/week)
content = content.replace(
  '4 hrs / week',
  'Part-time'
);
content = content.replace(
  '2 hrs / week',
  'Part-time'
);
content = content.replace(
  '3 hrs / week',
  'Part-time'
);

// 10. MENTORS
content = content.replace(
  '"10+ years"',
  '"Extensive experience"'
);
content = content.replace(
  '"8 years"',
  '"Solid experience"'
);
content = content.replace(
  '"12 years"',
  '"Deep expertise"'
);


fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated site-data.ts');
