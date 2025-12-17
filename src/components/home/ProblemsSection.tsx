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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Code,
    title: "Quant Barrier",
    description:
      "Building algorithmic trading systems requires deep technical expertise. Most traders can't access proven strategies.",
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: TrendingUp,
    title: "Vanity Marketing",
    description:
      "Marketing measured by impressions, not outcomes. No way to connect campaigns to actual trading volume.",
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
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
                className="glass rounded-2xl md:rounded-3xl p-0 border border-border/40 hover:border-primary/30 transition-all duration-300 h-full group overflow-hidden"
                whileHover={{ y: -4 }}
              >
                {/* Problem Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img 
                    src={problem.image} 
                    alt={problem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform glow-primary/50"
                    whileHover={{ rotate: 5 }}
                  >
                    <problem.icon className="w-6 h-6 text-black" />
                  </motion.div>
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="font-display font-bold text-xl md:text-2xl mb-4">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}

