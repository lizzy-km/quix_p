import { Github, Linkedin, Mail, Phone, MapPin, Briefcase, GraduationCap, Code, Link as LinkIcon, Menu, X } from 'lucide-react';

export const profile = {
  name: 'Youssef Ahmed',
  title: 'Front End Developer',
  summary: `Passionate Front End Developer with a strong foundation in building dynamic and responsive web applications using React and its ecosystem. Skilled in translating UI/UX designs into high-quality code and continuously seeking to expand my knowledge of new technologies.`,
  location: 'Cairo, Egypt',
  email: 'youssef.ahmed.gaber@outlook.com',
  phone: '+201119566275',
  resumeUrl: '/resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/youssef-ahmed-gaber-335607212',
    github: 'https://github.com/Youssef-Ahmed-Gaber',
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
  technical: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Redux', 'Zustand', 'React-Query', 'RESTful APIs', 'Git', 'GitHub'],
  soft: ['Teamwork', 'Problem-solving', 'Time Management', 'Adaptability', 'Attention to Detail'],
};

export const experience = [
  {
    company: 'Bdaya',
    role: 'Front-End Developer',
    period: 'Oct 2023 - Present',
    description: 'Developing and maintaining web applications using modern front-end technologies.',
    achievements: [
      'Developed responsive and interactive user interfaces using React and Next.js.',
      'Managed application state efficiently with Redux and Zustand.',
      'Collaborated with backend developers to integrate RESTful APIs.',
      'Ensured code quality and maintainability through code reviews and best practices.'
    ],
  },
  {
    company: 'Freelance',
    role: 'Front-End Developer',
    period: 'Jan 2023 - Sep 2023',
    description: 'Worked on various client projects, delivering high-quality front-end solutions.',
    achievements: [
      'Built custom websites and web applications from scratch based on client requirements.',
      'Converted Figma designs into pixel-perfect, responsive websites using HTML, CSS, and React.',
      'Integrated third-party services and APIs to extend application functionality.',
    ],
  },
];

export const projects = [
  {
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce platform built with Next.js, providing a seamless shopping experience with features like product browsing, cart management, and a streamlined checkout process.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'State Management'],
    imageUrl: 'project-ecommerce',
    liveUrl: '#',
    githubUrl: 'https://github.com/Youssef-Ahmed-Gaber/E-commerce-Next',
  },
  {
    title: 'Movie App',
    description: 'A responsive web application for browsing movies, built with React. It fetches data from a movie database API to display details, ratings, and trailers.',
    tags: ['React', 'API Integration', 'CSS'],
    imageUrl: 'project-movie-app',
    liveUrl: '#',
    githubUrl: 'https://github.com/Youssef-Ahmed-Gaber/Movie-App',
  },
  {
    title: 'HooBank Landing Page',
    description: 'A modern and visually appealing landing page for a fictional bank, "HooBank". This project showcases skills in creating stylish, responsive layouts with React and Tailwind CSS.',
    tags: ['React', 'Tailwind CSS', 'UI/UX'],
    imageUrl: 'project-hoobank',
    liveUrl: '#',
    githubUrl: 'https://github.com/Youssef-Ahmed-Gaber/hoobank-react',
  },
];

export const education = {
  institution: 'Thebes Academy',
  degree: 'Bachelor of Computer Science',
  period: '2019 - 2023',
  description: 'Graduated with a solid understanding of computer science fundamentals, software development, and algorithms.'
};
