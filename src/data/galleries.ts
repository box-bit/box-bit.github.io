import type { ImageMetadata } from 'astro';

/**
 * Every image in photos/ is picked up here. Astro resizes/compresses them at
 * build time (originals are never served, and EXIF/GPS metadata is stripped).
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../../photos/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp}',
  { eager: true },
);

const byName = new Map(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!, mod.default]),
);

export function picture(file: string): ImageMetadata {
  const img = byName.get(file);
  if (!img) throw new Error(`Picture "${file}" not found in photos/`);
  return img;
}

export interface Photo {
  file: string;
  alt: string;
  caption?: string;
}

export interface Gallery {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  cover: string;
  photos: Photo[];
}

// Edit this list to add galleries, reorder photos or change captions.
export const galleries: Gallery[] = [
  {
    slug: 'abruzzo',
    title: 'Abruzzo',
    subtitle: 'Gran Sasso and Monte Sirente',
    date: '2025 – 2026',
    cover: 'sirente.jpg',
    photos: [
      { file: 'sirente.jpg', alt: 'Snow-capped limestone peaks above a green forested slope under a deep blue sky' },
      { file: 'gran-sasso.jpg', alt: 'Black and white view of a ridged mountain face beneath dramatic clouds' },
      { file: 'neve_sul_sirente.jpg', alt: 'Black and white snowfield glowing in backlight beneath dark storm clouds' },
      { file: 'lago-pontile-montagna.jpg', alt: 'Black and white mountain lake with a small pontoon, fence and rolling hills' },
    ],
  },
  {
    slug: 'north-africa',
    title: 'North Africa',
    subtitle: 'Egypt and Morocco',
    date: '2026',
    cover: 'cammelli-piramidi.jpg',
    photos: [
      { file: 'cammelli-piramidi.jpg', alt: 'Two decorated camels in close-up with the pyramids of Giza behind them' },
      { file: 'near-compound-2.jpg', alt: 'A woman in red seen through the windshield of a car on a busy market street' },
      { file: 'marocco-cani-2.jpg', alt: 'A lone dog standing on an empty beach under an overcast sky' },
      { file: 'marocco-cani-1.jpg', alt: 'Dogs crossing a shallow stream that runs across a sandy beach' },
    ],
  },
  {
    slug: 'renon',
    title: 'Renon',
    subtitle: 'Autumn above Bolzano',
    date: 'October 2025',
    cover: 'varco-pendente-tra-alberi.jpg',
    photos: [
      { file: 'soprabolzano-treno-bambino.jpg', alt: 'Blurred autumn colours seen through the windows of a moving train' },
      { file: 'DFUJ1333.JPG', alt: 'Reflections of a passenger layered over green forest in a train window' },
      { file: 'varco-pendente-tra-alberi.jpg', alt: 'A steep forest slope with orange autumn undergrowth between tall trunks' },
      { file: 'DFUJ1384.JPG', alt: 'Dark train window reflections over autumn trees and a level-crossing sign' },
      { file: 'fontana-tronco-bw.jpg', alt: 'Black and white close-up of water sparkling in a hollowed wooden trough' },
    ],
  },
  {
    slug: 'animals',
    title: 'Animals',
    subtitle: 'Portraits',
    date: '2025 – 2026',
    cover: 'volpe-ritratto.jpg',
    photos: [
      { file: 'volpe-ritratto.jpg', alt: 'Black and white portrait of a fox looking straight into the camera' },
      { file: 'pecora-ritratto.jpg', alt: 'A sheep standing on a grassy bank, looking at the camera' },
      { file: 'galline-occhi.jpg', alt: 'Hens seen from below through a wire fence against a blue sky' },
    ],
  },
];
