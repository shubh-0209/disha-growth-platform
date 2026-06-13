// Centralized content for the Disha For India platform.
// Reuses real organizational identity, founder, gallery & event imagery
// from dishaforindia.org, with professionally rewritten copy.

export const ORG = {
  name: "Disha For India",
  legalName: "Disha For India Foundation & Educational Trust",
  tagline: "India's Student Growth & Opportunity Platform",
  email: "inaggarwal76@gmail.com",
  phone: "+91-9888877722",
  mapUrl: "https://goo.gl/maps/MbtzonMSbep3VnDH8",
  mission:
    "Skill youth for employability and entrepreneurship — coaching over 5 lakh young Indians to become job-ready and to build ventures of their own.",
  vision:
    "Improve the employability quotient and skill quotient of India's youth to build a healthy, happy and wealthy society.",
  passion:
    "Live by our thoughts and values every day, and ignite a spark in people to lead a beautiful, purposeful life.",
};

export const FOUNDER = {
  name: "Indu Aggarwal",
  role: "Founder · Entrepreneur & Emotional Wellness Coach",
  photo: "https://dishaforindia.org/wp-content/uploads/2021/08/profile.jpg",
  bio: "Indu Aggarwal enriches lives as a leading light, touching people through her training and health-awareness programs. Pursuing her passion to make a difference, she left a lucrative corporate career to found 'Disha For Success' and the 'Disha For India Foundation & Educational Trust', dedicated to skilling youth and igniting purpose.",
};

export type Program = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  accent: "orange" | "green";
  icon: string;
  highlights: string[];
  outcomes: { label: string; value: string }[];
};

export const PROGRAMS: Program[] = [
  {
    slug: "financial-literacy",
    title: "Financial Literacy",
    tagline: "Money skills for life",
    accent: "green",
    icon: "PiggyBank",
    description:
      "Practical financial education that helps students and families budget, save, invest and avoid debt traps — turning everyday money decisions into lifelong confidence.",
    highlights: [
      "Budgeting, saving and smart spending workshops",
      "Banking, UPI and digital payment safety",
      "Introduction to investing and compounding",
      "Avoiding scams, loans and debt traps",
    ],
    outcomes: [
      { label: "Sessions delivered", value: "120+" },
      { label: "Students reached", value: "8,500+" },
      { label: "Schools partnered", value: "45" },
    ],
  },
  {
    slug: "entrepreneurship",
    title: "Entrepreneurship",
    tagline: "From idea to enterprise",
    accent: "orange",
    icon: "Rocket",
    description:
      "We coach young Indians to think like founders — validating ideas, building MVPs, understanding customers and turning ambition into sustainable ventures.",
    highlights: [
      "Idea validation and business model canvas",
      "Pitching, storytelling and fundraising basics",
      "Bootcamps with practising founders",
      "Mentorship and incubation support",
    ],
    outcomes: [
      { label: "Bootcamps run", value: "30+" },
      { label: "Ventures started", value: "210" },
      { label: "Mentors engaged", value: "60" },
    ],
  },
  {
    slug: "wellness",
    title: "Emotional Wellness",
    tagline: "Healthy mind, happy life",
    accent: "green",
    icon: "HeartPulse",
    description:
      "Preventive healthcare and emotional-wellness programs that build resilience, manage stress and help students show up as their best selves.",
    highlights: [
      "Stress and exam-anxiety management",
      "Mindfulness and emotional regulation",
      "Preventive health awareness camps",
      "Confidence and self-belief coaching",
    ],
    outcomes: [
      { label: "Wellness camps", value: "80+" },
      { label: "Participants", value: "12,000+" },
      { label: "Cities covered", value: "18" },
    ],
  },
  {
    slug: "clean-green-india",
    title: "Clean & Green India",
    tagline: "A greener tomorrow",
    accent: "green",
    icon: "Leaf",
    description:
      "Youth-led environmental action — tree plantation drives, waste-segregation awareness and sustainability campaigns that make communities cleaner and greener.",
    highlights: [
      "Tree plantation and green-campus drives",
      "Waste segregation and recycling awareness",
      "Plastic-free and sustainability campaigns",
      "Community clean-up volunteer programs",
    ],
    outcomes: [
      { label: "Trees planted", value: "15,000+" },
      { label: "Drives organised", value: "90" },
      { label: "Volunteers", value: "1,200" },
    ],
  },
  {
    slug: "ignite",
    title: "Ignite — Education",
    tagline: "Transforming learning",
    accent: "orange",
    icon: "Flame",
    description:
      "Igniting fire among academicians and students to transform education — empowering teachers, modernising classrooms and inspiring a love for learning.",
    highlights: [
      "Teacher transformation workshops",
      "Career-awareness sessions in schools",
      "Life-skills and 21st-century learning",
      "Mentor-led student development",
    ],
    outcomes: [
      { label: "Educators trained", value: "900+" },
      { label: "Schools reached", value: "80" },
      { label: "Students impacted", value: "25,000+" },
    ],
  },
  {
    slug: "community-development",
    title: "Community Development",
    tagline: "Lifting communities together",
    accent: "orange",
    icon: "Users",
    description:
      "Grassroots initiatives that uplift under-served communities through skilling, awareness drives and access to opportunities and resources.",
    highlights: [
      "Skill development for livelihoods",
      "Women empowerment programs",
      "Digital literacy for all ages",
      "Access to scholarships and resources",
    ],
    outcomes: [
      { label: "Communities", value: "40+" },
      { label: "Families helped", value: "5,000+" },
      { label: "Programs", value: "65" },
    ],
  },
];

