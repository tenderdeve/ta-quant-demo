import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Target, Users, Lightbulb, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Performance First",
    description: "Every decision is measured against trading outcomes. We optimize for real results, not vanity metrics.",
  },
  {
    icon: Users,
    title: "Trader-Centric Design",
    description: "Built by traders, for traders. Every feature addresses real pain points in professional trading workflows.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Through Integration",
    description: "We believe the future of trading is unified. Execution, intelligence, and amplification work best together.",
  },
  {
    icon: Award,
    title: "Radical Transparency",
    description: "All strategies are verified, all performance is audited, all metrics are real. No black boxes.",
  },
];

const team = [
  { role: "Engineering", count: "40+" },
  { role: "Quantitative Research", count: "15+" },
  { role: "Trading Operations", count: "20+" },
  { role: "Global Offices", count: "5" },
];

const About = () => {
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              About TA Quant
            </span>
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6">
              Building the Future of{" "}
              <span className="gradient-text">Professional Trading</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We're on a mission to democratize institutional-grade trading infrastructure, 
              making professional tools accessible to every serious trader.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                The Problem We're Solving
              </h2>
              <p className="text-muted-foreground mb-6">
                The cryptocurrency trading infrastructure market suffers from severe fragmentation. 
                Professional traders must choose between inadequate retail platforms and prohibitively 
                expensive institutional tools.
              </p>
              <p className="text-muted-foreground mb-6">
                Quantitative trading remains inaccessible due to technical barriers, while marketing 
                effectiveness in crypto cannot be measured beyond vanity metrics.
              </p>
              <p className="text-foreground font-medium">
                TA Quant unifies execution, intelligence, and amplification into one integrated platform—the 
                operating system for professional crypto trading.
              </p>
            </div>
            <div className="glass rounded-2xl p-8 border border-border/50">
              <h3 className="font-display font-bold text-2xl mb-6">Our Vision</h3>
              <p className="text-muted-foreground mb-4">
                We envision TA Quant as the comprehensive infrastructure platform where every serious 
                trader, fund, and project operates by default.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">Leveling the playing field for all traders</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">Accelerating crypto market maturation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span className="text-muted-foreground">Enabling global access to professional tools</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The principles that guide every decision we make.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats Section */}
      <section ref={teamRef} className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Our Team
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A world-class team of engineers, quants, and trading professionals building the future of crypto infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-12">
            {team.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={teamInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-bold text-4xl md:text-5xl gradient-text mb-2">
                  {item.count}
                </div>
                <div className="text-sm text-muted-foreground">{item.role}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button className="bg-primary hover:bg-primary/90 glow-primary">
              Join Our Team
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
