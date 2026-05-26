import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Alex",
  lastName: "Mikes",
  name: `Alex Mikes`,
  role: "Product Design Engineer",
  avatar: "/images/mej2.webp",
  email: "AlexMikes@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/alexmikes",
    essential: false,
    footer: false,
  },
  {
  name: "Email",
  icon: "email",
  link: `mailto:${person.email}`,
  essential: true,
  footer: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/alexmikes/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/thealexmikes/",
    essential: true,
    footer: true,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@alexmikes",
    essential: false,
    footer: false,
  },

];

const home: Home = {
  path: "/",
  image: "/images/mej2.webp",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Alex Mikes</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    Welcome to my personal website. Check out what I do for work and what I do for play.
    
</>
  ),
};

const about: About = {
  path: "/resume",
  label: "Resume",
  // avatar: "/images/mej2.webp",
  title: `Resume – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: false,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a father, husband, son, and friend. For work, I am a senior product design engineer at StoreYour, where I design and engineer physical products. 
        After hours, I am a skateboarder, mountain biker, musician, woodworker, airplane pilot, hiker, maker, reader, writer, listener.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "StoreYour",
        timeframe: "2020 - Present",
        role: "Senior Product Design Engineer",
        achievements: [
          <>
            Lead end-to-end product development for hardgoods and mixed-material consumer products from concept through production launch.
          </>,
          <>
            Independently designed and launched 35+ consumer products resulting in a portfolio of 150+ production SKUs across multiple categories.
          </>,
          <>
            Collaborated cross-functionally on the development of 25+ additional products representing 100+ supplemental SKUs across diverse consumer product lines.
          </>,
          <>
            Applied mechanical engineering principles, analytical calculations, and Finite Element Analysis (FEA) to validate product functionality, structural performance, and reliability.
          </>,
          <>
            Drove Design for Manufacturing (DfM) and Design for Assembly (DfA) initiatives to optimize production efficiency, quality, and cost targets.
          </>,
          <>
            Collaborated with international manufacturers and suppliers to manage quoting, prototyping, tooling, production, quality control, and supply chain logistics.
          </>,
        ],
      },
      {
        company: "Hayes+Associates, Inc.",
        timeframe: "2017 - 2020",
        role: "Mechanical Engineering Consultant",
        achievements: [
          <>
            Led the design and fabrication of custom products, fixtures, and experimental test systems for engineering analysis and forensic investigations.
          </>,
          <>
            Applied mechanical engineering fundamentals to analyze dynamics, material behavior, and failure mechanisms in real-world accident scenarios.
          </>,
          <>
            Conducted laboratory and field testing to validate hypotheses and support engineering conclusions.
          </>,
          <>
            Modeled and evaluated stresses, loads, and mechanical performance of materials and structures during impact events.
          </>,
        ],
      },
      {
        company: "Weyerhaeuser",
        timeframe: "2017",
        role: "Mechanical Engineering Intern",
        achievements: [
          <>
            Managed capital improvement projects that generated more than $50,000 in annual operational value.
          </>,
          <>
            Coordinated cross-functional teams of electricians, millwrights, and production personnel to support manufacturing process improvements.
          </>,
          <>
            Designed and implemented microprocessor-based safety devices to improve fire watch monitoring and operational safety.
          </>,
          <>
            Created 3D models and simulations of industrial automation systems to evaluate process improvements and equipment integration.
          </>,
        ],
      },
    {
      company: "Oregon State University",
      timeframe: "2020",
      role: "Graduate Teaching Assistant",
      achievements: [
        <>
          <strong>Mechanical Component Design</strong>
          <br />
          <>
          - Led undergraduate and graduate laboratory sections focused on machine component analysis, failure modes, and design methodology.
          </>
          
          <br />
          - Supported student success through office hours, laboratory guidance, and evaluation of assignments and reports.
        </>,
        <>
          <strong>Design of Mechanisms</strong>
          <br />
          - Guided students in coursework focused on kinematic analysis and multi-link mechanical systems.
          <br />
          - Facilitated hands-on instruction and technical problem solving in laboratory environments.
        </>,
      ],
    },
    {
      company: "Oregon State University",
      timeframe: "2019 - 2020",
      role: "Graduate Research Assistant",
      achievements: [
        <>
          <strong>Design Engineering Lab</strong>
          <br />
          - Developed data mining and machine learning workflows in Python to support design automation research.
          <br />
          - Investigated advanced product development methodologies and computational design approaches.
        </>,
        <>
          <strong>Prototype Development Lab</strong>
          <br />
          - Designed, fabricated, and validated functional product prototypes through iterative testing.
          <br />
          - Utilized CAD/CAM tools to support end-to-end product design and manufacturing processes.
        </>,
      ],
    },
    {
      company: "Oregon State University",
      timeframe: "2016 - 2019",
      role: "Undergraduate Research Assistant",
      achievements: [
        <>
          <strong>Design Engineering Lab</strong>
          <br />
          - Developed data-driven methods for sustainable product design and optimization.
          <br />
          - Created computational tools in Julia to synthesize and optimize material microstructures.
        </>,
        <>
          <strong>Robot Decision Making Lab</strong>
          <br />
          - Designed, implemented, and tested soft hydraulic actuators and liquid metal sensors for underwater ROV applications.
        </>,
        <>
          <strong>Dynamic Robotics Lab</strong>
          <br />
          - Designed and evaluated bipedal robot foot systems to improve locomotion performance.
          <br />
          - Developed hardware and software testing platforms for bipedal and quadrupedal robotics research.
        </>,
        <>
          <strong>Human Factors Engineering Lab</strong>
          <br />
          - Developed hardware and software systems to emulate U.S. Army targeting devices for human factors studies.
          <br />
          - Conducted usability testing to evaluate operator accuracy and response time across multiple GUI configurations using embedded microcontroller systems.
        </>,
      ],
    },

      {
        company: "Oregon State University",
        timeframe: "2015 - 2017",
        role: "Multimedia Engineer",
        achievements: [
          <>
            Managed technical systems, multimedia infrastructure, and equipment operations across university facilities.
          </>,
          <>
            Maintained compatibility between legacy and next-generation technologies while troubleshooting hardware and software issues.
          </>,
          <>
            Trained users and administrators on system operation, maintenance, and technical best practices.
          </>,
        ],
      },
      {
        company: "OHSU | Oregon Health & Science University",
        timeframe: "2014 - 2015",
        role: "Multimedia Engineer",
        achievements: [
          <>
            Designed, installed, and validated integrated multimedia and technical systems in educational and healthcare environments.
          </>,
          <>
            Optimized system performance through troubleshooting, process improvements, and user training.
          </>,
          <>
            Managed hardware and software compatibility across evolving technology platforms and legacy systems.
          </>,
        ],
      },
      {
        company: "California Institute of Technology",
        timeframe: "2012 - 2014",
        role: "Multimedia Engineer",
        achievements: [
          <>
            Designed and deployed multimedia systems tailored to customer and institutional requirements.
          </>,
          <>
            Coordinated with contractors, vendors, and stakeholders to execute projects on schedule and within budget.
          </>,
          <>
            Supported system integration, installation, and technical problem-solving across multiple concurrent projects.
          </>,
        ],
      },
      {
        company: "Studio Trilogy",
        timeframe: "2008 - 2011",
        role: "Assistant Engineer",
        achievements: [
          <>
            Supported recording, editing, and mixing sessions using professional analog and digital audio systems.
          </>,
          <>
            Assisted engineers and artists in fast-paced studio environments requiring precision, technical reliability, and attention to detail.
          </>,
          <>
            Maintained and configured studio equipment, signal chains, and recording workflows.
          </>,
        ],
      },
      {
        company: "Academy of Art University",
        timeframe: "2008 - 2011",
        role: "Lead Audio Engineer",
        achievements: [
          <>
            Managed operation, maintenance, and troubleshooting of audio/video production labs, classrooms, and associated technical infrastructure.
          </>,
          <>
            Supported students and faculty through technical training, equipment setup, and workflow guidance.
          </>,
          <>
            Maintained reliable performance of hardware and software systems across high-use educational environments.
          </>,
        ],
      },
    ],
  },

  education: {
    display: true, // set to false to hide this section
    title: "Education",
    experiences: [
      {
        company: "Oregon State University",
        timeframe: "2015 - 2019",
        role: "Bachelor of Science in Mechanical Engineering",
        achievements: [
          <>
            Graduated summa cum laude with a focus on design engineering and product development.
          </>,
          <>
            Completed a senior capstone project on human-centered product design and manufacturability.
          </>,
        ],
        images: [],
      },
      {
        company: "Oregon State University",
        timeframe: "2019 - 2020",
        role: "Master of Science in Mechanical Engineering",
        achievements: [
          <>
            Specialized in design for additive manufacturing, prototyping, and systems engineering.
          </>,
          <>
            Conducted research in product ergonomics and mechanical systems for wearables.
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true, // set to false to hide this section
    title: "Publications",
    institutions: [

      {
        name: (
          <a
            href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=AaxJyE8AAAAJ&citation_for_view=AaxJyE8AAAAJ:d1gkVwhDpl0C"
            target="_blank"
            rel="noopener noreferrer"
          >
            Toward automated functional modeling: An association rules approach for mining the relationship between product components and function
          </a>
        ),
        description: (
          <>
            <strong>Authors:</strong>Melissa Tensa, Katherine Edmonds, Vincenzo Ferrero, Alex Mikes, Nicolas Soria Zurita, Rob Stone, Bryony DuPont
            <br />
            <strong>Publication date:</strong> 2019/7
            <br />
            <strong>Journal:</strong> Proceedings of the Design Society: International Conference on Engineering Design
          </>
        ),
      },

      {
        name: (
          <a
            href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=AaxJyE8AAAAJ&citation_for_view=AaxJyE8AAAAJ:u-x6o8ySG0sC"
            target="_blank"
            rel="noopener noreferrer"
          >
            Optimizing an algorithm for data mining a design repository to automate functional modeling
          </a>
        ),
        description: (
          <>
            <strong>Authors:</strong>Alex Mikes, Katherine Edmonds, Robert B Stone, Bryony DuPont
            <br />
            <strong>Publication date:</strong> 2019/8
            <br />
            <strong>Journal:</strong> International Design Engineering Technical Conferences and Computers and Information in Engineering Conference
          </>
        ),
      },


      {
        name: (
          <a
            href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=AaxJyE8AAAAJ&citation_for_view=AaxJyE8AAAAJ:u5HHmVD_uO8C"
            target="_blank"
            rel="noopener noreferrer"
          >
            Data mining a design repository to generate linear functional chains: a step toward automating functional modeling
          </a>
        ),
        description: (
          <>
            <strong>Authors:</strong>Katherine Edmonds, Alex Mikes, Bryony DuPont, Robert B Stone
            <br />
            <strong>Publication date:</strong> 2020/2
            <br />
            <strong>Journal:</strong> Design Computing and Cognition’20
          </>
        ),
      },



      {
        name: (
          <a
            href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=AaxJyE8AAAAJ&citation_for_view=AaxJyE8AAAAJ:qjMakFHDy7sC"
            target="_blank"
            rel="noopener noreferrer"
          >
            AutoFunc: A Python package for automating and verifying functional modeling
          </a>
        ),
        description: (
          <>
            <strong>Authors:</strong>Alex Mikes, Katherine Edmonds, Robert B Stone, Bryony DuPont
            <br />
            <strong>Publication date:</strong> 2021/2
            <br />
            <strong>Journal:</strong> Journal of Open Source Software
          </>
        ),
      },



      {
        name: (
          <a
            href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=AaxJyE8AAAAJ&citation_for_view=AaxJyE8AAAAJ:9yKSN-GCB0IC"
            target="_blank"
            rel="noopener noreferrer"
          >
            A weighted confidence metric to improve automated functional modeling
          </a>
        ),
        description: (
          <>
            <strong>Authors:</strong>Katherine Edmonds, Alex Mikes, Bryony DuPont, Robert B Stone
            <br />
            <strong>Publication date:</strong> 2020/8
            <br />
            <strong>Journal:</strong> International Design Engineering Technical Conferences and Computers and Information in Engineering Conference
          </>
        ),
      },

      {
        name: (
          <a
            href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=AaxJyE8AAAAJ&citation_for_view=AaxJyE8AAAAJ:2osOgNQ5qMEC"
            target="_blank"
            rel="noopener noreferrer"
          >
            Data Mining a Design Repository for Automating and Validating Functional Modeling
          </a>
        ),
        description: (
          <>
            <strong>Authors:</strong>Alex Mikes
            <br />
            <strong>Publication date:</strong> 2020/4
            <br />
            <strong>Journal:</strong> Oregon State Scholar Archive
          </>
        ),
      },



    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "This is what I do for fun",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Portfolio – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /work route
};

const play: Work = {
  path: "/play",
  label: "Play",
  title: `Playfolio – ${person.name}`,
  description: `Non-work projects and creative experiments by ${person.name}`,
  // Create new play pages by adding a new .mdx file to app/play/projects
  // All play posts will be listed on the /play route
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, play, gallery };
