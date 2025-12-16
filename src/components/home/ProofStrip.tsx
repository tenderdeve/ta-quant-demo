import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Globe, CheckCircle2, TrendingUp } from "lucide-react";
import { FloatingCard } from "../AnimatedCard";
import { AnimatedBackground } from "../AnimatedBackground";

const proofs = [
  { icon: Zap, value: "<100ms", label: "Data Latency", color: "from-blue-500 to-cyan-400" },
  { icon: Shield, value: "99.9%", label: "Uptime Target", color: "from-green-500 to-emerald-400" },
  { icon: Globe, value: "50+", label: "Exchanges", color: "from-purple-500 to-pink-500" },
  { icon: CheckCircle2, value: "100+", label: "Verified Strategies", color: "from-accent to-orange-400" },
  { icon: TrendingUp, value: "$1B+", label: "Attributed Volume", color: "from-primary to-blue-400" },
];

export function ProofStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <AnimatedBackground variant="grid" intensity="low" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-4">
            Numbers that matter
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
          {proofs.map((proof, index) => (
            <FloatingCard key={proof.label} delay={index * 0.1} floatIntensity={5}>
              <motion.div
                className="glass rounded-xl md:rounded-2xl p-6 border border-border/40 hover:border-primary/30 transition-all text-center group"
                whileHover={{ scale: 1.05, y: -4 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${proof.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: 5 }}
                >
                  <proof.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </motion.div>
                <div className="font-display font-bold text-2xl md:text-3xl gradient-text mb-1">
                  {proof.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">{proof.label}</div>
              </motion.div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}

