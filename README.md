# STACKLY — Enterprise Event Discovery & Workshop Registration Platform

A production-grade, high-performance Event Discovery & Technical Workshop Registration platform engineered with **React.js**, **Vite**, **CSS3 Custom Properties (Design Tokens)**, **React Router DOM**, and persistent **LocalStorage architecture**.

Designed with enterprise aesthetic standards: deep obsidian & slate surfaces, electric cyan & indigo glow accents, glassmorphic blur matrices, responsive typography, and tactile motion micro-interactions.

---

## 🚀 Key Features

### 1. High-Conversion Home Experience
- **Keynote Hero Spotlight**: Highlights major upcoming summits with live capacity counters, venue indicators, and instant RSVP gates.
- **Curated Featured Grid**: 4 spotlighted conferences with live category badges and interactive seat capacity progress bars.
- **Track Exploration Cards**: Interactive category filters with count badges spanning **Technology**, **Business**, **Design**, and **Education**.
- **The STACKLY Standard**: Platform statistics (120+ summits, 45,000+ engineers, 99.4% satisfaction) and 3-step registration flow.
- **Executive Dispatch**: Interactive subscription component for private invite-only roundtables.

### 2. Comprehensive Explore Events Directory
- **12+ Distinct Production Events**: Real-world curriculum breakdowns, venue addresses, and verified organizer profiles.
- **Dynamic Search Without Reload**: Real-time filtering across titles, agendas, cities, and venues.
- **Multi-Vector Filtering**: Filter by category track, city/location, and sort by upcoming date, latest date, or seat availability.
- **Empty State Fallback**: Polished empty state with one-click filter reset.

### 3. Deep Event Details (`/events/:id`)
- Dynamic route handling with graceful 404 state for invalid identifiers.
- Curated curriculum agenda with checkmark breakdowns.
- Verified organizer badge with studio metadata and verified trust signals.
- Sticky admission checkout card with live capacity tracking and complimentary ticket guarantee.
- Related event recommendations engine.

### 4. Enterprise Registration System
- **Complimentary Admission**: One-click admission reservation modal with backdrop blur.
- **Rigorous Form Validation**:
  - Full Name validation (minimum 3 characters).
  - RFC compliant Email validation.
  - Indian 10-digit phone format validation (`6-9` prefix, optional `+91`).
- **Duplicate Registration Prevention**: Blocks the same email from registering for the same event multiple times with real-time inline warnings.
- **Automated Digital Pass Minting**: Generates unique Pass IDs (`STK-TIMESTAMP-RANDOM`) and delivers a celebratory confetti release.
- **Live Seat Decrementing**: Automatically reduces remaining seat capacity in real-time.

### 5. My Registrations Management (`/registrations`)
- Dedicated dashboard tracking all active attendee passes.
- Instant access to Pass ID, registered email, attendee name, and venue details.
- **Safe Cancellation Flow**: Two-step confirmation modal before cancellation.
- **Automatic Seat Restoration**: Returning a pass immediately restores seat capacity to the public pool.

### 6. Robust LocalStorage Utility
- All state updates for events, registrations, and favorited items are safely persisted under `stackly_events`, `stackly_registrations`, and `stackly_favorites`.
- Safe JSON parse error wrappers ensuring state durability even under corrupted local caches.

### 7. 100% Local WebP Assets (< 90 KB)
- All 22 image assets are stored locally under `public/assets/images/`.
- Converted to pure **WebP format** and compressed with **Sharp**.
- **Every single image is under 17 KB**, far below the 90 KB limit.

---

## 🛠 Tech Stack

- **Framework**: React 19 (Functional Components & Hooks)
- **Bundler & Tooling**: Vite
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti
- **Image Optimization**: Sharp
- **Styling**: CSS3 Design Tokens & Glassmorphism Modules

---

## 📦 Project Architecture

