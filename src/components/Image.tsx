'use client';

import NextImage from 'next/image';
import { useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  objectFit?: 'contain' | 'cover' | 'fill';
}

export default function Image({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  objectFit = 'cover',
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
          ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
} 