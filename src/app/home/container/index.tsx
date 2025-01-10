'use client';

import Header from '@/shared/components/header';
import ParallaxBanner from '../components/parallax-banner';

const HomeContainer = () => {
  return (
    <>
      <Header />
      <ParallaxBanner />
      <section className="h-[400dvh]" />
    </>
  );
};

export default HomeContainer;
