import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  TrendingUp,
  Building2,
  Wallet,
  Coins,
  Users,
  Shield,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedText, StaggerText } from "@/components/AnimatedText";

const accessTiers = [
  {
    name: "Community",
    description: "Free tier for everyone. Connect your wallet to get started.",
    icon: Zap,
    color: "from-primary to-blue-400",
    tokenStake: "0 TAQ",
    requirements: "Connect wallet",
    features: [
      "Terminal: Basic execution features",
      "3 verified strategies",
      "Community support",
      "Basic portfolio tracking",
      "Standard protocol fees (0.1%)",
    ],
    cta: "Connect Wallet",
    popular: false,
  },
  {
    name: "Staker",
    description: "Stake tokens for enhanced access and fee reductions",
    icon: Coins,
    color: "from-purple-500 to-pink-500",
    tokenStake: "1,000+ TAQ",
    requirements: "Stake 1,000+ TAQ tokens",
    features: [
      "50% protocol fee reduction",
      "Full strategy library access",
      "Priority support",
      "Governance voting rights",
      "Protocol revenue share",
      "Early access to new features",
      "Advanced risk management",
    ],
    cta: "Stake Tokens",
    popular: true,
  },
  {
    name: "Whale",
    description: "Maximum benefits for large stakers and institutions",
    icon: Building2,
    color: "from-accent to-orange-400",
    tokenStake: "10,000+ TAQ",
    requirements: "Stake 10,000+ TAQ tokens",
    features: [
      "75% protocol fee reduction",
      "Early access to new strategies",
      "Dedicated support channels",
      "Enhanced governance voting weight",
      "Higher revenue share percentage",
      "NFT membership pass (exclusive)",
      "Custom integrations",
      "White-label options",
    ],
    cta: "Stake Tokens",
    popular: false,
  },
];

const pricingModels = [
  {
    product: "Terminal",
    model: "Protocol Fees",
    description: "Small fee per trade (0.05-0.1%). Staking TAQ tokens reduces fees up to 75%",
    icon: Zap,
    color: "from-primary to-blue-400",
    web3Features: [
      "Stake TAQ tokens for fee discounts",
      "Earn protocol revenue share",
      "Governance voting rights",
      "Fee reduction scales with stake amount",
    ],
  },
  {
    product: "TA Quant",
    model: "Performance Share",
    description: "10-20% of profits. No profits, no fees. Stakers get priority access to new strategies",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
    web3Features: [
      "Strategy performance fees",
      "Early access to new strategies",
      "Strategy governance participation",
      "Token rewards for top performers",
    ],
  },
  {
    product: "TA Syndicate",
    model: "Attribution Fees",
    description: "Pay based on attributed volume. KOLs earn in tokens + stablecoins",
    icon: Users,
    color: "from-accent to-orange-400",
    web3Features: [
      "Token-based payouts",
      "Verification NFTs for KOLs",
      "Revenue sharing for top performers",
      "DAO governance participation",
    ],
  },
];

const web3Benefits = [
  {
    icon: Coins,
    title: "Token Staking",
    description: "Stake TAQ tokens to unlock features and reduce fees. The more you stake, the more you save.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Sharing",
    description: "Earn a share of protocol revenue proportional to your stake. Real yield, not promises.",
  },
  {
    icon: Users,
    title: "Governance Rights",
    description: "Vote on platform decisions, strategy additions, and protocol upgrades. Your stake, your voice.",
  },
  {
    icon: Sparkles,
    title: "NFT Membership",
    description: "Exclusive NFT passes for top stakers unlock premium features and early access.",
  },
];

