const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/routes/leaderboard.lazy.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove imports
content = content.replace(/import { AnimatedCounter } from "@\/components\/shared\/AnimatedCounter";\n/, '');
content = content.replace(/getLeaderboardStats,\n/, '');

// 2. Change titles
content = content.replace(/"Contributor Board"/, '"Wall of Fame"');
content = content.replace(/"Contribution Leaderboard"/, '"Community Wall of Fame"');
content = content.replace(/"Leaderboard Ranking"/, '"Community Contributors"');

// 3. Remove STATS OVERVIEW section
content = content.replace(/\{\/\* STATS OVERVIEW \*\/\}\n\s*<section className="py-12 border-b border-border bg-muted\/10">[\s\S]*?<\/section>\n/, '');

// 4. Milestones - replace rank strings
content = content.replace(/rank: "Top 3"/, 'rank: "Visionary"');
content = content.replace(/rank: "Top 10"/, 'rank: "Leader"');
content = content.replace(/rank: "Top 20"/, 'rank: "Mentor"');
content = content.replace(/rank: "Top 50"/, 'rank: "Impact Maker"');
content = content.replace(/rank: "Top 100"/, 'rank: "Contributor"');

// 5. myProfile mock logic - remove rank logic and just unlock all
content = content.replace(
  /const unlockedMilestoneIds = useMemo\(\(\) => \{[\s\S]*?return ids;\n\s*\}, \[myProfile.rank\]\);/,
  `const unlockedMilestoneIds = useMemo(() => ["m1", "m2", "m3", "m4", "m5"], []);`
);

// 6. Remove stats query
content = content.replace(/\/\/ React Query Fetching Stats\n\s*const \{ data: stats, isLoading: statsLoading, isError: statsError \} = useQuery\(\{[\s\S]*?\}\);\n/, '');

// 7. Remove Rank tags from cards
content = content.replace(/<div className="absolute right-6 top-6 rounded-full bg-orange-soft px-3 py-1 text-xs font-bold text-primary">\s*Rank #\{v.rank\}\s*<\/div>/g, '');
content = content.replace(/<div className="rounded-full bg-orange-soft px-2.5 py-0.5 text-xs font-bold text-primary">\s*Rank #\{v.rank\}\s*<\/div>/g, '');

// 8. Remove Score/Programs/Hours grids from cards
content = content.replace(/<div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-4 text-center">[\s\S]*?<\/div>\s*<\/div>\s*<\/motion\.div>/g, '</motion.div>');
// and the mobile version:
content = content.replace(/<div className="mt-6 grid grid-cols-3 gap-2 border-t border-border pt-4 text-center">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g, '</div></div>');

// 9. Remove Table headers
content = content.replace(/<TableHead className="w-12">Rank<\/TableHead>\n/, '');
content = content.replace(/<TableHead className="text-right">Score<\/TableHead>\n/, '');
content = content.replace(/<TableHead className="text-center">Programs<\/TableHead>\n/, '');
content = content.replace(/<TableHead className="text-center">Hours<\/TableHead>\n/, '');

// 10. Remove Table Cells
content = content.replace(
  /<TableCell className="font-bold text-foreground">[\s\S]*?<\/TableCell>\n/g,
  ''
);
// Wait, the score, programs, hours are also TableCells but they don't have unique easy markers. Let's do it individually:
content = content.replace(
  /<TableCell className="text-right font-semibold text-foreground">\s*\{timeframe === "monthly" \? v.monthlyScore : timeframe === "yearly" \? v.yearlyScore : v.allTimeScore\}\s*<\/TableCell>\n/g,
  ''
);
content = content.replace(
  /<TableCell className="text-center font-medium text-muted-foreground">\s*\{v.programsCompleted\}\s*<\/TableCell>\n/g,
  ''
);
content = content.replace(
  /<TableCell className="text-center font-medium text-muted-foreground">\s*\{v.hours\}h\s*<\/TableCell>\n/g,
  ''
);

// 11. Remove tooltip calculation
content = content.replace(/\{\/\* Ranking Transparency Tooltip \*\/\}\n\s*<TooltipProvider>[\s\S]*?<\/TooltipProvider>/, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated leaderboard.lazy.tsx');