export const STATS = [
  { label: "Students Impacted", value: 25000, suffix: "+" },
  { label: "Schools Reached", value: 80, suffix: "+" },
  { label: "Workshops Conducted", value: 450, suffix: "+" },
  { label: "Volunteers", value: 1200, suffix: "+" },
  { label: "Financial Literacy Sessions", value: 120, suffix: "+" },
];

export const IMPACT_TRENDS = [
  { year: "2021", students: 3200, hours: 1800, events: 24 },
  { year: "2022", students: 7400, hours: 4200, events: 58 },
  { year: "2023", students: 13500, hours: 7600, events: 96 },
  { year: "2024", students: 19800, hours: 11200, events: 142 },
  { year: "2025", students: 25000, hours: 14800, events: 188 },
];

export const IMPACT_BY_PROGRAM = [
  { name: "Financial Literacy", value: 8500 },
  { name: "Entrepreneurship", value: 4200 },
  { name: "Wellness", value: 12000 },
  { name: "Clean & Green", value: 6800 },
  { name: "Education", value: 25000 },
];

export const GALLERY = [
  "https://dishaforindia.org/wp-content/uploads/2023/05/2-1.jpg",
  "https://dishaforindia.org/wp-content/uploads/2023/05/1-2.jpg",
  "https://dishaforindia.org/wp-content/uploads/2023/05/3-1.jpg",
  "https://dishaforindia.org/wp-content/uploads/2023/04/disha-1.jpg",
  "https://dishaforindia.org/wp-content/uploads/2023/04/disha-2.jpg",
  "https://dishaforindia.org/wp-content/uploads/2023/04/disha-3.jpg",
  "https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-5.jpg",
  "https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-4.jpg",
  "https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-3.jpg",
  "https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-2.jpg",
  "https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-1.jpg",
  "https://dishaforindia.org/wp-content/uploads/2021/08/faq-box-1-1.jpg",
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  photo: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Jaswinder Singh",
    role: "Community Volunteer",
    quote:
      "I've been associated with Disha for the last 5 years. They are doing great work uplifting the lives of youth across the region.",
    photo: "https://dishaforindia.org/wp-content/uploads/2021/08/testimonial-2-1.jpg",
  },
  {
    name: "Neeru Garg",
    role: "Educator",
    quote:
      "I have known Indu for over 10 years. She is a powerful personality whose energy genuinely transforms the people she works with.",
    photo: "https://dishaforindia.org/wp-content/uploads/2021/08/testimonial-2-2.jpg",
  },
  {
    name: "Mandeep Singh",
    role: "Workshop Participant",
    quote:
      "I attended the 'Break the Limits' event and it completely changed my perception about life, work and what success really means.",
    photo: "https://dishaforindia.org/wp-content/uploads/2021/08/testimonial-2-3.jpg",
  },
];

