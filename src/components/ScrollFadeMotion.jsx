import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function ScrollFadeMotion({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={{
        visible: { opacity: 1, y: 0, scale: 1 },
        hidden: { opacity: 0, y: 100, scale: 0.9 },
      }}
    >
      {children}
    </motion.div>
  );
}
