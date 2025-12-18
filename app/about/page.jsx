import AboutHero from '@/components/about/AboutHero';
import HeritageStory from '@/components/about/HeritageStory';
import ClubPhilosophy from '@/components/about/ClubPhilosophy';
export default function AboutPage() {
    return (
        <main className="bg-[#0D1512] min-h-screen">
            <AboutHero />
            <HeritageStory />
            <ClubPhilosophy />
            {/* We will add Heritage/Architecture sections here later */}
        </main>
    );
}
