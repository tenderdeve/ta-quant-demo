import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Rocket,
  Layers,
  Brain,
  Globe,
  Smartphone,
  Shield,
  Cpu
} from "lucide-react";

const phases = [
  {
    name: "Launch Phase",
    status: "current",
    timeline: "Q1 2025",
    icon: Rocket,
    description: "Core platform launch with essential integrations",
    items: [
      { text: "Complete core exchange integrations", done: true },
      { text: "Deploy verified quantitative strategies", done: true },
      { text: "Expand KOL network globally", done: false },
      { text: "Demonstrate attribution capabilities", done: false },
    ],
  },
  {
    name: "Scale Phase",
    status: "upcoming",
    timeline: "Q2-Q3 2025",
    icon: Layers,
    description: "Platform expansion and mobile experience",
    items: [
      { text: "Mobile applications (iOS & Android)", done: false },
      { text: "Enhanced analytics dashboard", done: false },
      { text: "Strategy library expansion", done: false },
      { text: "Self-serve campaign platform", done: false },
    ],
  },
  {
    name: "Enterprise Phase",
    status: "upcoming",
    timeline: "Q4 2025",
    icon: Shield,
    description: "Enterprise-grade features and compliance",
    items: [
      { text: "White-label solutions", done: false },
      { text: "AI trading assistants", done: false },
      { text: "Advanced derivatives support", done: false },
      { text: "SOC 2 Type II certification", done: false },
    ],
  },
  {
    name: "Innovation Phase",
    status: "upcoming",
    timeline: "2026",
    icon: Brain,
    description: "DeFi integration and advanced ML capabilities",
    items: [
      { text: "DeFi protocol integration", done: false },
      { text: "Traditional finance bridges", done: false },
      { text: "OTC and prime services", done: false },
      { text: "Advanced ML capabilities", done: false },
    ],
  },
  {
    name: "Platform Phase",
    status: "upcoming",
    timeline: "2026+",
    icon: Globe,
    description: "Global expansion and ecosystem development",
    items: [
      { text: "Developer marketplace", done: false },
      { text: "Global geographic expansion", done: false },
      { text: "Decentralized governance", done: false },
      { text: "Industry-defining position", done: false },
    ],
  },
];

const Roadmap = () => {
  const headerRef = useRef(null);
  const timelineRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Roadmap
            </span>
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6">
              Building the{" "}
              <span className="gradient-text">Future of Trading</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our phased development approach ensures we deliver stable, tested features 
              while continuously innovating toward our vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, x: -30 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                {index !== phases.length - 1 && (
                  <div className="absolute left-[15px] top-12 w-0.5 h-[calc(100%-48px)] bg-gradient-to-b from-border to-transparent" />
                )}
                
                {/* Timeline Dot */}
                <div className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  phase.status === "current" 
                    ? "bg-primary glow-primary" 
                    : "bg-secondary border border-border"
                }`}>
                  {phase.status === "current" ? (
                    <Clock className="w-4 h-4 text-primary-foreground" />
                  ) : (
                    <Circle className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>

                {/* Content Card */}
                <div className={`ml-8 glass rounded-2xl p-6 border ${
                  phase.status === "current" 
                    ? "border-primary/50" 
                    : "border-border/50"
                }`}>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      phase.status === "current"
                        ? "bg-primary/20"
                        : "bg-secondary"
                    }`}>
                      <phase.icon className={`w-5 h-5 ${
                        phase.status === "current" ? "text-primary" : "text-muted-foreground"
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl">{phase.name}</h3>
                      <span className="text-sm text-muted-foreground">{phase.timeline}</span>
                    </div>
                    {phase.status === "current" && (
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        In Progress
                      </span>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{phase.description}</p>
                  
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3">
                        {item.done ? (
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                        ) : (
                          <Circle className="w-5 h-5 text-muted-foreground/50 shrink-0" />
                        )}
                        <span className={item.done ? "text-foreground" : "text-muted-foreground"}>
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Banner */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
              Our Long-Term Vision
            </h2>
            <p className="text-muted-foreground text-lg">
              TA Quant aims to become the comprehensive infrastructure platform—the Bloomberg 
              Terminal for crypto—where every serious trader, fund, and project operates by default.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Roadmap;
