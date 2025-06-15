const fs = require('fs');
const path = require('path');

// Define the image directories
const imageDirs = [
  'public/images/photos',
  'public/images/backgrounds',
  'public/images/community',
  'public/images/about',
  'public/images/lifestyle',
  'public/images/products',
  'public/images/hero'
];

// Create directories if they don't exist
imageDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Define required product images
const productImages = [
  'the-cut-hero.jpg',
  'the-cut-gallery-1.jpg',
  'the-cut-gallery-2.jpg',
  'the-cut-gallery-3.jpg',
  'the-cut-gallery-4.jpg',
  'the-cut-white.jpg',
  'the-cut-limited.jpg',
  'the-cut-black.jpg'
];

// Create placeholder images for products
productImages.forEach(image => {
  const imagePath = path.join('public/images/products', image);
  if (!fs.existsSync(imagePath)) {
    // Create a simple placeholder image using a data URL
    const placeholderImage = `data:image/svg+xml,${encodeURIComponent(`
      <svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f3f4f6"/>
        <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#6b7280" text-anchor="middle" dy=".3em">
          ${image.replace('.jpg', '')}
        </text>
      </svg>
    `)}`;
    
    fs.writeFileSync(imagePath, placeholderImage);
    console.log(`Created placeholder image: ${imagePath}`);
  }
});

console.log('Image setup complete!'); 