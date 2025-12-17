import { motion } from "framer-motion";

interface FlowingColorsProps {
  colors?: string[];
  className?: string;
}

export default function FlowingColors({ 
  colors = ["#00ff88", "#4dde80", "#00ffd1"], // Green theme colors: vibrant green, secondary green, cyan/teal
  className = ""
}: FlowingColorsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-40"
        style={{
          background: `radial-gradient(circle, ${colors[0]} 0%, transparent 70%)`,
          top: "-20%",
          left: "-10%",
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[100px] opacity-35"
        style={{
          background: `radial-gradient(circle, ${colors[1]} 0%, transparent 70%)`,
          top: "30%",
          right: "-15%",
        }}
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -60, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[110px] opacity-30"
        style={{
          background: `radial-gradient(circle, ${colors[2]} 0%, transparent 70%)`,
          bottom: "-10%",
          left: "20%",
        }}
        animate={{
          x: [0, 80, -100, 0],
          y: [0, -120, 70, 0],
          scale: [1, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Flowing wave patterns */}
      <div className="absolute inset-0 opacity-20">
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors[0]} stopOpacity="0.6" />
              <stop offset="50%" stopColor={colors[1]} stopOpacity="0.4" />
              <stop offset="100%" stopColor={colors[2]} stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors[2]} stopOpacity="0.5" />
              <stop offset="50%" stopColor={colors[0]} stopOpacity="0.3" />
              <stop offset="100%" stopColor={colors[1]} stopOpacity="0.5" />
            </linearGradient>
          </defs>
          
          <motion.path
            d="M 0 400 Q 300 200 600 400 T 1200 400"
            stroke="url(#wave1)"
            strokeWidth="3"
            fill="none"
            animate={{
              d: [
                "M 0 400 Q 300 200 600 400 T 1200 400",
                "M 0 400 Q 350 250 650 450 T 1200 400",
                "M 0 400 Q 250 150 550 350 T 1200 400",
                "M 0 400 Q 300 200 600 400 T 1200 400",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ filter: "blur(2px)" }}
          />
          
          <motion.path
            d="M 0 500 Q 400 300 800 500 T 1200 500"
            stroke="url(#wave2)"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M 0 500 Q 400 300 800 500 T 1200 500",
                "M 0 500 Q 450 350 850 550 T 1200 500",
                "M 0 500 Q 350 250 750 450 T 1200 500",
                "M 0 500 Q 400 300 800 500 T 1200 500",
              ],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            style={{ filter: "blur(1.5px)" }}
          />
        </motion.svg>
      </div>

      {/* Flowing mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, ${colors[0]}40 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, ${colors[1]}40 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, ${colors[2]}30 0%, transparent 60%)
          `,
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
