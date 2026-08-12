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

function TechGridTrack({
  row,
  reverse,
  hidden,
}: {
  row: TechGridItem[];
  reverse: boolean;
  hidden?: boolean;
}) {
  return (
    <div
      aria-hidden={hidden}
      style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
      className="flex w-max shrink-0 gap-[10px] animate-marquee group-hover/marquee:[animation-play-state:paused] motion-reduce:animate-none"
    >
      {row.map((item) => (
        <TechTile key={item.name} style={{ width: item.cell }} className="shrink-0">
          <TechTileImage
            src={item.src}
            alt={hidden ? '' : item.name}
            style={{ width: item.width, height: item.height }}
            className="max-w-[85%]"
          />
        </TechTile>
      ))}
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
        <div key={rowIndex} data-slot="tech-grid-row" className="flex gap-[10px] overflow-hidden">
          <TechGridTrack row={row} reverse={rowIndex % 2 === 1} />
          <TechGridTrack row={row} reverse={rowIndex % 2 === 1} hidden />
        </div>
      ))}
    </div>
  );
}

export { TechGrid, type TechGridItem };
