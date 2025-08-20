import { ExternalLink, Github, Star } from "lucide-react";
import Navigation from "@/components/Navigation";

const Projects = () => {
  const projects = [
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
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const regularProjects = projects.filter((project) => !project.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions and cutting-edge technologies.
            Each project represents a unique challenge and creative solution.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Star className="text-primary" size={32} />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="project-card group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Star className="text-primary" size={20} />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-all"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-all"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {regularProjects.map((project, index) => (
              <div key={index} className="project-card group">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 px-3 py-1 text-sm bg-card border border-border rounded hover:border-primary hover:text-primary transition-all"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-1 px-3 py-1 text-sm bg-primary/10 text-primary border border-primary/20 rounded hover:bg-primary/20 transition-all"
                  >
                    <ExternalLink size={14} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
