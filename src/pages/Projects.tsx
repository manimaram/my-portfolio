import { ExternalLink, Github, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import { projects } from "@/data/projects";

const Projects = () => {

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

        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Star className="text-primary" size={32} />
            Projects
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

      </main>
    </div>
  );
};

export default Projects;
