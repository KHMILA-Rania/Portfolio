import { projectTech } from "@/data/tech";
import type { TechItem } from "@/data/tech";

export interface Project {
  name: string;
  imgSrc: string;
  description: string;
  techStack: TechItem[];
  liveLink: string;
  githubLink: string;
  about: string;
  features: string[];
}

export const projects: Project[] = [
  {
    name: "Travel Agency Platform",
    imgSrc: "/projects/ats1.png",
    description:
      "Travel management platform that enables users to discover, customize, and book travel experiences while providing administrators with complete control over the platform.",
    about:
      "A comprehensive full-stack travel agency platform built to simplify travel planning and reservation management. The application allows users to explore trips, sports activities, hotels, featured destinations, and personalized travel experiences while offering a seamless booking process. It also includes a powerful administration dashboard for managing reservations, partner accounts, promotional discounts, travel programs, and overall platform content, delivering an efficient and scalable solution for both customers and administrators.",
    features: [
      "Browse and book trips, sports activities, and hotel reservations.",
      "Explore featured destinations, travel programs, and best-selling offers.",
      "Explore featured destinations, travel programs, and best-selling offers.",
      "Partner account management with dedicated administration tools.",
      "Promotional discounts and offers management.",
      "Comprehensive admin dashboard for managing events, bookings, users, partners, and platform content.",
      "Cloudinary integration for secure image upload and media management.",
      "RESTful API development and testing with Postman.",
     
    ],
    techStack: [
      projectTech.react,
      projectTech.typescript,
      projectTech.tailwindcss,
   
      projectTech.jwt,
      projectTech.nodejs,
      projectTech.mongodb,
      projectTech.jwt,
  
    ],
    liveLink: "https://app.shrtn.fun",
    githubLink: "https://github.com/CharanMunur/shrtn",
  },
  {
    name: "electric vehicle charging stations management",
    imgSrc: "/projects/voltwise.jpeg",
    description:
      "A mobile platform for locating, reserving, and managing electric vehicle charging stations in real time.",
    about:
      "This mobile application enables users to explore nearby electric vehicle charging stations on an interactive map, view detailed station information, and reserve a charging slot with a 30-minute timer. It also includes features for reviewing stations, tracking usage history, submitting feedback or complaints, and improving overall charging experience. Partners can manage their stations, while administrators have full control with advanced analytics dashboards.",
    features: [
      "Interactive map showing available charging stations with details for each stations.",
      "30-minute reservation system with timer",
      "Reservation history tracking",
      "Rating and commenting system",
      "Complaint submission system",
      "Analytics (most used stations, top-rated stations, trends)",

    ],
    techStack: [
      projectTech.react,
      projectTech.javascript,
      projectTech.tailwindcss,
      projectTech.vite,
      projectTech.reactnative,
    ],
    liveLink: "https://markdown-editor-v1.netlify.app/",
    githubLink: "https://github.com/CharanMunur/markdown-editor",
  },
  {
    name: "Shadcn Scaffold",
    imgSrc: "/projects/shadcn-scaffold.png",
    description:
      "An automated CLI tool that instantly bootstraps production-ready React applications with Vite, TypeScript, Tailwind CSS v4, and shadcn/ui.",
    about:
      "Built to eliminate boilerplate fatigue. shadcn-scaffold is an interactive command-line interface that completely automates modern React project setups. From configuring complex path aliases and injecting dark mode providers, to orchestrating heavy dependencies—this tool condenses hours of manual configuration into a single, lightning-fast terminal command.",
    features: [
      "Interactive terminal UI built with React Ink for dynamic package selection",
      "Zero-config integration of Tailwind CSS v4 and shadcn/ui base components",
      "Injects fully functional Theme Providers and custom Mode Toggles",
      "Dynamically patches tsconfig.json and Vite settings to fix path aliasing bugs",
      "Orchestrates child processes (Execa) for reliable dependency resolution",
      "Published globally to NPM for instant execution via npx or bunx",
    ],
    techStack: [
      projectTech.nodejs,
      projectTech.typescript,
     
      projectTech.commander,
      projectTech.execa,
    ],
    liveLink: "https://www.npmjs.com/package/shadcn-scaffold",
    githubLink: "https://github.com/CharanMunur/shadcn-scaffold",
  },
  {
    name: "SuperTodo",
    imgSrc: "/projects/supertodo.png",
    description:
      "A full-featured todo app with priorities, due dates, subtasks, and date-grouped views. Animated with Framer Motion and styled with shadcn/ui for a polished experience.",
    about:
      "A personal productivity app built to go beyond a basic todo list. It supports subtasks, priority levels, due dates, and groups tasks by date for a cleaner overview. Built with React, shadcn/ui, and Framer Motion, with a heavy focus on animations and a polished user experience.",
    features: [
      "Create, edit, and delete tasks with subtask support and completion tracking",
      "Priority levels (High, Medium, Low) with visual indicators",
      "Due date picker with date-grouped task views",
      "Filter by All, Pending, and Completed — sort by status, priority, or date",
      "Smooth Framer Motion animations on task add, complete, and delete",
      "Dark and light theme toggle with persistent preference",
      "Data persisted via localStorage — survives page refresh",
    ],
    techStack: [
      projectTech.react,
      projectTech.javascript,
      projectTech.tailwindcss,
      projectTech.vite,
      projectTech.motion,
      projectTech.shadcnui,
    ],
    liveLink: "https://supertodo-v1.netlify.app/",
    githubLink: "https://github.com/CharanMunur/supertodo",
  },
];

// End of projects data
