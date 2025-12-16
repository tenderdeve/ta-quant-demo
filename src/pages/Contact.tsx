import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Mail,
  MessageSquare,
  Lightbulb,
  Send,
  CheckCircle2,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Zap,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedText, StaggerText } from "@/components/AnimatedText";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "For general inquiries and support",
    contact: "hello@taquant.io",
    action: "Send Email",
  },
  {
    icon: MessageSquare,
    title: "Sales",
    description: "Interested in enterprise plans?",
    contact: "sales@taquant.io",
    action: "Contact Sales",
  },
  {
    icon: Lightbulb,
    title: "Partnerships",
    description: "Let's build something together",
    contact: "partners@taquant.io",
    action: "Partner With Us",
  },
];

const wishlistCategories = [
  {
    title: "New Exchange Integration",
    description: "Request support for an exchange we don't currently support",
    icon: Zap,
  },
  {
    title: "Feature Request",
    description: "Have an idea for a feature? We'd love to hear it",
    icon: Lightbulb,
  },
  {
    title: "Strategy Request",
    description: "Want a specific trading strategy added to TA Quant?",
    icon: Heart,
  },
  {
    title: "Bug Report",
    description: "Found something that's not working? Let us know",
    icon: MessageSquare,
  },
];

const ContactPage = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const wishlistRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const wishlistInView = useInView(wishlistRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "", category: "" });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <AnimatedBackground variant="blobs" intensity="medium" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <AnimatedText delay={0.2}>
              <div className="inline-flex items-center gap-3 mb-8">
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>
                <span className="text-primary font-mono text-xs tracking-wider uppercase">
                  Get In Touch
                </span>
              </div>
            </AnimatedText>
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-tight">
              <StaggerText text="Let's talk" className="block mb-2" delay={0.4} />
              <StaggerText text="about trading" className="block gradient-text" delay={0.7} />
            </h1>
            <AnimatedText delay={1.0} variant="slide">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Have questions? Feature requests? Just want to say hi? 
                We're here and we'd love to hear from you.
              </p>
            </AnimatedText>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="grid" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 leading-tight">
                Ways to reach us
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Pick the method that works best for you.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <AnimatedCard
                key={method.title}
                delay={index * 0.1}
                tiltIntensity={8}
                className="h-full"
              >
                <motion.div
                  className="glass rounded-2xl md:rounded-3xl p-7 md:p-8 border border-border/40 hover:border-primary/30 transition-all duration-300 h-full text-center group"
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <method.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-lg md:text-xl mb-2">{method.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <a
                    href={`mailto:${method.contact}`}
                    className="text-primary font-medium hover:underline inline-flex items-center gap-2"
                  >
                    {method.contact}
                  </a>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="py-20 bg-card/20 relative overflow-hidden">
        <AnimatedBackground variant="dots" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 leading-tight">
                  Send us a message
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as we can.
                </p>
              </div>

              <AnimatedCard delay={0.4}>
                <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-12 border border-border/40">
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 rounded-xl bg-accent/10 border border-accent/20 flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        Thanks! We'll get back to you soon.
                      </span>
                    </motion.div>
                  )}

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="rounded-xl border-border/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="rounded-xl border-border/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        required
                        className="rounded-xl border-border/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us what's on your mind..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        className="rounded-xl border-border/50 resize-none"
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg py-7 rounded-xl"
                      >
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </Button>
                    </motion.div>
                  </div>
                </form>
              </AnimatedCard>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Wishlist Section */}
      <section ref={wishlistRef} className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="blobs" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 leading-tight">
                Feature wishlist
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Have an idea? Request a feature, exchange integration, or strategy. 
                We're always listening.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto mb-12">
            {wishlistCategories.map((category, index) => (
              <AnimatedCard
                key={category.title}
                delay={index * 0.1}
                tiltIntensity={8}
                className="h-full"
              >
                <motion.div
                  className="glass rounded-2xl md:rounded-3xl p-7 md:p-8 border border-border/40 hover:border-primary/30 transition-all duration-300 h-full group cursor-pointer"
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <motion.div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <category.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedText delay={0.6}>
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Use the form above or email us directly at{" "}
                <a href="mailto:wishlist@taquant.io" className="text-primary hover:underline">
                  wishlist@taquant.io
                </a>
              </p>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="grid" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 leading-tight">
                Connect with us
              </h2>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Follow along for updates, trading insights, and behind-the-scenes content.
              </p>

              <div className="flex justify-center gap-4">
                {[
                  { icon: Twitter, label: "Twitter", href: "#" },
                  { icon: Github, label: "GitHub", href: "#" },
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-xl bg-card/50 border border-border/40 hover:border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedText>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;

