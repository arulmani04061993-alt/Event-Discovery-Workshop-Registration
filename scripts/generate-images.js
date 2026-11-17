import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Directory targets
const DIRS = {
  hero: path.resolve('public/assets/images/hero'),
  events: path.resolve('public/assets/images/events'),
  categories: path.resolve('public/assets/images/categories'),
  organizers: path.resolve('public/assets/images/organizers'),
  backgrounds: path.resolve('public/assets/images/backgrounds'),
};

Object.values(DIRS).forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

function escapeXml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const imagesToGenerate = [
  // Hero Image
  {
    dir: DIRS.hero,
    filename: 'hero-tech-summit.webp',
    width: 1200,
    height: 675,
    title: 'GLOBAL TECH HORIZONS 2026',
    subtitle: 'The Premier Engineering & AI Experience',
    badge: 'KEYNOTE STAGE • NOV 24-26',
    grad1: '#0B0F19',
    grad2: '#1E1B4B',
    accent: '#4F46E5',
    accent2: '#06B6D4',
    iconText: 'STACKLY WORLD STAGE'
  },
  // Backgrounds
  {
    dir: DIRS.backgrounds,
    filename: 'hero-mesh-bg.webp',
    width: 1440,
    height: 800,
    title: 'STACKLY EVENTS NETWORK',
    subtitle: 'Enterprise Event Discovery Platform',
    badge: 'COMMUNITY & IMPACT',
    grad1: '#050814',
    grad2: '#0E172A',
    accent: '#3B82F6',
    accent2: '#8B5CF6',
    iconText: 'HIGH FIDELITY EXPERIENCES'
  },
  // Categories (4)
  {
    dir: DIRS.categories,
    filename: 'cat-technology.webp',
    width: 600,
    height: 400,
    title: 'Technology & AI',
    subtitle: 'Next-gen systems, Cloud, LLMs & Web3',
    badge: 'TECH TRACK',
    grad1: '#0F172A',
    grad2: '#1E1B4B',
    accent: '#6366F1',
    accent2: '#38BDF8',
    iconText: '120+ WORKSHOPS'
  },
  {
    dir: DIRS.categories,
    filename: 'cat-business.webp',
    width: 600,
    height: 400,
    title: 'Business & Leadership',
    subtitle: 'Venture scale, Product strategy & Growth',
    badge: 'VENTURE & BIZ',
    grad1: '#0A192F',
    grad2: '#064E3B',
    accent: '#10B981',
    accent2: '#34D399',
    iconText: '85+ KEYNOTES'
  },
  {
    dir: DIRS.categories,
    filename: 'cat-design.webp',
    width: 600,
    height: 400,
    title: 'Design & Creative',
    subtitle: 'UI/UX, Spatial computing & Brand systems',
    badge: 'DESIGN CRAFT',
    grad1: '#1E1035',
    grad2: '#4C1D95',
    accent: '#EC4899',
    accent2: '#A855F7',
    iconText: '60+ DESIGN LABS'
  },
  {
    dir: DIRS.categories,
    filename: 'cat-education.webp',
    width: 600,
    height: 400,
    title: 'Education & Masterclasses',
    subtitle: 'Deep dives, Certifications & Hands-on code',
    badge: 'ACADEMY',
    grad1: '#1A1829',
    grad2: '#7C2D12',
    accent: '#F59E0B',
    accent2: '#FB923C',
    iconText: '95+ INTENSIVES'
  },

  // 12 Events
  {
    dir: DIRS.events,
    filename: 'event-1-nextgen-ai.webp',
    width: 800,
    height: 450,
    title: 'NextGen AI & Autonomous Systems Summit',
    subtitle: 'Build Agents, Multimodal Models & LLM Pipelines',
    badge: 'TECHNOLOGY • BANGALORE',
    grad1: '#090D16',
    grad2: '#1E1B4B',
    accent: '#6366F1',
    accent2: '#06B6D4',
    iconText: 'AI ARCHITECTURE'
  },
  {
    dir: DIRS.events,
    filename: 'event-2-cloud-scale.webp',
    width: 800,
    height: 450,
    title: 'Cloud Native & Distributed Systems 2026',
    subtitle: 'High-throughput Kubernetes, Kafka & Edge Cloud',
    badge: 'TECHNOLOGY • HYDERABAD',
    grad1: '#030712',
    grad2: '#0F284B',
    accent: '#0284C7',
    accent2: '#38BDF8',
    iconText: 'KUBERNETES & CLOUD'
  },
  {
    dir: DIRS.events,
    filename: 'event-3-venture-scale.webp',
    width: 800,
    height: 450,
    title: 'Venture Scale 2026: Conclave',
    subtitle: 'Fundraising, Pitch Masterclasses & Unicorn Scaling',
    badge: 'BUSINESS • MUMBAI',
    grad1: '#061325',
    grad2: '#064E3B',
    accent: '#10B981',
    accent2: '#6EE7B7',
    iconText: 'VENTURE CAPITAL'
  },
  {
    dir: DIRS.events,
    filename: 'event-4-design-systems.webp',
    width: 800,
    height: 450,
    title: 'Design Systems & Enterprise UX Masterclass',
    subtitle: 'Figma Token Systems, Micro-interactions & Design Ops',
    badge: 'DESIGN • BENGALURU',
    grad1: '#1F1135',
    grad2: '#4C1D95',
    accent: '#EC4899',
    accent2: '#F472B6',
    iconText: 'ENTERPRISE DESIGN'
  },
  {
    dir: DIRS.events,
    filename: 'event-5-cybersecurity.webp',
    width: 800,
    height: 450,
    title: 'Zero Trust & Cloud Security Conclave',
    subtitle: 'Defensive SecOps, DevSecOps & Red Team Tactics',
    badge: 'TECHNOLOGY • DELHI NCR',
    grad1: '#111827',
    grad2: '#831843',
    accent: '#F43F5E',
    accent2: '#FB7185',
    iconText: 'ZERO TRUST OPS'
  },
  {
    dir: DIRS.events,
    filename: 'event-6-product-growth.webp',
    width: 800,
    height: 450,
    title: 'Product Leadership & Growth Architecture',
    subtitle: 'PLG Frameworks, Monetization & Retention Strategies',
    badge: 'BUSINESS • PUNE',
    grad1: '#0F172A',
    grad2: '#164E63',
    accent: '#0D9488',
    accent2: '#2DD4BF',
    iconText: 'PRODUCT LEADERSHIP'
  },
  {
    dir: DIRS.events,
    filename: 'event-7-spatial-ui.webp',
    width: 800,
    height: 450,
    title: 'Spatial UI & Immersive Creative Studio Lab',
    subtitle: 'Three.js, WebGL & Apple Vision Spatial Interfaces',
    badge: 'DESIGN • MUMBAI',
    grad1: '#180B2B',
    grad2: '#581C87',
    accent: '#A855F7',
    accent2: '#C084FC',
    iconText: 'SPATIAL COMPUTING'
  },
  {
    dir: DIRS.events,
    filename: 'event-8-fullstack-devops.webp',
    width: 800,
    height: 450,
    title: 'Full-Stack Rust & High Performance Web',
    subtitle: 'WASM, Tokio, Warp & Modern Systems Engineering',
    badge: 'EDUCATION • CHENNAI',
    grad1: '#1C1917',
    grad2: '#78350F',
    accent: '#D97706',
    accent2: '#FBBF24',
    iconText: 'RUST & WEBASSEMBLY'
  },
  {
    dir: DIRS.events,
    filename: 'event-9-fintech-disruption.webp',
    width: 800,
    height: 450,
    title: 'Global FinTech & Open Finance Forum 2026',
    subtitle: 'CBDCs, High Frequency Trading & Banking APIs',
    badge: 'BUSINESS • BANGALORE',
    grad1: '#0B132B',
    grad2: '#1C2541',
    accent: '#3B82F6',
    accent2: '#60A5FA',
    iconText: 'FINTECH INNOVATION'
  },
  {
    dir: DIRS.events,
    filename: 'event-10-creative-direction.webp',
    width: 800,
    height: 450,
    title: 'Motion Graphics & Brand Storytelling Conclave',
    subtitle: 'Kinetic Typography, After Effects & Generative Video',
    badge: 'DESIGN • GOA',
    grad1: '#190A2E',
    grad2: '#3B0764',
    accent: '#D946EF',
    accent2: '#F0ABFC',
    iconText: 'MOTION & BRAND'
  },
  {
    dir: DIRS.events,
    filename: 'event-11-data-engineering.webp',
    width: 800,
    height: 450,
    title: 'Big Data Architecture & Real-Time Lakehouses',
    subtitle: 'Apache Iceberg, ClickHouse & Streaming Pipelines',
    badge: 'EDUCATION • HYDERABAD',
    grad1: '#0B1528',
    grad2: '#1E293B',
    accent: '#2563EB',
    accent2: '#38BDF8',
    iconText: 'REALTIME STREAMING'
  },
  {
    dir: DIRS.events,
    filename: 'event-12-micro-saas.webp',
    width: 800,
    height: 450,
    title: 'Micro-SaaS & Bootstrapped Tech Bootcamp',
    subtitle: 'Zero to $50k MRR: Positioning, Launch & SEO Engine',
    badge: 'EDUCATION • BENGALURU',
    grad1: '#042F2E',
    grad2: '#134E4A',
    accent: '#14B8A6',
    accent2: '#5EEAD4',
    iconText: 'BOOTSTRAP TO SCALE'
  },

  // Organizers (4)
  {
    dir: DIRS.organizers,
    filename: 'org-stackly-labs.webp',
    width: 200,
    height: 200,
    title: 'Stackly Labs',
    subtitle: 'Global Innovation & Community Hub',
    badge: 'VERIFIED',
    grad1: '#1E1B4B',
    grad2: '#312E81',
    accent: '#6366F1',
    accent2: '#818CF8',
    iconText: 'SL'
  },
  {
    dir: DIRS.organizers,
    filename: 'org-dev-collective.webp',
    width: 200,
    height: 200,
    title: 'DevCollective',
    subtitle: 'Open Community of 50k+ Engineers',
    badge: 'PARTNER',
    grad1: '#0F172A',
    grad2: '#1E293B',
    accent: '#38BDF8',
    accent2: '#7DD3FC',
    iconText: 'DC'
  },
  {
    dir: DIRS.organizers,
    filename: 'org-design-craft.webp',
    width: 200,
    height: 200,
    title: 'Design Craft Guild',
    subtitle: 'Premier UX & Spatial Guild',
    badge: 'STUDIO',
    grad1: '#4A044E',
    grad2: '#701A75',
    accent: '#F472B6',
    accent2: '#FBCFE8',
    iconText: 'DG'
  },
  {
    dir: DIRS.organizers,
    filename: 'org-venture-india.webp',
    width: 200,
    height: 200,
    title: 'Venture India Alliance',
    subtitle: 'Empowering Next-Gen Founders',
    badge: 'ALLIANCE',
    grad1: '#064E3B',
    grad2: '#065F46',
    accent: '#10B981',
    accent2: '#34D399',
    iconText: 'VIA'
  }
];

