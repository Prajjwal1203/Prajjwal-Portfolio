import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import AiInterviewImg from "@/public/AiInterview.jpg";
import contentgeneratorImg from "@/public/contentgenerator.png";
import dashboardadminImg from "@/public/dashboardadmin.png";
import objectImg from "@/public/object.png"
import img from "@/public/img.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Schooling",
    location: "St.Antony's Inter College",
    description:
      "I have completed my Intermediate from PCM with an aggregate of 84.25% and Class Xth with 90.4%.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Undergraduate",
    location: "ABESIT group of Institutions",
    description:
      "Currently I am a final-year student pursuing B.tech from Computer Science Stream Where i have excelled many of the techincal tools and skills.",
    icon:  React.createElement(LuGraduationCap),
    date: "2021- 2025",
  },
  {
    title: "SDE Intern",
    location: "Taxian, Delhi",
    description:
      "I have worked as a Intern at Taxian(remote) where I had developed and managed the UI of the System with the help of react.js and had also created the documentation for the APIs with the help of Postman API. ",
    icon: React.createElement(FaReact),
    date: "Aug 2024 - Sept 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Ai-interview-Mocker",
    description:
      "This tool will help the fresher to take up their mock interview depending on their techstack,job description and job roles.",
    tags: ["Next.js", "Gemini AI API","PostgreSQL","Clerk","Drizzle ORM"],
    imageUrl: AiInterviewImg,
     link:"https://ai-interview-coral.vercel.app/"
  
  },
  {
    title: "Content-generator",
    description:
      "The content generator tool will generate content for your saas app.",
    tags: ["Next.js", "TypeScript", "Gemini AI API","PostgreSQL", "Clerk","Drizzle ORM"],
    imageUrl: contentgeneratorImg,
     link:"https://content-generator-for-saas-app.vercel.app/"
  },
  {
    title: "Admin-Dashboard Panel",
    description:
      "This admin panel is built with the help of react.js using the charts & graphs library of react.",
    tags: ["React.js", "Tailwind.css",],
    imageUrl: dashboardadminImg,
     link:"https://admin-dashboard-nu-peach.vercel.app/"
  },
  {
    title: "Human-Detector",
    description:
      "Human-detector blows as sound as soon as it identifies the human and it can clearly differentiates between human and other ojects.",
    tags: ["React", "Next.js","Tensorflow","Coco-SSD"],
    imageUrl: objectImg,
    link:"https://person-detector-alarm.vercel.app/"
  },
   {
    title: "URL Shortner",
    description:
      "This is a URL shortner app which will shorten the long URL to a short URL and it can be used for various purposes.",
    tags: ["React","Supabase"],
    imageUrl: img,
    link:"https://url-shortener-seven-chi.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Github",
  "BootStrap",
  "Tailwind",
  "MongoDB",
  "Supabase",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "GSAP"
] as const;
