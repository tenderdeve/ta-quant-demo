import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Building2,
  Zap,
  Shield,
  TrendingUp,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Target,
  PieChart,
  Lock,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedText, StaggerText } from "@/components/AnimatedText";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Target,
    title: "Large Position Execution",
    description:
      "Execute massive positions across multiple exchanges with minimal market impact. Use TWAP, VWAP, and iceberg orders to manage large trades discreetly.",
  },
  {
    icon: BarChart3,
    title: "Advanced Risk Management",
    description:
      "Institutional-grade risk controls with real-time VaR, portfolio Greeks, stress testing, and scenario analysis. Protect your fund's capital with comprehensive risk monitoring.",
  },
  {
    icon: TrendingUp,
    title: "Performance Attribution",
    description:
      "Deep dive into what's driving returns with comprehensive performance attribution, trade cost analysis, and strategy-level reporting. Optimize your portfolio allocation.",
  },
  {
    icon: Zap,
    title: "Ultra-Low Latency",
    description:
      "Sub-100ms data latency and sub-500ms execution ensure you capture alpha before it disappears. Execute at the speed of light with co-located infrastructure.",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description:
      "SOC 2 compliant with comprehensive audit trails, trade reporting, and compliance tools. Meet regulatory requirements with confidence.",
  },
  {
    icon: PieChart,
    title: "Multi-Strategy Support",
    description:
      "Manage multiple strategies simultaneously across different exchanges and asset classes. Unified portfolio view with strategy-level P&L and risk metrics.",
  },
];

const benefits = [
  {
    category: "Execution Infrastructure",
    items: [
      "Sub-100ms market data latency",
      "Sub-500ms order execution",
      "Co-located exchange connections",
      "Advanced order types and algorithms",
    ],
  },
  {
    category: "Risk & Compliance",
    items: [
      "Real-time position monitoring",
      "Value at Risk (VaR) calculations",
      "Portfolio Greeks and sensitivity analysis",
      "Comprehensive audit logging",
    ],
  },
  {
    category: "Analytics & Reporting",
    items: [
      "Performance attribution analysis",
      "Trade cost analysis (TCA)",
      "Strategy-level reporting",
      "Custom reporting and exports",
    ],
  },
  {
    category: "Enterprise Features",
    items: [
      "Dedicated account management",
      "Custom integrations and APIs",
      "White-glove onboarding",
      "24/7 priority support",
    ],
  },
];

const HedgeFundsPage = () => {
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
                  <Building2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>
                <span className="text-primary font-mono text-xs tracking-wider uppercase">
                  For Hedge Funds
                </span>
              </div>
            </AnimatedText>
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-tight">
              <StaggerText text="Institutional infrastructure" className="block mb-2" delay={0.4} />
              <StaggerText text="for hedge funds" className="block gradient-text" delay={0.7} />
            </h1>
            <AnimatedText delay={1.0} variant="slide">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Execute large positions, manage complex portfolios, and scale your fund with 
                infrastructure built for institutional traders. Trusted by funds managing billions.
              </p>
            </AnimatedText>
            <AnimatedText delay={1.2}>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    onClick={() => navigate("/contact")}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-10 py-7 rounded-xl"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" variant="outline" className="border-border/50 hover:bg-secondary/50 text-lg px-10 py-7 rounded-xl backdrop-blur-sm">
                    Learn More
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
                Built for institutional scale
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Enterprise-grade infrastructure designed for hedge funds managing large positions 
                and complex trading strategies.
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
                Why hedge funds trust TA Quant
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Proven infrastructure trusted by leading crypto hedge funds managing billions in assets.
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
                  Ready to scale your hedge fund?
                </h2>
                <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                  Join leading crypto hedge funds using TA Quant for execution and risk management. 
                  Let's discuss how we can support your fund's growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      onClick={() => navigate("/contact")}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-10 py-7 rounded-xl"
                    >
                      Contact Sales
                      <ArrowRight className="ml-2 w-5 h-5" />
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

export default HedgeFundsPage;
