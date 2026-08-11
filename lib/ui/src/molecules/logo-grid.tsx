import * as React from 'react';

import { LogoTile, LogoTileImage } from '../atoms/logo-tile';
import { cn } from '../lib/utils';

type LogoGridItem = {
  name: string;
  src: string;
  width: number;
  height: number;
};

function LogoGrid({
  className,
  items,
  ...props
}: React.ComponentProps<'div'> & { items: LogoGridItem[] }) {
  return (
    <div
      data-slot="logo-grid"
      className={cn('grid grid-cols-2 sm:grid-cols-4', className)}
      {...props}
    >
      {items.map((item, index) => (
        <LogoTile key={`${item.name}-${index}`} className="-mr-px -mb-px">
          <LogoTileImage
            src={item.src}
            alt={item.name}
            style={{ width: item.width, height: item.height }}
          />
        </LogoTile>
      ))}
    </div>
  );
}

export { LogoGrid, type LogoGridItem };
