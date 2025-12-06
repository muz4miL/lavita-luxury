import { VerticalGardenHero, VerticalGardenFeatures, VerticalGardenGallery } from '@/components/resort/vertical-garden';

export const metadata = {
    title: "Vertical Garden | Lavita Malam Jabba",
    description: "Experience our stunning vertical garden - a living masterpiece that brings nature into every corner of the resort.",
    keywords: "vertical garden, sustainable architecture, green building, eco-luxury resort",
};

export default function VerticalGardenPage() {
    return (
        <main>
            <VerticalGardenHero />
            <VerticalGardenFeatures />
            <VerticalGardenGallery />
        </main>
    );
}