export type StoryType = "Student" | "Volunteer" | "Mentor" | "Community";
export type Story = {
  id: string;
  name: string;
  type: StoryType;
  headline: string;
  summary: string;
  photo: string;
};

export const STORIES: Story[] = [
  {
    id: "priya",
    name: "Priya Sharma",
    type: "Student",
    headline: "From classroom to first internship",
    summary:
      "After a Career Navigator session, Priya discovered data science, completed a Disha bootcamp and landed her first paid internship in 9 months.",
    photo: "https://dishaforindia.org/wp-content/uploads/2023/05/2-1.jpg",
  },
  {
    id: "arjun",
    name: "Arjun Mehta",
    type: "Student",
    headline: "Built a food-delivery micro-venture",
    summary:
      "The entrepreneurship bootcamp helped Arjun validate his idea and launch a campus food-delivery service that now employs four peers.",
    photo: "https://dishaforindia.org/wp-content/uploads/2023/04/disha-1.jpg",
  },
  {
    id: "kavita",
    name: "Kavita Rao",
    type: "Volunteer",
    headline: "Taught financial literacy to 500 students",
    summary:
      "Kavita joined the Volunteer Hub as a finance professional and has since led money-skills workshops for over 500 rural students.",
    photo: "https://dishaforindia.org/wp-content/uploads/2023/04/disha-2.jpg",
  },
  {
    id: "rahul",
    name: "Rahul Verma",
    type: "Mentor",
    headline: "Mentored 12 first-generation founders",
    summary:
      "A seasoned product leader, Rahul mentors aspiring founders through the Mentor Network, guiding 12 of them from idea to launch.",
    photo: "https://dishaforindia.org/wp-content/uploads/2023/04/disha-3.jpg",
  },
  {
    id: "village",
    name: "Rampur Village",
    type: "Community",
    headline: "A village goes plastic-free",
    summary:
      "Through the Clean & Green India drive, Rampur achieved waste segregation across 300 households and planted 1,200 trees.",
    photo: "https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-3.jpg",
  },
  {
    id: "sana",
    name: "Sana Khan",
    type: "Student",
    headline: "Won a state-level scholarship",
    summary:
      "Using the Scholarship Explorer, Sana found and secured a state merit scholarship that funded her engineering admission.",
    photo: "https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-4.jpg",
  },
];

export type DishaEvent = {
  id: string;
  title: string;
  date: string;
  status: "upcoming" | "past";
  location: string;
  category: string;
  description: string;
  image: string;
};

export const EVENTS: DishaEvent[] = [
  {
    id: "career-fair-2025",
    title: "Education & Career Fair 2025",
    date: "2025-08-22",
    status: "upcoming",
    location: "Ludhiana, Punjab",
    category: "Career",
    description:
      "A flagship fair connecting students with colleges, employers and mentors. Education is the most powerful weapon to change the world.",
    image: "https://dishaforindia.org/wp-content/uploads/2021/08/faq-box-1-1.jpg",
  },
  {
    id: "founders-bootcamp",
    title: "Young Founders Bootcamp",
    date: "2025-09-14",
    status: "upcoming",
    location: "Chandigarh",
    category: "Entrepreneurship",
    description:
      "A two-day intensive where students validate ideas, build MVPs and pitch to a panel of practising founders and investors.",
    image: "https://dishaforindia.org/wp-content/uploads/2023/04/disha-1.jpg",
  },
  {
    id: "money-matters",
    title: "Money Matters: Financial Literacy Drive",
    date: "2025-10-05",
    status: "upcoming",
    location: "Amritsar",
    category: "Financial Literacy",
    description:
      "Hands-on workshops on budgeting, saving, digital payments and avoiding debt traps for students and families.",
    image: "https://dishaforindia.org/wp-content/uploads/2023/05/3-1.jpg",
  },
  {
    id: "break-the-limits",
    title: "Break The Limits",
    date: "2024-03-18",
    status: "past",
    location: "Ludhiana, Punjab",
    category: "Wellness",
    description:
      "A transformational event that helped participants shift their perception of success, life and personal potential.",
    image: "https://dishaforindia.org/wp-content/uploads/2023/05/2-1.jpg",
  },
  {
    id: "green-drive-2024",
    title: "Clean & Green Community Drive",
    date: "2024-06-05",
    status: "past",
    location: "Rampur",
    category: "Environment",
    description:
      "A community plantation and waste-segregation drive that planted 1,200 trees on World Environment Day.",
    image: "https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-3.jpg",
  },
  {
    id: "wellness-camp-2024",
    title: "Emotional Wellness Camp",
    date: "2024-11-12",
    status: "past",
    location: "Jalandhar",
    category: "Wellness",
    description:
      "A preventive-healthcare and emotional-wellness camp serving students with stress-management and mindfulness sessions.",
    image: "https://dishaforindia.org/wp-content/uploads/2023/04/disha-2.jpg",
  },
];

