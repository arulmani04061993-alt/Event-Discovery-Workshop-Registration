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
    tag: 'KEYNOTE ARENA 2026',
    title: 'GLOBAL TECH HORIZONS',
    subtitle: 'The Leading AI & Distributed Systems Summit',
    theme: 'indigo',
    illustration: 'ai_network'
  },
  // Backgrounds
  {
    dir: DIRS.backgrounds,
    filename: 'hero-mesh-bg.webp',
    width: 1440,
    height: 800,
    tag: 'CONFERENCE ECOSYSTEM',
    title: 'STACKLY EVENTS NETWORK',
    subtitle: 'Curated Enterprise Tech Workshops',
    theme: 'cyan',
    illustration: 'cloud_mesh'
  },
  // Categories (4)
  {
    dir: DIRS.categories,
    filename: 'cat-technology.webp',
    width: 600,
    height: 400,
    tag: 'TRACK 01',
    title: 'Technology & AI',
    subtitle: '120+ Workshops • Agents & Cloud',
    theme: 'indigo',
    illustration: 'ai_chip'
  },
  {
    dir: DIRS.categories,
    filename: 'cat-business.webp',
    width: 600,
    height: 400,
    tag: 'TRACK 02',
    title: 'Business & Ventures',
    subtitle: '85+ Keynotes • Scaling & Capital',
    theme: 'emerald',
    illustration: 'growth_chart'
  },
  {
    dir: DIRS.categories,
    filename: 'cat-design.webp',
    width: 600,
    height: 400,
    tag: 'TRACK 03',
    title: 'Design & Spatial UI',
    subtitle: '60+ Design Labs • Design Systems',
    theme: 'pink',
    illustration: 'design_cube'
  },
  {
    dir: DIRS.categories,
    filename: 'cat-education.webp',
    width: 600,
    height: 400,
    tag: 'TRACK 04',
    title: 'Academy & Masterclasses',
    subtitle: '95+ Masterclasses • Hands-on Sprints',
    theme: 'amber',
    illustration: 'academic_code'
  },

  // 12 Events
  {
    dir: DIRS.events,
    filename: 'event-1-nextgen-ai.webp',
    width: 800,
    height: 450,
    tag: 'BENGALURU • NOV 2026',
    title: 'NextGen AI & Autonomous Systems',
    subtitle: 'LLMs • Multi-Agent Workflows • Vector Retrieval',
    theme: 'indigo',
    illustration: 'ai_network'
  },
  {
    dir: DIRS.events,
    filename: 'event-2-cloud-scale.webp',
    width: 800,
    height: 450,
    tag: 'HYDERABAD • DEC 2026',
    title: 'Cloud Native & Distributed Systems',
    subtitle: 'Kubernetes • Kafka Streaming • Hyperscale Mesh',
    theme: 'cyan',
    illustration: 'cloud_mesh'
  },
  {
    dir: DIRS.events,
    filename: 'event-3-venture-scale.webp',
    width: 800,
    height: 450,
    tag: 'MUMBAI • DEC 2026',
    title: 'Venture Scale 2026 Conclave',
    subtitle: 'Unicorn Economics • Seed to Series B • Angels',
    theme: 'emerald',
    illustration: 'growth_chart'
  },
  {
    dir: DIRS.events,
    filename: 'event-4-design-systems.webp',
    width: 800,
    height: 450,
    tag: 'BENGALURU • DEC 2026',
    title: 'Design Systems & Enterprise UX',
    subtitle: 'Figma Tokens • Token Pipelines • WCAG 2.2 AA',
    theme: 'pink',
    illustration: 'design_cube'
  },
  {
    dir: DIRS.events,
    filename: 'event-5-cybersecurity.webp',
    width: 800,
    height: 450,
    tag: 'DELHI NCR • JAN 2027',
    title: 'Zero Trust & Cloud Security',
    subtitle: 'SecOps • Threat Hunting • IAM & SBOM Audits',
    theme: 'rose',
    illustration: 'shield_lock'
  },
  {
    dir: DIRS.events,
    filename: 'event-6-product-growth.webp',
    width: 800,
    height: 450,
    tag: 'PUNE • JAN 2027',
    title: 'Product Leadership & Growth',
    subtitle: 'PLG Engines • Retention Cohorts • Funnels',
    theme: 'teal',
    illustration: 'growth_chart'
  },
  {
    dir: DIRS.events,
    filename: 'event-7-spatial-ui.webp',
    width: 800,
    height: 450,
    tag: 'MUMBAI • JAN 2027',
    title: 'Spatial UI & Creative Studio Lab',
    subtitle: 'Three.js • WebGL Shaders • Spatial Ergonomics',
    theme: 'violet',
    illustration: 'spatial_glasses'
  },
  {
    dir: DIRS.events,
    filename: 'event-8-fullstack-devops.webp',
    width: 800,
    height: 450,
    tag: 'CHENNAI • FEB 2027',
    title: 'Full-Stack Rust & High Performance',
    subtitle: 'WASM • Tokio Runtime • Memory-Safe Systems',
    theme: 'amber',
    illustration: 'academic_code'
  },
  {
    dir: DIRS.events,
    filename: 'event-9-fintech-disruption.webp',
    width: 800,
    height: 450,
    tag: 'BENGALURU • FEB 2027',
    title: 'FinTech & Open Finance Forum',
    subtitle: 'Cross-Border Rails • CBDCs • Algorithmic Fraud',
    theme: 'blue',
    illustration: 'fintech_vault'
  },
  {
    dir: DIRS.events,
    filename: 'event-10-creative-direction.webp',
    width: 800,
    height: 450,
    tag: 'GOA • FEB 2027',
    title: 'Motion & Brand Storytelling',
    subtitle: 'Kinetic Typography • GLSL • Generative Brand',
    theme: 'fuchsia',
    illustration: 'motion_waves'
  },
  {
    dir: DIRS.events,
    filename: 'event-11-data-engineering.webp',
    width: 800,
    height: 450,
    tag: 'HYDERABAD • FEB 2027',
    title: 'Big Data & Real-Time Lakehouses',
    subtitle: 'Apache Iceberg • ClickHouse • Streaming Pipelines',
    theme: 'cyan',
    illustration: 'cloud_mesh'
  },
  {
    dir: DIRS.events,
    filename: 'event-12-micro-saas.webp',
    width: 800,
    height: 450,
    tag: 'BENGALURU • MAR 2027',
    title: 'Micro-SaaS & Bootstrapped Tech',
    subtitle: 'Rapid MVPs • $50k MRR Blueprint • Lean Stack',
    theme: 'teal',
    illustration: 'growth_chart'
  },

  // Organizers (4)
  {
    dir: DIRS.organizers,
    filename: 'org-stackly-labs.webp',
    width: 200,
    height: 200,
    tag: 'ORGANIZER',
    title: 'Stackly Labs',
    subtitle: 'Research Guild',
    theme: 'indigo',
    illustration: 'avatar_sl'
  },
  {
    dir: DIRS.organizers,
    filename: 'org-dev-collective.webp',
    width: 200,
    height: 200,
    tag: 'COMMUNITY',
    title: 'DevCollective',
    subtitle: 'Cloud Network',
    theme: 'cyan',
    illustration: 'avatar_dc'
  },
  {
    dir: DIRS.organizers,
    filename: 'org-design-craft.webp',
    width: 200,
    height: 200,
    tag: 'STUDIO',
    title: 'Design Craft',
    subtitle: 'UX Guild',
    theme: 'pink',
    illustration: 'avatar_dg'
  },
  {
    dir: DIRS.organizers,
    filename: 'org-venture-india.webp',
    width: 200,
    height: 200,
    tag: 'VENTURE',
    title: 'Venture India',
    subtitle: 'Founders Alliance',
    theme: 'emerald',
    illustration: 'avatar_vi'
  }
];

