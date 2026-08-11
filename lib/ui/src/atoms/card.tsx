import * as React from 'react';

import { cn } from '../lib/utils';

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'flex flex-col justify-center rounded-tile border border-border bg-card p-[30px] text-card-foreground',
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="card-title"
      className={cn(
        'font-display text-[32px] leading-[42px] font-extrabold tracking-[-1.6px]',
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="card-description"
      className={cn('text-lg leading-[27px] tracking-[-0.54px] text-muted-foreground', className)}
      {...props}
    />
  );
}

export { Card, CardTitle, CardDescription };
