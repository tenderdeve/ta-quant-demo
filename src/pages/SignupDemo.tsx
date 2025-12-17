import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  Rocket,
  TrendingUp,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedText, StaggerText } from "@/components/AnimatedText";

const demoFeatures = [
  {
    icon: Zap,
    title: "Real-time Execution",
    description: "Experience our terminal with live market data",
  },
  {
    icon: TrendingUp,
    title: "Advanced Strategies",
    description: "Test our quant strategies with paper trading",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "See how we protect your capital",
  },
];

const SignupDemoPage = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const featuresRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Demo signup submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", phone: "" });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
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
            <AnimatedText delay={0.2}>
              <div className="inline-flex items-center gap-3 mb-8">
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Rocket className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>
                <span className="text-primary font-mono text-xs tracking-wider uppercase">
                  Request Demo
                </span>
              </div>
            </AnimatedText>
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-8 leading-tight">
              <StaggerText text="See TA Quant" className="block mb-2" delay={0.4} />
              <StaggerText text="in action" className="block gradient-text" delay={0.7} />
            </h1>
            <AnimatedText delay={1.0} variant="slide">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Get a personalized demo of our trading platform. See how professional traders 
                use our tools to execute strategies and manage risk.
              </p>
            </AnimatedText>
          </motion.div>
        </div>
      </section>

      {/* Demo Features */}
      <section ref={featuresRef} className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="grid" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                What you'll see in the demo
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Get hands-on experience with our platform's key features
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {demoFeatures.map((feature, index) => (
              <AnimatedCard key={feature.title} delay={index * 0.15} tiltIntensity={8}>
                <div className="glass rounded-2xl p-8 border border-border/40 hover:border-primary/30 transition-all h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section ref={formRef} className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="dots" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedCard delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto glass rounded-3xl p-8 md:p-12 border border-border/40"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="font-display font-bold text-2xl mb-3">Demo Request Received!</h3>
                  <p className="text-muted-foreground">
                    We'll be in touch within 24 hours to schedule your personalized demo.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="font-display font-bold text-3xl mb-3">
                      Request your demo
                    </h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll schedule a personalized demo for you.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="rounded-xl border-border/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="rounded-xl border-border/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company / Trading Firm</Label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="rounded-xl border-border/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="rounded-xl border-border/50"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary rounded-xl py-6 text-lg"
                    >
                      Request Demo
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </AnimatedCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="blobs" intensity="medium" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedCard delay={0.2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl mx-auto text-center glass rounded-3xl p-10 md:p-16 border border-border/40 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-50" />
              <div className="relative z-10">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-5 leading-tight">
                  Ready to transform your trading?
                </h2>
                <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                  Join professional traders who trust TA Quant for their execution and strategy needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-10 py-7 rounded-xl"
                      onClick={() => {
                        const form = document.querySelector('form');
                        if (form) {
                          form.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <Rocket className="mr-2 w-5 h-5" />
                      Request Demo
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatedCard>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SignupDemoPage;
