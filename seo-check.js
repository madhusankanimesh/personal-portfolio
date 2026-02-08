#!/usr/bin/env node

/**
 * SEO Validation Script for Pabasara Fernando Portfolio
 * Run this script to validate SEO optimizations before deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 SEO Validation for Pabasara Fernando Portfolio\n');

// Check if required files exist
const requiredFiles = [
  'public/robots.txt',
  'public/sitemap.xml',
  'app/layout.tsx',
  'components/sections/Hero.tsx',
  'components/sections/Contact.tsx'
];

console.log('📁 Checking required files:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`   ${exists ? '✅' : '❌'} ${file}`);
});

// Check layout.tsx for SEO elements
console.log('\n🏷️  Checking metadata in layout.tsx:');
try {
  const layoutContent = fs.readFileSync(path.join(__dirname, 'app/layout.tsx'), 'utf8');
  
  const seoChecks = [
    { name: 'Title includes "Pabasara Fernando"', check: layoutContent.includes('Pabasara Fernando') },
    { name: 'Meta description present', check: layoutContent.includes('description:') },
    { name: 'Keywords present', check: layoutContent.includes('keywords:') },
    { name: 'Open Graph tags', check: layoutContent.includes('openGraph:') },
    { name: 'Twitter cards', check: layoutContent.includes('twitter:') },
    { name: 'Canonical URL set', check: layoutContent.includes('canonical') },
    { name: 'Structured data (JSON-LD)', check: layoutContent.includes('application/ld+json') }
  ];

  seoChecks.forEach(check => {
    console.log(`   ${check.check ? '✅' : '❌'} ${check.name}`);
  });
} catch (error) {
  console.log('   ❌ Error reading layout.tsx');
}

// Check robots.txt
console.log('\n🤖 Checking robots.txt:');
try {
  const robotsContent = fs.readFileSync(path.join(__dirname, 'public/robots.txt'), 'utf8');
  
  const robotsChecks = [
    { name: 'Allow all crawlers', check: robotsContent.includes('User-agent: *') },
    { name: 'Sitemap URL present', check: robotsContent.includes('Sitemap:') },
    { name: 'Domain-specific sitemap', check: robotsContent.includes('pabasarafernando.me') }
  ];

  robotsChecks.forEach(check => {
    console.log(`   ${check.check ? '✅' : '❌'} ${check.name}`);
  });
} catch (error) {
  console.log('   ❌ Error reading robots.txt');
}

// Check Hero section for SEO content
console.log('\n👤 Checking Hero section:');
try {
  const heroContent = fs.readFileSync(path.join(__dirname, 'components/sections/Hero.tsx'), 'utf8');
  
  const heroChecks = [
    { name: 'Name "PABASARA FERNANDO" present', check: heroContent.includes('PABASARA') && heroContent.includes('FERNANDO') },
    { name: 'Professional description', check: heroContent.includes('Full Stack Developer') || heroContent.includes('Creative Technologist') },
    { name: 'Alt text for profile image', check: heroContent.includes('alt=') && heroContent.includes('Pabasara Fernando') },
    { name: 'SEO-friendly skills listed', check: heroContent.includes('React') || heroContent.includes('Next.js') }
  ];

  heroChecks.forEach(check => {
    console.log(`   ${check.check ? '✅' : '❌'} ${check.name}`);
  });
} catch (error) {
  console.log('   ❌ Error reading Hero.tsx');
}

// Check Contact section for social links
console.log('\n📱 Checking social media links:');
try {
  const contactContent = fs.readFileSync(path.join(__dirname, 'components/sections/Contact.tsx'), 'utf8');
  
  const socialChecks = [
    { name: 'GitHub link updated', check: contactContent.includes('github.com/pabasarafernando') },
    { name: 'LinkedIn link updated', check: contactContent.includes('linkedin.com/in/pabasarafernando') },
    { name: 'Twitter link updated', check: contactContent.includes('twitter.com/pabasarafernando') },
    { name: 'Email updated', check: contactContent.includes('pabasarafernando.me') }
  ];

  socialChecks.forEach(check => {
    console.log(`   ${check.check ? '✅' : '❌'} ${check.name}`);
  });
} catch (error) {
  console.log('   ❌ Error reading Contact.tsx');
}

// Check package.json for SEO metadata
console.log('\n📦 Checking package.json:');
try {
  const packageContent = fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8');
  const packageData = JSON.parse(packageContent);
  
  const packageChecks = [
    { name: 'Name includes "pabasara-fernando"', check: packageData.name && packageData.name.includes('pabasara') },
    { name: 'Description present', check: !!packageData.description },
    { name: 'Keywords array present', check: Array.isArray(packageData.keywords) },
    { name: 'Author information', check: !!packageData.author },
    { name: 'Homepage URL set', check: !!packageData.homepage }
  ];

  packageChecks.forEach(check => {
    console.log(`   ${check.check ? '✅' : '❌'} ${check.name}`);
  });
} catch (error) {
  console.log('   ❌ Error reading package.json');
}

console.log('\n🚀 Next Steps:');
console.log('   1. Run "npm run build" to test production build');
console.log('   2. Deploy to Vercel');
console.log('   3. Configure custom domain: pabasarafernando.me');
console.log('   4. Submit sitemap to Google Search Console');
console.log('   5. Update social media profiles with new website');
console.log('\n💡 SEO Validation Complete!');
