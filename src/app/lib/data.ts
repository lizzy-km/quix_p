import { Github, Linkedin, Mail, Phone, MapPin, Briefcase, GraduationCap, Code, Link as LinkIcon, Menu, X } from 'lucide-react';

export const profile = {
  name: 'Kaung Myat Soe',
  title: 'Front End Developer',
  summary: `Passionate Front End Developer with a strong foundation in building dynamic and responsive web applications using React and its ecosystem. Skilled in translating UI/UX designs into high-quality code and continuously seeking to expand my knowledge of new technologies.`,
  location: 'Yangon, Myanmar',
  email: 'quix@quix-dev.online',
  phone: '+959761723325',
  resumeUrl: '/Kaung_Myat_Soe_Front_End_Developer.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/vincexoy/',
    github: 'https://github.com/lizzy-km',
  },
};

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const skills = {
  technical: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Redux', 'Zustand', 'React-Query', 'RESTful APIs', 'Git', 'GitHub','Websocket'],
  soft: ['Teamwork', 'Problem-solving', 'Time Management', 'Adaptability', 'Attention to Detail'],
};

export const experience = [
  {
    company: 'Digital Base',
    role: 'Front-End Developer',
    period: 'Feb 2025 - Present',
    description: 'Developing and maintaining web applications using modern front-end technologies.',
    achievements: [
      'Developed responsive and interactive user interfaces using React and Next.js.',
      'Managed application state efficiently with Redux and Zustand.',
      'Collaborated with backend developers to integrate RESTful APIs.',
      'Ensured code quality and maintainability through code reviews and best practices.'
    ],
  }
];

export const projects = [
  {
    title: 'Simple Facebook',
    description: 'A full-featured e-commerce platform built with React.js, providing a seamless shopping experience with features like product browsing, cart management, and a streamlined checkout process.',
    tags: ['React', 'Tailwind CSS', 'RTK Query'],
    imageUrl: 'project-social',
    liveUrl: '#',
    githubUrl: 'https://github.com/lizzy-km/instagram-k',
  },
  {
    title: 'Movie App',
    description: 'A responsive web application for browsing movies, built with React. It fetches data from a movie database API to display details, ratings, and trailers.',
    tags: ['React', 'API Integration', 'React Context'],
    imageUrl: 'project-movie-app',
    liveUrl: '#',
    githubUrl: 'https://github.com/lizzy-km/themoviedb-org',
  },
  {
    title: 'Figma Plugin',
    description: 'A plugin for figma that convert design frame to Function component.',
    tags: ['Typescript','UI/UX'],
    imageUrl: 'project-figma-plugin',
    liveUrl: '#',
    githubUrl: 'https://github.com/lizzy-km/LazyMode',
  },
];

export const education = {
  institution: 'Myingyan GTI',
  degree: 'Electronic & Communication',
  period: '2018 - 2020',
  description: 'Undergraduated.'
};
