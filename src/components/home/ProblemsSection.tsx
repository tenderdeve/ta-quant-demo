import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Code, TrendingUp } from "lucide-react";
import { AnimatedCard } from "../AnimatedCard";
import { AnimatedText } from "../AnimatedText";

const problems = [
  {
    icon: AlertCircle,
    title: "Fragmented Infrastructure",
    description:
      "Managing multiple exchange accounts, different APIs, and fragmented liquidity. No unified view of your portfolio.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Code,
    title: "Quant Barrier",
    description:
      "Building algorithmic trading systems requires deep technical expertise. Most traders can't access proven strategies.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Vanity Marketing",
    description:
      "Marketing measured by impressions, not outcomes. No way to connect campaigns to actual trading volume.",
    color: "from-blue-500 to-cyan-500",
  },
];

export function ProblemsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedText delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 leading-tight">
              The 3 problems we solve
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Professional crypto trading is broken. Here's how we're fixing it.
            </p>
          </div>
        </AnimatedText>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <AnimatedCard key={problem.title} delay={index * 0.15} tiltIntensity={8}>
              <motion.div
                className="glass rounded-2xl md:rounded-3xl p-8 md:p-10 border border-border/40 hover:border-primary/30 transition-all duration-300 h-full group"
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: 5 }}
                >
                  <problem.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </motion.div>
                <h3 className="font-display font-bold text-xl md:text-2xl mb-4">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}

