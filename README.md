# Photography website

Static photo portfolio built with [Astro](https://astro.build).

## Run locally

```sh
npm install
npm run dev        # http://localhost:4321  (live reload while editing)
npm run build      # outputs the static site to dist/
npm run preview    # serves dist/ at http://localhost:4321
```

## Add photos / galleries

1. Export the photos as JPG, max 3000px on the long side, metadata stripped (no GPS!),
   into `photos/`. Full-size originals can live in `data/` (git-ignored).
2. Edit `src/data/galleries.ts`: add the file names to a gallery (or add a new gallery).

Astro resizes and compresses every photo at build time into WebP at several sizes;
originals are never published and EXIF/GPS metadata is stripped.

Site name / tagline: `src/config.ts`.

## Deploy

Pushing to `main` builds the site with GitHub Actions and publishes it to
https://box-bit.github.io/ (see `.github/workflows/deploy.yml`).
