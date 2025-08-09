import { useEffect, useRef } from "react";
import gsap from "gsap";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

const AnimatedText = ({ text, className, delay = 0 }: AnimatedTextProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const chars = ref.current.querySelectorAll(".char");
    gsap.from(chars, {
      yPercent: 120,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.03,
      delay,
    });
  }, [text, delay]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split("").map((c, i) => (
        <span key={i} className="inline-block char will-change-transform">
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;


