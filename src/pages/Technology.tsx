import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Cpu, 
  Database, 
  Globe, 
  Lock, 
  Zap, 
  BarChart3,
  Code,
  Server,
  Shield,
  Layers,
  Brain,
  Activity
} from "lucide-react";

const techStack = [
  {
    category: "Frontend",
    icon: Code,
    color: "from-blue-500 to-cyan-400",
    items: [
      { name: "React + TypeScript", description: "Responsive, modular web interface" },
      { name: "React Flow", description: "Real-time automation flow visualization" },
      { name: "TradingView", description: "Professional charting and analytics" },
      { name: "tRPC + WebSocket", description: "Type-safe, low-latency communication" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "Rust Engine", description: "Ultra-fast order execution and processing" },
      { name: "Python (FastAPI)", description: "AI orchestration and analytics" },
      { name: "Node.js + tRPC", description: "Service unification and API coordination" },
      { name: "High-Frequency Scripts", description: "900+ orders per second capability" },
    ],
  },
  {
    category: "AI & Automation",
    icon: Brain,
    color: "from-accent to-orange-400",
    items: [
      { name: "LangChain / LangGraph", description: "Multi-agent orchestration" },
      { name: "Multiple AI Providers", description: "Analysis and forecasting models" },
      { name: "Visual Flow Builder", description: "No-code automation pipelines" },
      { name: "ML Models", description: "Price prediction and regime classification" },
    ],
  },
  {
    category: "Infrastructure",
    icon: Globe,
    color: "from-green-500 to-emerald-400",
    items: [
      { name: "AWS + GCP", description: "Multi-cloud scalability and uptime" },
      { name: "Kubernetes", description: "Container orchestration" },
      { name: "Prometheus + Grafana", description: "Real-time observability" },
      { name: "Multi-Region Deploy", description: "Global low-latency access" },
    ],
  },
];

const architectureFeatures = [
  {
    icon: Zap,
    title: "Sub-100ms Latency",
    description: "Market data processing with institutional-grade speed through optimized data pipelines and co-located infrastructure.",
  },
  {
    icon: Database,
    title: "Scalable Data Layer",
    description: "PostgreSQL for relational data, TimescaleDB for time-series, Redis for caching, and MongoDB for unstructured data.",
  },
  {
    icon: Layers,
    title: "Microservices Architecture",
    description: "Loosely coupled components communicating through Kafka and RabbitMQ for independent scaling and isolated failure domains.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "AES-256 encryption, TLS 1.3, multi-factor authentication, and comprehensive audit logging.",
  },
  {
    icon: Activity,
    title: "99.9% Uptime Target",
    description: "Distributed architecture with automatic failover, health monitoring, and redundant systems across regions.",
  },
  {
    icon: Lock,
    title: "SOC 2 Compliance",
    description: "Enterprise-grade security controls, KYC/AML readiness, GDPR compliance, and comprehensive audit trails.",
  },
];

const Technology = () => {
  const headerRef = useRef(null);
  const stackRef = useRef(null);
  const archRef = useRef(null);
  
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const stackInView = useInView(stackRef, { once: true, margin: "-100px" });
  const archInView = useInView(archRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Technology
            </span>
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6">
              Built for{" "}
              <span className="gradient-text">Institutional Performance</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A modular, high-performance technology stack designed to deliver 
              institutional-grade speed, reliability, and intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section ref={stackRef} className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={stackInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Our Technology Stack
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Purpose-built infrastructure combining speed, scalability, and intelligence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 30 }}
                animate={stackInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass rounded-2xl p-6 border border-border/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stack.color} flex items-center justify-center`}>
                    <stack.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl">{stack.category}</h3>
                </div>
                
                <ul className="space-y-4">
                  {stack.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${stack.color} mt-2 shrink-0`} />
                      <div>
                        <span className="font-medium text-foreground">{item.name}</span>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Features */}
      <section ref={archRef} className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={archInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Architecture Highlights
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Enterprise-grade infrastructure designed for reliability, security, and scale.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {architectureFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={archInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Performance Benchmarks
              </h2>
              <p className="text-muted-foreground">
                Real numbers that matter for professional trading operations.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "<100ms", label: "Data Latency" },
                { value: "<500ms", label: "Order Execution" },
                { value: "900+", label: "Orders/Second" },
                { value: "50+", label: "Exchange APIs" },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center glass rounded-xl p-6 border border-border/50"
                >
                  <div className="font-display font-bold text-3xl md:text-4xl gradient-text mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Technology;
