import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedBackground } from "./AnimatedBackground";
import { AnimatedCard } from "./AnimatedCard";

const faqs = [
  {
    question: "What is TA Quant?",
    answer:
      "TA Quant is an integrated platform combining execution, intelligence, and amplification for professional crypto trading. We provide three interconnected products: Terminal for multi-exchange execution, TA Quant for systematic trading intelligence, and TA Syndicate for performance-driven marketing attribution.",
  },
  {
    question: "How does Terminal differ from regular exchange platforms?",
    answer:
      "Terminal provides institutional-grade trading infrastructure with 50+ exchange integrations, smart order routing to minimize slippage, advanced order types (TWAP, VWAP, iceberg orders), unified portfolio management across all exchanges, and sub-100ms data latency with sub-500ms order execution. Unlike single-exchange platforms, Terminal gives you access to liquidity across the entire crypto market from one interface.",
  },
  {
    question: "Do I need programming skills to use TA Quant strategies?",
    answer:
      "No. TA Quant democratizes algorithmic trading by providing verified quantitative strategies that you can deploy without coding. Our no-code automation framework allows you to customize risk parameters, execution preferences, and market selection through an intuitive interface. However, we also provide APIs and SDKs for developers who want to build custom strategies.",
  },
  {
    question: "How does TA Syndicate measure marketing effectiveness?",
    answer:
      "TA Syndicate transforms crypto marketing from impression-based metrics to measurable trading volume attribution. We use multi-touch attribution tracking combining UTM parameters, exchange API integration, and on-chain monitoring to connect marketing touchpoints to actual trading activity. Campaigns are measured by attributed trading volume and ROI, not just followers or impressions.",
  },
  {
    question: "What exchanges does Terminal support?",
    answer:
      "Terminal integrates with 50+ exchanges including Tier 1 exchanges (Binance, Coinbase, Kraken, OKX, Bybit), Tier 2 exchanges, regional exchanges, and derivatives-focused platforms. We continuously expand our exchange coverage based on user demand and market developments.",
  },
  {
    question: "Are the trading strategies verified and tested?",
    answer:
      "Yes. Every strategy undergoes rigorous validation including development, backtesting (minimum 3 years of historical data), paper trading, limited live deployment, and full marketplace launch only after demonstrated success. We provide transparent backtesting results, performance attribution, and complete audit trails for all strategies.",
  },
  {
    question: "What security measures are in place?",
    answer:
      "TA Quant implements enterprise-grade security including multi-factor authentication, AES-256 encryption for data at rest, TLS 1.3 for all communications, role-based access controls, IP whitelisting, and comprehensive audit logging. We're targeting SOC 2 Type II certification and maintain GDPR compliance with KYC/AML readiness.",
  },
  {
    question: "How does smart order routing work?",
    answer:
      "Our smart order routing algorithms analyze liquidity across exchanges in real-time, calculating optimal order splits based on available depth, fees, slippage prediction, and exchange latency. Orders are intelligently routed to minimize total execution cost while ensuring fast fills. Machine learning models continuously improve routing decisions based on historical performance.",
  },
  {
    question: "Can I use Terminal, Quant, and Syndicate separately?",
    answer:
      "Yes, each product creates value independently. However, they're designed to work together, creating powerful network effects. Terminal users generate execution data that improves Quant strategies, Quant strategies drive trading volume that strengthens Terminal's exchange relationships, and Syndicate campaigns bring new users to both Terminal and Quant. The integrated ecosystem provides unified analytics and seamless workflows.",
  },
  {
    question: "What pricing models do you offer?",
    answer:
      "Our pricing aligns with user success. Terminal pricing scales with trading activity, TA Quant charges performance fees on profits, and TA Syndicate earns based on attributed results. We offer free tiers for Terminal and Quant, with enterprise plans available for high-volume users. Contact sales for custom pricing based on your needs.",
  },
  {
    question: "Do you support derivatives trading?",
    answer:
      "Yes, Terminal supports derivatives trading including perpetual futures, options, and other derivative products across multiple exchanges. Our risk management system includes portfolio Greeks (delta, gamma, vega, theta) for derivatives positions, margin utilization tracking, and advanced risk analytics.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is simple. Sign up for a free account to access Terminal's basic features. You can connect your exchange accounts via API keys (read-only initially for security), explore the TA Quant strategy marketplace, or contact our team to discuss Syndicate campaigns. No credit card required for the free tier.",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <AnimatedBackground variant="dots" intensity="low" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-primary font-mono text-xs tracking-wider uppercase mb-6 block"
          >
            Questions?
          </motion.span>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 leading-tight">
            Common questions, honest answers
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We've tried to answer everything, but if something's missing, just ask.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedCard key={index} delay={index * 0.05}>
                <AccordionItem
                  value={`item-${index}`}
                  className="glass rounded-xl md:rounded-2xl px-6 md:px-8 border border-border/40 hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-base md:text-lg hover:no-underline py-6 md:py-7">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 md:pb-7 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedCard>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

