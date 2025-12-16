import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "./DropdownMenu";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Products",
    dropdown: [
      { name: "Terminal", path: "/terminal", description: "Execution Infrastructure" },
      { name: "TA Quant", path: "/quant", description: "Trading Intelligence" },
      { name: "TA Syndicate", path: "/syndicate", description: "Marketing Attribution" },
    ],
  },
  {
    name: "Solutions",
    dropdown: [
      { name: "For Pro Traders", path: "/solutions/traders" },
      { name: "For Funds", path: "/solutions/funds" },
      { name: "For Exchanges", path: "/solutions/exchanges" },
      { name: "For KOLs", path: "/solutions/kol" },
    ],
  },
  { name: "Pricing", path: "/pricing" },
  { name: "Developers", path: "/developers" },
  {
    name: "Resources",
    dropdown: [
      { name: "Resources Hub", path: "/resources" },
      { name: "Whitepaper", path: "/resources#whitepaper" },
      { name: "Blog", path: "/resources#blog" },
      { name: "Case Studies", path: "/resources#case-studies" },
    ],
  },
  {
    name: "Company",
    dropdown: [
      { name: "About", path: "/about" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
    ],
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-lg">TA</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              TA Quant
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            if (link.dropdown) {
              const isActive = link.dropdown.some(
                (item) => location.pathname === item.path
              );
              return (
                <DropdownMenu
                  key={link.name}
                  label={link.name}
                  items={link.dropdown}
                  isActive={isActive}
                />
              );
            }
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Sign In
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
            Get Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-border mt-3"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.name} className="flex flex-col gap-2">
                      <div className="font-semibold text-foreground mb-1">{link.name}</div>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`pl-4 font-medium py-2 transition-colors ${
                            location.pathname === item.path
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-medium py-2 transition-colors ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start">
                  Sign In
                </Button>
                <Button className="bg-primary hover:bg-primary/90">
                  Get Demo
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
