import { NavLink } from "react-router-dom";
import { Home, User, FolderOpen, Award, Mail, FileText } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About Me", path: "/about", icon: User },
    { name: "Projects", path: "/projects", icon: FolderOpen },
    { name: "Certifications", path: "/certifications", icon: Award },
    { name: "Contact", path: "/contact", icon: Mail },
    { name: "Resume", path: "/resume", icon: FileText },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">TechDev</span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `btn-nav flex items-center space-x-2 ${
                        isActive ? "text-primary bg-primary/10" : ""
                      }`
                    }
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="btn-nav">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;