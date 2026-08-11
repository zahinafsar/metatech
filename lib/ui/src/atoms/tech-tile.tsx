import * as React from 'react';

import { cn } from '../lib/utils';

function TechTile({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="tech-tile"
      className={cn(
        'relative flex h-[150px] shrink-0 items-center justify-center overflow-hidden rounded-tile border-[0.5px] border-hairline-light bg-secondary',
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
      className={cn('max-w-none object-contain', className)}
      {...props}
    />
  );
}

export { TechTile, TechTileImage };