function generateSvg({ width, height, title, subtitle, badge, grad1, grad2, accent, accent2, iconText }) {
  const isSquare = width === height;
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);
  const safeBadge = escapeXml(badge);
  const safeIconText = escapeXml(iconText);

  if (isSquare) {
    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${grad1}" />
          <stop offset="100%" stop-color="${grad2}" />
        </linearGradient>
        <radialGradient id="r" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.5" />
          <stop offset="100%" stop-color="${accent}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="${width}" height="${height}" rx="32" fill="url(#g)" />
      <circle cx="${width/2}" cy="${height/2}" r="${width*0.4}" fill="url(#r)" />
      <rect x="2" y="2" width="${width-4}" height="${height-4}" rx="30" fill="none" stroke="${accent}" stroke-width="2" stroke-opacity="0.3" />
      <text x="50%" y="46%" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="800" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle">${safeIconText}</text>
      <text x="50%" y="68%" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" fill="${accent2}" text-anchor="middle" dominant-baseline="middle" letter-spacing="1.5">${safeBadge}</text>
    </svg>`;
  }

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${grad1}" />
        <stop offset="60%" stop-color="${grad2}" />
        <stop offset="100%" stop-color="${grad1}" />
      </linearGradient>
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="${accent}" />
        <stop offset="100%" stop-color="${accent2}" />
      </linearGradient>
      <radialGradient id="glow1" cx="80%" cy="20%" r="60%">
        <stop offset="0%" stop-color="${accent}" stop-opacity="0.35" />
        <stop offset="100%" stop-color="${accent}" stop-opacity="0" />
      </radialGradient>
      <radialGradient id="glow2" cx="15%" cy="85%" r="50%">
        <stop offset="0%" stop-color="${accent2}" stop-opacity="0.25" />
        <stop offset="100%" stop-color="${accent2}" stop-opacity="0" />
      </radialGradient>
    </defs>

    <!-- Background Base -->
    <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
    
    <!-- Atmospheric glows -->
    <rect width="${width}" height="${height}" fill="url(#glow1)" />
    <rect width="${width}" height="${height}" fill="url(#glow2)" />

    <!-- Modern geometric tech backdrop shapes -->
    <circle cx="${width * 0.85}" cy="${height * 0.35}" r="${height * 0.32}" fill="none" stroke="${accent}" stroke-width="1.5" stroke-opacity="0.3" stroke-dasharray="6 6" />
    <circle cx="${width * 0.85}" cy="${height * 0.35}" r="${height * 0.22}" fill="none" stroke="${accent2}" stroke-width="2" stroke-opacity="0.2" />
    <circle cx="${width * 0.85}" cy="${height * 0.35}" r="${height * 0.12}" fill="${accent}" fill-opacity="0.1" />

    <polygon points="${width * 0.92},${height * 0.75} ${width * 0.96},${height * 0.88} ${width * 0.88},${height * 0.85}" fill="${accent2}" fill-opacity="0.3" />

    <!-- Outer frame border with subtle glow -->
    <rect x="1" y="1" width="${width - 2}" height="${height - 2}" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="2" rx="12" />

    <!-- Badge Tag -->
    <g transform="translate(48, 50)">
      <rect x="0" y="0" width="${safeBadge.length * 9.5 + 32}" height="32" rx="16" fill="rgba(255,255,255,0.08)" stroke="${accent}" stroke-width="1" />
      <circle cx="16" cy="16" r="4" fill="${accent2}" />
      <text x="28" y="21" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="700" fill="#E2E8F0" letter-spacing="1">${safeBadge}</text>
    </g>

    <!-- Icon text / Brand pill on top right -->
    <g transform="translate(${width - 260}, 50)">
      <rect x="0" y="0" width="210" height="32" rx="8" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.15)" stroke-width="1" />
      <text x="105" y="21" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="600" fill="#94A3B8" text-anchor="middle" letter-spacing="0.5">${safeIconText}</text>
    </g>

    <!-- Main Title -->
    <text x="48" y="${height * 0.58}" font-family="Arial, Helvetica, sans-serif" font-size="${width > 900 ? '42' : '28'}" font-weight="800" fill="#FFFFFF" letter-spacing="-0.5">
      ${safeTitle}
    </text>

    <!-- Subtitle -->
    <text x="48" y="${height * 0.74}" font-family="Arial, Helvetica, sans-serif" font-size="${width > 900 ? '20' : '16'}" font-weight="500" fill="#CBD5E1">
      ${safeSubtitle}
    </text>

    <!-- Modern accent bottom indicator bar -->
    <rect x="48" y="${height - 30}" width="160" height="4" rx="2" fill="url(#accentGrad)" />
    <circle cx="225" cy="${height - 28}" r="3" fill="${accent2}" />
    <circle cx="240" cy="${height - 28}" r="3" fill="#64748B" />
    <circle cx="255" cy="${height - 28}" r="3" fill="#334155" />
  </svg>`;
}

async function run() {
  console.log('Generating and compressing all local WebP assets...');
  const report = [];

  for (const item of imagesToGenerate) {
    const svgString = generateSvg(item);
    const destPath = path.join(item.dir, item.filename);

    let quality = 80;
    let buffer = await sharp(Buffer.from(svgString))
      .webp({ quality, effort: 6 })
      .toBuffer();

    while (buffer.length > 85 * 1024 && quality > 30) {
      quality -= 10;
      buffer = await sharp(Buffer.from(svgString))
        .webp({ quality, effort: 6 })
        .toBuffer();
    }

    fs.writeFileSync(destPath, buffer);
    const stat = fs.statSync(destPath);
    const sizeKb = (stat.size / 1024).toFixed(2);

    report.push({
      filename: item.filename,
      dir: path.relative(process.cwd(), item.dir).replace(/\\/g, '/'),
      dimensions: `${item.width}x${item.height}`,
      format: 'WEBP',
      sizeKB: `${sizeKb} KB`,
      under90KB: stat.size < 90 * 1024 ? 'YES (PASS)' : 'NO (FAIL)'
    });
  }

  console.table(report);
  fs.writeFileSync('scripts/image-report.json', JSON.stringify(report, null, 2));
  console.log('Finished generating WebP images successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
