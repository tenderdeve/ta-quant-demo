import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  User,
  Zap,
  Shield,
  TrendingUp,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Rocket,
  Target,
  Brain,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedText, StaggerText } from "@/components/AnimatedText";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Execution",
    description:
      "Execute trades across 50+ exchanges with sub-500ms latency. Never miss an opportunity with real-time market data and instant order execution.",
  },
  {
    icon: Brain,
    title: "Quant Strategies",
    description:
      "Access verified quantitative trading strategies with transparent backtesting. Deploy hedge fund-grade algorithms without coding expertise.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track your performance with comprehensive analytics, P&L tracking, and trade history. Understand what's working and optimize your approach.",
  },
  {
    icon: Target,
    title: "Smart Order Routing",
    description:
      "Automatically route orders to the best exchange for optimal execution. Minimize slippage and maximize your trading profits.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Set position limits, stop losses, and risk parameters. Protect your capital with built-in risk controls and real-time monitoring.",
  },
  {
    icon: Wallet,
    title: "Unified Portfolio",
    description:
      "Manage all your positions across exchanges from one dashboard. See your complete portfolio, P&L, and risk metrics in real-time.",
  },
];

const benefits = [
  {
    category: "Trading Tools",
    items: [
      "Access to 50+ exchanges",
      "Advanced order types (TWAP, VWAP, iceberg)",
      "Smart order routing",
      "Real-time market data",
    ],
  },
  {
    category: "Strategy Access",
    items: [
      "Verified quant strategies",
      "Transparent backtesting results",
      "Strategy performance metrics",
      "Easy strategy deployment",
    ],
  },
  {
    category: "Risk & Analytics",
    items: [
      "Real-time position monitoring",
      "P&L tracking and reporting",
      "Risk limit controls",
      "Trade history and analysis",
    ],
  },
  {
    category: "Support & Community",
    items: [
      "24/7 platform support",
      "Trading community access",
      "Educational resources",
      "Regular platform updates",
    ],
  },
];

const TradersPage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);
  const navigate = useNavigate();

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Hero Background Images */}
        <div className="absolute inset-0 z-0">
          {/* Primary hero background */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: 'url(/hero-bg-1.png)' }}
          />
          {/* Secondary hero background overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: 'url(/hero-bg-2.png)' }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-background/40" />
        </div>

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
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <User className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>
                <span className="text-primary font-mono text-xs tracking-wider uppercase">
                  For Pro Traders
                </span>
              </div>
            </AnimatedText>
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-tight">
              <StaggerText text="Trade like a pro" className="block mb-2" delay={0.4} />
              <StaggerText text="without the complexity" className="block gradient-text" delay={0.7} />
            </h1>
            <AnimatedText delay={1.0} variant="slide">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Access professional trading tools, verified strategies, and advanced analytics. 
                Trade across 50+ exchanges with institutional-grade execution.
              </p>
            </AnimatedText>
            <AnimatedText delay={1.2}>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    onClick={() => navigate("/signup-demo")}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-10 py-7 rounded-xl"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" className="border-border/50 hover:bg-secondary/50 text-lg px-10 py-7 rounded-xl backdrop-blur-sm">
                    Request Demo
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
                Professional trading infrastructure that gives you an edge in the markets. 
                No coding required, just powerful tools and strategies.
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

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="dots" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 leading-tight">
                Why pro traders choose TA Quant
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Join thousands of professional traders using TA Quant to execute better trades.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedCard
                key={benefit.category}
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
                      <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </motion.div>
                    <h3 className="font-display font-bold text-xl md:text-2xl">{benefit.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
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
                  Ready to level up your trading?
                </h2>
                <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                  Join professional traders using TA Quant for better execution and strategy access. 
                  Start with a free demo and see the difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      onClick={() => navigate("/signup-demo")}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-10 py-7 rounded-xl"
                    >
                      Request Demo
                      <Rocket className="ml-2 w-5 h-5" />
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

export default TradersPage;
