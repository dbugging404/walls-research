import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Animate = ({ children }: { children: React.ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const animation = {
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(20px)',
    transition: 'all 0.5s ease-in-out',
  };
  return (
    <div>
      <div ref={ref} style={animation}>
        {children}
      </div>
    </div>
  );
};

export default Animate;
