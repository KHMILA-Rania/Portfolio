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
  hasLiveDemo:Boolean
}

export const projects: Project[] = [
  {
    name: "Travel Agency Platform",
    imgSrc: "/projects/ats1.png",
    description:
      "Travel management platform that enables users to discover, customize, and book travel experiences while providing administrators with complete control over the platform.",
    about:
      "A comprehensive full-stack travel agency platform built to simplify travel planning and reservation management. The application allows users to explore trips, sports activities, hotels, featured destinations, and personalized travel experiences while offering a seamless booking process. It also includes a powerful administration dashboard for managing reservations, partner accounts, promotional discounts, travel programs, and overall platform content, delivering an efficient and scalable solution for both customers and administrators. \n\nPS : Developed and delivered by me. The project has since been handed over to the client, and I am no longer responsible for its maintenance or updates.",
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
    liveLink: "https://aviatortravel.tn/",
    githubLink: "",
      hasLiveDemo: true,
  },
  {
    name: "electric vehicle charging stations management",
    imgSrc: "/projects/volt2.jpeg",
    description:
      "A mobile platform for locating, reserving, and managing electric vehicle charging stations in real time.",
    about:
      "This mobile application enables users to explore nearby electric vehicle charging stations on an interactive map, view detailed station information, and reserve a charging slot with a 30-minute timer. It also includes features for reviewing stations, tracking usage history, submitting feedback or complaints, and improving overall charging experience. Partners can manage their stations, while administrators have full control with advanced analytics dashboards. \n\nPS: This project was developed as an MVP (Minimum Viable Product) for initial user testing and feedback. As it was not the final public release, no live demo is available.",
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
    liveLink: "",
    githubLink: "",
    hasLiveDemo: false,
  },
  {
  name: "ToyRoom Rome",
  imgSrc: "/projects/toy1.png",
  description:
    "A modern event management platform for discovering Rome-based events, exploring galleries, and handling online reservations through an intuitive web experience.",
  about:
    "ToyRoom Rome is a full-stack web application designed to showcase and manage events in Rome. Built from scratch, the platform provides visitors with an engaging experience to explore upcoming events, browse galleries, and send inquiries through a contact form. An integrated admin dashboard allows authorized users to manage events, upload gallery content, and monitor customer messages efficiently.",
  features: [
    "Dynamic events showcase ",
    "Online contact form for event participation",
    "Gallery management with cloud-based image uploads",
    "Contact form allowing visitors to send inquiries directly",
    "Admin authentication system with protected management features",
    "Admin dashboard to create, update, and delete events and gallery items",
    "Responsive design optimized for different screen sizes",
  ],
  techStack: [
    projectTech.react,
    projectTech.vite,
    projectTech.nodejs,
    projectTech.mongodb,

  ],
  liveLink: "https://toyroom-rome.netlify.app/",
  githubLink: "",
    hasLiveDemo: true,
},
  {
  name: "Vitaneuf",
  imgSrc: "/projects/vita.png",
  description:
    "A modern corporate website developed for Vitaneuf to showcase its services, projects, and company expertise with a responsive and elegant user experience.",
  about:
    "Vitaneuf is a professional company website built to strengthen the brand's online presence while providing visitors with a seamless browsing experience. The platform highlights the company's services, achievements, and contact information through a modern interface, optimized performance, and responsive design. The website focuses on clarity, accessibility, and maintainability, making it easy for administrators to update content as the business evolves. \n\nPS: Developed and delivered by me. The project has since been handed over to the client, and I am no longer responsible for its maintenance or updates.",
  features: [
    "Modern and responsive user interface optimized for all devices",
    "Professional presentation of company services and expertise",
    "Project and gallery sections showcasing completed work",
    "Interactive contact form for customer inquiries",
    "SEO-friendly structure and optimized page performance",
    "Clean architecture for easy maintenance and future scalability",
    "Admin dashboard to manage products and gatecories.",
    "REST API integration for dynamic content management",
  ],
  techStack: [
    projectTech.react,
    projectTech.vite,
    projectTech.nodejs,
    projectTech.mongodb,
  projectTech.jwt,
    projectTech.tailwindcss,
  ],
  liveLink: "https://vitaneuf.tn/",
  githubLink: "",
    hasLiveDemo: true,
},
{
  name: "Fotoderma Alliance",
  imgSrc: "/projects/foto.png",
  description:
    "A modern medical website developed for Fotoderma Alliance to present dermatology services, specialists, and patient resources through a clean and professional interface.",
  about:
    "Fotoderma Alliance is a healthcare-focused website designed to establish a strong online presence for a dermatology center. The platform provides detailed information about treatments, medical specialists, and educational resources while offering clients an intuitive way to explore services and get in touch. Built with performance, accessibility, and responsiveness in mind, the website delivers a seamless experience across all devices and reflects the professionalism of the medical practice.",
  features: [
    "Modern and responsive medical website design",
    "Comprehensive presentation of dermatology treatments and services",
    "Dedicated pages for doctors, treatments, and patient information",
    "Interactive contact and appointment request forms",
    "SEO-optimized structure for improved online visibility",
    "Reusable component architecture for easy maintenance and future expansion",
  ],
  techStack: [
    projectTech.react,
    projectTech.vite,
    projectTech.nodejs,
    projectTech.mongodb,
    projectTech.tailwindcss,
 
  ],
  liveLink: "https://www.fotodermaalliance.com/",
  githubLink: "",
    hasLiveDemo: true,
},
{
  name: "Cabinet de dermatologie",
  imgSrc: "/projects/drmnaja.png",
  description:
    "A modern healthcare website  to showcase medical services, specialties, and patient information through a clean, responsive, and professional user experience.",
  about:
    "This website a professional medical website built to strengthen the online presence of a healthcare practice. The platform presents medical specialties, treatment information, and clinic details in a clear and accessible way while allowing patients to easily navigate the available services and contact the clinic. Designed with responsiveness, performance, and usability in mind, the website offers a seamless browsing experience across all devices and reflects the trust and professionalism expected from a modern healthcare provider.",
  features: [
    "Modern and fully responsive healthcare website",
    "Dedicated pages for medical services and specialties",
    "Professional presentation of the doctor's profile and expertise",
    "Interactive contact section for patient inquiries",
    "Optimized navigation with reusable React components",
    "Fast-loading and SEO-friendly architecture",
  ],
  techStack: [
    projectTech.react,
    projectTech.vite,
    projectTech.nodejs,
    projectTech.mongodb,
    projectTech.tailwindcss,
  ],
  liveLink: "https://drmnaja.netlify.app/",
  githubLink: "",
  hasLiveDemo: true,
},
];

// End of projects data
