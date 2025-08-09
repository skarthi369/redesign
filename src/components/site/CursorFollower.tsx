import { useEffect, useRef } from "react";
import gsap from "gsap";

const MAX_SPARKS = 20;

const CursorFollower = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);
  const hueRef = useRef<number>(210); // start around brand-ish hue
  const lastSpawnRef = useRef<number>(0);

  useEffect(() => {
    if (!dotRef.current || !trailRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const pointerFine = window.matchMedia("(pointer: fine)").matches;
    if (prefersReduced || isTouch || !pointerFine) {
      dotRef.current.style.display = "none";
      trailRef.current.style.display = "none";
      return;
    }

    const qx = gsap.quickTo(dotRef.current, "x", { duration: 0.22, ease: "power3.out" });
    const qy = gsap.quickTo(dotRef.current, "y", { duration: 0.22, ease: "power3.out" });

    const spawnSpark = (x: number, y: number) => {
      const container = trailRef.current!;
      // Limit number of children for performance
      if (container.childElementCount > MAX_SPARKS) {
        container.firstElementChild?.remove();
      }
      const hue = (hueRef.current += 3) % 360;
      const size = Math.random() * 6 + 6; // 6-12px
      const spark = document.createElement("div");
      spark.className = "pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full";
      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;
      spark.style.filter = "blur(2px)";
      spark.style.background = `radial-gradient(circle, hsla(${hue}, 95%, 60%, 0.55), hsla(${hue}, 95%, 60%, 0.0) 70%)`;
      container.appendChild(spark);
      gsap.set(spark, { x, y, opacity: 0.9 });
      const dx = (Math.random() - 0.5) * 30;
      const dy = (Math.random() - 0.5) * 30;
      gsap.to(spark, {
        x: x + dx,
        y: y + dy,
        opacity: 0,
        duration: 0.6,
        ease: "sine.out",
        onComplete: () => spark.remove(),
      });
    };

    const onMove = (e: MouseEvent) => {
      qx(e.clientX);
      qy(e.clientY);
      const now = performance.now();
      if (now - lastSpawnRef.current > 24) {
        lastSpawnRef.current = now;
        spawnSpark(e.clientX, e.clientY);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        ref={trailRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[55]"
        style={{ mixBlendMode: "screen" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] -translate-x-1/2 -translate-y-1/2"
        style={{ mixBlendMode: "screen" }}
      >
        <div className="h-6 w-6 rounded-full bg-primary/20 blur-md ring-1 ring-primary/40" />
      </div>
    </>
  );
};

export default CursorFollower;


