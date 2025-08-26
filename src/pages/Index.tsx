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
            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">FULL STACK WEB DEVELOPMENT</h3>
                  <p className="text-sm text-muted-foreground mb-1">Issued by Edu Skills</p>
                  <p className="text-xs text-muted-foreground mb-3">July 2025</p>
                  <button onClick={() => window.open('https://your-certificate-link-1', '_blank')} className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn">
                    <ExternalLink size={14} className="group-hover/btn:scale-110 transition-transform" />
                    <span>Access Certificate</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">COMPUTER HARDWARE</h3>
                  <p className="text-sm text-muted-foreground mb-1">Issued by Cisco</p>
                  <p className="text-xs text-muted-foreground mb-3">May 2025</p>
                  <button onClick={() => window.open('https://your-certificate-link-2', '_blank')} className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn">
                    <ExternalLink size={14} className="group-hover/btn:scale-110 transition-transform" />
                    <span>Access Certificate</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">AI TOOLS EXPERT</h3>
                  <p className="text-sm text-muted-foreground mb-1">Issued by Be 10x</p>
                  <p className="text-xs text-muted-foreground mb-3">May 2025</p>
                  <button onClick={() => window.open('https://your-certificate-link-3', '_blank')} className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn">
                    <ExternalLink size={14} className="group-hover/btn:scale-110 transition-transform" />
                    <span>Access Certificate</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">LANGUAGE PROFICENCY CERTIFICATE</h3>
                  <p className="text-sm text-muted-foreground mb-1">Issued by EF SET</p>
                  <p className="text-xs text-muted-foreground mb-3">May 2025</p>
                  <button onClick={() => window.open('https://your-certificate-link-4', '_blank')} className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn">
                    <ExternalLink size={14} className="group-hover/btn:scale-110 transition-transform" />
                    <span>Access Certificate</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">HTML</h3>
                  <p className="text-sm text-muted-foreground mb-1">Issued by Simplilearn</p>
                  <p className="text-xs text-muted-foreground mb-3">April 2025</p>
                  <button onClick={() => window.open('https://your-certificate-link-5', '_blank')} className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn">
                    <ExternalLink size={14} className="group-hover/btn:scale-110 transition-transform" />
                    <span>Access Certificate</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">CSS</h3>
                  <p className="text-sm text-muted-foreground mb-1">Issued by Simplilearn</p>
                  <p className="text-xs text-muted-foreground mb-3">April 2025</p>
                  <button onClick={() => window.open('https://your-certificate-link-6', '_blank')} className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn">
                    <ExternalLink size={14} className="group-hover/btn:scale-110 transition-transform" />
                    <span>Access Certificate</span>
                  </button>
                </div>
              </div>
            </div>
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
            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                Dean's List
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Recognized for academic excellence with GPA above 3.8
              </p>
            </div>
            
            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                Hackathon Winner
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                First place in University Tech Innovation Challenge
              </p>
            </div>
            
            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                Open Source Contributor
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Active contributor to multiple GitHub projects with 100+ commits
              </p>
            </div>
            
            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                Technical Blog Writer
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Published 15+ technical articles on modern web development
              </p>
            </div>
            
            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                Student Leader
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Led Computer Science Student Association initiatives
              </p>
            </div>
            
            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                Scholarship Recipient
              </h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Merit-based scholarship for outstanding academic performance
              </p>
            </div>
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
          
          {/* Social Connect Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="btn-hero glow-border group">
              <span className="flex items-center space-x-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </span>
            </a>
            
            <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="btn-hero glow-border group">
              <span className="flex items-center space-x-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </span>
            </a>
            
            <a href="mailto:your.email@example.com" className="btn-hero glow-border group">
              <span className="flex items-center space-x-3">
                <Mail size={24} className="group-hover:scale-110 transition-transform" />
                <span>Gmail</span>
              </span>
            </a>
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