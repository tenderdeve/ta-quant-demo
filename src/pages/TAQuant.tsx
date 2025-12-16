import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Brain,
  Zap,
  Shield,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Code,
  Layers,
  Target,
  Sparkles,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const strategyTypes = [
  {
    icon: TrendingUp,
    name: "Trend Following",
    description:
      "Identify and capture sustained directional movements using moving averages, momentum analysis, and breakout detection.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: BarChart3,
    name: "Mean Reversion",
    description:
      "Exploit temporary price dislocations through Bollinger Band reversals, RSI divergences, and statistical arbitrage.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Layers,
    name: "Market Making",
    description:
      "Provide liquidity with grid trading and dynamic quote-based market making strategies.",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    icon: Zap,
    name: "Arbitrage",
    description:
      "Capture price discrepancies across exchanges, funding rate opportunities, and triangle arbitrage.",
    gradient: "from-orange-500 to-red-400",
  },
  {
    icon: Target,
    name: "Volatility Trading",
    description:
      "Trade volatility breakouts and implement straddle positions based on volatility regime analysis.",
    gradient: "from-indigo-500 to-purple-400",
  },
  {
    icon: Brain,
    name: "Sentiment & Alternative Data",
    description:
      "Leverage social sentiment, on-chain analytics, and funding rate data for edge detection.",
    gradient: "from-accent to-orange-400",
  },
];

const features = [
  {
    icon: CheckCircle2,
    title: "Verified Strategies",
    description:
      "Every strategy undergoes rigorous validation including 3+ years of backtesting, paper trading, and live performance verification before marketplace launch.",
  },
  {
    icon: Code,
    title: "No-Code Automation",
    description:
      "Deploy sophisticated strategies without programming. Customize risk parameters, execution preferences, and market selection through intuitive interfaces.",
  },
  {
    icon: LineChart,
    title: "Transparent Backtesting",
    description:
      "Institutional-grade backtesting engine with 5+ years of minute-level OHLCV data, realistic execution simulation, and comprehensive performance attribution.",
  },
  {
    icon: Shield,
    title: "Multi-Layer Risk Management",
    description:
      "Strategy-level, portfolio-level, and exchange-level controls with real-time monitoring, drawdown management, and automatic position sizing.",
  },
  {
    icon: Sparkles,
    title: "Machine Learning Integration",
    description:
      "ML-enhanced strategies using LSTM and transformer models, regime classification, sentiment analysis, and alternative data integration.",
  },
  {
    icon: BarChart3,
    title: "Performance Attribution",
    description:
      "Complete transparency with daily performance reports, strategy fact sheets, alpha/beta separation, and execution quality analysis.",
  },
];

const verificationProcess = [
  {
    phase: "Development",
    description: "Strategy logic development and initial testing",
    done: true,
  },
  {
    phase: "Backtesting",
    description: "Minimum 3 years of historical data validation",
    done: true,
  },
  {
    phase: "Paper Trading",
    description: "Live market simulation without real capital",
    done: true,
  },
  {
    phase: "Limited Deployment",
    description: "Small-scale live trading with monitoring",
    done: true,
  },
  {
    phase: "Marketplace Launch",
    description: "Full availability after demonstrated success",
    done: true,
  },
];

const TAQuantPage = () => {
  const heroRef = useRef(null);
  const strategiesRef = useRef(null);
  const featuresRef = useRef(null);
  const verificationRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const strategiesInView = useInView(strategiesRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const verificationInView = useInView(verificationRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pink-500/20 rounded-full blur-[128px]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <span className="text-primary font-mono text-sm tracking-wider uppercase">
                TA Quant
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6">
              Trading Intelligence{" "}
              <span className="gradient-text">Without the Complexity</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Deploy verified quantitative strategies with transparent backtesting. Access hedge
              fund-grade algorithms without coding expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-8 py-6"
              >
                Explore Strategies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-lg px-8 py-6">
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategy Types */}
      <section ref={strategiesRef} className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={strategiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Strategy Categories
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Access proven quantitative strategies across multiple trading approaches, each verified
              through rigorous testing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategyTypes.map((strategy, index) => (
              <motion.div
                key={strategy.name}
                initial={{ opacity: 0, y: 30 }}
                animate={strategiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${strategy.gradient} flex items-center justify-center mb-4`}
                >
                  <strategy.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{strategy.name}</h3>
                <p className="text-sm text-muted-foreground">{strategy.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Why Choose TA Quant?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Institutional-grade quantitative trading made accessible through verified strategies
              and transparent performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section ref={verificationRef} className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={verificationInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Strategy Verification Process
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Every strategy undergoes rigorous validation before marketplace availability.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {verificationProcess.map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: -30 }}
                  animate={verificationInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 glass rounded-xl p-6 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{step.phase}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Backtesting Stats */}
      <section className="py-20">
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
                Backtesting Infrastructure
              </h2>
              <p className="text-muted-foreground">
                Institutional-grade historical data and realistic execution simulation.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "5+", label: "Years of Data", icon: BarChart3 },
                { value: "500+", label: "Cryptocurrencies", icon: TrendingUp },
                { value: "Minute", label: "Data Granularity", icon: Zap },
                { value: "Realistic", label: "Execution Simulation", icon: Shield },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center glass rounded-xl p-6 border border-border/50"
                >
                  <metric.icon className="w-8 h-8 text-primary mx-auto mb-3" />
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

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center glass rounded-2xl p-12 border border-border/50"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Start Trading with Verified Strategies
            </h2>
            <p className="text-muted-foreground mb-8">
              Access hedge fund-grade quantitative strategies without coding. Deploy, customize, and
              scale with transparent performance tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-8 py-6"
              >
                Browse Strategy Marketplace
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TAQuantPage;

