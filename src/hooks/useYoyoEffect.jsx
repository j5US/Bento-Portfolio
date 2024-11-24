import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function useYoyoEffect() {
  const elementRef = useRef({});

  const { contextSafe } = useGSAP({ scope: elementRef });

  const handleMouseEnter = contextSafe((index) => {
    const el = elementRef.current[index];
    if (!el) return;
    gsap.to(el, {
      xPercent: 15,
      yPercent: -15,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
    });
  });

  const handleMouseLeave = contextSafe((index) => {
    const el = elementRef.current[index];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.to(el, {
      xPercent: 0,
      yPercent: 0,
    });
  });

  return {
    elementRef,
    handleMouseEnter,
    handleMouseLeave,
  };
}

export default useYoyoEffect;
