import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Mail, FileText } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* About Me Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies, 
              cloud computing, and software architecture. I love creating innovative solutions 
              that solve real-world problems and deliver exceptional user experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="project-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="project-card text-center">
                <div className="text-3xl font-bold text-secondary mb-2">3+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="project-card text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-muted-foreground">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-card/20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "AWS Solutions Architect",
              "Google Cloud Professional",
              "React Developer Certification",
              "Docker Certified Associate",
              "Kubernetes Administrator",
              "MongoDB Professional"
            ].map((cert, index) => (
              <div key={index} className="project-card text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-background">✓</span>
                </div>
                <h3 className="font-semibold text-foreground">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to work together? Let's discuss your next project and bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:your.email@example.com" className="btn-hero glow-border group">
              <span className="flex items-center space-x-2">
                <Mail size={20} />
                <span>Send Email</span>
              </span>
            </a>
            <a href="/resume" className="btn-hero glow-border group">
              <span className="flex items-center space-x-2">
                <FileText size={20} />
                <span>View Resume</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
