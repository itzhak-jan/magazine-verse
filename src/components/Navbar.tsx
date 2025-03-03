
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { MotionHeader } from "@/utils/transitions";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MotionHeader
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-serif font-medium tracking-tight hover:opacity-80 transition-custom"
          >
            Content Magazine
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground/80 hover:text-foreground transition-custom">
                <span>Categories</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-10 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left invisible group-hover:visible">
                <div className="py-2">
                  <Link to="/?tag=Design" className="block px-4 py-2 text-sm hover:bg-secondary transition-colors">Design</Link>
                  <Link to="/?tag=Architecture" className="block px-4 py-2 text-sm hover:bg-secondary transition-colors">Architecture</Link>
                  <Link to="/?tag=Technology" className="block px-4 py-2 text-sm hover:bg-secondary transition-colors">Technology</Link>
                  <Link to="/?tag=Photography" className="block px-4 py-2 text-sm hover:bg-secondary transition-colors">Photography</Link>
                  <Link to="/?tag=Food & Drink" className="block px-4 py-2 text-sm hover:bg-secondary transition-colors">Food & Drink</Link>
                </div>
              </div>
            </div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-4 py-2 pb-6 bg-white border-b shadow-sm">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <div className="py-2 border-b border-border">
              <p className="font-medium mb-2">Categories</p>
              <div className="pl-4 space-y-2">
                <MobileNavLink to="/?tag=Design" onClick={() => setIsOpen(false)}>Design</MobileNavLink>
                <MobileNavLink to="/?tag=Architecture" onClick={() => setIsOpen(false)}>Architecture</MobileNavLink>
                <MobileNavLink to="/?tag=Technology" onClick={() => setIsOpen(false)}>Technology</MobileNavLink>
                <MobileNavLink to="/?tag=Photography" onClick={() => setIsOpen(false)}>Photography</MobileNavLink>
                <MobileNavLink to="/?tag=Food & Drink" onClick={() => setIsOpen(false)}>Food & Drink</MobileNavLink>
              </div>
            </div>
            <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </nav>
        </div>
      )}
    </MotionHeader>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className="text-foreground/80 hover:text-foreground transition-custom relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-foreground/80 after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode; 
  onClick: () => void;
}) => {
  return (
    <Link
      to={to}
      className="text-foreground/80 hover:text-foreground transition-custom py-1"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
