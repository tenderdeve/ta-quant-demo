import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { User, Building2, TrendingUp, Users, ArrowRight } from "lucide-react";
import { AnimatedCard } from "../AnimatedCard";
import { AnimatedText } from "../AnimatedText";

const personas = [
  {
    icon: User,
    title: "Pro Traders",
    description: "Multi-exchange execution, advanced orders, unified portfolio management.",
    link: "/solutions/traders",
    color: "from-primary to-blue-400",
  },
  {
    icon: Building2,
    title: "Funds & Desks",
    description: "FIX protocol, APIs, governance, audit trails, enterprise security.",
    link: "/solutions/funds",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Exchanges & Projects",
    description: "Performance campaigns measured in trading outcomes, not impressions.",
    link: "/solutions/exchanges",
    color: "from-accent to-orange-400",
  },
  {
    icon: Users,
    title: "KOLs & Agencies",
    description: "Verified network, performance-based payouts, transparent attribution.",
    link: "/solutions/kol",
    color: "from-green-500 to-emerald-400",
  },
];

export function PersonasSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedText delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 leading-tight">
              Built for different needs
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you're trading solo or running a fund, we've got you covered.
            </p>
          </div>
        </AnimatedText>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {personas.map((persona, index) => (
            <AnimatedCard key={persona.title} delay={index * 0.1} tiltIntensity={8}>
              <Link to={persona.link}>
                <motion.div
                  className="glass rounded-2xl md:rounded-3xl p-7 md:p-9 border border-border/40 hover:border-primary/30 transition-all duration-300 h-full group cursor-pointer"
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  <motion.div
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${persona.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 5 }}
                  >
                    <persona.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </motion.div>
                  <h3 className="font-display font-bold text-xl md:text-2xl mb-3 group-hover:text-primary transition-colors">
                    {persona.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {persona.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}

