import * as React from 'react';

import { TechTile, TechTileImage } from '../atoms/tech-tile';
import { cn } from '../lib/utils';

type TechGridItem = {
  name: string;
  src: string;
  cell: number;
  width: number;
  height: number;
};

function TechGrid({
  className,
  rows,
  ...props
}: React.ComponentProps<'div'> & { rows: TechGridItem[][] }) {
  return (
    <div
      data-slot="tech-grid"
      className={cn('flex w-full flex-col gap-[10px]', className)}
      {...props}
    >
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} data-slot="tech-grid-row" className="flex w-full gap-[10px]">
          {row.map((item, index) => (
            <TechTile
              key={item.name}
              style={{ flexGrow: item.cell, flexBasis: 0, minWidth: 0 }}
              className={cn(
                index === 0 && 'rounded-l-none',
                index === row.length - 1 && 'rounded-r-none',
              )}
            >
              <TechTileImage
                src={item.src}
                alt={item.name}
                style={{ width: item.width, height: item.height }}
                className="max-w-[85%]"
              />
            </TechTile>
          ))}
        </div>
      ))}
    </div>
  );
}

export { TechGrid, type TechGridItem };
