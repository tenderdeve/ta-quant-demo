import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "./AnimatedBackground";
import { StaggerText } from "./AnimatedText";

const stats = [
  { value: "50+", label: "Exchanges" },
  { value: "<100ms", label: "Latency" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedBackground variant="blobs" intensity="medium" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.015]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Product Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {[
              { label: "Execution", color: "from-primary to-blue-400" },
              { label: "Intelligence", color: "from-purple-500 to-pink-500" },
              { label: "Attribution", color: "from-accent to-orange-400" },
            ].map((pill, index) => (
              <motion.div
                key={pill.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-full glass border border-border/40 bg-gradient-to-r ${pill.color} bg-opacity-10`}
              >
                <span className="text-sm font-medium text-foreground">{pill.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Headline - staggered text */}
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
            <StaggerText
              text="The Operating System for"
              className="block mb-2"
              delay={0.2}
            />
            <StaggerText
              text="Professional Crypto Trading"
              className="block gradient-text"
              delay={0.6}
            />
          </h1>

          {/* Subtitle - more conversational */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We've unified execution, quantitative intelligence, and performance-driven marketing into one platform. 
            Everything you need, nothing you don't.
          </motion.p>

          {/* CTAs - varied spacing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-20"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-10 py-7 rounded-xl"
              >
                Get Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-border/50 hover:bg-secondary/50 text-lg px-10 py-7 rounded-xl backdrop-blur-sm"
              >
                Start Free
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats - more organic layout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.8 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 rounded-xl hover:bg-card/30 transition-colors"
              >
                <motion.div
                  className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 2 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust Badges - less corporate */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="mt-24 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-muted-foreground"
        >
          <motion.div
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-card/30 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm">SOC 2 Compliant</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-card/30 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm">Enterprise Ready</span>
          </motion.div>
          <span className="text-sm px-4 py-2">Trusted by traders worldwide</span>
        </motion.div>
      </div>
    </section>
  );
}
