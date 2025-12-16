import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Code,
  Webhook,
  Zap,
  Shield,
  Book,
  Terminal,
  ArrowRight,
  Copy,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedText, StaggerText } from "@/components/AnimatedText";

const apiFeatures = [
  {
    icon: Terminal,
    title: "REST APIs",
    description: "Comprehensive REST endpoints for all platform functions",
    color: "from-primary to-blue-400",
  },
  {
    icon: Zap,
    title: "WebSocket Streams",
    description: "Real-time data streams for market data and account activity",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "FIX Protocol",
    description: "Enterprise-standard protocol for institutional clients",
    color: "from-accent to-orange-400",
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Event-driven integrations with customizable webhooks",
    color: "from-green-500 to-emerald-400",
  },
];

const codeExample = `import taquant

# Initialize client
client = taquant.Client(
    api_key="your_api_key",
    api_secret="your_secret"
)

# Place an order
order = client.orders.create(
    symbol="BTC/USDT",
    side="buy",
    amount=0.1,
    order_type="limit",
    price=50000
)

# Stream market data
for ticker in client.stream.tickers("BTC/USDT"):
    print(f"Price: {ticker.price}")`;

const DevelopersPage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const quickstartRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const quickstartInView = useInView(quickstartRef, { once: true, margin: "-100px" });

  const copyCode = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
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
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-tight">
              <StaggerText text="Build on TA Quant" className="block mb-2" delay={0.2} />
              <StaggerText text="Developer APIs" className="block gradient-text" delay={0.5} />
            </h1>
            <AnimatedText delay={0.8} variant="slide">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                REST, WebSocket, FIX, and Python SDKs. Everything you need to integrate TA Quant 
                into your trading infrastructure.
              </p>
            </AnimatedText>
          </motion.div>
        </div>
      </section>

      {/* API Features */}
      <section ref={featuresRef} className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="grid" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                API Overview
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Multiple ways to integrate, depending on your needs.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {apiFeatures.map((feature, index) => (
              <AnimatedCard key={feature.title} delay={index * 0.1} tiltIntensity={8}>
                <div className="glass rounded-2xl p-7 border border-border/40 hover:border-primary/30 transition-all h-full text-center group">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quickstart */}
      <section ref={quickstartRef} className="py-20 bg-card/20 relative overflow-hidden">
        <AnimatedBackground variant="dots" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                  Quick Start
                </h2>
                <p className="text-muted-foreground">
                  Get up and running in minutes with our Python SDK.
                </p>
              </div>

              <AnimatedCard delay={0.4}>
                <div className="glass rounded-2xl border border-border/40 overflow-hidden">
                  <div className="bg-secondary/30 px-6 py-4 flex items-center justify-between border-b border-border/40">
                    <div className="flex items-center gap-2">
                      <Code className="w-5 h-5 text-primary" />
                      <span className="font-mono text-sm font-medium">Python SDK Example</span>
                    </div>
                    <button
                      onClick={copyCode}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-secondary/50 transition-colors text-sm"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-6 overflow-x-auto">
                    <code className="text-sm font-mono text-foreground">{codeExample}</code>
                  </pre>
                </div>
              </AnimatedCard>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Rate Limits",
                description: "Generous rate limits with automatic throttling. Enterprise plans available for higher limits.",
                icon: Zap,
              },
              {
                title: "Sandbox Environment",
                description: "Test your integrations with our paper trading sandbox before going live.",
                icon: Shield,
              },
              {
                title: "Documentation",
                description: "Comprehensive docs with examples, guides, and API references.",
                icon: Book,
              },
            ].map((item, index) => (
              <AnimatedCard key={item.title} delay={index * 0.15}>
                <div className="glass rounded-2xl p-7 border border-border/40 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="rounded-xl">
              View Full Documentation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DevelopersPage;