const THEME_COLORS = {
  indigo: {
    bg1: '#1E1B4B',
    bg2: '#312E81',
    accent1: '#6366F1',
    accent2: '#A5B4FC',
    glow: '#818CF8'
  },
  cyan: {
    bg1: '#083344',
    bg2: '#164E63',
    accent1: '#06B6D4',
    accent2: '#67E8F9',
    glow: '#38BDF8'
  },
  emerald: {
    bg1: '#064E3B',
    bg2: '#065F46',
    accent1: '#10B981',
    accent2: '#6EE7B7',
    glow: '#34D399'
  },
  pink: {
    bg1: '#701A75',
    bg2: '#831843',
    accent1: '#EC4899',
    accent2: '#F472B6',
    glow: '#FBCFE8'
  },
  rose: {
    bg1: '#881337',
    bg2: '#9F1239',
    accent1: '#F43F5E',
    accent2: '#FB7185',
    glow: '#FECDD3'
  },
  amber: {
    bg1: '#78350F',
    bg2: '#92400E',
    accent1: '#F59E0B',
    accent2: '#FBBF24',
    glow: '#FDE68A'
  },
  teal: {
    bg1: '#134E4A',
    bg2: '#115E59',
    accent1: '#14B8A6',
    accent2: '#5EEAD4',
    glow: '#99F6E4'
  },
  violet: {
    bg1: '#4C1D95',
    bg2: '#5B21B6',
    accent1: '#8B5CF6',
    accent2: '#C4B5FD',
    glow: '#DDD6FE'
  },
  blue: {
    bg1: '#1E3A8A',
    bg2: '#1D4ED8',
    accent1: '#3B82F6',
    accent2: '#93C5FD',
    glow: '#BFDBFE'
  },
  fuchsia: {
    bg1: '#581C87',
    bg2: '#701A75',
    accent1: '#D946EF',
    accent2: '#F0ABFC',
    glow: '#F5D0FE'
  }
};

