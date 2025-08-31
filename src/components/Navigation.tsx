import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Home, User, FolderOpen, Award, Mail, FileText } from "lucide-react";
interface NavItem {
  name: string;
  path: string;
  icon: typeof Home;
  isRoute: boolean;
}
const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems: NavItem[] = [{
    name: "Home",
    path: "/",
    icon: Home,
    isRoute: true
  }, {
    name: "About Me",
    path: "#about",
    icon: User,
    isRoute: false
  }, {
    name: "Projects",
    path: "/projects",
    icon: FolderOpen,
    isRoute: true
  }, {
    name: "Certifications",
    path: "#certifications",
    icon: Award,
    isRoute: false
  }, {
    name: "Contact",
    path: "#contact",
    icon: Mail,
    isRoute: false
  }, {
    name: "Resume",
    path: "https://drive.google.com/file/d/1byIKRvPVr0AeK7jfsCkGIHhGEzpvoXna/view?usp=sharing",
    icon: FileText,
    isRoute: false
  }];
  const handleNavClick = (item: NavItem) => {
    if (item.isRoute) return;
    if (item.name === "Resume") {
      window.open(item.path, '_blank');
      return;
    }

    // If not on home page, navigate to home first, then scroll
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(item.path);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.querySelector(item.path);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">Nagamani</span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(item => {
              const Icon = item.icon;
              if (item.isRoute) {
                return <NavLink key={item.name} to={item.path} className={({
                  isActive
                }) => `btn-nav flex items-center space-x-2 ${isActive ? "text-primary bg-primary/10" : ""}`}>
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </NavLink>;
              }
              return <button key={item.name} onClick={() => handleNavClick(item)} className="btn-nav flex items-center space-x-2">
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </button>;
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
    </nav>;
};
export default Navigation;