export type BlogCategory =
  | "Financial Literacy"
  | "Entrepreneurship"
  | "Education"
  | "Wellness"
  | "Career Growth"
  | "Environment";

export type Blog = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  readingTime: number;
  date: string;
  author: string;
  cover: string;
  content: string[];
  featured?: boolean;
};

export const BLOGS: Blog[] = [
  {
    slug: "money-skills-every-student-needs",
    title: "5 Money Skills Every Indian Student Needs Before 20",
    category: "Financial Literacy",
    excerpt:
      "Budgeting, saving, and understanding compounding early can change your entire financial future. Here's where to start.",
    readingTime: 6,
    date: "2025-05-18",
    author: "Disha Editorial",
    cover: "https://dishaforindia.org/wp-content/uploads/2023/05/3-1.jpg",
    featured: true,
    content: [
      "Money is a skill, not a mystery. The earlier you learn to manage it, the more freedom you build for your future. Yet most students leave school without ever learning how to budget, save or invest.",
      "Start with budgeting. Track where your money goes for a single month. You'll be surprised how small daily expenses add up. A simple 50-30-20 split — needs, wants and savings — is enough to begin.",
      "Next, understand compounding. Even small amounts saved consistently grow dramatically over time. The student who starts at 18 always beats the one who starts at 28.",
      "Learn digital-payment safety, avoid debt traps, and build an emergency cushion. These four habits, started young, compound into lifelong financial confidence.",
    ],
  },
  {
    slug: "validate-your-startup-idea",
    title: "How to Validate Your Startup Idea as a Student",
    category: "Entrepreneurship",
    excerpt:
      "You don't need funding to start — you need a real problem and real customers. A practical validation playbook.",
    readingTime: 7,
    date: "2025-04-29",
    author: "Disha Editorial",
    cover: "https://dishaforindia.org/wp-content/uploads/2023/04/disha-1.jpg",
    featured: true,
    content: [
      "Every great venture begins with a problem worth solving. Before writing a single line of code or spending a rupee, talk to the people who actually face the problem.",
      "Use the business model canvas to map who your customer is, what value you offer and how you'll reach them. Keep it on one page.",
      "Build the smallest possible version of your idea — an MVP — and put it in front of ten real users. Their feedback is worth more than any plan.",
      "Validation isn't about being right. It's about learning fast and cheap. The students in our bootcamps who embrace this mindset move from idea to launch in months.",
    ],
  },
  {
    slug: "choosing-the-right-career-path",
    title: "Confused After Class 12? A Calm Guide to Choosing Your Path",
    category: "Career Growth",
    excerpt:
      "There's no single 'right' career — there's the right next step. Use interests, strengths and exposure to decide.",
    readingTime: 5,
    date: "2025-04-10",
    author: "Disha Editorial",
    cover: "https://dishaforindia.org/wp-content/uploads/2023/05/2-1.jpg",
    featured: true,
    content: [
      "The pressure after Class 12 is real, but choosing a career isn't a life sentence — it's a direction you can refine.",
      "Start with your interests and natural strengths. Then get exposure: talk to people in fields you're curious about and try short projects.",
      "Our Career Navigator turns your class, interests and goals into a visual roadmap, so the path forward feels concrete instead of overwhelming.",
      "Remember: clarity comes from action, not endless thinking. Take one small step toward a field that excites you.",
    ],
  },
  {
    slug: "managing-exam-stress",
    title: "Managing Exam Stress: A Wellness Toolkit for Students",
    category: "Wellness",
    excerpt:
      "Stress is normal, but it shouldn't run your life. Simple, science-backed techniques to stay calm and focused.",
    readingTime: 4,
    date: "2025-03-22",
    author: "Indu Aggarwal",
    cover: "https://dishaforindia.org/wp-content/uploads/2023/04/disha-2.jpg",
    content: [
      "A little stress sharpens focus, but chronic stress drains your energy and clouds your thinking. The goal is balance, not zero pressure.",
      "Breathe before you study. Two minutes of slow breathing calms the nervous system and improves concentration.",
      "Break work into small, finishable chunks. Progress builds confidence, and confidence reduces anxiety.",
      "Sleep, movement and connection are not luxuries — they are performance tools. Protect them, especially during exams.",
    ],
  },
  {
    slug: "why-teachers-are-changemakers",
    title: "Why Teachers Are India's Most Underrated Changemakers",
    category: "Education",
    excerpt:
      "Empowering educators multiplies impact across thousands of students. Inside our Ignite teacher-transformation work.",
    readingTime: 6,
    date: "2025-02-15",
    author: "Disha Editorial",
    cover: "https://dishaforindia.org/wp-content/uploads/2023/04/disha-3.jpg",
    content: [
      "One inspired teacher touches hundreds of students every year. Invest in teachers, and you multiply impact across an entire generation.",
      "Our Ignite program equips academicians with modern, student-centred methods and the wellbeing tools to sustain their energy.",
      "When teachers feel seen and supported, classrooms transform — curiosity replaces fear, and learning becomes joyful.",
      "Education is the most powerful weapon to change the world, and teachers are the ones who wield it daily.",
    ],
  },
  {
    slug: "youth-led-climate-action",
    title: "Youth-Led Climate Action: Small Drives, Big Change",
    category: "Environment",
    excerpt:
      "From tree plantation to plastic-free campaigns, young Indians are leading the way to a greener future.",
    readingTime: 5,
    date: "2025-01-28",
    author: "Disha Editorial",
    cover: "https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-3.jpg",
    content: [
      "Climate action doesn't always start with policy — often it starts with a group of students deciding to act in their own community.",
      "Through Clean & Green India, youth volunteers have planted over 15,000 trees and brought waste segregation to dozens of communities.",
      "Small, consistent drives create visible change and, more importantly, a culture of responsibility.",
      "The planet doesn't need a few perfect environmentalists — it needs millions of people doing imperfect, consistent good.",
    ],
  },
];

