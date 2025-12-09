// app/page.jsx
import HeroVideoParallax from '@/components/home/HeroVideoParallax';
import Intro from '@/components/home/Intro';
import LavitaLifestyle from '@/components/home/LavitaLifestyle';
import Testimonials from '@/components/home/Testimonials';
import BentoGrid from '@/components/home/BentoGrid';
import OpenSky from '@/components/home/OpenSky';
import PreFooter from '@/components/home/PreFooter';

export default function Home() {
  return (
    <main>
      <HeroVideoParallax />
      <Intro />
      <LavitaLifestyle />
      <Testimonials />
      <BentoGrid />
      <OpenSky />
      <PreFooter />
    </main>
  );
}