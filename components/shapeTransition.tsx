import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ShapeComponent() {
  const { scrollY } = useScroll();

  // Loop the scroll value to create an infinite scroll effect
  const loopedScrollY = useTransform(scrollY, [0, 150], [0, 1], {
    clamp: false,
  });

  // Transformations based on looped scroll
  const scale = useTransform(loopedScrollY, [0, 1], [1, 1.2]); 
  const background = useTransform(loopedScrollY, [0, 1], ['#fef08a', '#f59e0b']); 
  const borderRadius = useTransform(loopedScrollY, [0, 1], ['50%', '0%']); 
  const width = useTransform(loopedScrollY, [0, 1], ['8rem', '20rem']); 
  const height = useTransform(loopedScrollY, [0, 1], ['8rem', '6rem']); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 360) {
        window.scrollTo(0, 0); // Reset scroll position to 0 when reaching 300px
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-blue-950 h-screen w-screen flex items-center justify-center">
      {/* Centered Shape with Infinite Scroll and Circle-to-Rectangle Transformation */}
      <motion.div
        style={{
          scale: scale,
          backgroundColor: background,
          borderRadius: borderRadius,
          width: width,
          height: height,
        }}
        className="flex items-center justify-center text-blue-950 text-lg font-semibold shadow-md"
      >
        {/* Text inside the shape */}

      </motion.div>
    </div>
  );
}



