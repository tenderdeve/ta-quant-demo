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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Building2,
    title: "Funds & Desks",
    description: "FIX protocol, APIs, governance, audit trails, enterprise security.",
    link: "/solutions/funds",
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: TrendingUp,
    title: "Exchanges & Projects",
    description: "Performance campaigns measured in trading outcomes, not impressions.",
    link: "/solutions/exchanges",
    color: "from-accent to-orange-400",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&q=80",
  },
  {
    icon: Users,
    title: "KOLs & Agencies",
    description: "Verified network, performance-based payouts, transparent attribution.",
    link: "/solutions/kol",
    color: "from-green-500 to-emerald-400",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
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
                  className="glass rounded-2xl md:rounded-3xl p-0 border border-border/40 hover:border-primary/30 transition-all duration-300 h-full group cursor-pointer overflow-hidden"
                  whileHover={{ y: -4, scale: 1.01 }}
                >
                  {/* Persona Image */}
                  <div className="relative w-full h-40 overflow-hidden">
                    <img 
                      src={persona.image} 
                      alt={persona.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                    <motion.div
                      className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${persona.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 5 }}
                    >
                      <persona.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                  <div className="p-7 md:p-9">
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

