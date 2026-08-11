import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '../lib/utils';

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-btn font-bold tracking-[-0.7px] whitespace-nowrap outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-brand-green-bright',
        ink: 'bg-ink text-ink-foreground hover:bg-ink/90',
        glass: 'bg-white/25 text-white hover:bg-white/35',
        outline: 'border-2 border-white/35 text-ink-foreground hover:bg-white/10',
        ghost: 'text-foreground hover:bg-secondary',
      },
      size: {
        default: 'h-[50px] px-[35px] text-sm',
        compact: 'h-[50px] px-[25px] text-sm',
        sm: 'h-10 px-5 text-sm',
        icon: 'size-[50px] px-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  type = 'button',
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      data-slot="button"
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
