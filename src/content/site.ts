// All public portfolio text, links and replaceable photograph slots live here.
import unlvDebatePhoto from "@/assets/unlv-debate-semifinals.png.asset.json";
import wiseOnlineClassPhoto from "@/assets/wise-online-class.png.asset.json";
import wiseOnlineAfterschoolPhoto from "@/assets/wise-online-afterschool-workshop.jpeg.asset.json";
import badmintonPhoto from "@/assets/badminton-on-the-court.jpg.asset.json";
import hennaPhoto from "@/assets/henna-creative-moments.jpg.asset.json";
import hikingPhoto from "@/assets/hiking-in-maine.jpg.asset.json";
export type Photo = { caption: string; detail: string; src?: string; alt: string };
export type Project = {
  id?: string;
  name: string;
  role?: string;
  body?: string | string[];
  points?: string[];
  notes?: string[];
  link?: { label: string; href?: string };
  photos?: Photo[];
};
export type Category = { id: string; title: string; tone: string; projects: Project[]; photos: Photo[] };
const photo = (caption: string, detail: string): Photo => ({ caption, detail, alt: caption });
export const site = {
  name: "Isabel Chang",
  domain: "https://isabelchang.com",
  title: "Isabel Chang — Built with Curiosity",
  description:
    "Debater, founder, researcher, artist and builder. Explore the questions Isabel Chang follows into action.",
  nav: [
    { id: "introduction", label: "Introduction" },
    { id: "built", label: "What I’ve Built" },
    { id: "next", label: "What’s Next" },
    { id: "honors", label: "Honors" },
    { id: "about", label: "About Me" },
    { id: "connect", label: "Connect" },
  ],
  hero: {
    label: "Curiosity, put into motion.",
    greeting: "Hi, I’m Isabel.",
    title: "See what I’ve been up to",
    roles: ["Debater", "Founder", "Researcher", "Artist", "Builder"],
    cta: "See what I’m planning next",
    photos: [
      photo("A little glimpse of my world", "A portrait of Isabel"),
      {
        caption: "From the UNLV Debate Tournament Semifinals (Top 4) Round",
        detail: "From the UNLV Debate Tournament Semifinals (Top 4) Round",
        src: unlvDebatePhoto.url,
        alt: "Isabel at the UNLV Debate Tournament Semifinals (Top 4) round",
      },
    ],
  },
  glance: {
    label: "At a glance",
    stats: [
      { number: "#1", unit: "Nationally", detail: "NDCA National Championship · Public Forum Debate" },
      {
        number: "150+",
        unit: "Students",
        detail: "Directly taught through Wise Online, the digital literacy nonprofit I founded",
      },
      { number: "$14,300", unit: "raised", detail: "in cash donations, foods, books, and more supporting nonprofits" },
      { number: "90k+", unit: "Monthly", detail: "Impressions on my Pinterest" },
      { number: "300+", unit: "Visitors", detail: "Educated as a Junior Ambassador at the Bowers Museum" },
    ],
  },
  thread: { label: "My thread", title: "I follow what grabs me.", subtitle: "Here’s where it’s led." },
  built: { label: "Curiosity → action", title: "What I’ve Built" },
  next: {
    label: "Where this is all heading",
    title: "What’s Next",
    subtitle: "I am passionate about connecting people with meaningful opportunities.",
    sections: [
      {
        heading: "Why",
        paragraphs: [
          "I have spent much of high school building things I wish had existed: a nonprofit teaching students media literacy, programs making debate more accessible, and initiatives connecting students to opportunities to serve their communities.",
          "But somewhere along the way, I began asking a different question: What makes someone actually care about the work they do?",
          "Too often, community service becomes a checklist. Students accumulate hours, join organizations, and pursue leadership positions without necessarily understanding what motivates them. I want to change that.",
          "Across these seemingly different initiatives, I’ve discovered a common motivation: I want to help people discover what they care about and give them the tools to act on it.",
        ],
      },
      {
        heading: "Looking Ahead: Finding Purpose in an AI-Driven World",
        paragraphs: [
          "As I look toward an increasingly AI-driven future, I want to take this mission further. If AI can relieve us of repetitive work and expand what we are capable of accomplishing, I believe we must also reconsider what we want to accomplish in the first place.",
          "The next challenge isn’t simply figuring out what technology can help us do, but what we want to do with the opportunities it creates.",
        ],
      },
      {
        heading: "Introducing Teleios",
        paragraphs: [
          "Teleios combines my interests in philosophy, technology, and community-building to develop an AI-powered platform that helps students, and eventually people of all ages, explore their values, discover meaningful opportunities, and turn their interests into tangible contributions.",
          "The name comes from the Greek philosophical tradition. Telos refers to an end, aim, or purpose, while teleios evokes the idea of becoming complete or fully developed. Drawing on these ideas, I want Teleios to explore a question that has interested philosophers for centuries:",
          "What does it mean to live a meaningful life, and how do we discover our place in making the world better?",
          "My previous projects taught me how to recognize problems and build solutions; Teleios is my opportunity to help others discover the problems they want to solve.",
        ],
      },
    ],
  },
  honors: { label: "Along the way", title: "Honors & Awards" },
  connect: {
    label: "Keep the conversation going",
    title: "Let’s Talk",
    body: "Whether it’s about debate, philosophy, a collaboration, or just something interesting, I’d love to hear from you.",
    reading: "Currently reading",
    obsessed: "Currently obsessed with",
    placeholder: "To be continued…",
    fields: { name: "Name", email: "Email", message: "Message" },
    submit: "Send it",
    sending: "Sending…",
    success: "Got it! I’ll get back to you soon.",
    error: "Your message didn’t send. Please try again.",
    validation: "Please enter your name, a valid email, and a message.",
    again: "Send another message",
  },
  about: {
    label: "Beyond the bullet points",
    title: "A Little More About Me",
    paragraphs: [
      "I’m Isabel Chang — a senior at Fairmont Preparatory Academy in Anaheim, CA, and a person who can’t leave an interesting question alone.",
      "When I discovered debate in 9th grade, I didn’t just join the team — I became Head Captain, qualified for the Tournament of Champions three times, and helped my team win a national championship. When I noticed middle schoolers had no tools to spot misinformation, I didn’t write an essay about it — I co-founded Wise Online, a nonprofit that’s now partnered with the City of Irvine and taught 150+ students how to think critically about what they read.",
      "When the Bowers Museum opened an exhibit on China’s Terracotta Warriors, I didn’t just visit — I trained as a Junior Ambassador and educated hundreds of visitors on artifacts I’d researched firsthand.",
      "That’s the pattern. Something grabs me, and I grab back.",
      "Outside of all that, I’m a 14-year dancer (jazz, lyrical, K-pop, ballet), a henna artist whose Pinterest pulls 60k impressions a month, a Varsity badminton captain who curates the team hype playlist, and someone who genuinely believes philosophy should be taught in middle school.",
    ],
    educationTitle: "Education",
    school: "Fairmont Preparatory Academy",
    location: "Anaheim, CA",
    diploma: "Expected Diploma: 2027",
    gpa: "4.89 GPA · Weighted",
    courseworkTitle: "Selected coursework",
    coursework: [
      "Differential Equations",
      "Linear Algebra",
      "AP Computer Science A",
      "AP Art History",
      "AP Chinese",
      "AP Chemistry",
      "AP Calculus BC",
      "IB Philosophy",
    ],
    skillsTitle: "Skills & tools",
    skills: [
      { label: "Languages", text: "Mandarin Chinese (fluent), Java, C++, x86 Assembly" },
      { label: "Software", text: "Adobe Premiere, Photoshop, 3D Modeling, Canva, Google Workspace" },
      { label: "Other", text: "CPR & First Aid Certified, 14 years of dance, Henna Artist" },
    ],
    interestsTitle: "The things I come back to",
    interests: [
      {
        title: "Hiking and Nature",
        text: "Lifelong adventurer",
        photo: {
          caption: "Enjoying the view",
          detail: "Hiking & everyday moments",
          src: hikingPhoto.url,
          alt: "Isabel enjoying the view while hiking in Maine",
        },
      },
      {
        title: "A little friendly competition",
        text: "Varsity badminton captain. Team hype playlist curator.",
        photo: {
          caption: "On the court",
          detail: "Badminton & team moments",
          src: badmintonPhoto.url,
          alt: "Isabel on the badminton court",
        },
      },
      {
        title: "Art, made personal",
        text: "Phoenixes and turtles — my mom’s lucky charms — find their way into my henna.",
        photo: {
          caption: "The details matter",
          detail: "Henna & creative moments",
          src: hennaPhoto.url,
          alt: "Isabel's henna art",
        },
      },
    ],
  },
  footer: "© 2026 Isabel Chang · Built with curiosity",
  footerNote: "Always asking. Always making.",
  email: undefined as string | undefined,
  pinterest: undefined as string | undefined,
  photoLabel: "Photo to come",
  paperPending: "Paper link coming soon",
  emailLabel: "Email Isabel",
  pinterestLabel: "Henna on Pinterest",
  menuOpen: "Open navigation",
  menuClose: "Close navigation",
  backToTop: "Back to top",
};
export const categories: Category[] = [
  {
    id: "creating",
    title: "Creating",
    tone: "coral",
    projects: [
      {
        name: "Founder of Wise Online",
        role: "Critical Thinking for the Digital Media Age",
        body: [
          "I founded Wise Online to help middle schoolers be more prepared in the new AI and Digital Age. As new technologies change the digital landscape, policy and education is slow to follow, leaving students unprepared.",
          "This was the motivation for Wise Online. The same skills I learned being a [competitive debater](#debate), I applied to the curriculum that I wrote. Since founding, I have expanded:",
        ],
        points: [
          "150+ students reached",
          "9 lessons written: bias, rhetoric, clickbait",
          "94% student approval rate",
          "Partnered with City of Irvine, 6 schools, and 5 organizations",
        ],
        notes: [
          "Rotary Service Above Self Scholarship: $1,000, #1 regionally, top 150 internationally; donated back to Wise Online.",
          "Dragon Kim Foundation Finalist.",
        ],
        photos: [
          {
            caption: "Students holding certificates from the weeklong Wise Online program I led",
            detail: "Wise Online workshops & student activities",
            src: wiseOnlineClassPhoto.url,
            alt: "Students holding certificates from the weeklong Wise Online program Isabel led",
          },
          {
            caption: "Free Wise Online workshop for local afterschool program",
            detail: "Research & educational materials",
            src: wiseOnlineAfterschoolPhoto.url,
            alt: "Isabel teaching a free Wise Online workshop for a local afterschool program",
          },
        ],
      },
      {
        name: "Associated Student Body",
        role: "Director of Community Service & Cultural Awareness",
        body: "As Community Service & Cultural Awareness Commissioner, I lead our school’s service drives and cultural events for 600 students. I managed the Cultural Fair twice, the largest student led event.",
        points: [
          "600+ participants in Cultural Fair with 20+ booths, a $3k budget, and a team of 40",
          "$2,000+ raised for Thanksgiving meals",
          "$1,900+ raised for homeless services",
          "300+ toys donated valued at $6,000",
          "$2,300+ raised for Street Child United",
          "430 pounds of food donated to Boys & Girls Club valued at $4,000",
        ],
        notes: ["Won Most Valuable Player (MVP) 3 Times"],
      },
      {
        name: "Stanford Researcher with the Reischauer Scholars Program",
        role: "Stanford Program on International & Cross-Cultural Education",
        body: "I was selected as 1 of 30 scholars and researchers. I authored and presented research on the epistemology and politics of Japan’s Mingei Folk Arts, through weekly discussions with experts and advising from Naomi Funahashi.",
        points: ["1 of 30 scholars selected", "Published research paper"],
      },
    ],
    photos: [],
  },
  {
    id: "service",
    title: "Serving",
    tone: "teal",
    projects: [
      {
        name: "Board Director at Orange County Debate League",
        role: "Nonprofit Organization dedicated to affordable debate tournaments",
        body: "As Board Director and Head Tabulation Administrator, I help run a nonprofit that provides affordable debate tournaments. I strengthened the league’s communication, liability, and equity policies.",
        points: [
          "12 state and 4 national championships administered",
          "450+ debaters served",
          "7 tabulation staff trained",
          "Serving 85 different schools and organizations",
        ],
      },
      {
        name: "Junior Ambassador Bowers Museum",
        role: "Docent & Mentor at History, Culture, and Art Museum",
        body: "I was 1 of 14 students selected as a Junior Ambassador. I researched and presented 4 exhibits, including the Terracotta Warriors and Chinese national relics (Grade 1 Cultural Relics, 110 new discoveries).",
        points: [
          "300+ visitors educated",
          "4 exhibits presented",
          "30+ volunteer hours of museum tours",
          "Featured in the World Journal News, the largest Chinese language newspaper in the United States",
        ],
      },
      {
        name: "Congressional Campaign",
        role: "California’s 47th Congressional District",
        body: "I interned as a canvasser and journalist on a congressional campaign. I did door-to-door outreach and calls, and wrote a journalism piece on state regulation.",
        points: ["1,200+ voters contacted", "800-word article, 2 local businesses interviewed", "100+ volunteer hours"],
      },
      {
        id: "debate",
        name: "Competitive Debate",
        role: "Public Forum",
        body: "As Head Captain and Varsity Debater for Fairmont Prep, I ran practices twice a week and mentored 14 novices on case-building and rebuttals.",
        points: [
          "#10 nationally out of 4,600 teams (NDCA)",
          "#1 sophomore team in the nation",
          "3× Tournament of Champions qualifier",
          "39+ national and international tournaments",
        ],
      },
      {
        name: "Henna Art",
        role: "Independent Study",
        body: "Henna is my independent creative practice, with 100+ original designs for friends, family, and school events. My mom’s lucky charms, phoenixes and turtles, show up in a lot of my work.",
        points: [
          "60k+ Pinterest impressions a month",
          "1.6k+ engagements a month",
          "Featured artist at Culture Week and Diwali Festival (2×, 600+ attendees)",
        ],
      },
    ],
    photos: [
      photo("Stories held in objects", "Bowers Museum exhibits & presentations"),
      photo("Showing up for each other", "Community & service moments"),
    ],
  },
];
export const awards = [
  {
    year: "2026",
    items: [
      {
        title: "#1 Team · NDCA National Championship",
        detail: "Public Forum · Only the top 5% nationally qualify.",
        scope: "National",
      },
      { title: "Semifinalist · UNLV Debate Tournament", detail: "Top 4 of 140 teams.", scope: "International" },
      {
        title: "Quarterfinalist · Arizona State University Debate Tournament",
        detail: "Top 16 of 288 teams.",
        scope: "International",
      },
      { title: "#6 Speaker · UC Berkeley TOC Invitational", detail: "Out of 342 speakers.", scope: "International" },
      {
        title: "Rotary Service Above Self Scholarship",
        detail: "1 of 150 internationally, #1 regionally. $1,000 donated to Wise Online.",
        scope: "International",
      },
      { title: "Dragon Kim Foundation Finalist", detail: "Approximately top 50 across 3 states.", scope: "National" },
      {
        title: "Changemakers Docathon Scholarship",
        detail: "International Schools Partnership.",
        scope: "International",
      },
      { title: "Philosophy Student of the Year", detail: "Fairmont Preparatory Academy.", scope: "School" },
      { title: "AP Chinese Student of the Year", detail: "Fairmont Preparatory Academy.", scope: "School" },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Quarterfinalist & #5 Speaker · Taiwan Speech & Debate Invitational",
        detail: "Out of 72 teams. Tournament of Champions bid earned.",
        scope: "International",
      },
      {
        title: "Octofinalist · Yale Invitational Debate Tournament",
        detail: "Top 32 of 320 teams.",
        scope: "International",
      },
      { title: "Badminton Doubles Player of the Year", detail: "Fairmont Preparatory Academy.", scope: "School" },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "$90,000+ Valedictorian Scholarship",
        detail: "Given to the student with the highest cumulative GPA",
        scope: "School",
      },
    ],
  },
];
