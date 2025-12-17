import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "./DropdownMenu";

const SOLUTION_STORAGE_KEY = "selectedSolution";

// Solution IDs: 1=exchanges, 2=funds, 3=pro traders, 4=hedge funds, 5=data engines
const getSolutionId = (path: string): number | null => {
  if (path.includes("/solutions/exchanges")) return 1;
  if (path.includes("/solutions/funds")) return 2;
  if (path.includes("/solutions/traders")) return 3;
  if (path.includes("/solutions/hedge-funds")) return 4;
  if (path.includes("/solutions/data-engines")) return 5;
  return null;
};

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Products",
    dropdown: [
      { name: "Quant", path: "/quant", description: "Trading Intelligence" },
      { name: "Terminal", path: "/terminal", description: "Execution Infrastructure" },
      { name: "Syndicate", path: "/syndicate", description: "Marketing Attribution" },
    ],
  },
  {
    name: "Solutions",
    dropdown: [
      { name: "Exchanges", path: "/solutions/exchanges" },
      { name: "Funds", path: "/solutions/funds" },
      { name: "Pro Traders", path: "/solutions/traders" },
      { name: "Hedge Funds", path: "/solutions/hedge-funds" },
      { name: "Data Engines", path: "/solutions/data-engines" },
    ],
  },
  { name: "Developers", path: "/developers" },
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
  const navigate = useNavigate();

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

  // Track solution selection
  const handleSolutionClick = (item: { path: string }) => {
    const solutionId = getSolutionId(item.path);
    if (solutionId) {
      localStorage.setItem(SOLUTION_STORAGE_KEY, solutionId.toString());
    }
  };

  // Handle pricing click based on selected solution
  const handlePricingClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const selectedSolution = localStorage.getItem(SOLUTION_STORAGE_KEY);
    const solutionId = selectedSolution ? parseInt(selectedSolution) : null;
    
    // Solution 3 (pro traders) goes to signup demo, others (1,2,4,5) go to contact
    // If no solution selected, default to contact page
    if (solutionId === 3) {
      navigate("/signup-demo");
    } else {
      navigate("/contact");
    }
  };

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
                  onItemClick={link.name === "Solutions" ? handleSolutionClick : undefined}
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
          {/* Pricing Link */}
          {/* <a
            href="#"
            onClick={handlePricingClick}
            className={`relative font-medium transition-colors hover:text-primary ${
              location.pathname === "/contact" || location.pathname === "/signup-demo"
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            Pricing
            {(location.pathname === "/contact" || location.pathname === "/signup-demo") && (
              <motion.div
                layoutId="activeNav"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
              />
            )}
          </a> */}
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
                          onClick={() => link.name === "Solutions" && handleSolutionClick(item)}
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
              {/* Pricing Link for Mobile */}
              {/* <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePricingClick(e);
                }}
                className={`font-medium py-2 transition-colors ${
                  location.pathname === "/contact" || location.pathname === "/signup-demo"
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Pricing
              </a> */}
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
