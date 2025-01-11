import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

const ParallaxBanner = () => {
  const backgroundRef = useRef(null);
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      tl.to(backgroundRef.current, {
        yPercent: 20,
        ease: 'none',
      }).to(
        textRef.current,
        {
          yPercent: -20,
          ease: 'none',
        },
        '<'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[80dvh] w-full items-center justify-center overflow-hidden"
      style={{
        clipPath: 'polygon(0 0, 100% 0%, 100% 85%, 0 100%)',
      }}
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 scale-110 bg-[url('/img/banner.jpg')] bg-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

      <div
        ref={textRef}
        className="relative z-10 space-y-4 text-center font-header text-white"
      >
        <h1 className="text-4xl">Ideas</h1>
        <h2 className="text-xl">Where all our great things begin</h2>
      </div>
    </section>
  );
};

export default ParallaxBanner;