function renderIllustration(type, cx, cy, colors) {
  switch (type) {
    case 'ai_network':
      return `
        <!-- AI Neural Nodes & Orbitals -->
        <circle cx="${cx}" cy="${cy}" r="110" fill="none" stroke="${colors.accent1}" stroke-width="2" stroke-opacity="0.3" stroke-dasharray="6 6"/>
        <circle cx="${cx}" cy="${cy}" r="75" fill="none" stroke="${colors.accent2}" stroke-width="2" stroke-opacity="0.5"/>
        <circle cx="${cx}" cy="${cy}" r="45" fill="${colors.accent1}" fill-opacity="0.25"/>
        <circle cx="${cx}" cy="${cy}" r="22" fill="${colors.glow}"/>
        
        <!-- Satellite Nodes -->
        <line x1="${cx}" y1="${cy}" x2="${cx - 65}" y2="${cy - 50}" stroke="${colors.accent2}" stroke-width="2" stroke-opacity="0.7"/>
        <circle cx="${cx - 65}" cy="${cy - 50}" r="12" fill="${colors.accent1}"/>
        
        <line x1="${cx}" y1="${cy}" x2="${cx + 70}" y2="${cy - 40}" stroke="${colors.accent2}" stroke-width="2" stroke-opacity="0.7"/>
        <circle cx="${cx + 70}" cy="${cy - 40}" r="14" fill="${colors.accent2}"/>
        
        <line x1="${cx}" y1="${cy}" x2="${cx + 50}" y2="${cy + 65}" stroke="${colors.accent2}" stroke-width="2" stroke-opacity="0.7"/>
        <circle cx="${cx + 50}" cy="${cy + 65}" r="11" fill="${colors.accent1}"/>

        <line x1="${cx}" y1="${cy}" x2="${cx - 70}" y2="${cy + 55}" stroke="${colors.accent2}" stroke-width="2" stroke-opacity="0.7"/>
        <circle cx="${cx - 70}" cy="${cy + 55}" r="13" fill="${colors.accent2}"/>
      `;

    case 'cloud_mesh':
      return `
        <!-- Cloud Clusters & Server Layers -->
        <circle cx="${cx}" cy="${cy}" r="105" fill="none" stroke="${colors.accent1}" stroke-width="2" stroke-opacity="0.3"/>
        <rect x="${cx - 75}" y="${cy - 50}" width="150" height="30" rx="8" fill="${colors.accent1}" fill-opacity="0.3" stroke="${colors.accent2}" stroke-width="2"/>
        <rect x="${cx - 60}" y="${cy - 10}" width="120" height="30" rx="8" fill="${colors.accent1}" fill-opacity="0.5" stroke="${colors.accent2}" stroke-width="2"/>
        <rect x="${cx - 45}" y="${cy + 30}" width="90" height="28" rx="8" fill="${colors.glow}" fill-opacity="0.8"/>
        <!-- LED indicator dots -->
        <circle cx="${cx - 55}" cy="${cy - 35}" r="4" fill="#67E8F9"/>
        <circle cx="${cx - 42}" cy="${cy - 35}" r="4" fill="#34D399"/>
        <circle cx="${cx - 40}" cy="${cy + 5}" r="4" fill="#67E8F9"/>
      `;

    case 'growth_chart':
      return `
        <!-- Geometric Growth Bars & Trendline -->
        <line x1="${cx - 80}" y1="${cy + 60}" x2="${cx + 80}" y2="${cy + 60}" stroke="${colors.accent2}" stroke-width="2" stroke-opacity="0.5"/>
        <rect x="${cx - 65}" y="${cy + 10}" width="24" height="50" rx="4" fill="${colors.accent1}" fill-opacity="0.4"/>
        <rect x="${cx - 30}" y="${cy - 15}" width="24" height="75" rx="4" fill="${colors.accent1}" fill-opacity="0.6"/>
        <rect x="${cx + 5}" y="${cy - 45}" width="24" height="105" rx="4" fill="${colors.accent1}" fill-opacity="0.8"/>
        <rect x="${cx + 40}" y="${cy - 75}" width="24" height="135" rx="4" fill="${colors.glow}"/>
        <!-- Sparkle arrow -->
        <polyline points="${cx - 65},${cy + 10} ${cx - 20},${cy - 20} ${cx + 15},${cy - 50} ${cx + 55},${cy - 80}" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
        <circle cx="${cx + 55}" cy="${cy - 80}" r="6" fill="#FFFFFF"/>
      `;

    case 'design_cube':
      return `
        <!-- Isometric Spatial Prism -->
        <circle cx="${cx}" cy="${cy}" r="100" fill="none" stroke="${colors.accent1}" stroke-width="2" stroke-opacity="0.3" stroke-dasharray="8 6"/>
        <polygon points="${cx},${cy - 65} ${cx + 60},${cy - 30} ${cx},${cy + 5} ${cx - 60},${cy - 30}" fill="${colors.glow}" fill-opacity="0.85"/>
        <polygon points="${cx},${cy + 5} ${cx + 60},${cy - 30} ${cx + 60},${cy + 40} ${cx},${cy + 75}" fill="${colors.accent1}" fill-opacity="0.7"/>
        <polygon points="${cx},${cy + 5} ${cx - 60},${cy - 30} ${cx - 60},${cy + 40} ${cx},${cy + 75}" fill="${colors.accent2}" fill-opacity="0.5"/>
      `;

    case 'shield_lock':
      return `
        <!-- Security Shield & Lock Core -->
        <circle cx="${cx}" cy="${cy}" r="100" fill="none" stroke="${colors.accent1}" stroke-width="2" stroke-opacity="0.3"/>
        <path d="M ${cx} ${cy - 65} L ${cx + 55} ${cy - 35} L ${cx + 55} ${cy + 15} C ${cx + 55} ${cy + 55} ${cx} ${cy + 75} ${cx} ${cy + 75} C ${cx} ${cy + 75} ${cx - 55} ${cy + 55} ${cx - 55} ${cy + 15} L ${cx - 55} ${cy - 35} Z" fill="${colors.accent1}" fill-opacity="0.4" stroke="${colors.accent2}" stroke-width="3"/>
        <circle cx="${cx}" cy="${cy + 5}" r="16" fill="${colors.glow}"/>
        <rect x="${cx - 4}" y="${cy + 5}" width="8" height="22" rx="3" fill="#FFFFFF"/>
      `;

    default:
      return `
        <circle cx="${cx}" cy="${cy}" r="90" fill="none" stroke="${colors.accent1}" stroke-width="2" stroke-opacity="0.4"/>
        <circle cx="${cx}" cy="${cy}" r="50" fill="${colors.accent1}" fill-opacity="0.3"/>
        <polygon points="${cx},${cy - 40} ${cx + 35},${cy + 25} ${cx - 35},${cy + 25}" fill="${colors.glow}"/>
      `;
  }
}

