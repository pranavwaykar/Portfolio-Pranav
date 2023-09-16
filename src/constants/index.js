import {
  other,
  backend,
  achievements,
  frontend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  Trinesis,
  freelance,
  amazon,
  shopify,
  carrent,
  dinsey,
  freelancerconnect,
  threejs,
  linkedin,
  instagram,
  github,
  youtube,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Certification",
    icon: frontend,
    link: "https://drive.google.com/drive/folders/1Ix7__6ppy5_xABUcxNSDYmZuifmDu9Oi",
  },
  {
    title: "Backend Certification",
    icon: backend,
    link: "https://drive.google.com/drive/folders/1YVQzxPtsrcSppk2YByqIq99WX5IueAvg",
  },
  {
    title: "Additional Certifications",
    icon: other,
    link: "https://drive.google.com/drive/folders/1g5pd24xDYMjezZ9mEgUcEA_A2C9yYU5i",
  },
  {
    title: "Alternative conquest",
    icon: achievements,
    link: "https://in.linkedin.com/in/pranavwaykar",
  },
];

const social = [
  {
    title: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/pranavwaykar/",
  },
  {
    title: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/pranav.music/",
  },
  {
    title: "Git Hub",
    icon: github,
    link: "https://github.com/PranavWaykar",
  },
  {
    title: "Youtube",
    icon: youtube,
    link: "https://www.youtube.com/@pranavwaykar",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Trinesis Technologies pvt ltd.",
    icon: Trinesis,
    iconBg: "#ffffff",
    date: "December 2022 [Present]",
    points: [
      "Collaborated with cross-platform teams like NAIX, achieving a 30% efficiency boost by enabling direct frontend data extraction coordination and streamlining DRMS integration",
      "Implemented features such as PDF highlight, statistical infographics, sentiment analysis, and also AI chatbot",
      "I also pioneered the dev of Routing Orchestration, Steps, & numerous other features in the SMC module.",
      "Participating in code reviews and providing constructive feedback to other fellow developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "July 2022 - Dec 2022",
    points: [
      "Responsible for the dev of intuitive features using JavaScript and code improvements increasing the performance by 4%",
      "Worked with cross-platform teams and reported code changes required for implementing Geolocation Services in LMM Module, and even have performed unit testing for numerous features",
      "As well as maintained client communication for aligned iterations and improvements.",
    ],
  },
  {
    title: "Support Associate",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#E6DEDD",
    date: "March 2022 - July 2022",
    points: [
      "During my tenure as a Technical Associate at Amazon, I honed my expertise in the operational and functional domains while specializing in troubleshooting and debugging for Amazon devices. Leveraging my technical knowledge and analytical abilities, I was entrusted with the responsibility of meticulously identifying and dissecting user-reported issues.",
      "I adeptly utilized an array of diagnostic tools, log analysis techniques, and advanced debugging methodologies. This systematic approach allowed me to rigorously investigate and, subsequently, isolate the root causes of the encountered problems.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sound Stream Ripper",
    description:
      "Sound Stream Ripper is a Python command-line interface (CLI) program designed to download songs or entire playlists from Spotify and convert them to MP3 format. It finds the YouTube URL of the music and uses the pytube library to download the video. After that, it converts the video to MP3 and adds various metadata to the downloaded audio file, such as album art, album name, artists, and release date, using the mutagen library. This program also interacts with the Spotify API through the spotipy library.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/PranavWaykar/Sound-Stream-Ripper",
  },
  {
    name: "Disney Plus Clone",
    description:
      "The Disney Plus clone project offers a comprehensive streaming platform that emulates the functionalities of the popular Disney Plus service. This project caters to users seeking a vast collection of Disney movies, TV shows, and exclusive content. By replicating the user interface and features of Disney Plus, this clone project provides an immersive streaming experience, allowing users to access a wide range of beloved Disney content from the comfort of their device",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Rest",
        color: "pink-text-gradient",
      },
    ],
    image: dinsey,
    source_code_link: "https://github.com/PranavWaykar/Disney-Plus-Clone",
  },
  {
    name: "Freelancers Connect",
    description:
      "This platform serves as a centralized hub for freelancers, offering them access to a diverse range of project opportunities. For instance, an aspiring filmmaker lacking resources and industry contacts can utilize this platform to connect with a pool of talented artists willing to collaborate. It enables seamless workflow, fostering collaboration between freelancers, thereby facilitating the realization of creative projects. By facilitating seamless coordination & harmonious teamwork, it maximizes productivity and deliverables.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: freelancerconnect,
    source_code_link:
      "https://github.com/PranavWaykar/Freelancers-Connect/tree/master/artistsalike",
  },
];

export { social, services, technologies, experiences, testimonials, projects };
