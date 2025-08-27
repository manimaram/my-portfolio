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
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">I am an Information Technology undergraduate passionate about building modern and impactful digital solutions. With strong expertise in frontend technologies like React, JavaScript, HTML, and CSS, I have developed responsive web applications that integrate real-time APIs and deliver seamless user experiences. My technical foundation includes Data Structures, Algorithms, OOP, and database management with MySQL, enabling me to write clean, efficient, and optimized code. I enjoy working on projects that combine creativity with problem-solving, from weather forecasting apps to language translators and canteen management systems. Continuously exploring new tools and frameworks, I aim to grow as a full-stack developer and contribute to building innovative, user-focused applications.</p>
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {/* HTML */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#E34F26" className="group-hover:scale-110 transition-transform">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">HTML</h3>
            </div>

            {/* CSS */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#1572B6" className="group-hover:scale-110 transition-transform">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">CSS</h3>
            </div>

            {/* FULL STACK */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#61DAFB" className="absolute top-0 left-0 group-hover:scale-110 transition-transform">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236z" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#339933" className="absolute bottom-0 right-0 group-hover:scale-110 transition-transform">
                  <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">FULL STACK</h3>
            </div>

            {/* JS */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#F7DF1E" className="group-hover:scale-110 transition-transform">
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">JS</h3>
            </div>

            {/* JAVA */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#ED8B00" className="group-hover:scale-110 transition-transform">
                  <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">JAVA</h3>
            </div>

            {/* PYTHON */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#3776AB" className="group-hover:scale-110 transition-transform">
                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">PYTHON</h3>
            </div>

            {/* C */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#A8B9CC" className="group-hover:scale-110 transition-transform">
                  <path d="M16.5921 9.1962s-.354-3.298-3.627-3.39c-3.2741-.09-4.9552 2.474-4.9552 6.14 0 3.6651 1.858 6.5972 5.0451 6.5972 3.184 0 3.5381-3.665 3.5381-3.665l6.1041.365s.36 3.31-2.196 5.836c-2.552 2.5241-5.6901 2.9741-7.8762 2.9741-2.19 0-5.6901-.4500-7.8762-2.9741C2.21 18.614 1.45 15.24 1.45 12.28c0-2.96.76-6.334 3.317-8.925C7.3241.8289 10.8252.3789 13.0112.3789c2.19 0 5.6901.4500 7.8762 2.9741 2.552 2.5241 2.196 5.8361 2.196 5.8361l-6.1041.006z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">C</h3>
            </div>

            {/* SQL */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#336791" className="group-hover:scale-110 transition-transform">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM9.5 7c.828 0 1.5.672 1.5 1.5S10.328 10 9.5 10 8 9.328 8 8.5 8.672 7 9.5 7zm5 0c.828 0 1.5.672 1.5 1.5S15.328 10 14.5 10 13 9.328 13 8.5 13.672 7 14.5 7zM12 17.5c-3.038 0-5.5-1.346-5.5-3S8.962 11.5 12 11.5s5.5 1.346 5.5 3-2.462 3-5.5 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">SQL</h3>
            </div>

            {/* REACT */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#61DAFB" className="group-hover:scale-110 transition-transform">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">REACT</h3>
            </div>

            {/* DSA */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#FF6B6B" className="group-hover:scale-110 transition-transform">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  <circle cx="8" cy="12" r="2" fill="#4ECDC4" />
                  <circle cx="16" cy="12" r="2" fill="#45B7D1" />
                  <path d="M8 12h8M12 8v8" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">DSA</h3>
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
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </span>
            </a>
            
            <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" className="btn-hero glow-border group">
              <span className="flex items-center space-x-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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