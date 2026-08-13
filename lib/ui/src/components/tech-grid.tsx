import * as React from 'react';

import { TechTile, TechTileImage } from '../components/tech-tile';
import { cn } from '../utils';

type TechGridItem = {
  name: string;
  src: string;
  cell: number;
  width: number;
  height: number;
};

function TechGridRow({ row, reverse }: { row: TechGridItem[]; reverse: boolean }) {
  const sequence = [...row, ...row];
  const items = [...sequence, ...sequence];

  return (
    <div data-slot="tech-grid-row" className="w-full overflow-hidden">
      <div
        style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
        className="flex w-max animate-marquee group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none"
      >
        {items.map((item, itemIndex) => {
          const hidden = itemIndex >= row.length;

          return (
            <TechTile
              key={`${itemIndex}-${item.name}`}
              aria-hidden={hidden}
              style={{ width: item.cell }}
              className="mr-[10px] shrink-0"
            >
              <TechTileImage
                src={item.src}
                alt={hidden ? '' : `${item.name} logo`}
                width={item.width}
                height={item.height}
                style={{ width: item.width, height: item.height }}
                className="max-w-[85%]"
              />
            </TechTile>
          );
        })}
      </div>
    </div>
  );
}

function TechGrid({
  className,
  rows,
  ...props
}: React.ComponentProps<'div'> & { rows: TechGridItem[][] }) {
  return (
    <div
      data-slot="tech-grid"
      className={cn('group/marquee flex w-full flex-col gap-[10px]', className)}
      {...props}
    >
      {rows.map((row, rowIndex) => (
        <TechGridRow key={rowIndex} row={row} reverse={rowIndex % 2 === 1} />
      ))}
    </div>
  );
}

export { TechGrid, type TechGridItem };
