import * as React from 'react';

import { cn } from '../utils';

function PillarPanel({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="pillar-panel"
      className={cn('flex flex-col gap-10 xl:flex-row xl:gap-[80px]', className)}
      {...props}
    />
  );
}

function PillarNumber({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="pillar-number"
      className={cn(
        'shrink-0 w-[164px] font-display text-[120px] leading-none font-extrabold tracking-[-6px] md:text-[148px] md:tracking-[-7.4px]',
        className,
      )}
      {...props}
    />
  );
}

function PillarContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="pillar-content"
      className={cn('flex max-w-[610px] flex-col items-start gap-5', className)}
      {...props}
    />
  );
}

function PillarTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3
      data-slot="pillar-title"
      className={cn(
        'max-w-[461px] font-display text-[24px] md:text-[32px] leading-9 font-extrabold tracking-[-1.6px]',
        className,
      )}
      {...props}
    />
  );
}

function PillarBody({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="pillar-body"
      className={cn('text-lg leading-[27px] tracking-[-0.54px]', className)}
      {...props}
    />
  );
}

export { PillarPanel, PillarNumber, PillarContent, PillarTitle, PillarBody };
