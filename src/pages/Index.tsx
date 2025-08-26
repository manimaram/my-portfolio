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

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for full-stack development
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Frontend Skills */}
            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-background">
                    <path d="M14.23 12.004c0-.166-.002-.332-.007-.498l1.205-.89c.108-.08.136-.226.069-.34l-1.138-1.971c-.067-.116-.211-.152-.325-.1l-1.417.589c-.294-.226-.618-.414-.971-.554l-.218-1.507c-.022-.15-.154-.264-.306-.264H9.874c-.152 0-.284.114-.306.264l-.218 1.507c-.353.14-.677.328-.971.554l-1.417-.589c-.114-.052-.258-.016-.325.1L5.499 10.076c-.067.114-.039.26.069.34l1.205.89c-.005.166-.007.332-.007.498s.002.332.007.498l-1.205.89c-.108.08-.136.226-.069.34l1.138 1.971c.067.116.211.152.325.1l1.417-.589c.294.226.618.414.971.554l.218 1.507c.022.15.154.264.306.264h2.243c.152 0 .284-.114.306-.264l.218-1.507c.353-.14.677-.328.971-.554l1.417.589c.114.052.258.016.325-.1l1.138-1.971c.067-.114.039-.26-.069-.34l-1.205-.89c.005-.166.007-.332.007-.498zm-2.23 1.998c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Frontend Development</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">React & TypeScript</span>
                  <span className="text-sm text-primary font-semibold">95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_0.8s_ease-out] w-[95%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">HTML5 & CSS3</span>
                  <span className="text-sm text-primary font-semibold">90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_1s_ease-out] w-[90%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tailwind CSS</span>
                  <span className="text-sm text-primary font-semibold">88%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_1.2s_ease-out] w-[88%]"></div>
                </div>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-background">
                    <path d="M4.5 7.5C4.5 6.67157 5.17157 6 6 6H18C18.8284 6 19.5 6.67157 19.5 7.5V9C19.5 9.82843 18.8284 10.5 18 10.5H6C5.17157 10.5 4.5 9.82843 4.5 9V7.5Z"/>
                    <path d="M4.5 15C4.5 14.1716 5.17157 13.5 6 13.5H18C18.8284 13.5 19.5 14.1716 19.5 15V16.5C19.5 17.3284 18.8284 18 18 18H6C5.17157 18 4.5 17.3284 4.5 16.5V15Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Backend Development</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Node.js & Express</span>
                  <span className="text-sm text-primary font-semibold">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_0.8s_ease-out] w-[85%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Python & Django</span>
                  <span className="text-sm text-primary font-semibold">80%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_1s_ease-out] w-[80%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">REST APIs</span>
                  <span className="text-sm text-primary font-semibold">90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_1.2s_ease-out] w-[90%]"></div>
                </div>
              </div>
            </div>

            {/* Database & Tools */}
            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-background">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
                    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Database & Tools</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">MongoDB & SQL</span>
                  <span className="text-sm text-primary font-semibold">82%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_0.8s_ease-out] w-[82%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Git & GitHub</span>
                  <span className="text-sm text-primary font-semibold">92%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_1s_ease-out] w-[92%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Docker & AWS</span>
                  <span className="text-sm text-primary font-semibold">75%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_1.2s_ease-out] w-[75%]"></div>
                </div>
              </div>
            </div>

            {/* Programming Languages */}
            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-background">
                    <path d="M13.5 2C13.5 2 15 3.5 15 6S13.5 10 13.5 10 12 8.5 12 6 13.5 2 13.5 2Z"/>
                    <path d="M17.5 6C17.5 6 19 7.5 19 10S17.5 14 17.5 14 16 12.5 16 10 17.5 6 17.5 6Z"/>
                    <path d="M8 14C8 14 9.5 15.5 9.5 18S8 22 8 22 6.5 20.5 6.5 18 8 14 8 14Z"/>
                    <path d="M9.5 10C9.5 10 11 11.5 11 14S9.5 18 9.5 18 8 16.5 8 14 9.5 10 9.5 10Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Programming Languages</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">JavaScript</span>
                  <span className="text-sm text-primary font-semibold">93%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_0.8s_ease-out] w-[93%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Python</span>
                  <span className="text-sm text-primary font-semibold">88%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_1s_ease-out] w-[88%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Java</span>
                  <span className="text-sm text-primary font-semibold">78%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_1.2s_ease-out] w-[78%]"></div>
                </div>
              </div>
            </div>

            {/* Design & Others */}
            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-background">
                    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z"/>
                    <path d="M12 22V12"/>
                    <path d="M22 7L12 12L2 7"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Design & Others</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">UI/UX Design</span>
                  <span className="text-sm text-primary font-semibold">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_0.8s_ease-out] w-[85%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Figma & Adobe XD</span>
                  <span className="text-sm text-primary font-semibold">80%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_1s_ease-out] w-[80%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Project Management</span>
                  <span className="text-sm text-primary font-semibold">87%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_1.2s_ease-out] w-[87%]"></div>
                </div>
              </div>
            </div>

            {/* Mobile Development */}
            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-background">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
                    <path d="M12 18h.01"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Mobile Development</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">React Native</span>
                  <span className="text-sm text-primary font-semibold">75%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_0.8s_ease-out] w-[75%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Flutter</span>
                  <span className="text-sm text-primary font-semibold">70%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_1s_ease-out] w-[70%]"></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Progressive Web Apps</span>
                  <span className="text-sm text-primary font-semibold">82%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-primary h-2 rounded-full animate-[scale-in_1.2s_ease-out] w-[82%]"></div>
                </div>
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