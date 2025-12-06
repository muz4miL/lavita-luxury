import { GalleryHero, GalleryGrid, GalleryCategories } from '@/components/resort/gallery';

export const metadata = {
    title: "Gallery | Lavita Malam Jabba",
    description: "Browse our stunning collection of resort photography showcasing the beauty of Lavita Malam Jabba and the surrounding Hindu Kush mountains.",
    keywords: "resort gallery, Malam Jabba photos, luxury resort images, mountain photography",
};

export default function GalleryPage() {
    return (
        <main>
            <GalleryHero />
            <GalleryCategories />
            <GalleryGrid />
        </main>
    );
}
