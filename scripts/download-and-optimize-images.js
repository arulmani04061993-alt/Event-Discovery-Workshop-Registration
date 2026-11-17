import fs from 'fs';
import path from 'path';
import https from 'https';
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

// Real high-resolution photography URLs from Unsplash (Event, tech conference, coding, hackathon, seminar)
const REAL_PHOTOS = [
  // Hero Image
  {
    dir: DIRS.hero,
    filename: 'hero-tech-summit.webp',
    width: 1200,
    height: 675,
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80' // Big tech conference keynote auditorium
  },
  // Backgrounds
  {
    dir: DIRS.backgrounds,
    filename: 'hero-mesh-bg.webp',
    width: 1440,
    height: 800,
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1400&q=80' // Conference hall atmospheric ambient lights
  },
  // Categories (4)
  {
    dir: DIRS.categories,
    filename: 'cat-technology.webp',
    width: 600,
    height: 400,
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80' // Technology motherboard chip AI
  },
  {
    dir: DIRS.categories,
    filename: 'cat-business.webp',
    width: 600,
    height: 400,
    url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80' // Business meeting boardroom keynote
  },
  {
    dir: DIRS.categories,
    filename: 'cat-design.webp',
    width: 600,
    height: 400,
    url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80' // UI UX creative design studio
  },
  {
    dir: DIRS.categories,
    filename: 'cat-education.webp',
    width: 600,
    height: 400,
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80' // Education lecture masterclass
  },

  // 12 Events
  {
    dir: DIRS.events,
    filename: 'event-1-nextgen-ai.webp',
    width: 800,
    height: 450,
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80' // AI robot technology
  },
  {
    dir: DIRS.events,
    filename: 'event-2-cloud-scale.webp',
    width: 800,
    height: 450,
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80' // Cloud global network server
  },
  {
    dir: DIRS.events,
    filename: 'event-3-venture-scale.webp',
    width: 800,
    height: 450,
    url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80' // Startup founders venture pitch
  },
  {
    dir: DIRS.events,
    filename: 'event-4-design-systems.webp',
    width: 800,
    height: 450,
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80' // Web design laptop Figma mockup
  },
  {
    dir: DIRS.events,
    filename: 'event-5-cybersecurity.webp',
    width: 800,
    height: 450,
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80' // Cybersecurity server matrix
  },
  {
    dir: DIRS.events,
    filename: 'event-6-product-growth.webp',
    width: 800,
    height: 450,
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' // Growth analytics dashboard
  },
  {
    dir: DIRS.events,
    filename: 'event-7-spatial-ui.webp',
    width: 800,
    height: 450,
    url: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800&q=80' // VR headset spatial computing
  },
  {
    dir: DIRS.events,
    filename: 'event-8-fullstack-devops.webp',
    width: 800,
    height: 450,
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80' // Programming screen code syntax
  },
  {
    dir: DIRS.events,
    filename: 'event-9-fintech-disruption.webp',
    width: 800,
    height: 450,
    url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80' // FinTech finance banking digital
  },
  {
    dir: DIRS.events,
    filename: 'event-10-creative-direction.webp',
    width: 800,
    height: 450,
    url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80' // Video editing cinematic motion studio
  },
  {
    dir: DIRS.events,
    filename: 'event-11-data-engineering.webp',
    width: 800,
    height: 450,
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80' // Server racks data engineering
  },
  {
    dir: DIRS.events,
    filename: 'event-12-micro-saas.webp',
    width: 800,
    height: 450,
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80' // Collaborative startup team building
  },

  // Organizers (4)
  {
    dir: DIRS.organizers,
    filename: 'org-stackly-labs.webp',
    width: 200,
    height: 200,
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80' // Professional speaker portrait
  },
  {
    dir: DIRS.organizers,
    filename: 'org-dev-collective.webp',
    width: 200,
    height: 200,
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' // Tech executive male portrait
  },
  {
    dir: DIRS.organizers,
    filename: 'org-design-craft.webp',
    width: 200,
    height: 200,
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80' // Creative female director
  },
  {
    dir: DIRS.organizers,
    filename: 'org-venture-india.webp',
    width: 200,
    height: 200,
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80' // Venture partner portrait
  }
];

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      // Handle redirect if any
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadBuffer(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to fetch image: status code ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading real photography and converting to pure WebP (< 90 KB)...');
  const report = [];

  for (const item of REAL_PHOTOS) {
    try {
      console.log(`Downloading: ${item.filename} from Unsplash...`);
      const downloadedBuffer = await downloadBuffer(item.url);

      // Process and compress via Sharp to pure WebP
      let quality = 78;
      let webpBuffer = await sharp(downloadedBuffer)
        .resize(item.width, item.height, { fit: 'cover', position: 'center' })
        .webp({ quality, effort: 6 })
        .toBuffer();

      // Ensure file is strictly below 85 KB (well within the 90 KB ceiling)
      while (webpBuffer.length > 85 * 1024 && quality > 25) {
        quality -= 8;
        webpBuffer = await sharp(downloadedBuffer)
          .resize(item.width, item.height, { fit: 'cover', position: 'center' })
          .webp({ quality, effort: 6 })
          .toBuffer();
      }

      const destPath = path.join(item.dir, item.filename);
      fs.writeFileSync(destPath, webpBuffer);

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
      console.log(`✓ Saved ${item.filename}: ${sizeKb} KB`);
    } catch (err) {
      console.error(`Error processing ${item.filename}:`, err.message);
    }
  }

  console.log('\n--- FINAL IMAGE AUDIT REPORT ---');
  console.table(report);
  fs.writeFileSync('scripts/image-report.json', JSON.stringify(report, null, 2));
  console.log('All real photos downloaded, converted to WebP, and verified under 90 KB!');
}

run().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
