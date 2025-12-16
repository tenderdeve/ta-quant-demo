import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedBackgroundProps {
  variant?: "dots" | "grid" | "blobs" | "particles";
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
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]"
          style={{
            opacity: opacity * 1.5,
            filter: `blur(${blur}px)`,
          }}
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[128px]"
          style={{
            opacity: opacity * 1.2,
            filter: `blur(${blur}px)`,
          }}
        />
        <motion.div
          animate={{
            x: mousePosition.x * 50 - 25,
            y: mousePosition.y * 50 - 25,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"
          style={{
            opacity: opacity,
            filter: `blur(${blur}px)`,
          }}
        />
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

  return null;
}