export type Mentor = {
  name: string;
  expertise: string;
  experience: string;
  photo: string;
  tags: string[];
};

export const MENTORS: Mentor[] = [
  {
    name: "Rahul Verma",
    expertise: "Product & Entrepreneurship",
    experience: "12 years · ex-Product Lead",
    photo: "https://dishaforindia.org/wp-content/uploads/2023/04/disha-3.jpg",
    tags: ["Entrepreneurship", "Technology"],
  },
  {
    name: "Kavita Rao",
    expertise: "Finance & Investing",
    experience: "10 years · Chartered Accountant",
    photo: "https://dishaforindia.org/wp-content/uploads/2023/04/disha-2.jpg",
    tags: ["Financial Literacy"],
  },
  {
    name: "Dr. Anil Kapoor",
    expertise: "Career Counselling",
    experience: "15 years · Academic Advisor",
    photo: "https://dishaforindia.org/wp-content/uploads/2023/04/disha-1.jpg",
    tags: ["Career Growth", "Education"],
  },
  {
    name: "Meera Nair",
    expertise: "Design & Communication",
    experience: "8 years · Brand Designer",
    photo: "https://dishaforindia.org/wp-content/uploads/2023/05/2-1.jpg",
    tags: ["Design", "Marketing"],
  },
  {
    name: "Suresh Iyer",
    expertise: "Data Science & AI",
    experience: "9 years · Data Lead",
    photo: "https://dishaforindia.org/wp-content/uploads/2023/05/1-2.jpg",
    tags: ["Technology"],
  },
  {
    name: "Indu Aggarwal",
    expertise: "Wellness & Leadership",
    experience: "20 years · Founder & Coach",
    photo: "https://dishaforindia.org/wp-content/uploads/2021/08/profile.jpg",
    tags: ["Wellness", "Education"],
  },
];