function generateSvg(item) {
  const { width, height, tag, title, subtitle, theme, illustration } = item;
  const colors = THEME_COLORS[theme] || THEME_COLORS.indigo;
  const isSquare = width === height;

  const safeTag = escapeXml(tag);
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);

  if (isSquare) {
    // Organizer avatar SVG
    return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sqBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colors.bg1}" />
          <stop offset="100%" stop-color="${colors.bg2}" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" rx="24" fill="url(#sqBg)"/>
      <circle cx="${width/2}" cy="${height/2}" r="55" fill="${colors.accent1}" fill-opacity="0.3" stroke="${colors.accent2}" stroke-width="2"/>
      <text x="50%" y="48%" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF" text-anchor="middle" dominant-baseline="middle">
        ${safeTitle.substring(0, 2).toUpperCase()}
      </text>
      <text x="50%" y="74%" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="700" fill="${colors.accent2}" text-anchor="middle" letter-spacing="1">
        ${safeTag}
      </text>
    </svg>`;
  }

  // Pure graphic illustration canvas - NO text in the top or middle
  // Right side: Geometric tech vector illustration
  // Left side: Abstract glowing gradients and depth patterns
  const illustrationCenterX = width * 0.72;
  const illustrationCenterY = height * 0.5;

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#070B14" />
        <stop offset="40%" stop-color="${colors.bg1}" />
        <stop offset="100%" stop-color="${colors.bg2}" />
      </linearGradient>

      <radialGradient id="leftGlow" cx="20%" cy="40%" r="55%">
        <stop offset="0%" stop-color="${colors.accent1}" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="${colors.accent1}" stop-opacity="0"/>
      </radialGradient>

      <radialGradient id="rightGlow" cx="72%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${colors.glow}" stop-opacity="0.45"/>
        <stop offset="100%" stop-color="${colors.bg1}" stop-opacity="0"/>
      </radialGradient>

      <pattern id="dotPattern" width="28" height="28" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.5" fill="rgba(255,255,255,0.08)"/>
      </pattern>
    </defs>

    <!-- Deep Tech Surface -->
    <rect width="${width}" height="${height}" fill="url(#mainGrad)"/>
    <rect width="${width}" height="${height}" fill="url(#dotPattern)"/>
    
    <!-- Atmospheric depth lighting -->
    <rect width="${width}" height="${height}" fill="url(#leftGlow)"/>
    <rect width="${width}" height="${height}" fill="url(#rightGlow)"/>

    <!-- Left visual: ambient tech radar and data rings -->
    <g transform="translate(${width * 0.18}, ${height * 0.5})">
      <circle cx="0" cy="0" r="130" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="85" fill="none" stroke="${colors.accent1}" stroke-width="1.5" stroke-opacity="0.25" stroke-dasharray="4 8"/>
      <circle cx="0" cy="0" r="40" fill="${colors.accent1}" fill-opacity="0.15"/>
      <!-- Diagonal speed lines -->
      <line x1="-120" y1="80" x2="60" y2="-100" stroke="${colors.accent2}" stroke-width="1.5" stroke-opacity="0.2"/>
      <line x1="-80" y1="120" x2="100" y2="-60" stroke="${colors.accent1}" stroke-width="1" stroke-opacity="0.15"/>
    </g>

    <!-- Right visual: Crisp rich technical vector illustration -->
    <g>
      ${renderIllustration(illustration, illustrationCenterX, illustrationCenterY, colors)}
    </g>

    <!-- Bottom aesthetic tech ribbon indicator -->
    <line x1="0" y1="${height - 2}" x2="${width}" y2="${height - 2}" stroke="${colors.accent1}" stroke-width="4" stroke-opacity="0.8"/>
  </svg>`;
}

async function run() {
  console.log('Generating crisp illustrated banner graphics without overlapping text...');
  const report = [];

  for (const item of imagesToGenerate) {
    const svgString = generateSvg(item);
    const destPath = path.join(item.dir, item.filename);

    let quality = 82;
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
  console.log('Finished updating all WebP illustrated graphics!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
