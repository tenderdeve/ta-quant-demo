import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Terminal, 
  Brain, 
  Megaphone, 
  Layers, 
  Zap, 
  Shield,
  TrendingUp,
  Globe,
  BarChart3,
  Lock
} from "lucide-react";

const products = [
  {
    icon: Terminal,
    name: "Terminal",
    tagline: "Execution Infrastructure",
    description: "Multi-exchange trading with smart order routing, advanced order types, and real-time analytics. Sub-100ms latency across 50+ exchanges.",
    features: ["Smart Order Routing", "50+ Exchanges", "Advanced Orders", "Real-time Analytics"],
    gradient: "from-primary to-blue-400",
  },
  {
    icon: Brain,
    name: "TA Quant",
    tagline: "Trading Intelligence",
    description: "Verified quantitative strategies with transparent backtesting. Deploy hedge fund-grade algorithms without coding expertise.",
    features: ["Verified Strategies", "No-Code Automation", "ML Integration", "Risk Management"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Megaphone,
    name: "TA Syndicate",
    tagline: "Marketing Attribution",
    description: "Transform impressions into measurable trading volume. Performance-based campaigns with verified KOL network.",
    features: ["Volume Attribution", "KOL Network", "Campaign Analytics", "ROI Tracking"],
    gradient: "from-accent to-orange-400",
  },
];

const advantages = [
  { icon: Layers, title: "Unified Platform", description: "Execution, intelligence, and amplification in one integrated ecosystem" },
  { icon: Zap, title: "Sub-100ms Latency", description: "Institutional-grade performance with real-time data processing" },
  { icon: Shield, title: "Enterprise Security", description: "SOC 2 compliant with AES-256 encryption and multi-factor auth" },
  { icon: TrendingUp, title: "Proven Strategies", description: "Backtested algorithms with transparent performance metrics" },
  { icon: Globe, title: "Global Coverage", description: "50+ exchange integrations with multi-region infrastructure" },
  { icon: Lock, title: "Risk Controls", description: "Multi-layer risk management with real-time monitoring" },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Products
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
            Three Products, One Ecosystem
          </h2>
          <p className="text-muted-foreground text-lg">
            Each product creates value independently while generating network effects that compound across the entire platform.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass rounded-2xl p-8 h-full hover:bg-card/60 transition-all duration-300 border border-border/50 hover:border-primary/30">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                    {product.tagline}
                  </span>
                  <h3 className="font-display font-bold text-2xl mt-2 mb-3">{product.name}</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advantages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
            Why TA Quant?
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Built from the ground up for professional traders who demand institutional-grade infrastructure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <advantage.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">{advantage.title}</h4>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