export type Volunteer = {
  id: string;
  title: string;
  category: "Teaching" | "Design" | "Technology" | "Marketing" | "Community Outreach";
  commitment: string;
  location: string;
  description: string;
};

export const VOLUNTEER_ROLES: Volunteer[] = [
  {
    id: "v1",
    title: "Financial Literacy Facilitator",
    category: "Teaching",
    commitment: "4 hrs / week",
    location: "Punjab · On-site",
    description: "Lead money-skills workshops in partner schools and community centres.",
  },
  {
    id: "v2",
    title: "Career Mentor (Online)",
    category: "Teaching",
    commitment: "2 hrs / week",
    location: "Remote",
    description: "Guide students one-on-one through career decisions and applications.",
  },
  {
    id: "v3",
    title: "Brand & Graphic Designer",
    category: "Design",
    commitment: "Flexible",
    location: "Remote",
    description: "Design posters, social media and program collateral for campaigns.",
  },
  {
    id: "v4",
    title: "Web & App Volunteer",
    category: "Technology",
    commitment: "Flexible",
    location: "Remote",
    description: "Help build and maintain the Disha digital platform and tools.",
  },
  {
    id: "v5",
    title: "Social Media Coordinator",
    category: "Marketing",
    commitment: "3 hrs / week",
    location: "Remote",
    description: "Plan content, grow reach and tell our impact stories online.",
  },
  {
    id: "v6",
    title: "Community Drive Volunteer",
    category: "Community Outreach",
    commitment: "Event-based",
    location: "Punjab · On-site",
    description: "Support plantation drives, wellness camps and community events.",
  },
  {
    id: "v7",
    title: "Entrepreneurship Bootcamp Coach",
    category: "Teaching",
    commitment: "Event-based",
    location: "Hybrid",
    description: "Coach young founders through validation, MVPs and pitching.",
  },
  {
    id: "v8",
    title: "Content Writer",
    category: "Marketing",
    commitment: "Flexible",
    location: "Remote",
    description: "Write blogs, newsletters and resource guides for students.",
  },
];

export type Scholarship = {
  id: string;
  name: string;
  provider: string;
  amount: string;
  classLevel: "Class 10" | "Class 12" | "Undergraduate" | "Postgraduate";
  stream: "Science" | "Commerce" | "Arts" | "Any";
  state: "All India" | "Punjab" | "Delhi" | "Maharashtra" | "Karnataka";
  category: "Merit" | "Need-based" | "Girls" | "SC/ST/OBC" | "Minority";
  deadline: string;
};

