# Velberter Honig - German Honey Company Website

A professional promotional website for "Velberter Honig", a traditional German honey company based in Velbert. This project showcases the company's products, history, and values through a modern, responsive web interface.

## 🍯 Project Overview

**Company**: Velberter Honig  
**Purpose**: Promotional website (no e-commerce functionality)  
**Language**: German (Deutsch)  
**Target Audience**: German consumers interested in high-quality honey products

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with custom honey-themed colors
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Responsive Design**: Mobile-first approach

## 📱 Features

### Pages
- **Startseite** (Homepage): Hero section, image slider, company introduction
- **Über uns** (About Us): Company history, values, and production process
- **Galerie** (Gallery): Filterable image gallery with lightbox functionality
- **Kontakt** (Contact): Contact form and company information
- **Impressum**: Legal information (required for German websites)
- **Datenschutz**: Privacy policy (GDPR compliant)

### Components
- Responsive header with sticky navigation
- Image slider with automatic transitions
- Contact form with client-side validation
- Professional footer with social media links
- Filterable gallery with categories

### Design Features
- Custom honey-themed color palette
- Modern typography with Inter font
- Smooth animations and transitions
- Professional, trustworthy design
- Fully responsive layout

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- **Honey colors**: Warm amber/golden tones (#f2940a family)
- **Forest colors**: Natural green tones (#22c55e family)

### Images
Replace placeholder images in the components with actual high-quality photos:
- Beehive and forest scenes for the slider
- Company and product photos for the gallery
- Professional imagery for the about section

### Content
All text content is in German and can be customized in the respective component files:
- Update company information in `Footer.tsx` and legal pages
- Modify hero text and company description in `Homepage.tsx`
- Customize about us content in `About.tsx`

## 📝 Legal Compliance

This website includes German legal requirements:
- **Impressum**: Legal disclosure page (required by German law)
- **Datenschutz**: Privacy policy (GDPR compliant)
- Contact information and business details

## 🌐 Deployment

The website is built as a static site and can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

Build command: `npm run build`  
Output directory: `dist`

## 📄 License

This project is created for Velberter Honig company. All rights reserved.
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
