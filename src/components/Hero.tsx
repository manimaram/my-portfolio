import { ArrowRight, Code, Zap, FolderOpen, Mail } from "lucide-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center tech-grid">
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-full float" />
      <div className="absolute top-40 right-20 w-32 h-32 border border-secondary/20 rounded-lg rotate-45 float" style={{
      animationDelay: '2s'
    }} />
      <div className="absolute bottom-40 left-20 w-16 h-16 border border-accent/20 rounded-lg float" style={{
      animationDelay: '4s'
    }} />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Nagamani</span>
            <br />
            <span className="text-foreground">Maram</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting cutting-edge solutions with modern technologies. 
            Transforming ideas into powerful digital experiences.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/projects" className="btn-hero glow-border pulse-glow group">
            <span className="flex items-center space-x-2">
              <FolderOpen size={20} />
              <span>View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <Link to="/contact" className="btn-hero glow-border group">
            <span className="flex items-center space-x-2">
              <Mail size={20} />
              <span>Get In Touch</span>
            </span>
          </Link>
        </div>

        {/* Tech stack preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[{
          icon: Code,
          label: "Full Stack"
        }, {
          icon: Zap,
          label: "Performance"
        }, {
          icon: Code,
          label: "Clean Code"
        }, {
          icon: Zap,
          label: "Innovation"
        }].map((item, index) => {
          const Icon = item.icon;
          return <div key={index} className="project-card text-center group">
                <Icon size={32} className="mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>;
        })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default Hero;