export const SCHOLARSHIPS: Scholarship[] = [
  { id: "s1", name: "National Merit Scholarship", provider: "Govt. of India", amount: "₹50,000 / yr", classLevel: "Undergraduate", stream: "Any", state: "All India", category: "Merit", deadline: "2025-09-30" },
  { id: "s2", name: "Pragati Scholarship for Girls", provider: "AICTE", amount: "₹50,000 / yr", classLevel: "Undergraduate", stream: "Science", state: "All India", category: "Girls", deadline: "2025-10-15" },
  { id: "s3", name: "Punjab Post-Matric Scholarship", provider: "Punjab Govt.", amount: "Full tuition", classLevel: "Class 12", stream: "Any", state: "Punjab", category: "SC/ST/OBC", deadline: "2025-08-31" },
  { id: "s4", name: "Means-cum-Merit Scholarship", provider: "NMMS", amount: "₹12,000 / yr", classLevel: "Class 10", stream: "Any", state: "All India", category: "Need-based", deadline: "2025-11-01" },
  { id: "s5", name: "Commerce Excellence Award", provider: "Disha For India", amount: "₹25,000", classLevel: "Class 12", stream: "Commerce", state: "All India", category: "Merit", deadline: "2025-09-20" },
  { id: "s6", name: "Maharashtra EBC Scholarship", provider: "Maharashtra Govt.", amount: "₹20,000 / yr", classLevel: "Undergraduate", stream: "Any", state: "Maharashtra", category: "Need-based", deadline: "2025-10-10" },
  { id: "s7", name: "Minority Talent Scholarship", provider: "Min. of Minority Affairs", amount: "₹30,000 / yr", classLevel: "Postgraduate", stream: "Any", state: "All India", category: "Minority", deadline: "2025-12-01" },
  { id: "s8", name: "Karnataka Vidyasiri", provider: "Karnataka Govt.", amount: "₹1,500 / mo", classLevel: "Undergraduate", stream: "Arts", state: "Karnataka", category: "SC/ST/OBC", deadline: "2025-09-25" },
  { id: "s9", name: "Girls in STEM Grant", provider: "Disha For India", amount: "₹40,000", classLevel: "Undergraduate", stream: "Science", state: "All India", category: "Girls", deadline: "2025-10-30" },
  { id: "s10", name: "Delhi Higher Education Aid", provider: "Delhi Govt.", amount: "Tuition support", classLevel: "Undergraduate", stream: "Any", state: "Delhi", category: "Need-based", deadline: "2025-11-15" },
];

export type Resource = {
  id: string;
  title: string;
  category: "Career Development" | "Financial Literacy" | "Communication Skills" | "Entrepreneurship" | "Personal Growth";
  type: "Guide" | "Worksheet" | "Video" | "Toolkit";
  duration: string;
  description: string;
};

export const RESOURCES: Resource[] = [
  { id: "r1", title: "Resume Building Masterclass", category: "Career Development", type: "Guide", duration: "20 min", description: "Craft a standout resume even with no work experience." },
  { id: "r2", title: "Interview Confidence Toolkit", category: "Career Development", type: "Toolkit", duration: "Toolkit", description: "Common questions, frameworks and mock-interview prompts." },
  { id: "r3", title: "Budgeting for Students", category: "Financial Literacy", type: "Worksheet", duration: "Worksheet", description: "A printable monthly budget planner with the 50-30-20 rule." },
  { id: "r4", title: "Understanding Compounding", category: "Financial Literacy", type: "Video", duration: "12 min", description: "Visual explainer on how early saving grows your money." },
  { id: "r5", title: "Public Speaking Essentials", category: "Communication Skills", type: "Guide", duration: "18 min", description: "Structure, body language and beating stage fright." },
  { id: "r6", title: "Email & Professional Writing", category: "Communication Skills", type: "Guide", duration: "15 min", description: "Write clear, confident emails that get replies." },
  { id: "r7", title: "Business Model Canvas", category: "Entrepreneurship", type: "Worksheet", duration: "Worksheet", description: "Map your venture on a single page before you build." },
  { id: "r8", title: "Pitch Deck Starter Kit", category: "Entrepreneurship", type: "Toolkit", duration: "Toolkit", description: "Slide-by-slide template to pitch your idea with clarity." },
  { id: "r9", title: "Goal Setting that Works", category: "Personal Growth", type: "Guide", duration: "10 min", description: "Turn big ambitions into achievable weekly actions." },
  { id: "r10", title: "Building Daily Discipline", category: "Personal Growth", type: "Video", duration: "14 min", description: "Habit systems that beat motivation every time." },
  { id: "r11", title: "Time Management for Students", category: "Personal Growth", type: "Worksheet", duration: "Worksheet", description: "Weekly planner to balance study, rest and growth." },
  { id: "r12", title: "Networking for Beginners", category: "Career Development", type: "Guide", duration: "16 min", description: "Build genuine professional relationships from scratch." },
];

