import * as React from 'react';

import { cn } from '../lib/utils';

function Eyebrow({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="eyebrow"
      className={cn(
        'text-lg leading-[30px] font-semibold tracking-[-0.9px] whitespace-nowrap',
        className,
      )}
      {...props}
    />
  );
}

export { Eyebrow };
