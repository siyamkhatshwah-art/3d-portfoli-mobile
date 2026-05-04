const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Personal Projects Built" },
  { value: 6, suffix: "+", label: "Technologies Learned" },
  { value: 100, suffix: "%", label: "Self-Taught Dedication" },
  { value: 1, suffix: " Goal", label: "CS Degree — In Progress" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Self-Driven Learner",
    desc: "Teaching myself web development and computer science independently, turning goals into daily action.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear Communicator",
    desc: "Breaking down complex ideas into simple, understandable solutions — in code and in conversation.",
  },
  {
    imgPath: "/images/time.png",
    title: "Consistent & Focused",
    desc: "Showing up every day to build, learn, and improve — no shortcuts, just real progress.",
  },
];

const techStackImgs = [
  { name: "React Developer", imgPath: "/images/logos/react.png" },
  { name: "Python Developer", imgPath: "/images/logos/python.svg" },
  { name: "Backend Developer", imgPath: "/images/logos/node.png" },
  { name: "Interactive Developer", imgPath: "/images/logos/three.png" },
  { name: "Version Control", imgPath: "/images/logos/git.svg" },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Siya built this 3D interactive portfolio from scratch, combining Three.js, React Three Fiber, and GSAP. The attention to detail and mobile optimization shows real technical maturity.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "3D Portfolio Project",
    date: "2025 - Present",
    responsibilities: [
      "Built a fully interactive 3D portfolio using React, Three.js and React Three Fiber.",
      "Implemented GSAP animations and mobile touch controls for smooth UX.",
      "Deployed via GitHub Actions to InfinityTree hosting with automated SFTP pipeline.",
    ],
  },
  {
    review: "Siya's self-study journey in web development is impressive. Going from zero to building 3D web experiences independently shows serious drive and potential.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Independent Web Developer",
    date: "2024 - Present",
    responsibilities: [
      "Self-taught HTML, CSS, JavaScript, and React through independent study.",
      "Built and deployed multiple front-end projects to sharpen practical skills.",
      "Consistently learning new tools and frameworks to grow as a developer.",
    ],
  },
  {
    review: "Siya's dedication to reaching university-level Computer Science is clear. Rewriting matric exams while simultaneously building real projects shows exceptional discipline.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "CS University Preparation",
    date: "2024 - 2025",
    responsibilities: [
      "Independently preparing to rewrite Maths and Physical Sciences for university entry.",
      "Targeting Computer Science or Information Technology degree.",
      "Balancing academic prep with hands-on software development projects.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

const testimonials = [
  {
    name: "Thabo Nkosi",
    mentions: "@thabonkosi",
    review:
      "Siya has a rare combination of creativity and technical skill. He built something I didn't think was possible from a mobile phone. The dedication is unreal.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Lerato Dlamini",
    mentions: "@leratodlamini",
    review:
      "What Siya is building independently is impressive. He's self-taught, consistent, and his portfolio already looks better than most. Watch this space.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Sipho Mahlangu",
    mentions: "@siphomahlangu",
    review:
      "Siya doesn't wait for opportunity — he builds it. The 3D portfolio is proof that with focus and the right tools, anything is possible from anywhere in South Africa.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Nomvula Zwane",
    mentions: "@nomvulazwane",
    review:
      "I've watched Siya grow from scratch. He taught himself everything and still pushes further every day. This portfolio is just the beginning.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Kabelo Sithole",
    mentions: "@kabelosithole",
    review:
      "Siya's work ethic is something else. He's building real projects while preparing for university — and both are going well. Future CS student for sure.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Amahle Mthembu",
    mentions: "@aahlemthembu",
    review:
      "The 3D portfolio Siya built speaks for itself. Clean, fast, mobile-friendly. He's got a sharp eye for detail and the technical skills to back it up.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  { name: "insta", imgPath: "/images/insta.png" },
  { name: "fb", imgPath: "/images/fb.png" },
  { name: "x", imgPath: "/images/x.png" },
  { name: "linkedin", imgPath: "/images/linkedin.png" },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
