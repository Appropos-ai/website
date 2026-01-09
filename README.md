# Appropos - Software Solutions Agency

A modern, beautiful landing page for Appropos software solutions agency built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Dark Theme** - Professional design with blues, purples, and clean whites
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion powered scroll reveals and interactions
- **SEO Optimized** - Complete metadata, Open Graph, and Twitter cards
- **Contact Form** - React Hook Form with validation
- **Fast Performance** - Next.js App Router with optimized builds
- **Vercel Ready** - Configured for one-click deployment

## 📦 Tech Stack

- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Deployment**: Vercel

## 🏃 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/appropos-web.git
cd appropos-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/appropos-web)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind config
│   ├── layout.tsx       # Root layout with SEO metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Container.tsx
│       └── Section.tsx
public/
├── favicon.ico
├── site.webmanifest
└── [other assets]
```

## 🎨 Customization

### Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #0a0a0f;
  --primary: #3b82f6;
  --secondary: #8b5cf6;
  /* ... */
}
```

### Content

Update the content in each section component:
- Hero: `src/components/sections/Hero.tsx`
- Services: `src/components/sections/Services.tsx`
- About: `src/components/sections/About.tsx`
- Testimonials: `src/components/sections/Testimonials.tsx`
- Contact: `src/components/sections/Contact.tsx`

### SEO

Update metadata in `src/app/layout.tsx`.

## 📝 Adding Favicons

Generate favicons at [realfavicongenerator.net](https://realfavicongenerator.net) and place them in the `public/` directory:
- favicon.ico
- favicon-16x16.png
- favicon-32x32.png
- apple-touch-icon.png
- android-chrome-192x192.png
- android-chrome-512x512.png

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific settings:

```env
# Add your environment variables here
# Example:
# NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📄 License

MIT License - feel free to use this template for your projects.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ by Appropos
