import * as React from 'react';

import { cn } from '../utils';

function TechTile({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="tech-tile"
      className={cn(
        'relative flex h-[100px] shrink-0 items-center justify-center overflow-hidden rounded-tile border-[0.5px] border-hairline-light bg-secondary md:h-[150px]',
        className,
      )}
      {...props}
    />
  );
}

function TechTileImage({
  className,
  alt,
  ...props
}: React.ComponentProps<'img'> & { alt: string }) {
  return (
    <img
      data-slot="tech-tile-image"
      alt={alt}
      loading="lazy"
      decoding="async"
      className={cn('max-w-none object-contain', className)}
      {...props}
    />
  );
}

export { TechTile, TechTileImage };
