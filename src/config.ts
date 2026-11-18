export const SITE = {
  name: 'Alessandro Fantesini',
  tagline: 'Photography',
  description: 'Landscapes, travel and animal photography.',
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
/** Prefix internal links with the base path (needed for GitHub Pages project sites). */
export const url = (path: string) => `${base}${path}`;
