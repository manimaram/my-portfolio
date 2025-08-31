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
            {/* DSA */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#4A90E2" className="group-hover:scale-110 transition-transform">
                  <circle cx="6" cy="6" r="3" fill="#4A90E2" />
                  <circle cx="18" cy="6" r="3" fill="#4A90E2" />
                  <circle cx="6" cy="18" r="3" fill="#4A90E2" />
                  <circle cx="18" cy="18" r="3" fill="#4A90E2" />
                  <circle cx="12" cy="12" r="2" fill="#FF6B6B" />
                  <path d="M9 6h6M6 9v6M18 9v6M9 18h6" stroke="#2D3748" strokeWidth="2" strokeLinecap="round" />
                  <path d="M9 9l6 6M15 9l-6 6" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">DSA</h3>
            </div>

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
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#4A90E2" className="group-hover:scale-110 transition-transform">
                  <path d="M4 6h16v2H4zm0-4h16v2H4zm16 8v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8h16zm-3 3H7v2h10v-2z" />
                  <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM21 16H3V4h18v12z" />
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
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform">
                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.20-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.20.35-.14.33-.10.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="#306998" />
                  <path d="M9.75 23.82l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13V15.5l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h4.48l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21V9.94h2.92l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.24.01h-.16l-.06-.01H9.82v.83h5.37l.01 2.75.02.37-.05.34-.11.31-.17.28-.25.26-.31.23-.38.2-.44.18-.51.15-.58.12-.64.1-.71.06-.77.04-.84.02-1.27-.05zm6.3-1.98l.23-.33.08-.41-.08-.41-.23-.34-.33-.22-.41-.09-.41.09-.33.22-.23.34-.08.41.08.41.23.33.33.22.41.09.41-.09z" fill="#FFD43B" />
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
                  <path d="M12 0C8.686 0 6 2.686 6 6v12c0 3.314 2.686 6 6 6s6-2.686 6-6V6c0-3.314-2.686-6-6-6zm4 18c0 2.21-1.79 4-4 4s-4-1.79-4-4V6c0-2.21 1.79-4 4-4s4 1.79 4 4v12z" />
                  <rect x="9" y="8" width="6" height="1" fill="#336791" />
                  <rect x="9" y="10" width="6" height="1" fill="#336791" />
                  <rect x="9" y="12" width="6" height="1" fill="#336791" />
                  <rect x="9" y="14" width="6" height="1" fill="#336791" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">SQL</h3>
            </div>

            {/* REACT */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#61DAFB" className="group-hover:scale-110 transition-transform">
                  <circle cx="12" cy="12" r="2" />
                  <path d="M12,1C18.5,1 23,5.59 23,11.25V12.75C23,18.41 18.5,23 12,23C5.5,23 1,18.41 1,12.75V11.25C1,5.59 5.5,1 12,1M12,3.5C7,3.5 3.5,7.27 3.5,11.25V12.75C3.5,16.73 7,20.5 12,20.5C17,20.5 20.5,16.73 20.5,12.75V11.25C20.5,7.27 17,3.5 12,3.5Z" transform="rotate(0 12 12)" />
                  <path d="M12,1C18.5,1 23,5.59 23,11.25V12.75C23,18.41 18.5,23 12,23C5.5,23 1,18.41 1,12.75V11.25C1,5.59 5.5,1 12,1M12,3.5C7,3.5 3.5,7.27 3.5,11.25V12.75C3.5,16.73 7,20.5 12,20.5C17,20.5 20.5,16.73 20.5,12.75V11.25C20.5,7.27 17,3.5 12,3.5Z" transform="rotate(60 12 12)" />
                  <path d="M12,1C18.5,1 23,5.59 23,11.25V12.75C23,18.41 18.5,23 12,23C5.5,23 1,18.41 1,12.75V11.25C1,5.59 5.5,1 12,1M12,3.5C7,3.5 3.5,7.27 3.5,11.25V12.75C3.5,16.73 7,20.5 12,20.5C17,20.5 20.5,16.73 20.5,12.75V11.25C20.5,7.27 17,3.5 12,3.5Z" transform="rotate(-60 12 12)" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">REACT</h3>
            </div>

            {/* VS Code */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#007ACC" className="group-hover:scale-110 transition-transform">
                  <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">VS Code</h3>
            </div>

            {/* Figma */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform">
                  <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z" fill="#0ACF83" />
                  <path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" fill="#A259FF" />
                  <path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" fill="#F24E1E" />
                  <path d="M12 8h4c2.208 0 4-1.792 4-4s-1.792-4-4-4h-4v8z" fill="#FF7262" />
                  <path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" fill="#1ABCFE" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Figma</h3>
            </div>

            {/* OOPs */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#8B5CF6" className="group-hover:scale-110 transition-transform">
                  <rect x="3" y="4" width="6" height="6" rx="1" fill="#8B5CF6" />
                  <rect x="15" y="4" width="6" height="6" rx="1" fill="#8B5CF6" />
                  <rect x="3" y="14" width="6" height="6" rx="1" fill="#8B5CF6" />
                  <rect x="15" y="14" width="6" height="6" rx="1" fill="#8B5CF6" />
                  <circle cx="12" cy="12" r="2" fill="#F59E0B" />
                  <path d="M9 7h6M7 9v6M17 9v6M9 17h6" stroke="#374151" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">OOPs</h3>
            </div>

            {/* GitHub */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#181717" className="group-hover:scale-110 transition-transform">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">GitHub</h3>
            </div>

            {/* Render */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#46E3B7" className="group-hover:scale-110 transition-transform">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  <circle cx="7" cy="20" r="2" fill="#46E3B7" />
                  <circle cx="17" cy="20" r="2" fill="#46E3B7" />
                  <path d="M7 18h10" stroke="#46E3B7" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Render</h3>
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
            
            <div className="project-card group hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={24} className="text-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">JAVASCRIPT FUNDAMENTALS</h3>
                  <p className="text-sm text-muted-foreground mb-1">Issued by Cisco</p>
                  <p className="text-xs text-muted-foreground mb-3">May 2025</p>
                  <button onClick={() => window.open('https://your-certificate-link-7', '_blank')} className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn">
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
                  <h3 className="font-bold text-primary mb-1 hover:text-primary/80 transition-colors">Problem Solving Using C</h3>
                  <p className="text-sm text-muted-foreground mb-1">Issued by CodeTantra</p>
                  <p className="text-xs text-muted-foreground mb-3">May 2024</p>
                  <button onClick={() => window.open('https://your-certificate-link-8', '_blank')} className="inline-flex items-center space-x-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-md transition-colors group/btn">
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
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors"> Merit Scholarship Recipient</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed"> Awarded 50,000 consecutively for two years in recognition of outstanding
 academic performance.</p>
            </div>
            
            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">TANA DEBATE WINNER</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">secured 1st prize in the debate organised by Telugu Associsation of North America</p>
            </div>
            
            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">Best Debate Awardee</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">Awarded the Best Debate Title by TV9</p>
            </div>
            
            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">Top 1%</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">Consistently ranked in the top 1% of the branch for 2 consecutive academic years</p>
            </div>
            
            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">Designer & PR lead</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">Have been working continuously for the past 2 years with CSAC in the domains of Designing and Publicity.</p>
            </div>
            
            <div className="project-card group hover:border-primary/50 transition-all duration-300 text-center">
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">Comprehensive Speaker</h3>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">Honored by the Narayana Group of Institutions</p>
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