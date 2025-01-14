// hooks/useGsapScrollAnimation.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useGsapScrollAnimation = (animationConfig) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      gsap.fromTo(
        element,
        animationConfig.from,
        animationConfig.to
      );

      ScrollTrigger.create({
        trigger: element,
        start: 'top 80%', // When the top of the element reaches 80% of the viewport
        end: 'bottom 20%', // When the bottom of the element reaches 20% of the viewport
        toggleActions: 'play reverse play reverse', // Fade in and fade out behavior
        onEnter: () => {
          gsap.to(element, animationConfig.enter);
        },
        onLeave: () => {
          gsap.to(element, animationConfig.leave);
        },
        onEnterBack: () => {
          gsap.to(element, animationConfig.enter);
        },
        onLeaveBack: () => {
          gsap.to(element, animationConfig.leave);
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animationConfig]);

  return ref;
};

export default useGsapScrollAnimation;
