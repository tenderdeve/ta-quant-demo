import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Terminal,
  Zap,
  Shield,
  TrendingUp,
  Globe,
  BarChart3,
  Lock,
  ArrowRight,
  CheckCircle2,
  Layers,
  Activity,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedCard, FloatingCard } from "@/components/AnimatedCard";
import { AnimatedText, StaggerText } from "@/components/AnimatedText";

const features = [
  {
    icon: Globe,
    title: "50+ Exchange Integrations",
    description:
      "Access liquidity across all major crypto exchanges from a single unified interface. Trade on Binance, Coinbase, Kraken, OKX, Bybit, and dozens more without managing multiple accounts.",
  },
  {
    icon: Zap,
    title: "Sub-100ms Data Latency",
    description:
      "Institutional-grade performance with real-time market data processing. Sub-100ms data latency and sub-500ms order execution ensure you never miss an opportunity.",
  },
  {
    icon: TrendingUp,
    title: "Smart Order Routing",
    description:
      "Intelligent algorithms analyze liquidity across exchanges in real-time, routing orders to minimize slippage and execution costs. Machine learning continuously optimizes routing decisions.",
  },
  {
    icon: Layers,
    title: "Advanced Order Types",
    description:
      "Deploy sophisticated order types unavailable on individual exchanges: TWAP, VWAP, iceberg orders, conditional orders, basket orders, and trailing stops with dynamic adjustment.",
  },
  {
    icon: BarChart3,
    title: "Unified Portfolio Management",
    description:
      "Track positions, P&L, and risk metrics across all exchanges in real-time. Comprehensive analytics including VaR, portfolio Greeks, correlation analysis, and scenario testing.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant infrastructure with AES-256 encryption, TLS 1.3, multi-factor authentication, IP whitelisting, and comprehensive audit logging. Your funds and data are protected.",
  },
];

const capabilities = [
  {
    category: "Execution Performance",
    items: [
      "Sub-100ms market data latency",
      "Sub-500ms order execution",
      "900+ orders per second capability",
      "Real-time order book reconstruction",
    ],
  },
  {
    category: "Order Types",
    items: [
      "TWAP and VWAP execution",
      "Iceberg and hidden orders",
      "Conditional multi-trigger orders",
      "Basket orders for portfolio rebalancing",
    ],
  },
  {
    category: "Risk Management",
    items: [
      "Real-time position monitoring",
      "Value at Risk (VaR) calculation",
      "Portfolio Greeks for derivatives",
      "Margin utilization tracking",
    ],
  },
  {
    category: "API & Integration",
    items: [
      "RESTful APIs for all functions",
      "WebSocket streams for real-time data",
      "FIX protocol for enterprise clients",
      "Python SDK for easy integration",
    ],
  },
];

const TerminalPage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const capabilitiesRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const capabilitiesInView = useInView(capabilitiesRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

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
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Terminal className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>
                <span className="text-primary font-mono text-xs tracking-wider uppercase">
                  Terminal
                </span>
              </div>
            </AnimatedText>
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-tight">
              <StaggerText text="Institutional-grade" className="block mb-2" delay={0.4} />
              <StaggerText text="execution infrastructure" className="block gradient-text" delay={0.7} />
            </h1>
            <AnimatedText delay={1.0} variant="slide">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Trade across 50+ exchanges from one place. Smart routing, advanced orders, 
                real-time analytics. Everything you need, nothing you don't.
              </p>
            </AnimatedText>
            <AnimatedText delay={1.2}>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-10 py-7 rounded-xl"
                  >
                    Start Trading
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" className="border-border/50 hover:bg-secondary/50 text-lg px-10 py-7 rounded-xl backdrop-blur-sm">
                    View Documentation
                  </Button>
                </motion.div>
              </div>
            </AnimatedText>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section ref={featuresRef} className="py-20 bg-card/20 relative overflow-hidden">
        <AnimatedBackground variant="grid" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 leading-tight">
                Everything you need to trade professionally
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                We've combined the best execution infrastructure with analytics and risk tools 
                that actually make sense.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {features.map((feature, index) => (
              <AnimatedCard
                key={feature.title}
                delay={index * 0.1}
                tiltIntensity={8}
                className="h-full"
              >
                <motion.div
                  className="glass rounded-2xl md:rounded-3xl p-7 md:p-8 border border-border/40 hover:border-primary/30 transition-all duration-300 h-full group"
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <motion.div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-lg md:text-xl mb-3">{feature.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section ref={capabilitiesRef} className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="dots" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 leading-tight">
                Professional trading capabilities
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Features that used to be exclusive to hedge funds. Now available to anyone 
                who's serious about trading.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {capabilities.map((capability, index) => (
              <AnimatedCard
                key={capability.category}
                delay={index * 0.15}
                tiltIntensity={6}
                className="h-full"
              >
                <motion.div
                  className="glass rounded-2xl md:rounded-3xl p-7 md:p-9 border border-border/40 hover:border-primary/30 transition-all duration-300 h-full group"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <Activity className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </motion.div>
                    <h3 className="font-display font-bold text-xl md:text-2xl">{capability.category}</h3>
                  </div>
                  <ul className="space-y-3 md:space-y-4">
                    {capability.items.map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={capabilitiesInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        </motion.div>
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-card/20 relative overflow-hidden">
        <AnimatedBackground variant="blobs" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 leading-tight">
                  Performance benchmarks
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Real numbers. No marketing fluff.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
                {[
                  { value: "<100ms", label: "Data Latency", icon: Zap },
                  { value: "<500ms", label: "Order Execution", icon: Cpu },
                  { value: "900+", label: "Orders/Second", icon: Activity },
                  { value: "50+", label: "Exchanges", icon: Globe },
                ].map((metric, index) => (
                  <FloatingCard
                    key={metric.label}
                    delay={index * 0.1}
                    floatIntensity={8}
                  >
                    <motion.div
                      className="text-center glass rounded-xl md:rounded-2xl p-6 md:p-8 border border-border/40 hover:border-primary/30 transition-all duration-300 group"
                      whileHover={{ scale: 1.05, y: -4 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="mb-4"
                      >
                        <metric.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto" />
                      </motion.div>
                      <motion.div
                        className="font-display font-bold text-2xl md:text-4xl gradient-text mb-2"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                      >
                        {metric.value}
                      </motion.div>
                      <div className="text-xs md:text-sm text-muted-foreground font-medium">{metric.label}</div>
                    </motion.div>
                  </FloatingCard>
                ))}
              </div>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="blobs" intensity="medium" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedCard delay={0.2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={ctaInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl mx-auto text-center glass rounded-3xl p-10 md:p-16 border border-border/40 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />
              <div className="relative z-10">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-5 leading-tight">
                  Ready to upgrade your trading infrastructure?
                </h2>
                <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                  Join traders who've moved beyond single-exchange platforms. Start with Terminal 
                  and see what you've been missing.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-10 py-7 rounded-xl"
                    >
                      Get Started Free
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button size="lg" variant="outline" className="border-border/50 hover:bg-secondary/50 text-lg px-10 py-7 rounded-xl backdrop-blur-sm">
                      Contact Sales
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

export default TerminalPage;

