#!/usr/bin/env node

/**
 * Image Analysis Script
 * Analyzes all images in the project and provides optimization recommendations
 */

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../src/assets/images');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

function getOptimizationRecommendation(fileSizeKB, ext) {
  if (ext === '.svg') {
    return { priority: 'SKIP', color: colors.green, savings: '0%' };
  }
  
  if (fileSizeKB > 200) {
    return { priority: 'CRITICAL', color: colors.red, savings: '70-80%' };
  } else if (fileSizeKB > 100) {
    return { priority: 'HIGH', color: colors.yellow, savings: '60-75%' };
  } else if (fileSizeKB > 50) {
    return { priority: 'MEDIUM', color: colors.cyan, savings: '50-65%' };
  } else if (fileSizeKB > 20) {
    return { priority: 'LOW', color: colors.blue, savings: '40-55%' };
  } else {
    return { priority: 'OK', color: colors.green, savings: '20-30%' };
  }
}

console.log(`\n${colors.bold}${colors.magenta}🖼️  IMAGE OPTIMIZATION ANALYSIS${colors.reset}\n`);
console.log(`Analyzing images in: ${imagesDir}\n`);

try {
  const files = fs.readdirSync(imagesDir);
  const imageFiles = files.filter(file => 
    /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(file)
  );

  if (imageFiles.length === 0) {
    console.log(`${colors.yellow}No image files found.${colors.reset}`);
    process.exit(0);
  }

  const imageData = imageFiles.map(file => {
    const filePath = path.join(imagesDir, file);
    const stats = fs.statSync(filePath);
    const ext = path.extname(file).toLowerCase();
    const fileSizeKB = stats.size / 1024;
    const recommendation = getOptimizationRecommendation(fileSizeKB, ext);

    return {
      name: file,
      size: stats.size,
      sizeKB: fileSizeKB,
      ext,
      recommendation
    };
  });

  // Sort by size (largest first)
  imageData.sort((a, b) => b.size - a.size);

  // Calculate totals
  const totalSize = imageData.reduce((sum, img) => sum + img.size, 0);
  const totalSizeKB = totalSize / 1024;
  const totalSizeMB = totalSize / (1024 * 1024);

  // Group by priority
  const critical = imageData.filter(img => img.recommendation.priority === 'CRITICAL');
  const high = imageData.filter(img => img.recommendation.priority === 'HIGH');
  const medium = imageData.filter(img => img.recommendation.priority === 'MEDIUM');
  const low = imageData.filter(img => img.recommendation.priority === 'LOW');
  const ok = imageData.filter(img => img.recommendation.priority === 'OK' || img.recommendation.priority === 'SKIP');

  // Display summary
  console.log(`${colors.bold}SUMMARY:${colors.reset}`);
  console.log(`Total Images: ${imageFiles.length}`);
  console.log(`Total Size: ${formatBytes(totalSize)} (${totalSizeMB.toFixed(2)} MB)`);
  console.log('');

  console.log(`${colors.bold}BY PRIORITY:${colors.reset}`);
  console.log(`${colors.red}CRITICAL:${colors.reset} ${critical.length} images (> 200KB each)`);
  console.log(`${colors.yellow}HIGH:${colors.reset}     ${high.length} images (100-200KB)`);
  console.log(`${colors.cyan}MEDIUM:${colors.reset}   ${medium.length} images (50-100KB)`);
  console.log(`${colors.blue}LOW:${colors.reset}      ${low.length} images (20-50KB)`);
  console.log(`${colors.green}OK:${colors.reset}       ${ok.length} images (< 20KB or SVG)`);
  console.log('');

  // Display top offenders
  console.log(`${colors.bold}${colors.red}🚨 TOP 10 IMAGES TO OPTIMIZE:${colors.reset}\n`);
  console.log(`${'File'.padEnd(30)} ${'Size'.padEnd(12)} ${'Priority'.padEnd(12)} Expected Savings`);
  console.log('─'.repeat(80));

  const top10 = imageData.slice(0, 10).filter(img => img.recommendation.priority !== 'SKIP');
  top10.forEach((img, index) => {
    const { name, sizeKB, recommendation } = img;
    const displayName = name.length > 28 ? name.substring(0, 25) + '...' : name;
    const priorityText = `${recommendation.color}${recommendation.priority}${colors.reset}`;
    
    console.log(
      `${(index + 1).toString().padStart(2)}.`,
      displayName.padEnd(28),
      formatBytes(img.size).padEnd(10),
      priorityText.padEnd(22),
      recommendation.savings
    );
  });

  console.log('');

  // Calculate potential savings
  const potentialSavings = critical.reduce((sum, img) => sum + img.size * 0.75, 0) +
                           high.reduce((sum, img) => sum + img.size * 0.65, 0) +
                           medium.reduce((sum, img) => sum + img.size * 0.55, 0);
  const savingsKB = potentialSavings / 1024;
  const savingsMB = potentialSavings / (1024 * 1024);
  const savingsPercent = ((potentialSavings / totalSize) * 100).toFixed(1);

  console.log(`${colors.bold}${colors.green}💰 POTENTIAL SAVINGS:${colors.reset}`);
  console.log(`Current Size: ${formatBytes(totalSize)}`);
  console.log(`After Optimization: ~${formatBytes(totalSize - potentialSavings)}`);
  console.log(`${colors.bold}${colors.green}Savings: ${formatBytes(potentialSavings)} (${savingsPercent}%)${colors.reset}`);
  console.log('');

  // Recommendations
  console.log(`${colors.bold}${colors.cyan}📋 RECOMMENDED ACTIONS:${colors.reset}\n`);
  
  if (critical.length > 0) {
    console.log(`${colors.bold}1. CRITICAL - Compress these immediately:${colors.reset}`);
    critical.forEach(img => {
      console.log(`   - ${img.name} (${formatBytes(img.size)})`);
    });
    console.log('');
  }

  if (high.length > 0) {
    console.log(`${colors.bold}2. HIGH - Optimize next:${colors.reset}`);
    high.slice(0, 5).forEach(img => {
      console.log(`   - ${img.name} (${formatBytes(img.size)})`);
    });
    if (high.length > 5) {
      console.log(`   ... and ${high.length - 5} more`);
    }
    console.log('');
  }

  console.log(`${colors.bold}${colors.blue}🛠️  TOOLS TO USE:${colors.reset}`);
  console.log('   • TinyPNG.com - Easy online compression');
  console.log('   • Squoosh.app - Google\'s image optimizer');
  console.log('   • Cloudconvert.com - Convert to WebP format');
  console.log('   • scripts/optimize-images.js - Automated optimization');
  console.log('');

  console.log(`${colors.bold}${colors.magenta}✨ NEXT STEPS:${colors.reset}`);
  console.log('   1. Run: npm install --save-dev sharp');
  console.log('   2. Run: node scripts/optimize-images.js');
  console.log('   3. Or manually upload top images to TinyPNG.com');
  console.log('   4. Replace original files with compressed versions');
  console.log('');

} catch (error) {
  console.error(`${colors.red}Error analyzing images:${colors.reset}`, error.message);
  process.exit(1);
}

