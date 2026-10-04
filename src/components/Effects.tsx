'use client';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="progress" style={{ scaleX: scrollYProgress }} />;
}

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.2 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const enter = (e: Event) => { if ((e.target as HTMLElement)?.closest('a,button')) setActive(true); };
    const leave = (e: Event) => { if ((e.target as HTMLElement)?.closest('a,button')) setActive(false); };
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', enter);
    document.addEventListener('mouseout', leave);
    document.documentElement.classList.add('has-cursor');
    return () => { window.removeEventListener('mousemove', move); document.removeEventListener('mouseover', enter); document.removeEventListener('mouseout', leave); document.documentElement.classList.remove('has-cursor'); };
  }, [x, y]);

  return <motion.div className={`cursor ${active ? 'cursor-active' : ''}`} style={{ x: springX, y: springY }} />;
}
