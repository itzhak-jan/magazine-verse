
import { Link } from "react-router-dom";
import { MotionFooter } from "@/utils/transitions";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <MotionFooter
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="border-t"
    >
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-serif font-medium tracking-tight">
              Content Magazine
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Delivering thoughtful content and promoting quality journalism across various fields of interest.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <FooterLink to="/">Home</FooterLink>
              </li>
              <li>
                <FooterLink to="/about">About</FooterLink>
              </li>
              <li>
                <FooterLink to="/contact">Contact</FooterLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <FooterLink to="/?tag=Design">Design</FooterLink>
              </li>
              <li>
                <FooterLink to="/?tag=Architecture">Architecture</FooterLink>
              </li>
              <li>
                <FooterLink to="/?tag=Technology">Technology</FooterLink>
              </li>
              <li>
                <FooterLink to="/?tag=Photography">Photography</FooterLink>
              </li>
              <li>
                <FooterLink to="/?tag=Food & Drink">Food & Drink</FooterLink>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Content Magazine. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/terms">Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </MotionFooter>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className="text-muted-foreground hover:text-foreground transition-custom"
    >
      {children}
    </Link>
  );
};

export default Footer;
