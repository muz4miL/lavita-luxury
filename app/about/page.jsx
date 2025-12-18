import AboutHero from '@/components/about/AboutHero';
import HeritageStory from '@/components/about/HeritageStory';

export default function AboutPage() {
    return (
        <main className="bg-[#0D1512] min-h-screen">
            <AboutHero />
            <HeritageStory />
            {/* We will add Heritage/Architecture sections here later */}
        </main>
    );
}
