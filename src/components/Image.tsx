'use client';

import NextImage from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
  quality?: number;
}

export default function Image({
  src,
  alt,
  width,
  height,
  fill,
  sizes,
  className = '',
  priority = false,
  quality = 75,
}: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      sizes={sizes}
      priority={priority}
      quality={quality}
      className={className}
    />
  );
} 