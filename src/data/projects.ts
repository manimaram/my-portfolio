export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "AI-Powered Analytics Dashboard",
    description:
      "A comprehensive dashboard built with React and TensorFlow.js that provides real-time data analytics with machine learning insights.",
    tech: [
      "React",
      "TypeScript",
      "TensorFlow.js",
      "D3.js",
      "Node.js",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Blockchain Voting System",
    description:
      "Secure and transparent voting platform using Ethereum smart contracts with React frontend and Web3 integration.",
    tech: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Real-time Collaboration Platform",
    description:
      "Multi-user collaborative workspace with real-time synchronization, built using WebSockets and microservices architecture.",
    tech: ["Node.js", "Socket.io", "Redis", "MongoDB", "Docker"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Computer Vision API",
    description:
      "RESTful API for image processing and object detection using Python, OpenCV, and deep learning models.",
    tech: ["Python", "OpenCV", "TensorFlow", "FastAPI", "Docker"],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Mobile-First PWA",
    description:
      "Progressive Web App with offline capabilities, push notifications, and native-like performance.",
    tech: [
      "React",
      "PWA",
      "Service Workers",
      "IndexedDB",
      "Workbox",
    ],
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Microservices E-commerce",
    description:
      "Scalable e-commerce platform built with microservices architecture, featuring payment integration and inventory management.",
    tech: [
      "Spring Boot",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "Stripe",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "AI-Powered Trading Bot",
    description:
      "Intelligent cryptocurrency trading bot using machine learning algorithms for market analysis and automated trading strategies.",
    tech: [
      "Python",
      "TensorFlow",
      "Pandas",
      "WebSocket",
      "PostgreSQL",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
];