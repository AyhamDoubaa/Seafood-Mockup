# OceanCrest Seafood & Grill 🦞

A modern, premium seafood restaurant website built with Next.js 14, TypeScript, and Tailwind CSS.

![OceanCrest Preview](https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop)

## ✨ Features

- **Modern Design**: Premium coastal aesthetic with deep blues, teal accents, and gold highlights
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Elegant transitions and micro-interactions using Framer Motion
- **SEO Optimized**: Proper metadata and semantic HTML for search engine visibility
- **Accessibility**: WCAG-compliant design patterns and keyboard navigation

## 📄 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section with animated waves, featured dishes, reviews carousel, and CTAs |
| **Menu** | Interactive category filter, elegant dish listings with prices and badges |
| **About** | Restaurant story, team profiles, timeline of milestones |
| **Gallery** | Filterable image grid with lightbox viewer |
| **Reservations** | Complete reservation form with validation and success state |
| **Contact** | Map embed, operating hours, and contact form |

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open in browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with Navbar and Footer
│   ├── page.tsx             # Home page
│   ├── menu/
│   │   └── page.tsx         # Menu page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── gallery/
│   │   └── page.tsx         # Gallery page
│   ├── reservations/
│   │   └── page.tsx         # Reservations page
│   └── contact/
│       └── page.tsx         # Contact page
├── components/
│   ├── Navbar.tsx           # Navigation with glass-blur effect
│   ├── Footer.tsx           # Footer with links and social icons
│   ├── Hero.tsx             # Home page hero section
│   ├── FeaturedDishes.tsx   # Featured dishes grid
│   ├── Reviews.tsx          # Customer reviews carousel
│   ├── MenuPreview.tsx      # Menu category preview
│   ├── AboutPreview.tsx     # About section for home
│   ├── CTASection.tsx       # Call-to-action section
│   ├── Lightbox.tsx         # Gallery lightbox viewer
│   ├── ReservationForm.tsx  # Reservation form with validation
│   └── ContactForm.tsx      # Contact form component
├── tailwind.config.ts       # Tailwind configuration with custom theme
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Ocean (Primary) | `#0b3f6d` | Primary brand color |
| Ocean (Dark) | `#072849` | Headers, text |
| Teal | `#05c8ab` | Accents, links |
| Gold | `#fbbf24` | CTAs, highlights |
| Sand | `#fdfcfa` | Backgrounds |

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: DM Sans (sans-serif)

## 🔧 Customization

### Images

All images use Unsplash placeholders. Replace the URLs in each component with your own images:

```tsx
// Example: Update hero image in components/Hero.tsx
backgroundImage: `url('/your-image.jpg')`
```

### Branding

Update the restaurant name and details:

1. Update `OceanCrest` in `components/Navbar.tsx` and `components/Footer.tsx`
2. Modify metadata in `app/layout.tsx`
3. Update contact information in `components/Footer.tsx` and `app/contact/page.tsx`

### Colors

Customize the color palette in `tailwind.config.ts`:

```ts
colors: {
  ocean: { /* your custom blues */ },
  teal: { /* your custom teals */ },
  gold: { /* your custom golds */ },
}
```

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the production bundle and deploy the `.next` folder:

```bash
npm run build
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for seafood lovers everywhere.

