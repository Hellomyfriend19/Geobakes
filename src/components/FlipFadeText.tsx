import React, { useMemo, memo } from "react";
import { motion } from "motion/react";

interface FlipFadeTextProps {
  text: string;
  className?: string;
  textClassName?: string;
  letterDuration?: number;
  staggerDelay?: number;
}

// Memoized Letter component for performance
const Letter = memo(function Letter({
  char,
  letterDuration,
}: {
  char: string;
  letterDuration: number;
}) {
  return (
    <motion.span
      style={{ transformStyle: "preserve-3d" }}
      variants={{
        initial: {
          rotateX: 90,
          y: 20,
          opacity: 0,
          filter: "blur(8px)",
        },
        animate: {
          rotateX: 0,
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          transition: {
            duration: letterDuration,
            ease: [0.2, 0.65, 0.3, 0.9],
          },
        },
      }}
      className="inline-block"
    >
      {char}
    </motion.span>
  );
});

export const FlipFadeText = memo(function FlipFadeText({
  text,
  className = "",
  textClassName = "",
  letterDuration = 0.6,
  staggerDelay = 0.05,
}: FlipFadeTextProps) {
  // Split text by space to prevent words from wrapping awkwardly in the middle of a word
  const words = useMemo(() => text.split(" "), [text]);

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative" style={{ perspective: "1000px" }}>
        <motion.div
          className={`flex flex-wrap ${textClassName}`}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            initial: { opacity: 1 },
            animate: {
              opacity: 1,
              transition: {
                staggerChildren: staggerDelay,
              },
            },
          }}
        >
          {words.map((word, wordIdx) => (
            <span key={`${word}-${wordIdx}`} className="inline-block whitespace-nowrap">
              {word.split("").map((char, charIdx) => (
                <Letter
                  key={`${char}-${charIdx}`}
                  char={char}
                  letterDuration={letterDuration}
                />
              ))}
              {/* Add non-breaking space after each word except the last one */}
              {wordIdx < words.length - 1 && (
                <span className="inline-block">&nbsp;</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
});

export default FlipFadeText;
