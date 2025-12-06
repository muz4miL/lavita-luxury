import { OurStoryHero, OurStoryTimeline, OurStoryVision } from '@/components/resort/our-story';

export const metadata = {
    title: "Our Story | Lavita Malam Jabba",
    description: "Discover the journey behind Lavita Malam Jabba - from vision to reality. The story of Pakistan's first ultra-luxury glass-dome resort.",
    keywords: "Lavita story, resort history, Malam Jabba development, luxury resort Pakistan",
};

export default function OurStoryPage() {
    return (
        <main>
            <OurStoryHero />
            <OurStoryTimeline />
            <OurStoryVision />
        </main>
    );
}
