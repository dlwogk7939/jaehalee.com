window.portfolioData = {
  person: {
    name: "Jaeha Lee",
    role: "Software Engineer",
    location: "Columbus, Ohio",
    email: "jaehalee7939@gmail.com",
    intro:
      "I build reliable backend, data, and full-stack systems—from Oracle cloud archival pipelines to award-winning AI products.",
    about:
      "I’m a Computer Science and Engineering student at The Ohio State University with experience turning technical ideas into systems people can use. My work spans enterprise data migration, PostgreSQL-backed applications, cloud infrastructure, machine learning, and full-stack web development. Across internships, research, teaching, and hackathons, I’ve learned to move quickly in unfamiliar systems while keeping implementation, documentation, and handoff practical.",
    links: {
      linkedin: "https://www.linkedin.com/in/jaehalee7939/",
      github: "https://github.com/dlwogk7939",
      resume: "assets/documents/Jaeha-Lee-Resume.pdf",
    },
  },

  metrics: [
    { value: "5×", label: "Hackathon award winner" },
    { value: "$2,975", label: "Total prizes earned" },
    { value: "3.71", label: "Cumulative GPA" },
    { value: "40+", label: "Students mentored weekly" },
  ],

  experience: [
    {
      organization: "Seaman Corporation",
      role: "Oracle ERP Intern",
      location: "Wooster, Ohio",
      dates: "June – August 2026",
      featured: true,
      summary:
        "Built an Oracle E-Business Suite archival pipeline across Accounts Payable, Accounts Receivable, and General Ledger, moving historical records into Oracle Autonomous Transaction Processing and OCI Object Storage.",
      impact: [
        "Developed PL/SQL packages and JSON/REST workflows for optimized 10,000-row batch processing.",
        "Designed a reliable, re-runnable OCI loading architecture with validation-friendly migration flows.",
        "Connected enterprise data archival, cloud storage, and API-based access into a maintainable handoff.",
      ],
      technologies: [
        "Oracle EBS",
        "PL/SQL",
        "Oracle ATP",
        "OCI",
        "Object Storage",
        "REST APIs",
        "JSON",
      ],
    },
    {
      organization: "Local Grown Salads",
      role: "Full-Stack Developer Intern",
      location: "Remote",
      dates: "March – May 2025",
      summary:
        "Built and integrated a PostgreSQL data layer for production operations, replacing manual retrieval with Python automation and real-time analytics.",
      impact: [
        "Automated data retrieval and reduced repetitive manual entry with Python scripts.",
        "Analyzed production tables to monitor equipment performance and improve maintenance scheduling.",
        "Embedded SQL in Python workflows, improving operational decision-making by 80%.",
      ],
      technologies: ["Python", "PostgreSQL", "SQL", "Data analysis", "Automation"],
    },
    {
      organization: "Republic of Korea Army",
      role: "Sergeant · Military Engineer",
      location: "South Korea",
      dates: "September 2023 – March 2025",
      summary:
        "Maintained operational readiness as a military engineer and led large teams in high-pressure, time-sensitive environments.",
      impact: [
        "Led and supervised 200+ soldiers during 24-hour Duty Officer shifts.",
        "Coordinated people, procedures, and communication while maintaining discipline and readiness.",
      ],
      technologies: ["Leadership", "Operations", "Team coordination"],
    },
    {
      organization: "The Ohio State University",
      role: "Student Technician",
      location: "Columbus, Ohio",
      dates: "January – April 2023",
      summary:
        "Provided classroom technology support across more than 100 rooms, diagnosing software, hardware, and network issues.",
      impact: [],
      technologies: ["Technical support", "Networking", "Troubleshooting"],
    },
  ],

  projects: [
    {
      title: "OSU SmartParking",
      eyebrow: "2nd Place · HackOHI/O 2025",
      summary:
        "An AI-powered parking platform that unified camera-based detection and live garage data on one campus map.",
      problem:
        "Campus parking availability was fragmented across garages and surface lots, creating daily uncertainty for drivers.",
      contribution:
        "Built the React and TypeScript mapping experience and helped implement the Node.js, Express, and Supabase data service. Integrated Selenium-scraped CampusParc data with a MobileNetV3 vision pipeline.",
      result:
        "Reached 98% slot-level classification accuracy and won 2nd place in Honda’s Friction Finder Challenge among 800+ hackathon participants.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "PyTorch",
        "OpenCV",
        "Selenium",
      ],
      image: "assets/projects/smart-parking-01.jpg",
      imageAlt: "The OSU SmartParking team on stage at HackOHI/O",
      gallery: "assets/projects/smart-parking-02.jpg",
      link:
        "https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7389101098982121473",
      linkLabel: "Read project post",
      featured: true,
    },
    {
      title: "MaintAIn",
      eyebrow: "3rd Place · IBM AI Hackathon",
      summary:
        "A study-focus platform that captures browser behavior, analyzes patterns, and turns them into personalized support.",
      problem:
        "Students and educators needed useful focus insights without exposing individual browsing data.",
      contribution:
        "Designed the Capture → Analyze → Act pipeline and built the Chrome extension and role-based dashboard with a four-person team. Connected session data to IBM watsonx Granite for recommendations and cohort analytics.",
      result:
        "Delivered a working, containerized product in 24 hours and earned 3rd place in the AI in Education track.",
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "IBM watsonx", "Docker", "IBM Cloud"],
      link:
        "https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7435226084809400320",
      linkLabel: "Read project post",
    },
    {
      title: "SignEcho",
      eyebrow: "HackAI 2026 · Open-Ended Track",
      summary:
        "A real-time ASL recognition system that converts motion and facial cues into stable, expressive voice output.",
      problem:
        "Dynamic signs require temporal context, while live webcam predictions must remain stable despite noisy frames.",
      contribution:
        "Engineered normalized hand-landmark sequences, Seg3 temporal pooling, Random Forest inference, majority-vote smoothing, and cooldown logic. Added facial landmarks and multilingual text-to-speech for multimodal output.",
      result:
        "Produced an end-to-end real-time computer-vision pipeline during a single hackathon.",
      technologies: ["Python", "MediaPipe", "OpenCV", "scikit-learn", "Random Forest", "Eleven Multilingual v2"],
      link:
        "https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7431864184327426048",
      linkLabel: "Read project post",
      github: "https://github.com/dlwogk7939/HackAI_2026",
    },
    {
      title: "Campus Energy Analytics",
      eyebrow: "DATA I/O 2026",
      summary:
        "An energy intelligence dashboard built from real weather and electricity data across more than 270 campus buildings.",
      problem:
        "Raw multi-source data made it difficult to see demand drivers, inefficient buildings, and anomalous usage.",
      contribution:
        "Developed the predictive model, feature analysis, normalized building benchmarks, and interactive scenario dashboard with a four-person team.",
      result:
        "Showed that weather explains only part of campus demand and highlighted building behavior as a meaningful efficiency opportunity.",
      technologies: ["React", "TypeScript", "Python", "Pandas", "scikit-learn", "Ridge Regression", "Recharts"],
      link:
        "https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7426410533656125440",
      linkLabel: "Read project post",
      github: "https://github.com/dlwogk7939/DataIO-2026",
    },
    {
      title: "InternLink",
      eyebrow: "1st Place · Vibesprint 2026",
      summary:
        "A community platform for interns relocating to new cities to discover peers, roommates, housing, and local events.",
      problem:
        "Students beginning summer internships often arrive in unfamiliar cities without an existing support network.",
      contribution:
        "Built the working product with intern discovery, roommate and housing tools, local meetups, and a city community board.",
      result:
        "Won 1st place and a $1,000 prize in the Vibesprint product competition.",
      technologies: ["Full-stack development", "Rapid prototyping", "Product design", "Imagine.dev"],
      link:
        "https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7438669985532616704",
      linkLabel: "Read project post",
    },
  ],

  researchTeaching: [
    {
      type: "Research",
      title: "Decision Transformer for sample-efficient offline reinforcement learning",
      organization: "The Ohio State University · Prof. Andrew Perrault",
      dates: "October – November 2025",
      description:
        "Implemented a Decision Transformer for CartPole using offline expert data collected from a PPO agent. Evaluated how dataset fraction, training epochs, and model size affected performance, using PyTorch, TensorFlow, and NumPy.",
      link: "https://github.com/dlwogk7939/decision-transformer-cartpole",
    },
    {
      type: "Teaching",
      title: "Web Applications · CSE 3901",
      organization: "Undergraduate Teaching Assistant",
      dates: "January 2026 – Present",
      description:
        "Mentor project teams through full-stack design, client- and server-side implementation, SQL integration, documentation, and code review.",
    },
    {
      type: "Teaching",
      title: "Data Structures & Algorithms · CSE 2331",
      organization: "Undergraduate Teaching Assistant",
      dates: "September 2025 – Present",
      description:
        "Mentor 40+ students weekly on algorithm design, time complexity, debugging, and data-structure optimization; lead reviews and develop practice problems with the instructor.",
    },
  ],

  skills: [
    {
      title: "Languages",
      items: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL", "Assembly", "MATLAB"],
    },
    {
      title: "Backend & Data",
      items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Supabase", "Oracle Database", "PL/SQL"],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Leaflet"],
    },
    {
      title: "Cloud & Enterprise",
      items: ["Oracle EBS", "Oracle ATP", "OCI", "Object Storage", "IBM Cloud", "Docker", "Cloudflare"],
    },
    {
      title: "AI & Data Science",
      items: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "scikit-learn", "OpenCV", "MediaPipe"],
    },
    {
      title: "Automation & Tools",
      items: ["Selenium", "Playwright", "Git", "Web scraping", "Code review", "Data validation"],
    },
  ],

  education: {
    school: "The Ohio State University",
    degree: "Bachelor of Science in Computer Science and Engineering",
    dates: "August 2022 – December 2026",
    detail: "GPA 3.71 · Major GPA 3.76 · Dean’s List: Spring 2023, Summer 2025, Autumn 2025",
  },

  awards: [
    { title: "Vibesprint", place: "1st Place", date: "March 2026", prize: "$1,000" },
    { title: "IBM AI Hackathon · AI in Education", place: "3rd Place", date: "February 2026", prize: "$1,500" },
    { title: "HackAI · Scientific-Mood Fair", place: "3rd Place", date: "February 2026", prize: "$100" },
    { title: "HackOHI/O · Honda Friction Finder", place: "2nd Place", date: "October 2025", prize: "$300" },
    { title: "HackAI · AI Club Track", place: "2nd Place", date: "February 2023", prize: "$75" },
  ],
};
