import { MiniMuseumHero, MiniMuseumExhibits, MiniMuseumCulture } from '@/components/resort/mini-museum';

export const metadata = {
    title: "Mini Museum | Lavita Malam Jabba",
    description: "Explore the rich cultural heritage of Swat Valley through our curated mini museum showcasing local art, history, and traditions.",
    keywords: "Swat museum, cultural heritage, local art, Swat history, traditional crafts",
};

export default function MiniMuseumPage() {
    return (
        <main>
            <MiniMuseumHero />
            <MiniMuseumExhibits />
            <MiniMuseumCulture />
        </main>
    );
}
