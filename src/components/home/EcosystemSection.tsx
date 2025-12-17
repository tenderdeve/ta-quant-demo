import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Database, Brain, Megaphone, TrendingUp } from "lucide-react";
import { AnimatedText } from "../AnimatedText";
import { AnimatedBackground } from "../AnimatedBackground";

export function EcosystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <AnimatedBackground variant="blobs" intensity="low" />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedText delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 leading-tight">
              How the ecosystem compounds
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Each product makes the others better. The more you use, the more value you get.
            </p>
          </div>
        </AnimatedText>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 md:gap-8 items-center">
            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl p-6 border border-border/40 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 glow-primary/30">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Terminal</h3>
              <p className="text-xs text-muted-foreground">Execution data</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="hidden md:flex justify-center"
            >
              <ArrowRight className="w-8 h-8 text-primary" />
            </motion.div>

            {/* Quant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass rounded-2xl p-6 border border-border/40 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 glow-primary/30">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">TA Quant</h3>
              <p className="text-xs text-muted-foreground">Better strategies</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="hidden md:flex justify-center"
            >
              <ArrowRight className="w-8 h-8 text-primary" />
            </motion.div>

            {/* Syndicate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass rounded-2xl p-6 border border-border/40 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 glow-primary/30">
                <Megaphone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Syndicate</h3>
              <p className="text-xs text-muted-foreground">More volume</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl border border-primary/30">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm text-foreground/70">
                Better execution → Better strategies → More volume → Better execution
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

