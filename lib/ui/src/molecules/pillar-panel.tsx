import * as React from 'react';

import { cn } from '../lib/utils';

function PillarPanel({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="pillar-panel"
      className={cn('flex flex-col gap-10 lg:flex-row lg:gap-[80px]', className)}
      {...props}
    />
  );
}

function PillarNumber({
  className,
  src,
  alt,
  ...props
}: React.ComponentProps<'img'> & { alt: string }) {
  return (
    <img
      data-slot="pillar-number"
      src={src}
      alt={alt}
      className={cn('h-[117px] w-[147px] shrink-0', className)}
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
        'max-w-[461px] font-display text-[32px] leading-9 font-extrabold tracking-[-1.6px]',
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
