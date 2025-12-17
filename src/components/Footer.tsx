import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Twitter, Github, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Terminal", href: "/terminal" },
    { name: "TA Quant", href: "/quant" },
    { name: "TA Syndicate", href: "/syndicate" },
    { name: "API", href: "#" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Technology", href: "/technology" },
    { name: "Careers", href: "/careers" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Support", href: "/contact" },
    { name: "Status", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Security", href: "#" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="/ta-quant-logo.png" 
                alt="TA Quant" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-foreground/60 text-sm max-w-xs mb-6">
              Managed by TA Quant
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 uppercase text-xs tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 uppercase text-xs tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 uppercase text-xs tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 uppercase text-xs tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} TA Quant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