```
├── public/
│   └── assets/
│       └── images/
│           ├── backgrounds/    # hero-mesh-bg.webp
│           ├── categories/     # cat-technology, cat-business, etc.
│           ├── events/         # event-1 through event-12 (WebP)
│           ├── hero/           # hero-tech-summit.webp
│           └── organizers/     # Verified organizer avatars
├── scripts/
│   └── generate-images.js      # Sharp-driven WebP asset generation & audit
├── src/
│   ├── components/
│   │   ├── BackToTop.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── EmptyState.jsx
│   │   ├── EventCard.jsx
│   │   ├── EventGrid.jsx
│   │   ├── FeaturedEvents.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── LoadingAnimation.jsx
│   │   ├── Navbar.jsx
│   │   ├── RegistrationForm.jsx
│   │   ├── RegistrationModal.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SearchBar.jsx
│   │   └── ToastNotification.jsx
│   ├── context/
│   │   └── EventContext.jsx    # Unified Global State & LocalStorage sync
│   ├── data/
│   │   └── events.js           # 12 detailed events & category metadata
│   ├── hooks/
│   │   ├── useEvents.js
│   │   └── useRegistrations.js
│   ├── pages/
│   │   ├── EventDetails.jsx
│   │   ├── ExploreEvents.jsx
│   │   ├── Home.jsx
│   │   ├── MyRegistrations.jsx
│   │   └── NotFound.jsx
│   ├── styles/
│   │   ├── animations.css
│   │   ├── global.css
│   │   └── variables.css
│   ├── utils/
│   │   ├── dateUtils.js
│   │   ├── localStorage.js
│   │   └── validation.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation
```bash
git clone <repository-url>
cd stackly-event-platform
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🖼 Image Optimization Report

| Filename | Directory | Format | Dimensions | Size | Audit (< 90 KB) |
|---|---|---|---|---|---|
| `hero-tech-summit.webp` | `public/assets/images/hero` | WEBP | 1200x675 | 16.36 KB | **PASS** |
| `hero-mesh-bg.webp` | `public/assets/images/backgrounds` | WEBP | 1440x800 | 16.25 KB | **PASS** |
| `cat-technology.webp` | `public/assets/images/categories` | WEBP | 600x400 | 7.79 KB | **PASS** |
| `cat-business.webp` | `public/assets/images/categories` | WEBP | 600x400 | 8.67 KB | **PASS** |
| `cat-design.webp` | `public/assets/images/categories` | WEBP | 600x400 | 8.63 KB | **PASS** |
| `cat-education.webp` | `public/assets/images/categories` | WEBP | 600x400 | 10.28 KB | **PASS** |
| `event-1-nextgen-ai.webp` | `public/assets/images/events` | WEBP | 800x450 | 13.08 KB | **PASS** |
| `event-2-cloud-scale.webp` | `public/assets/images/events` | WEBP | 800x450 | 13.40 KB | **PASS** |
| `event-3-venture-scale.webp` | `public/assets/images/events` | WEBP | 800x450 | 11.41 KB | **PASS** |
| `event-4-design-systems.webp` | `public/assets/images/events` | WEBP | 800x450 | 14.26 KB | **PASS** |
| `event-5-cybersecurity.webp` | `public/assets/images/events` | WEBP | 800x450 | 12.67 KB | **PASS** |
| `event-6-product-growth.webp` | `public/assets/images/events` | WEBP | 800x450 | 12.61 KB | **PASS** |
| `event-7-spatial-ui.webp` | `public/assets/images/events` | WEBP | 800x450 | 13.30 KB | **PASS** |
| `event-8-fullstack-devops.webp` | `public/assets/images/events` | WEBP | 800x450 | 14.21 KB | **PASS** |
| `event-9-fintech-disruption.webp` | `public/assets/images/events` | WEBP | 800x450 | 12.42 KB | **PASS** |
| `event-10-creative-direction.webp` | `public/assets/images/events` | WEBP | 800x450 | 13.94 KB | **PASS** |
| `event-11-data-engineering.webp` | `public/assets/images/events` | WEBP | 800x450 | 12.86 KB | **PASS** |
| `event-12-micro-saas.webp` | `public/assets/images/events` | WEBP | 800x450 | 12.87 KB | **PASS** |
| `org-stackly-labs.webp` | `public/assets/images/organizers` | WEBP | 200x200 | 2.02 KB | **PASS** |
| `org-dev-collective.webp` | `public/assets/images/organizers` | WEBP | 200x200 | 2.34 KB | **PASS** |
| `org-design-craft.webp` | `public/assets/images/organizers` | WEBP | 200x200 | 2.32 KB | **PASS** |
| `org-venture-india.webp` | `public/assets/images/organizers` | WEBP | 200x200 | 2.06 KB | **PASS** |

*All 22 images pass the strict requirement of being pure WebP format and under 90 KB.*

---

## 🌐 Deployment (Vercel / Netlify / GitHub Pages)

### Vercel / Netlify
Deploy directly from GitHub. The standard `npm run build` command with output directory `dist` works out-of-the-box. SPA rewrites are supported by standard client routers.

### GitHub Pages
1. In `vite.config.js`, set `base: '/<repository-name>/'`.
2. Configure a GitHub Actions workflow or run `npx gh-pages -d dist`.

---

## 📄 License
MIT © STACKLY Technologies.
