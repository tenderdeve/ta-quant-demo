import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
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
  Lock,
  ArrowRight
} from "lucide-react";
import { AnimatedCard } from "./AnimatedCard";
import { AnimatedBackground } from "./AnimatedBackground";

const products = [
  {
    icon: Terminal,
    name: "Terminal",
    tagline: "Execution Infrastructure",
    description: "Multi-exchange trading with smart order routing, advanced order types, and real-time analytics. Sub-100ms latency across 50+ exchanges.",
    features: ["Smart Order Routing", "50+ Exchanges", "Advanced Orders", "Real-time Analytics"],
    gradient: "from-primary to-blue-400",
    path: "/terminal",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&q=80",
  },
  {
    icon: Brain,
    name: "TA Quant",
    tagline: "Trading Intelligence",
    description: "Verified quantitative strategies with transparent backtesting. Deploy hedge fund-grade algorithms without coding expertise.",
    features: ["Verified Strategies", "No-Code Automation", "ML Integration", "Risk Management"],
    gradient: "from-purple-500 to-pink-500",
    path: "/quant",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
  },
  {
    icon: Megaphone,
    name: "TA Syndicate",
    tagline: "Marketing Attribution",
    description: "Transform impressions into measurable trading volume. Performance-based campaigns with verified KOL network.",
    features: ["Volume Attribution", "KOL Network", "Campaign Analytics", "ROI Tracking"],
    gradient: "from-accent to-orange-400",
    path: "/syndicate",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
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
      <AnimatedBackground variant="blobs" intensity="medium" />
      {/* Glowing green curved line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.svg
          className="absolute bottom-0 left-0 w-full h-full"
          style={{ opacity: 0.2 }}
        >
          <motion.path
            d="M 0 400 Q 300 200 600 300 T 1200 300"
            stroke="hsl(142, 76%, 50%)"
            strokeWidth="3"
            fill="none"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter: "blur(3px)",
            }}
          />
        </motion.svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - more natural */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-xs tracking-wider uppercase mb-6 block"
          >
            Our Products
          </motion.span>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 leading-tight">
            Three products, one mission
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Each product works on its own, but together they create something bigger. 
            The more you use, the better everything gets.
          </p>
        </motion.div>

        {/* Product Cards - varied sizes and organic feel */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-32">
          {products.map((product, index) => (
            <AnimatedCard
              key={product.name}
              delay={index * 0.15}
              tiltIntensity={8}
              glowOnHover={index === 1}
              className="h-full"
            >
              <Link to={product.path} className="block h-full">
                <motion.div
                  className="glass rounded-2xl md:rounded-3xl p-7 md:p-9 h-full hover:bg-card/50 transition-all duration-500 border border-border/40 hover:border-primary/30 cursor-pointer relative overflow-hidden group"
                  whileHover={{ y: -4 }}
                >
                  {/* Subtle background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Product Image */}
                  <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 glow-primary"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                    >
                      <product.icon className="w-6 h-6 text-black" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="mb-6 relative z-10">
                    <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase mb-3 block">
                      {product.tagline}
                    </span>
                    <h3 className="font-display font-bold text-2xl md:text-3xl mt-2 mb-4 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {product.description}
                    </p>
                  </div>

                  {/* Features - more organic */}
                  <ul className="space-y-2.5 mb-6 relative z-10">
                    {product.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + idx * 0.05 }}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-primary"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn More Link - more prominent */}
                  <motion.div
                    className="flex items-center gap-2 text-primary text-sm font-semibold relative z-10 group-hover:gap-3 transition-all"
                    whileHover={{ x: 4 }}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </Link>
            </AnimatedCard>
          ))}
        </div>

        {/* Advantages Grid - less uniform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
            Why traders choose us
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We built this because we needed it ourselves. No compromises, no shortcuts.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {advantages.map((advantage, index) => (
            <AnimatedCard
              key={advantage.title}
              delay={0.5 + index * 0.08}
              className="h-full"
            >
              <motion.div
                className="flex items-start gap-4 p-6 md:p-7 rounded-xl md:rounded-2xl bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 border border-border/20 hover:border-border/40 h-full"
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <motion.div
                  className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 glow-primary/50"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <advantage.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2 text-base md:text-lg">{advantage.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
