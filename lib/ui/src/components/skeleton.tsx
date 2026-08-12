import * as React from 'react';

import { cn } from '../utils';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      aria-hidden="true"
      className={cn('animate-pulse rounded-[10px] bg-current/10', className)}
      {...props}
    />
  );
}

export { Skeleton };
