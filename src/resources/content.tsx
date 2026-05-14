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
  image: "/images/og/home.jpg",
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
    Senior product design engineer at <Text as="span" size="xl" weight="strong">StoreYour</Text>, where I design and engineer physical products. After hours, I do a lot of other things.
</>
  ),
};

const about: About = {
  path: "/resume",
  label: "Resume",
  title: `Resume – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
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
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
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
    display: false, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Oregon State University",
        description: <>
        Master of Science, Mechanical Engineering, Design Focus
        <br />2019 - 2020
        <br />GPA 4.0/4.0
        </>,
      },
      {
        name: "Oregon State University",
        description: <>
        Bachelor of Science, Mechanical Engineering
        <br />2015 - 2019
        <br />GPA 3.92/4.0 - Summa Cum Laude
        </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
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
  title: `Play – ${person.name}`,
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
