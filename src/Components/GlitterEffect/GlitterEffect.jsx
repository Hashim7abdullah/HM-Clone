import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EnhancedStarfield = ({ title = "", subtitle = "", description = "" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const generateStars = (count) => {
    return Array(count)
      .fill(0)
      .map((_, index) => ({
        id: index,
        size: Math.random() * 0.4 + 0.1,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
        position: {
          x: Math.random() * 100,
          y: Math.random() * 100,
        },
      }));
  };

  return (
    <div className="relative h-[30vh] w-full bg-black overflow-hidden">
      {/* Background gradient for depth effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/30 to-black opacity-50" />

      {/* Text Container */}
      <motion.div
        className="absolute top-[15%] left-0 w-full z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {title && (
          <motion.h2
            className="text-[clamp(1.5rem,2vw,3rem)]  font-bold  tracking-wide mb-2 bg-gradient-to-r from-blue-300 via-sky-400 to-blue-300 text-transparent bg-clip-text"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% auto",
            }}
          >
            {title}
          </motion.h2>
        )}

        {subtitle && (
          <motion.h3
            className="text-[clamp(1rem,3vw,1.8rem)] text-sky-300 mb-2 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {subtitle}
          </motion.h3>
        )}

        {description && (
          <motion.p
            className="text-[clamp(0.875rem,2vw,1.2rem)] text-sky-100/80 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {description}
          </motion.p>
        )}
      </motion.div>

      {/* Main container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Central glowing line - Moved down */}
        <motion.div
          className="absolute w-full max-w-4xl h-[0.5px] bg-sky-400"
          style={{
            top: "70%", // Moved down from center
            boxShadow: "0 0 10px #00BFFF, 0 0 20px #00BFFF, 0 0 30px #00BFFF",
            background:
              "linear-gradient(90deg, transparent, #00BFFF, transparent)",
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            boxShadow: [
              "0 0 10px #00BFFF, 0 0 20px #00BFFF, 0 0 30px #00BFFF",
              "0 0 20px #00BFFF, 0 0 40px #00BFFF, 0 0 60px #00BFFF",
              "0 0 10px #00BFFF, 0 0 20px #00BFFF, 0 0 30px #00BFFF",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated particles */}
        {generateStars(100).map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.position.x}%`,
              top: `${star.position.y}%`,
              background:
                "radial-gradient(circle, #00BFFF 0%, transparent 70%)",
              boxShadow: "0 0 4px #00BFFF",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
              x: [0, (mousePosition.x - 0.5) * 20, 0],
              y: [0, (mousePosition.y - 0.5) * 20, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Shooting stars */}
        <AnimatePresence>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-[1px] h-[1px] bg-white"
                initial={{
                  opacity: 0,
                  x: -100,
                  y: Math.random() * 100,
                  scale: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  x: [null, windowSize.width + 100],
                  y: [null, Math.random() * windowSize.height],
                  scale: [1, 4, 1],
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 4,
                  ease: "easeInOut",
                }}
                style={{
                  boxShadow: "0 0 20px 2px rgba(255, 255, 255, 0.7)",
                  background: "linear-gradient(90deg, transparent, #ffffff)",
                }}
              />
            ))}
        </AnimatePresence>

        {/* Floating dust particles */}
        {generateStars(50).map((dust) => (
          <motion.div
            key={`dust-${dust.id}`}
            className="absolute rounded-full bg-white/10"
            style={{
              width: "1px",
              height: "1px",
              left: `${dust.position.x}%`,
              top: `${dust.position.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.3, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: dust.duration * 2,
              repeat: Infinity,
              delay: dust.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Atmospheric glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default EnhancedStarfield;
