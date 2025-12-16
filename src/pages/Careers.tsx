import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Code,
  TrendingUp,
  Shield,
  Globe,
  Zap,
  Heart,
  CheckCircle2,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedCard, FloatingCard } from "@/components/AnimatedCard";
import { AnimatedText, StaggerText } from "@/components/AnimatedText";

const openPositions = [
  {
    title: "Senior Rust Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    description: "Build ultra-fast execution engines and smart routing algorithms. You'll work on systems handling 900+ orders per second.",
  },
  {
    title: "Quantitative Researcher",
    department: "Research",
    location: "Remote / New York",
    type: "Full-time",
    description: "Develop and backtest trading strategies. Work with ML models, alternative data, and institutional-grade infrastructure.",
  },
  {
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build beautiful, performant trading interfaces. React, TypeScript, and a passion for great UX required.",
  },
  {
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote / London",
    type: "Full-time",
    description: "Keep our infrastructure running at 99.9% uptime. Kubernetes, AWS, monitoring, and automation are your playground.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Design interfaces that traders actually want to use. You'll work closely with engineers and traders to ship great products.",
  },
  {
    title: "Marketing Lead",
    department: "Growth",
    location: "Remote / Singapore",
    type: "Full-time",
    description: "Tell our story to traders worldwide. You'll work on content, campaigns, and building our community.",
  },
];

const values = [
  {
    icon: Code,
    title: "Build for traders",
    description: "We're traders ourselves. Every feature we build solves a real problem we've faced.",
  },
  {
    icon: Zap,
    title: "Move fast",
    description: "Ship quickly, iterate based on feedback. No bureaucracy, no red tape.",
  },
  {
    icon: Shield,
    title: "Security first",
    description: "We handle billions in trading volume. Security and reliability aren't optional.",
  },
  {
    icon: Globe,
    title: "Remote-first",
    description: "Work from anywhere. We're distributed across 5 countries and counting.",
  },
];

const benefits = [
  "Competitive salary + equity",
  "Unlimited PTO",
  "Top-tier health insurance",
  "Learning & development budget",
  "Home office stipend",
  "Annual team meetups",
  "Crypto-friendly payroll",
  "401k matching",
];

const CareersPage = () => {
  const heroRef = useRef(null);
  const positionsRef = useRef(null);
  const valuesRef = useRef(null);
  const benefitsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const positionsInView = useInView(positionsRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

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
                  <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>
                <span className="text-primary font-mono text-xs tracking-wider uppercase">
                  Join Us
                </span>
              </div>
            </AnimatedText>
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-tight">
              <StaggerText text="Build the future of" className="block mb-2" delay={0.4} />
              <StaggerText text="crypto trading" className="block gradient-text" delay={0.7} />
            </h1>
            <AnimatedText delay={1.0} variant="slide">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                We're building infrastructure that traders actually want to use. 
                If that sounds interesting, we'd love to talk.
              </p>
            </AnimatedText>
            <AnimatedText delay={1.2}>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-10 py-7 rounded-xl"
                  >
                    View Open Roles
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border/50 hover:bg-secondary/50 text-lg px-10 py-7 rounded-xl backdrop-blur-sm"
                  >
                    General Application
                  </Button>
                </motion.div>
              </div>
            </AnimatedText>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section ref={positionsRef} className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="grid" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 leading-tight">
                Open positions
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                We're growing fast. Here's what we're looking for right now.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {openPositions.map((position, index) => (
              <AnimatedCard
                key={position.title}
                delay={index * 0.1}
                tiltIntensity={8}
                className="h-full"
              >
                <motion.div
                  className="glass rounded-2xl md:rounded-3xl p-7 md:p-8 border border-border/40 hover:border-primary/30 transition-all duration-300 h-full group cursor-pointer"
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          {position.department}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{position.type}</span>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                    {position.description}
                  </p>

                  <motion.div
                    className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all"
                    whileHover={{ x: 4 }}
                  >
                    Apply now
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedText delay={0.8}>
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">
                Don't see a role that fits? We're always looking for great people.
              </p>
              <Button
                variant="outline"
                className="border-border/50 hover:bg-secondary/50 rounded-xl"
              >
                Send General Application
              </Button>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-20 bg-card/20 relative overflow-hidden">
        <AnimatedBackground variant="dots" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 leading-tight">
                What we value
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                The principles that guide how we work and what we build.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <AnimatedCard
                key={value.title}
                delay={index * 0.1}
                tiltIntensity={6}
                className="h-full"
              >
                <motion.div
                  className="glass rounded-2xl md:rounded-3xl p-7 md:p-8 border border-border/40 hover:border-primary/30 transition-all duration-300 h-full text-center group"
                  whileHover={{ y: -3 }}
                >
                  <motion.div
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <value.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-lg md:text-xl mb-3">{value.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="blobs" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 leading-tight">
                  Benefits & perks
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We take care of our team so you can focus on building great things.
                </p>
              </div>

              <AnimatedCard delay={0.4}>
                <div className="glass rounded-3xl p-10 md:p-16 border border-border/40">
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -10 }}
                        animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                        </motion.div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="blobs" intensity="medium" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedCard delay={0.2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl mx-auto text-center glass rounded-3xl p-10 md:p-16 border border-border/40 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />
              <div className="relative z-10">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-5 leading-tight">
                  Ready to join us?
                </h2>
                <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                  We're building something special. If you want to be part of it, 
                  let's talk.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-10 py-7 rounded-xl"
                    >
                      View Open Roles
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-border/50 hover:bg-secondary/50 text-lg px-10 py-7 rounded-xl backdrop-blur-sm"
                    >
                      General Application
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatedCard>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CareersPage;

