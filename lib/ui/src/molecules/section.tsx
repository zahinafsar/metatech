import * as React from 'react';

import { cn } from '../lib/utils';

function Section({ className, ...props }: React.ComponentProps<'section'>) {
  return <section data-slot="section" className={cn('w-full', className)} {...props} />;
}

function SectionInner({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="section-inner"
      className={cn('mx-auto w-full max-w-[1400px] px-5', className)}
      {...props}
    />
  );
}

function SectionSplit({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="section-split"
      className={cn('flex flex-col gap-10 lg:flex-row lg:gap-[100px]', className)}
      {...props}
    />
  );
}

function SectionTitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      data-slot="section-title"
      className={cn(
        'font-display text-[32px] leading-9 font-extrabold tracking-[-1.6px]',
        className,
      )}
      {...props}
    />
  );
}

function SectionBody({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="section-body"
      className={cn('text-lg leading-[27px] tracking-[-0.54px]', className)}
      {...props}
    />
  );
}

export { Section, SectionInner, SectionSplit, SectionTitle, SectionBody };