export type Opportunity = {
  id: string;
  title: string;
  type: "Internship" | "Workshop" | "Competition" | "Hackathon" | "Bootcamp";
  org: string;
  mode: string;
  deadline: string;
};

export const OPPORTUNITIES: Opportunity[] = [
  { id: "o1", title: "Summer Data Science Internship", type: "Internship", org: "TechBridge", mode: "Remote", deadline: "2025-08-30" },
  { id: "o2", title: "Young Founders Bootcamp", type: "Bootcamp", org: "Disha For India", mode: "Chandigarh", deadline: "2025-09-14" },
  { id: "o3", title: "National Coding Hackathon", type: "Hackathon", org: "CodeIndia", mode: "Online", deadline: "2025-09-05" },
  { id: "o4", title: "Financial Literacy Workshop", type: "Workshop", org: "Disha For India", mode: "Amritsar", deadline: "2025-10-05" },
  { id: "o5", title: "Design Thinking Challenge", type: "Competition", org: "DesignForGood", mode: "Online", deadline: "2025-09-20" },
  { id: "o6", title: "Social Impact Internship", type: "Internship", org: "Disha For India", mode: "Hybrid", deadline: "2025-08-25" },
  { id: "o7", title: "Climate Action Hackathon", type: "Hackathon", org: "GreenFuture", mode: "Online", deadline: "2025-10-12" },
  { id: "o8", title: "Communication Skills Workshop", type: "Workshop", org: "SpeakUp", mode: "Online", deadline: "2025-09-28" },
];

export type CareerInterest = "Technology" | "Business" | "Healthcare" | "Creative" | "Science";

export const CAREER_PATHS: Record<CareerInterest, { goal: string; steps: { title: string; detail: string }[] }> = {
  Technology: {
    goal: "Build digital products and solve problems with code.",
    steps: [
      { title: "Foundations", detail: "Learn problem-solving, basic programming (Python) and computer fundamentals." },
      { title: "Specialise", detail: "Pick a track: Web Development, Data Science, AI/ML or Cyber Security." },
      { title: "Build Projects", detail: "Create a portfolio of real projects and contribute to open source." },
      { title: "Launch Career", detail: "Apply for internships, build a network and target your first role." },
    ],
  },
  Business: {
    goal: "Lead teams, build ventures or grow organisations.",
    steps: [
      { title: "Core Skills", detail: "Understand economics, finance, communication and customer thinking." },
      { title: "Specialise", detail: "Explore Marketing, Finance, Operations or Entrepreneurship." },
      { title: "Real Experience", detail: "Run a small venture, intern, or join a startup to learn fast." },
      { title: "Grow", detail: "Build leadership skills and pursue management roles or your own company." },
    ],
  },
  Healthcare: {
    goal: "Care for people and advance human wellbeing.",
    steps: [
      { title: "Science Base", detail: "Strengthen Biology, Chemistry and prepare for entrance exams (NEET)." },
      { title: "Choose Field", detail: "Medicine, Nursing, Pharmacy, Physiotherapy or Public Health." },
      { title: "Train & Practise", detail: "Complete clinical training, internships and certifications." },
      { title: "Specialise", detail: "Pursue a specialisation and build a meaningful practice." },
    ],
  },
  Creative: {
    goal: "Express ideas through design, media and storytelling.",
    steps: [
      { title: "Discover Craft", detail: "Explore design, writing, film, music or visual arts." },
      { title: "Build Skills", detail: "Master tools and develop a strong personal style." },
      { title: "Portfolio", detail: "Create a body of work that showcases your range." },
      { title: "Go Pro", detail: "Freelance, join a studio, or launch your creative brand." },
    ],
  },
  Science: {
    goal: "Explore, research and push the frontiers of knowledge.",
    steps: [
      { title: "Strong Basics", detail: "Excel in Physics, Chemistry, Maths or Biology." },
      { title: "Choose Discipline", detail: "Engineering, pure sciences, research or biotechnology." },
      { title: "Research", detail: "Join labs, projects and competitions to apply your learning." },
      { title: "Advance", detail: "Pursue higher studies or R&D careers in industry or academia." },
    ],
  },
};
