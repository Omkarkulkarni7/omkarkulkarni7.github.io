import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Omkar",
  lastName: "Kulkarni",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer Engineer",
  avatar: "/images/avatar.jpeg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Omkarkulkarni777",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/omkarkulkarni7/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/vishwa7203",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:kulkarniomkar2003@gmail.com",
  },
  {
    name: "Resume",
    icon: "resume",
    link: "https://drive.google.com/file/d/1iUqcmLwBy_qh_9a7K38z59SESMHBu9n7/view?usp=sharing",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Web Dev <br/> & Cloud geek</>,
  subline: (
    <>
      I'm Omkar, a software developer intern at <InlineCode>WisdmLabs</InlineCode> <br/>where I build cool stuff   
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Pune-based software developer engineer with a passion for transforming complex challenges
        into simple, elegant solutions. My work covers a wide range of projects, from web development & cloud computing to building cool stuff around AI. 
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "WisdmLabs",
        timeframe: "2025 - Present",
        role: "SDE Intern",
        achievements: [
          <>
            Undergoing structured training covering PHP, and WordPress development, including themes
            and plugins. 
          </>,
          <>
            Training in WordPress customization, plugin development, and performance optimization. Eg. WooCommerce, LearnDash, etc.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Script Analytica",
        timeframe: "2024",
        role: "SDE Intern",
        achievements: [
          <>
            Developed a OCR Solution for scanned physical books of different formats and extracted text out of the images. Used Tesseract OCR and Python for the same.
          </>,
          <>
            Collaborated in an Agile team to develop an HR Management System, enhancing usability through market research
            and competitive analysis.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Pune",
        description: <>Studied Computer Science engineering - 2021 - 2025</>,
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
      
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills & Certifications",
    skills: [
      {
        title: "Skills",
        description: <>Proficient in ReactJS, Node.js/Express, PostgreSQL, Python (TensorFlow, Keras), and AWS Cloud services, with a strong ability to develop scalable and efficient solutions.</>,
        // optional: leave the array empty if you don't want to display images
        images: [ ],
    },
    
      {
        title: "Certified in Atlassian Jira",
        description: <>Studied agile principles and flagship Jira Software</>,
        images: [
          {
            src: "/images/certifications/Jira.png",
            alt: "Jira Certificate",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Certified in AWS Cloud Foundation",
        description: <>Learnt core AWS Features and Services</>,
        images: [
          {
            src: "/images/certifications/AWS.png",
            alt: " AWS Cloud Foundation Certificate",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Certified by Wharton School - University Of Pennsylvania in Communication Skills Course",
        description: <>Gained proficiency in professional communication skills</>,
        images: [
          {
            src: "/images/certifications/Communication.png",
            alt: " Communication Skills Certificate",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
