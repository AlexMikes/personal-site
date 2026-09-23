import { About, Blog, Gallery, Home, Newsletter, Person, Playfolio, Social, Work } from "@/types";
import { Column, Line, Row, SmartLink, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Alex",
  lastName: "Mikes",
  name: `Alex Mikes`,
  role: "Mechanical & Product Design Engineer",
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
    essential: false,
    footer: false,
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
      I'm a mechanical / product design engineer who takes physical products from concept through
      production launch. Take a look at my work, and what I get up to outside of it.
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
        I'm a mechanical and product design engineer with a background in consumer product
        development, DfM/DfA, FEA, and manufacturing.
      </>
    ),
  },
  jobStory: {
    display: true,
    prompt: "Want to read my professional story and not just the resume bullets? (Not AI-generated, crazy right?!?!)",
    items: [
      {
        title: "Short version",
        content: (
          <Column gap="m">
            <Text variant="body-default-m" onBackground="neutral-weak">
              My path to mechanical engineering wasn't a straight line. College wasn’t the right
              place for me the first time around, and after a false start at Wake Forest I moved to
              Southern California to figure things out. A filmmaking class at community college
              introduced me to audio production, which led me to San Francisco and a year at the
              Pyramind Institute, then jobs as an audio engineer at the Academy of Art University
              and Studio Trilogy. It was a dream I'd had for years, but once I was living it, I
              realized it wasn't the career I actually wanted.
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              I moved to Los Angeles with my future wife, worked briefly in post-production sound,
              and started teaching myself woodworking and CAD in my spare time. A full-time
              multimedia engineering job at Caltech followed, where I earned my private pilot's
              license, worked alongside JPL engineers on Curiosity rover videos, and kept building
              things on the side. That exposure to real engineering pushed me back to school. We
              landed on Oregon State University, working multimedia jobs at OHSU and OSU along the
              way.
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              At 28, I started my undergraduate degree in Mechanical Engineering, graduating summa
              cum laude before staying on for a Master's. I did research in robotics, design
              automation, and human factors labs, taught two engineering courses as a TA,
              co-authored five peer-reviewed papers, and spent three years as a testing and
              fixture-design consultant for a biomechanics forensics firm, on top of a hands-on
              internship at a lumber mill.
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              I finished my Master's in June 2020, just as the pandemic hit, and landed my dream job
              as a product design engineer at Spire Collective (StoreYourBoard) in Charlottesville,
              VA. Over six years there, I largely owned new product development end to end, built
              out the company's design process, and helped the team navigate constant organizational
              change. The company ultimately couldn't recover from a prolonged sales downturn, and I
              was laid off as part of cost-cutting measures, on good terms and with a strong
              recommendation from the CEO. I'm excited to see what's next.
            </Text>
          </Column>
        ),
      },
      {
        title: "Long version",
        content: (
          <Column gap="m">
            <Text variant="body-default-m" onBackground="neutral-weak">
              {`Toward the end of high school, everyone expected me to go to college. I was tired of being in school all the time, but I went anyway. Once I moved away from home and had a taste of independence, I did not do well with a class schedule. I went to Wake Forest for one semester and withdrew before the F's hit my transcript. I moved to Dana Point, CA (Orange County) to try to figure out what I wanted to be when I grew up. I took some classes at Saddleback Community College, one of which was a filmmaking class. While making some short movies, I fell in love with the music production and audio post-production I was exposed to. I had been a musician for many years but never did much recording until then. I moved to San Francisco and went to Pyramind Institute to learn multimedia production. It was a 1 year program, after which I was working at the Academy of Art University as an audio engineer, and I was also an intern at Talking House Records / Studio Trilogy.`}
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {`I ended up as the lead audio engineer at the Academy of Art, where I managed all of the audio recording, editing, and mixing equipment and helped students and teachers use it, mostly focused on Pro Tools. At Studio Trilogy I ended up as an assistant engineer, helping with all aspects of a recording and mixing session for in-house and outside engineers. I worked with a bunch of talented people on interesting projects and learned so much in the process. Working there was a dream come true. I realized that the dream I had of becoming an audio engineer was not the life I wanted for myself. I had met my future wife while living in San Francisco, and together with our 2 cats and dog, we moved to sunny Los Angeles. We didn't have jobs or prospects or anything, just a desire for some more sunshine. We got what we wanted, and years later left Los Angeles for Portland due to too much sunshine, but I'm getting ahead of myself.`}
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {`After moving to Los Angeles, I found some work doing post-production sound for movies but was mostly unemployed. I spent most of my time learning woodworking, and I fell in love with CAD (computer-aided design), mostly SketchUp, and learning how to design and build furniture. After about 6 months, I got a full-time job at Caltech as a multimedia engineer. I loved working there: the atmosphere was inspiring, the campus is beautiful, I learned a lot about higher education before I ever went back to college, and I really enjoyed the people on my team. I worked on a huge range of projects, mostly doing the technical design, install, repair, and management of audio and video systems. One of the best perks was access to a lifelong dream of flying airplanes through the Caltech/JPL flying club. Over the course of a year, I worked toward and got my private pilot license (PPL, Airplane Single Engine Land). Throughout my time there, I worked with the engineers at Caltech and the Jet Propulsion Lab (JPL) on some videos about how they were landing the Curiosity rover on Mars. I was also working with some of the faculty on media projects for their research in robotics and engineering design. All the while, I was still designing and building things in my free time, increasing in complexity and technical requirements but not scratching the surface of what they were doing. I was really inspired by their work and realized that being a mechanical engineer was the professional path that would let me use my love for designing and making things to solve real-world problems.`}
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {`So we looked for somewhere we wanted to live that also had a good engineering school with in-state tuition I could afford, and landed on Oregon State University. We moved to Portland, OR; I enrolled at Portland Community College, then a year later moved to Corvallis, OR and transferred to Oregon State University. While in Portland, I worked at Oregon Health and Science University as a Multimedia Engineer, doing work similar to what I did at Caltech. Living and working in Portland was a great experience, and I learned a lot at OHSU about healthcare professions, along with a lot of random medical things. We moved to Corvallis, and I worked full time at Oregon State University as a Multimedia Engineer before starting school in the fall.`}
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {`To summarize a few years in a few sentences: I loved being a fulltime student at 28 years old. It was such a different experience than 10 years earlier. I had been a working professional for so many years, and having adult skills like time management and intrinsic motivation was a big advantage as a college student. I hadn't worked as hard on anything in my life as I did for my undergraduate degree in Mechanical Engineering. Being older also gave me some perspective on how great it is to be a full time student, so I took advantage of all of the benefits and opportunities available to me. I joined and served on the board of directors for the flying club, was elected Vice President of Tau Beta Pi (the engineering honor society), took fun non-credit classes like ceramics and stained glass, used the well-equipped woodshop and metal shop for personal projects, and stayed active at the gym and climbing gym.`}
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {`I knew early on that I wanted to get my master's, and I also knew I wouldn't be able to pay for it without funding on a grant, so I did a lot of undergraduate research to prepare for graduate school. As an undergraduate, I was awarded a research grant to work in the Robot Decision Making Lab, where I helped design, implement, and test a soft hydraulic actuator with a liquid metal sensor on an underwater ROV. After that I worked in the Dynamic Robotics Lab to help design and test improvements to their bipedal robot, Cassie. After realizing I had almost no chance of getting funding for a master's from a robotics lab on campus (OSU had a great graduate program in robotics, but I wasn't a competitive candidate), I switched my focus back to my main love of design and worked in the Design Engineering Lab on computational design tools involving programming and optimization. I simultaneously worked in the Human Factors Engineering Lab, where I developed hardware and software to emulate U.S. Army targeting devices for human factors studies. This combined design, programming, building, testing, and optimizing, and reporting my findings was a great opportunity to apply a lot of what I'd learned inside and outside of school.`}
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {`This undergraduate research experience made me a strong candidate for a graduate research assistant position on an NSF grant in the Design Engineering Lab with my co-advisors, Rob Stone and Bryony DuPont. I secured that position as I graduated with my Bachelor's degree and started my Master's. OSU had a program that let certain classes count toward both undergraduate and graduate degrees, so I only needed one additional year in graduate school. As a graduate research assistant in the Design Engineering Lab, I developed data mining and machine learning workflows in Python to support design automation research. I co-authored 5 peer-reviewed research papers (3 as primary author) and presented some of our findings at conferences. I was also a Graduate Research Assistant in the Prototype Development Lab, where I designed and prototyped consumer-style products. I worked on a range of projects there that helped prepare me for a career in product development. As a Graduate Teaching Assistant, I worked in Mechanical Component Design, leading undergraduate and graduate lab sections on component analysis, failure modes, and design methodology, and in Design of Mechanisms, guiding students through kinematic analysis and multi-link mechanical systems coursework. In both classes I supported students and teachers through office hours, lab guidance, and assignment evaluation. I wrote a thesis, successfully defended it, and graduated with my Master of Science in Mechanical Engineering, finishing with a 3.91 GPA (summa cum laude) for my bachelor's degree and a 4.0 for my master's.`}
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {`My career as a mechanical engineer started before I finished school, with both an internship and a consulting position. In the summer after my second year, I got an internship at the Weyerhaeuser lumber mill nearby. It was only 4 months long, but it was a valuable introduction to real-world engineering problem solving. They gave me the flexibility to pursue what I thought was interesting, and the room to actually make an impact. I was intimidated collaborating with millwrights and electricians who had worked there for 30 years, but they welcomed my ideas and implemented some of the changes I suggested. I learned a lot about the lumber industry, factory safety, tree farms, industrial processes and machinery, real-world problem solving, and interpersonal dynamics. After that internship, I started working as a consultant at Hayes and Associates, where I stayed for the following 3 years during school. I designed and fabricated custom test fixtures and ran laboratory and field testing to evaluate material properties and failure mechanisms in support of their biomechanics forensic expert testimony. I worked on a range of cases, each with its own challenges and questions to answer. It was rewarding to see engineering principles applied to real-world scenarios, a world away from the theoretical calculations that made up my coursework at the same time.`}
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {`I finished graduate school in June of 2020, right as the world was reeling from the COVID-19 pandemic. It was an unsteady time, and I was fortunate to land my dream job as a product design engineer for Spire Collective (StoreYourBoard). They paid to move us across the country to Charlottesville, VA, and I started working there in August. The company makes storage racks for outdoor sports and tools, and they were growing because when Covid hit, everyone was doing more outdoor activities and reorganizing their garage and storage spaces as they spent more time at home. I started working on new product designs under the mentorship of the director of products and learned a lot from him in the first few months about design, supply chain, and managing factories for prototype and production. He left soon after I started, and while I continued to collaborate on designs and requirements with other team members, I was left to manage the end-to-end development process for new products with only a few months of experience. Fortunately we had great factories that helped with the transition, but the upside of working for a small startup is the huge range of tasks you get to take on. I loved the variety in my days and always enjoy learning new things. What would have been a team of a dozen people at a larger company was mostly my responsibility alone. I implemented a product design and development process for the company to follow for new product introduction, which helped smooth out some of our common roadblocks. The company and team went through a lot of changes in leadership, management, team size, roles, and organizational structure, along with all of the growing pains of a small company, over the 6 years I was there. It was a valuable experience to be one of the few people who helped carry the team through those changes and see every phase along the way. Ultimately, the company went through a prolonged downturn in sales it couldn't recover from. My role was focused on new products and growth, and as the company shifted from a growth to a survival mindset, I was laid off as part of larger cost-cutting measures. I received a generous letter of recommendation from the CEO noting that my performance was strong and that the layoff was solely due to the company's sales. As of writing this, that was a week ago. I'm excited to see what's next for me on this journey.`}
            </Text>
          </Column>
        ),
      },
    ],
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "StoreYourBoard",
        timeframe: "2020 - Present",
        role: "Senior Product Design Engineer",
        achievements: [
          <>
            Lead end-to-end product development for hardgoods and mixed-material consumer products
            from concept through production launch.
          </>,
          <>
            Independently designed and launched 35+ consumer products resulting in a portfolio of
            150+ production SKUs across multiple categories.
          </>,
          <>
            Collaborated cross-functionally on the development of 25+ additional products
            representing 100+ supplemental SKUs across diverse consumer product lines.
          </>,
          <>
            Applied mechanical engineering principles, analytical calculations, and Finite Element
            Analysis (FEA) to validate product functionality, structural performance, and
            reliability.
          </>,
          <>
            Drove Design for Manufacturing (DfM) and Design for Assembly (DfA) initiatives to
            optimize production efficiency, quality, and cost targets, while balancing form and
            function for manufacturability, assembly, and eCommerce shipping.
          </>,
          <>
            Managed the product design, development, and production process with international
            manufacturers and suppliers, including quoting, prototyping, tooling, production,
            quality control, and supply chain logistics.
          </>,
          <>
            Implemented and maintained a PLM system, and maintained a database of product
            information for effective communication across cross-functional teams.
          </>,
          <>Led the product team across all hardgoods and mixed-material product lines.</>,
          <>
            Recruited, trained, and mentored high-level team members as the design function grew.
          </>,
        ],
      },
      {
        company: "Hayes+Associates, Inc.",
        timeframe: "2017 - 2020",
        role: "Mechanical Engineering Consultant",
        achievements: [
          <>
            Led the design and fabrication of custom products, fixtures, and experimental test
            systems for engineering analysis and forensic investigations.
          </>,
          <>
            Applied mechanical engineering fundamentals to analyze dynamics, material behavior, and
            failure mechanisms in real-world accident scenarios.
          </>,
          <>
            Conducted laboratory and field testing to validate hypotheses and support engineering
            conclusions.
          </>,
          <>
            Modeled and evaluated stresses, loads, and mechanical performance of materials and
            structures during impact events.
          </>,
        ],
      },
      {
        company: "Weyerhaeuser",
        timeframe: "2017",
        role: "Mechanical Engineering Intern",
        achievements: [
          <>
            Managed capital improvement projects that generated more than $50,000 in annual
            operational value.
          </>,
          <>
            Coordinated cross-functional teams of electricians, millwrights, and production
            personnel to support manufacturing process improvements.
          </>,
          <>
            Designed and implemented microprocessor-based safety devices to improve fire watch
            monitoring and operational safety.
          </>,
          <>
            Created 3D models and simulations of industrial automation systems to evaluate process
            improvements and equipment integration.
          </>,
          <>Designed manufacturing and reliability visual diagrams to document process flow.</>,
          <>Developed a visitor safety orientation process and supporting database.</>,
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
              - Led undergraduate and graduate laboratory sections focused on machine component
              analysis, failure modes, and design methodology.
            </>
            <br />- Supported student success through office hours, laboratory guidance, and
            evaluation of assignments and reports.
          </>,
          <>
            <strong>Design of Mechanisms</strong>
            <br />- Guided students in coursework focused on kinematic analysis and multi-link
            mechanical systems.
            <br />- Facilitated hands-on instruction and technical problem solving in laboratory
            environments.
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
            <br />- Developed data mining and machine learning workflows in Python to support design
            automation research.
            <br />- Investigated advanced product development methodologies and computational design
            approaches.
          </>,
          <>
            <strong>Prototype Development Lab</strong>
            <br />- Designed, fabricated, and validated functional product prototypes through
            iterative testing.
            <br />- Utilized CAD/CAM tools to support end-to-end product design and manufacturing
            processes.
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
            <br />- Developed data-driven methods for sustainable product design and optimization.
            <br />- Created computational tools in Julia to synthesize and optimize material
            microstructures.
          </>,
          <>
            <strong>Robot Decision Making Lab</strong>
            <br />- Designed, implemented, and tested soft hydraulic actuators and liquid metal
            sensors for underwater ROV applications.
          </>,
          <>
            <strong>Dynamic Robotics Lab</strong>
            <br />- Designed and evaluated bipedal robot foot systems to improve locomotion
            performance.
            <br />- Developed hardware and software testing platforms for bipedal and quadrupedal
            robotics research.
          </>,
          <>
            <strong>Human Factors Engineering Lab</strong>
            <br />- Developed hardware and software systems to emulate U.S. Army targeting devices
            for human factors studies.
            <br />- Conducted usability testing to evaluate operator accuracy and response time
            across multiple GUI configurations using embedded microcontroller systems.
          </>,
        ],
      },

      {
        company: "Oregon State University",
        timeframe: "2015 - 2017",
        role: "Multimedia Engineer",
        achievements: [
          <>
            Managed technical systems, multimedia infrastructure, and equipment operations across
            university facilities.
          </>,
          <>
            Maintained compatibility between legacy and next-generation technologies while
            troubleshooting hardware and software issues.
          </>,
          <>
            Trained users and administrators on system operation, maintenance, and technical best
            practices.
          </>,
        ],
      },
      {
        company: "OHSU | Oregon Health & Science University",
        timeframe: "2014 - 2015",
        role: "Multimedia Engineer",
        achievements: [
          <>
            Designed, installed, and validated integrated multimedia and technical systems in
            educational and healthcare environments.
          </>,
          <>
            Optimized system performance through troubleshooting, process improvements, and user
            training.
          </>,
          <>
            Managed hardware and software compatibility across evolving technology platforms and
            legacy systems.
          </>,
        ],
      },
      {
        company: "California Institute of Technology",
        timeframe: "2012 - 2014",
        role: "Multimedia Engineer",
        achievements: [
          <>
            Designed and deployed multimedia systems tailored to customer and institutional
            requirements.
          </>,
          <>
            Coordinated with contractors, vendors, and stakeholders to execute projects on schedule
            and within budget.
          </>,
          <>
            Supported system integration, installation, and technical problem-solving across
            multiple concurrent projects.
          </>,
        ],
      },
      {
        company: "Studio Trilogy",
        timeframe: "2008 - 2011",
        role: "Assistant Engineer",
        achievements: [
          <>
            Supported recording, editing, and mixing sessions using professional analog and digital
            audio systems.
          </>,
          <>
            Assisted engineers and artists in fast-paced studio environments requiring precision,
            technical reliability, and attention to detail.
          </>,
          <>Maintained and configured studio equipment, signal chains, and recording workflows.</>,
        ],
      },
      {
        company: "Academy of Art University",
        timeframe: "2008 - 2011",
        role: "Lead Audio Engineer",
        achievements: [
          <>
            Managed operation, maintenance, and troubleshooting of audio/video production labs,
            classrooms, and associated technical infrastructure.
          </>,
          <>
            Supported students and faculty through technical training, equipment setup, and workflow
            guidance.
          </>,
          <>
            Maintained reliable performance of hardware and software systems across high-use
            educational environments.
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
          <>Graduated summa cum laude (GPA 3.91/4.0)</>,
          <>
            NASA Scholar, Tau Beta Pi Engineering Honor Society, Oregon State Flying Club Board of
            Directors
          </>,
        ],
        images: [],
      },
      {
        company: "Oregon State University",
        timeframe: "2019 - 2020",
        role: "Master of Science in Mechanical Engineering",
        achievements: [<>Graduated summa cum laude (GPA 4.0/4.0)</>],
        images: [],
      },
    ],
  },

  studies: {
    display: true, // set to false to hide this section
    title: "Publications",
    institutions: [
      {
        name: "Optimizing an algorithm for data mining a design repository to automate functional modeling",
        description: (
          <>
            <SmartLink
              href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=AaxJyE8AAAAJ&citation_for_view=AaxJyE8AAAAJ:u-x6o8ySG0sC"
              suffixIcon="chevronRight"
            >
              View Publication
            </SmartLink>
            <br />
            <strong>Authors:</strong> Alex Mikes, Katherine Edmonds, Robert B Stone, Bryony DuPont
            <br />
            <strong>Publication date:</strong> 2019/8
            <br />
            <strong>Journal:</strong> International Design Engineering Technical Conferences and
            Computers and Information in Engineering Conference
          </>
        ),
      },

      {
        name: "Data mining a design repository to generate linear functional chains: a step toward automating functional modeling",
        description: (
          <>
            <SmartLink
              href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=AaxJyE8AAAAJ&citation_for_view=AaxJyE8AAAAJ:u5HHmVD_uO8C"
              suffixIcon="chevronRight"
            >
              View Publication
            </SmartLink>
            <br />
            <strong>Authors:</strong> Katherine Edmonds, Alex Mikes, Bryony DuPont, Robert B Stone
            <br />
            <strong>Publication date:</strong> 2020/2
            <br />
            <strong>Journal:</strong> Design Computing and Cognition’20
          </>
        ),
      },

      {
        name: "AutoFunc: A Python package for automating and verifying functional modeling",
        description: (
          <>
            <SmartLink
              href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=AaxJyE8AAAAJ&citation_for_view=AaxJyE8AAAAJ:qjMakFHDy7sC"
              suffixIcon="chevronRight"
            >
              View Publication
            </SmartLink>
            <br />
            <strong>Authors:</strong> Alex Mikes, Katherine Edmonds, Robert B Stone, Bryony DuPont
            <br />
            <strong>Publication date:</strong> 2021/2
            <br />
            <strong>Journal:</strong> Journal of Open Source Software
          </>
        ),
      },

      {
        name: "A weighted confidence metric to improve automated functional modeling",
        description: (
          <>
            <SmartLink
              href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=AaxJyE8AAAAJ&citation_for_view=AaxJyE8AAAAJ:9yKSN-GCB0IC"
              suffixIcon="chevronRight"
            >
              View Publication
            </SmartLink>
            <br />
            <strong>Authors:</strong> Katherine Edmonds, Alex Mikes, Bryony DuPont, Robert B Stone
            <br />
            <strong>Publication date:</strong> 2020/8
            <br />
            <strong>Journal:</strong> International Design Engineering Technical Conferences and
            Computers and Information in Engineering Conference
          </>
        ),
      },

      {
        name: "Data Mining a Design Repository for Automating and Validating Functional Modeling",
        description: (
          <>
            <SmartLink
              href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=AaxJyE8AAAAJ&citation_for_view=AaxJyE8AAAAJ:2osOgNQ5qMEC"
              suffixIcon="chevronRight"
            >
              View Publication
            </SmartLink>
            <br />
            <strong>Authors:</strong> Alex Mikes
            <br />
            <strong>Publication date:</strong> 2020/4
            <br />
            <strong>Journal:</strong> Oregon State Scholar Archive
          </>
        ),
      },

      // {
      //   name: "Oregon State University",
      //   description: <>
      //   Bachelor of Science, Mechanical Engineering
      //   <br />2015 - 2019
      //   <br />GPA 3.92/4.0 - Summa Cum Laude
      //   </>,
      // },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
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
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
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
  title: `Portfolio`,
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

const playfolio: Playfolio = {
  path: "/playfolio",
  label: "Play",
  title: `Playfolio`,
  description: `How I spend my time outside of work`,
  // Trying a simpler playfolio using cards
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

export { person, social, newsletter, home, about, blog, work, play, playfolio, gallery };