const PricingPage = () => {
  const heroRef = useRef(null);
  const modelsRef = useRef(null);
  const tiersRef = useRef(null);
  const benefitsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const modelsInView = useInView(modelsRef, { once: true, margin: "-100px" });
  const tiersInView = useInView(tiersRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

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
              <StaggerText text="Web3-native pricing" className="block mb-2" delay={0.2} />
              <StaggerText text="that rewards participation" className="block gradient-text" delay={0.5} />
            </h1>
            <AnimatedText delay={0.8} variant="slide">
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Stake tokens, reduce fees, earn yield. The more you participate, the more you benefit. 
                No subscriptions, no lock-ins—just aligned incentives.
              </p>
            </AnimatedText>
          </motion.div>
        </div>
      </section>

      {/* Pricing Models */}
      <section ref={modelsRef} className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="grid" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                How pricing works
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Each product uses a web3-native model that aligns incentives with success.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingModels.map((model, index) => (
              <AnimatedCard key={model.product} delay={index * 0.15} tiltIntensity={8}>
                <div className="glass rounded-2xl md:rounded-3xl p-8 border border-border/40 hover:border-primary/30 transition-all h-full">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${model.color} flex items-center justify-center mb-6`}>
                    <model.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">{model.product}</h3>
                  <div className="text-primary font-semibold mb-3 text-lg">{model.model}</div>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{model.description}</p>
                  
                  <div className="space-y-2">
                    {model.web3Features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Access Tiers */}
      <section ref={tiersRef} className="py-20 bg-card/20 relative overflow-hidden">
        <AnimatedBackground variant="dots" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Access tiers
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Stake TAQ tokens to unlock features and reduce fees. No monthly subscriptions.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {accessTiers.map((tier, index) => (
              <AnimatedCard
                key={tier.name}
                delay={index * 0.15}
                tiltIntensity={tier.popular ? 10 : 8}
                className="h-full"
              >
                <motion.div
                  className={`glass rounded-3xl p-8 md:p-10 border transition-all duration-300 h-full relative ${
                    tier.popular
                      ? "border-primary/50 shadow-lg shadow-primary/10 scale-105"
                      : "border-border/40"
                  }`}
                  whileHover={{ y: -4 }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Most Popular
                    </div>
                  )}

                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-6`}>
                    <tier.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{tier.description}</p>

                  <div className="mb-6 p-4 rounded-xl bg-secondary/30 border border-border/40">
                    <div className="text-xs text-muted-foreground mb-1">Stake Required</div>
                    <div className="font-display font-bold text-2xl md:text-3xl gradient-text">
                      {tier.tokenStake}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{tier.requirements}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      tier.popular
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
                        : "border-border/50 hover:bg-secondary/50"
                    } rounded-xl`}
                    variant={tier.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {tier.name === "Community" ? (
                      <>
                        <Wallet className="mr-2 w-4 h-4" />
                        {tier.cta}
                      </>
                    ) : (
                      <>
                        <Coins className="mr-2 w-4 h-4" />
                        {tier.cta}
                      </>
                    )}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Web3 Benefits */}
      <section ref={benefitsRef} className="py-20 relative overflow-hidden">
        <AnimatedBackground variant="blobs" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Why web3-native pricing?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Traditional subscriptions don't align incentives. Token staking does.
              </p>
            </div>
          </AnimatedText>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {web3Benefits.map((benefit, index) => (
              <AnimatedCard key={benefit.title} delay={index * 0.1} tiltIntensity={8}>
                <div className="glass rounded-2xl p-7 border border-border/40 hover:border-primary/30 transition-all h-full text-center group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure Details */}
      <section className="py-20 bg-card/20 relative overflow-hidden">
        <AnimatedBackground variant="grid" intensity="low" />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedText delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                  Protocol fee structure
                </h2>
                <p className="text-muted-foreground">
                  Transparent, predictable fees that decrease as you stake more.
                </p>
              </div>

              <AnimatedCard delay={0.4}>
                <div className="glass rounded-3xl p-8 md:p-12 border border-border/40">
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-xl bg-secondary/30 border border-border/40">
                        <div className="text-sm text-muted-foreground mb-2">Base Protocol Fee</div>
                        <div className="font-display font-bold text-3xl gradient-text mb-2">0.1%</div>
                        <div className="text-xs text-muted-foreground">Per trade (no staking)</div>
                      </div>
                      <div className="p-6 rounded-xl bg-secondary/30 border border-border/40">
                        <div className="text-sm text-muted-foreground mb-2">Maximum Discount</div>
                        <div className="font-display font-bold text-3xl gradient-text mb-2">75%</div>
                        <div className="text-xs text-muted-foreground">With 10,000+ TAQ staked</div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-border/40">
                      <h4 className="font-semibold mb-4">Fee Reduction Tiers</h4>
                      <div className="space-y-3">
                        {[
                          { stake: "0 TAQ", discount: "0%", fee: "0.1%" },
                          { stake: "1,000 TAQ", discount: "50%", fee: "0.05%" },
                          { stake: "10,000 TAQ", discount: "75%", fee: "0.025%" },
                        ].map((tier, index) => (
                          <motion.div
                            key={tier.stake}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-between p-4 rounded-lg bg-card/30 border border-border/20"
                          >
                            <div>
                              <div className="font-medium">{tier.stake}</div>
                              <div className="text-xs text-muted-foreground">{tier.discount} discount</div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-primary">{tier.fee}</div>
                              <div className="text-xs text-muted-foreground">per trade</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* CTA */}
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
                  Ready to stake and save?
                </h2>
                <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                  Connect your wallet to get started, or stake tokens to unlock premium features 
                  and reduce fees.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary text-lg px-10 py-7 rounded-xl"
                    >
                      <Wallet className="mr-2 w-5 h-5" />
                      Connect Wallet
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-border/50 hover:bg-secondary/50 text-lg px-10 py-7 rounded-xl backdrop-blur-sm"
                    >
                      Learn About Staking
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

export default PricingPage;
