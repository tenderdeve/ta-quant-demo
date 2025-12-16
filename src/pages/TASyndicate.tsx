import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Megaphone,
  TrendingUp,
  Target,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Users,
  Globe,
  Award,
  Zap,
  Shield,
  LineChart,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Target,
    title: "Volume Attribution",
    description:
      "Transform impressions into measurable trading volume. Track full-funnel attribution from marketing exposure to actual trades through exchange API integration.",
  },
  {
    icon: Users,
    title: "Verified KOL Network",
    description:
      "Access verified Key Opinion Leaders across multiple countries with authentic audiences, engagement validation, and proven conversion tracking.",
  },
  {
    icon: TrendingUp,
    title: "Performance-Based Campaigns",
    description:
      "Pay for results, not impressions. Campaigns are measured by attributed trading volume and ROI, ensuring marketing budgets drive real outcomes.",
  },
  {
    icon: BarChart3,
    title: "Multi-Touch Attribution",
    description:
      "Comprehensive attribution tracking combining UTM parameters, exchange API integration, on-chain monitoring, and data-driven attribution models.",
  },
  {
    icon: Award,
    title: "Trading Competitions",
    description:
      "White-label competition platform with customizable configuration, real-time leaderboards, fraud prevention, and automated prize distribution.",
  },
  {
    icon: Zap,
    title: "Narrative Intelligence",
    description:
      "Automated narrative identification, competitive intelligence, sentiment monitoring, and strategic positioning guidance for optimal campaign timing.",
  },
];

const attributionMethods = [
  {
    method: "UTM Tracking",
    description: "Comprehensive parameter tracking across all marketing touchpoints",
    icon: Target,
  },
  {
    method: "Exchange API Integration",
    description: "Authoritative trading volume data through direct exchange partnerships",
    icon: BarChart3,
  },
  {
    method: "On-Chain Attribution",
    description: "Wallet tracking and transaction volume attribution for DeFi protocols",
    icon: Shield,
  },
  {
    method: "Multi-Touch Models",
    description: "First-touch, last-touch, linear, time-decay, and data-driven attribution",
    icon: LineChart,
  },
];

const kolTiers = [
  {
    tier: "Tier 1",
    description: "Top-tier influencers with massive reach and proven track records",
    features: ["Highest volume potential", "Premium placement", "Dedicated support"],
  },
  {
    tier: "Tier 2",
    description: "Established influencers with strong engagement and niche expertise",
    features: ["High engagement rates", "Targeted audiences", "Cost-effective reach"],
  },
  {
    tier: "Tier 3",
    description: "Emerging influencers with authentic communities and growth potential",
    features: ["Authentic engagement", "Lower costs", "Early access to trends"],
  },
];

const TASyndicatePage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const attributionRef = useRef(null);
  const kolRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const attributionInView = useInView(attributionRef, { once: true, margin: "-100px" });
  const kolInView = useInView(kolRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-[128px]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-orange-400 flex items-center justify-center">
                <Megaphone className="w-8 h-8 text-white" />
              </div>
              <span className="text-primary font-mono text-sm tracking-wider uppercase">
                TA Syndicate
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6">
              Marketing Attribution{" "}
              <span className="gradient-text">That Actually Matters</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Transform crypto marketing from impressions to measurable trading volume. Performance-based
              campaigns with verified KOL network and transparent ROI tracking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-8 py-6"
              >
                Launch Campaign
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-lg px-8 py-6">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass rounded-2xl p-8 border border-border/50"
              >
                <h3 className="font-display font-bold text-2xl mb-4 text-destructive">
                  The Problem
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">×</span>
                    <span>Marketing measured by impressions, not outcomes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">×</span>
                    <span>KOL campaigns lack accountability and attribution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">×</span>
                    <span>No way to connect marketing spend to trading volume</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">×</span>
                    <span>Fake followers and wrong audience targeting</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass rounded-2xl p-8 border border-primary/50"
              >
                <h3 className="font-display font-bold text-2xl mb-4 text-primary">
                  The Solution
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Volume attribution through exchange API integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Verified KOLs with authentic audiences and engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Performance-based pricing aligned with results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Complete transparency from impressions to trades</span>
                  </li>
                </ul>
              </motion.div>
            </div>
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
              Complete Marketing Attribution Platform
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Everything you need to run performance-driven crypto marketing campaigns with measurable
              outcomes.
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
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attribution Methods */}
      <section ref={attributionRef} className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={attributionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Multi-Layer Attribution Tracking
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Connect marketing touchpoints to trading outcomes through comprehensive attribution infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {attributionMethods.map((method, index) => (
              <motion.div
                key={method.method}
                initial={{ opacity: 0, y: 30 }}
                animate={attributionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass rounded-2xl p-6 border border-border/50"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <method.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">{method.method}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KOL Network */}
      <section ref={kolRef} className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={kolInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Verified KOL Network
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Access verified influencers across multiple countries with authentic audiences and proven
              conversion tracking.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {kolTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 30 }}
                animate={kolInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass rounded-2xl p-6 border border-border/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-xl">{tier.tier}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                <ul className="space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
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
                Campaign Performance Metrics
              </h2>
              <p className="text-muted-foreground">
                Real-time tracking of campaign effectiveness with complete transparency.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "Volume", label: "Attributed Trading", icon: TrendingUp },
                { value: "ROI", label: "Return on Investment", icon: BarChart3 },
                { value: "Global", label: "KOL Network", icon: Globe },
                { value: "Real-Time", label: "Analytics", icon: Zap },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center glass rounded-xl p-6 border border-border/50"
                >
                  <metric.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="font-display font-bold text-2xl md:text-3xl gradient-text mb-2">
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
      <section ref={ctaRef} className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center glass rounded-2xl p-12 border border-border/50"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Ready to Measure Real Marketing Results?
            </h2>
            <p className="text-muted-foreground mb-8">
              Stop paying for impressions. Start measuring trading volume. Launch your first
              performance-based campaign with TA Syndicate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-8 py-6"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-lg px-8 py-6">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TASyndicatePage;

