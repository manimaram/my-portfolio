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
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {/* React */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#61DAFB" className="group-hover:scale-110 transition-transform">
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.310-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.867.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.822-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.353-.41-.789-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.99-1.36-1.56z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">React</h3>
            </div>

            {/* TypeScript */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#3178C6" className="group-hover:scale-110 transition-transform">
                  <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">TypeScript</h3>
            </div>

            {/* JavaScript */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#F7DF1E" className="group-hover:scale-110 transition-transform">
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">JavaScript</h3>
            </div>

            {/* Node.js */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#339933" className="group-hover:scale-110 transition-transform">
                  <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Node.js</h3>
            </div>

            {/* Python */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#3776AB" className="group-hover:scale-110 transition-transform">
                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.20-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.20.35-.14.33-.10.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Python</h3>
            </div>

            {/* HTML5 */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#E34F26" className="group-hover:scale-110 transition-transform">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">HTML5</h3>
            </div>

            {/* CSS3 */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#1572B6" className="group-hover:scale-110 transition-transform">
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">CSS3</h3>
            </div>

            {/* Tailwind CSS */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#06B6D4" className="group-hover:scale-110 transition-transform">
                  <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Tailwind</h3>
            </div>

            {/* MongoDB */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#47A248" className="group-hover:scale-110 transition-transform">
                  <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">MongoDB</h3>
            </div>

            {/* Git */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#F05032" className="group-hover:scale-110 transition-transform">
                  <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Git</h3>
            </div>

            {/* Docker */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#2496ED" className="group-hover:scale-110 transition-transform">
                  <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.09-.248-1.827-1.24-2.654-1.834-3.1 0 0-.338-.255-.676-.255-.336 0-.840.255-1.295.834-.302.391-.454.677-.617 1.048-.616-.22-1.214-.33-1.732-.33-4.056 0-6.717 2.24-6.717 6.068 0 3.535 2.878 6.4 6.717 6.4 5.14 0 7.982-1.668 10.059-4.982.676-.61 1.295-1.47 1.295-2.55 0-.61-.17-1.018-.336-1.48-.084-.22-.084-.338-.084-.338l-.084-.085-.084-.034-.084-.034-.084-.032zm-6.717 6.068c-3.535 0-6.4-2.878-6.4-6.068 0-2.55 1.668-5.14 5.14-5.14.616 0 1.295.17 1.954.51-.302.676-.676 1.518-.676 2.55 0 1.518.51 2.878 1.518 3.827-.676 2.55-2.45 4.32-4.536 4.32z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Docker</h3>
            </div>

            {/* AWS */}
            <div className="project-card group hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#FF9900" className="group-hover:scale-110 transition-transform">
                  <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.160 0 .063-.04.127-.113.18l-.361.24c-.04.032-.088.048-.127.048-.056 0-.113-.024-.168-.08-.12-.127-.04-.24-.176-.38-.135-.14-.304-.296-.512-.47-.416.49-.936.734-1.576.734-.448 0-.816-.127-1.08-.383-.264-.255-.392-.606-.392-1.038 0-.457.16-.83.488-1.118.328-.287.768-.43 1.345-.43.193 0 .393.016.608.048.216.032.44.08.68.127v-.417c0-.433-.09-.745-.272-.928-.18-.184-.49-.272-.92-.272-.2 0-.402.024-.616.072-.216.048-.424.12-.64.216-.096.048-.168.072-.2.088-.032.016-.056.024-.072.024-.063 0-.096-.048-.096-.144v-.226c0-.074.008-.127.032-.16.024-.032.064-.063.12-.096.192-.096.424-.176.696-.24.272-.063.562-.096.87-.096.67 0 1.155.152 1.467.456.313.304.465.768.465 1.394v1.817h.024zm-2.192.632c.18 0 .368-.032.568-.096.2-.064.376-.184.528-.336.096-.096.168-.2.2-.32.032-.12.056-.255.056-.404v-.193c-.16-.04-.335-.072-.52-.096-.184-.023-.37-.032-.551-.032-.312 0-.542.063-.686.183-.144.127-.216.296-.216.522 0 .216.056.375.176.478.118.103.29.152.445.152v.04zm4.973.24c-.08 0-.135-.016-.168-.048-.032-.032-.06-.104-.092-.216l-1.047-3.442c-.032-.127-.048-.207-.048-.255 0-.103.052-.16.156-.16h.638c.088 0 .144.016.176.048.032.032.057.104.088.216l.75 2.953.695-2.953c.024-.112.056-.184.088-.216.032-.032.096-.048.18-.048h.52c.088 0 .148.016.18.048.032.032.064.104.088.216l.703 2.985.774-2.985c.032-.112.064-.184.088-.216.032-.032.088-.048.176-.048h.606c.104 0 .157.052.157.16 0 .032-.008.063-.016.104-.008.04-.024.096-.048.168l-1.087 3.434c-.032.112-.064.184-.096.216-.032.032-.088.048-.168.048h-.558c-.088 0-.152-.016-.184-.048-.032-.032-.064-.104-.088-.216l-.695-2.897-.687 2.897c-.032.112-.056.184-.088.216-.032.032-.096.048-.184.048h-.558zm5.424.168c-.44 0-.883-.048-1.32-.15-.435-.096-.773-.216-.998-.336-.15-.08-.255-.168-.288-.248-.032-.08-.048-.168-.048-.264v-.232c0-.096.04-.144.104-.144.024 0 .048.008.08.016.032.008.08.032.12.048.216.104.448.184.688.232.24.048.484.08.725.08.288 0 .512-.048.67-.144.160-.096.24-.24.24-.43 0-.128-.04-.238-.12-.327-.08-.09-.24-.18-.48-.27l-.692-.216c-.352-.112-.607-.28-.758-.497-.15-.216-.226-.458-.226-.734 0-.216.048-.406.144-.574.096-.168.226-.312.39-.423.164-.11.35-.193.558-.25.207-.056.43-.08.67-.08.192 0 .38.016.564.048.185.032.359.08.523.127.096.024.168.056.216.096.048.04.072.104.072.184v.216c0 .096-.04.148-.104.148-.04 0-.104-.016-.176-.056-.264-.112-.559-.168-.886-.168-.264 0-.47.04-.618.127-.149.088-.226.216-.226.384 0 .127.048.23.143.32.096.088.27.18.528.264l.679.216c.345.111.593.27.735.479.143.207.215.442.215.70 0 .22-.047.42-.143.596-.096.176-.231.322-.399.435-.168.112-.364.193-.583.25-.22.056-.454.08-.703.08l-.024.016zm2.982-4.457c0-.624.16-1.13.487-1.518.328-.384.786-.58 1.366-.58.598 0 1.046.195 1.358.58.31.384.47.894.47 1.518 0 .632-.16 1.142-.487 1.518-.327.376-.778.566-1.35.566-.590 0-1.046-.19-1.366-.566-.32-.376-.478-.886-.478-1.518zm2.847 0c0-.52-.104-.925-.31-1.206-.207-.28-.51-.422-.895-.422-.397 0-.71.14-.926.422-.216.281-.32.686-.32 1.206 0 .529.104.925.32 1.214.216.288.529.430.926.430.385 0 .688-.14.895-.43.206-.289.31-.685.31-1.214zm1.975 2.64c-.096 0-.16-.016-.184-.056-.024-.04-.04-.112-.04-.2V8.548c0-.088.016-.152.04-.192.024-.04.088-.06.184-.06h.615c.096 0 .16.02.184.06.024.04.04.104.04.192v.991c.24-.375.487-.64.743-.806.255-.168.574-.248.958-.248.44 0 .822.16 1.142.48.32.32.478.79.478 1.414v2.769c0 .088-.016.152-.04.192-.024.04-.088.056-.184.056h-.640c-.096 0-.16-.016-.184-.056-.024-.04-.04-.104-.04-.192v-2.68c0-.4-.08-.695-.24-.886-.16-.19-.395-.288-.71-.288-.216 0-.43.064-.646.184-.216.12-.407.29-.574.51v3.16c0 .088-.016.152-.04.192-.024.04-.088.056-.184.056h-.617z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">AWS</h3>
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