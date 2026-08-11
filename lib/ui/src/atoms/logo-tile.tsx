import * as React from 'react';

import { cn } from '../lib/utils';

function LogoTile({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="logo-tile"
      className={cn(
        'flex h-[100px] flex-col items-center justify-center border border-hairline-dark px-4',
        className,
      )}
      {...props}
    />
  );
}

function LogoTileImage({
  className,
  alt = '',
  ...props
}: React.ComponentProps<'img'> & { alt?: string }) {
  return (
    <img
      data-slot="logo-tile-image"
      alt={alt}
      loading="lazy"
      className={cn('max-h-[60%] max-w-full object-contain', className)}
      {...props}
    />
  );
}

export { LogoTile, LogoTileImage };
