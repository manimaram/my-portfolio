import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Mail, FileText, ExternalLink, Award, Send, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { certifications } from "@/data/certifications";
import { achievements } from "@/data/achievements";
const Index = () => {
  return <div className="min-h-screen">
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
              I'm a passionate computer science student with a strong interest in modern web technologies, 
              cloud computing, and software development. I enjoy learning new technologies and building 
              projects that solve real-world problems while continuously expanding my technical skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="project-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">Information Technology</div>
                <div className="text-muted-foreground">Student</div>
              </div>
              <div className="project-card text-center">
                <div className="text-3xl font-bold text-secondary mb-2">10+</div>
                <div className="text-muted-foreground">Skills Mastered</div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => <div key={index} className="project-card group hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award size={24} className="text-background" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      Issued by {cert.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      Year: {cert.year}
                    </p>
                    <button onClick={() => window.open(cert.certificateUrl, '_blank')} className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn">
                      <ExternalLink size={14} className="group-hover/btn:scale-110 transition-transform" />
                      <span>Access Certificate</span>
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => <div key={index} className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
                
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                
              </div>)}
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
            Have a question or want to collaborate? I'd love to hear from you. Send me a message!
          </p>
          
          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form className="project-card text-left space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    <User size={16} className="inline mr-2" />
                    Name
                  </label>
                  <Input id="name" type="text" placeholder="Your name" className="bg-background/50 border-border/50 focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    <Mail size={16} className="inline mr-2" />
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="bg-background/50 border-border/50 focus:border-primary" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  <MessageCircle size={16} className="inline mr-2" />
                  Subject
                </label>
                <Input id="subject" type="text" placeholder="What's this about?" className="bg-background/50 border-border/50 focus:border-primary" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Tell me about your project or just say hello..." rows={6} className="bg-background/50 border-border/50 focus:border-primary" />
              </div>
              <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 text-background font-semibold">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Alternative Contact Methods */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <a href="mailto:your.email@example.com" className="btn-hero glow-border group">
              <span className="flex items-center space-x-2">
                <Mail size={20} />
                <span>Direct Email</span>
              </span>
            </a>
            <button onClick={() => window.open('https://drive.google.com/your-resume-link', '_blank')} className="btn-hero glow-border group">
              <span className="flex items-center space-x-2">
                <FileText size={20} />
                <span>Download Resume</span>
                <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;