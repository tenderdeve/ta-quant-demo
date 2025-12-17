import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedBackgroundProps {
  variant?: "dots" | "grid" | "blobs" | "particles" | "circuit" | "waves" | "network" | "quantum";
  intensity?: "low" | "medium" | "high";
}

export function AnimatedBackground({ variant = "blobs", intensity = "medium" }: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const intensityMap = {
    low: { opacity: 0.03, blur: 100 },
    medium: { opacity: 0.05, blur: 80 },
    high: { opacity: 0.08, blur: 60 },
  };

  const { opacity, blur } = intensityMap[intensity];

  if (variant === "blobs") {
    return (
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large teal-blue arc from top-right */}
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 -right-32 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[150px]"
          style={{
            opacity: 0.4,
            filter: `blur(${blur + 20}px)`,
          }}
        />
        {/* Green-yellow gradient arc from left */}
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 120, 0],
            scale: [1, 1.2, 1],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[140px]"
          style={{
            opacity: 0.35,
            filter: `blur(${blur + 15}px)`,
          }}
        />
        {/* Additional green glow */}
        <motion.div
          animate={{
            x: mousePosition.x * 80 - 40,
            y: mousePosition.y * 80 - 40,
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"
          style={{
            opacity: 0.3,
            filter: `blur(${blur + 10}px)`,
          }}
        />
        {/* Curved green line effect */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.15 }}
        >
          <motion.path
            d="M 0 200 Q 400 100 800 200 T 1600 200"
            stroke="hsl(142, 76%, 50%)"
            strokeWidth="2"
            fill="none"
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter: "blur(2px)",
            }}
          />
        </motion.svg>
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.02]" />
        <motion.div
          animate={{
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"
        />
        <motion.div
          animate={{
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent"
        />
      </div>
    );
  }

  if (variant === "circuit") {
    return (
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Circuit board pattern */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.15 }}
        >
          {/* Horizontal lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={`${20 + i * 20}%`}
              x2="100%"
              y2={`${20 + i * 20}%`}
              stroke="hsl(142, 76%, 50%)"
              strokeWidth="1"
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
              style={{ filter: "blur(1px)" }}
            />
          ))}
          {/* Vertical lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.line
              key={`v-${i}`}
              x1={`${15 + i * 20}%`}
              y1="0"
              x2={`${15 + i * 20}%`}
              y2="100%"
              stroke="hsl(180, 100%, 50%)"
              strokeWidth="1"
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.7,
                ease: "easeInOut",
              }}
              style={{ filter: "blur(1px)" }}
            />
          ))}
        </motion.svg>
        {/* Glowing nodes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              left: `${15 + (i % 5) * 20}%`,
              top: `${20 + Math.floor(i / 5) * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "waves") {
    return (
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated wave patterns */}
        {[0, 1, 2].map((wave) => (
          <motion.svg
            key={wave}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.2 - wave * 0.05 }}
          >
            <motion.path
              d={`M 0 ${50 + wave * 10} Q ${200 + wave * 100} ${30 + wave * 10} ${400 + wave * 200} ${50 + wave * 10} T ${1200 + wave * 400} ${50 + wave * 10}`}
              stroke={wave === 0 ? "hsl(142, 76%, 50%)" : wave === 1 ? "hsl(180, 100%, 50%)" : "hsl(142, 76%, 50%)"}
              strokeWidth="2"
              fill="none"
              animate={{
                d: [
                  `M 0 ${50 + wave * 10} Q ${200 + wave * 100} ${30 + wave * 10} ${400 + wave * 200} ${50 + wave * 10} T ${1200 + wave * 400} ${50 + wave * 10}`,
                  `M 0 ${50 + wave * 10} Q ${250 + wave * 100} ${50 + wave * 10} ${450 + wave * 200} ${70 + wave * 10} T ${1250 + wave * 400} ${50 + wave * 10}`,
                  `M 0 ${50 + wave * 10} Q ${200 + wave * 100} ${30 + wave * 10} ${400 + wave * 200} ${50 + wave * 10} T ${1200 + wave * 400} ${50 + wave * 10}`,
                ],
              }}
              transition={{
                duration: 8 + wave * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ filter: "blur(2px)" }}
            />
          </motion.svg>
        ))}
        {/* Floating orbs */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={`absolute w-32 h-32 rounded-full blur-[60px] ${
              i === 0 ? "bg-primary/30" : i === 1 ? "bg-accent/30" : "bg-primary/20"
            }`}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 50, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "network") {
    return (
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Network nodes */}
        {Array.from({ length: 15 }).map((_, i) => {
          const angle = (i / 15) * Math.PI * 2;
          const radius = 200 + (i % 3) * 100;
          const x = 50 + Math.cos(angle) * (radius / 10);
          const y = 50 + Math.sin(angle) * (radius / 10);
          
          return (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-primary rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          );
        })}
        {/* Connecting lines */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.1 }}
        >
          {Array.from({ length: 8 }).map((_, i) => {
            const angle1 = (i / 8) * Math.PI * 2;
            const angle2 = ((i + 1) / 8) * Math.PI * 2;
            const x1 = 50 + Math.cos(angle1) * 20;
            const y1 = 50 + Math.sin(angle1) * 20;
            const x2 = 50 + Math.cos(angle2) * 20;
            const y2 = 50 + Math.sin(angle2) * 20;
            
            return (
              <motion.line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="hsl(142, 76%, 50%)"
                strokeWidth="1"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
                style={{ filter: "blur(1px)" }}
              />
            );
          })}
        </motion.svg>
        {/* Central glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    );
  }

  if (variant === "quantum") {
    return (
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Quantum particle effects */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
        {/* Energy waves */}
        {[0, 1, 2].map((wave) => (
          <motion.div
            key={wave}
            className="absolute inset-0"
            style={{ opacity: 0.1 }}
          >
            <motion.div
              className={`absolute top-1/2 left-1/2 w-[${400 + wave * 200}px] h-[${400 + wave * 200}px] border border-primary rounded-full -translate-x-1/2 -translate-y-1/2`}
              animate={{
                scale: [0.5, 2, 0.5],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 4 + wave,
                repeat: Infinity,
                delay: wave * 1.5,
                ease: "easeOut",
              }}
              style={{
                width: `${400 + wave * 200}px`,
                height: `${400 + wave * 200}px`,
              }}
            />
          </motion.div>
        ))}
        {/* Glowing orbs */}
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className={`absolute w-64 h-64 rounded-full blur-[80px] ${
              i === 0 ? "bg-primary/20" : "bg-accent/20"
            }`}
            animate={{
              x: [0, 150, -100, 0],
              y: [0, -100, 120, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${30 + i * 40}%`,
              top: `${40 + i * 20}%`,
            }}
          />
        ))}
      </div>
    );
  }

  return null;
}

