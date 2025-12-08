## KEMSAL Consultants Ltd. Website

Next.js (App Router, TypeScript) site for KEMSAL Consultants Ltd., styled with Tailwind CSS v4 and animated with Framer Motion.

### Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion, lucide-react icons

### Getting Started

```bash
npm install # if dependencies are not installed
npm run dev
```

Visit `http://localhost:3000`.

### Available Scripts

- `npm run dev` – start the dev server
- `npm run build` – production build
- `npm run start` – serve the built app
- `npm run lint` – run ESLint

### Pages & Components

- `app/page.tsx` – animated homepage (hero, services, featured projects, metrics, CTA)
- `app/services/page.tsx` – quantity surveying, project management, research pillars
- `app/projects/page.tsx` – filterable project gallery
- `app/projects/[slug]/page.tsx` – individual project case studies with role, metrics, and gallery
- `app/about/page.tsx` – vision, values, and highlights
- `app/contact/page.tsx` – contact details and placeholder form
- `components/ui/navbar.tsx` / `components/ui/footer.tsx`

### Theming

Brand palette is defined in `app/globals.css` (`primary` navy/charcoal with amber accent). Typography uses Space Grotesk (headings) and Manrope (body). Adjust CSS variables there as needed.

### Notes

- Contact details and LinkedIn link are placeholders—replace with production info.
- Project imagery uses locally bundled SVG placeholders in `public/projects`. Each project has its own folder (e.g., `public/projects/lumumba-affordable-housing`) and detail pages auto-build the gallery by reading every image file in that folder. Swap with licensed photos, keeping filenames or adjusting as needed.
- The contact form is non-functional; connect to your email/CRM when ready.
