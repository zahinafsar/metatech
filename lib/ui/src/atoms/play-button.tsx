import * as React from 'react';

import { cn } from '../lib/utils';

function PlayButton({
  className,
  iconSrc,
  label = 'Play showreel',
  type = 'button',
  ...props
}: React.ComponentProps<'button'> & { iconSrc: string; label?: string }) {
  return (
    <button
      data-slot="play-button"
      type={type}
      aria-label={label}
      title={label}
      className={cn(
        'flex size-[130px] items-center justify-center rounded-full bg-brand-green/25 outline-none transition-colors hover:bg-brand-green/35 focus-visible:ring-[3px] focus-visible:ring-ring/50',
        className,
      )}
      {...props}
    >
      <span className="flex size-[105px] items-center justify-center rounded-full bg-brand-green/50">
        <img src={iconSrc} alt="" className="size-[74px]" />
      </span>
    </button>
  );
}

export { PlayButton };
