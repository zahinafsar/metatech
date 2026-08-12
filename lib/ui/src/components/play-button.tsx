import * as React from 'react';

import { PlayIcon } from '../icons';
import { cn } from '../utils';

function PlayButton({
  className,
  label = 'Play showreel',
  type = 'button',
  ...props
}: React.ComponentProps<'button'> & { label?: string }) {
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <button
      data-slot="play-button"
      data-pressed={isPressed}
      type={type}
      aria-label={label}
      title={label}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => setIsPressed(false)}
      onPointerLeave={() => setIsPressed(false)}
      onPointerCancel={() => setIsPressed(false)}
      className={cn(
        'group relative flex aspect-square w-[130px] items-center justify-center rounded-full bg-brand-green/25 outline-none transition duration-200 hover:scale-105 hover:bg-brand-green/35 data-[pressed=true]:scale-95 data-[pressed=true]:duration-75 focus-visible:ring-[3px] focus-visible:ring-ring/50',
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-pulse-ring rounded-full bg-brand-green/40 motion-reduce:hidden"
      />
      <span className="relative flex size-[80.77%] items-center justify-center rounded-full bg-brand-green/50 transition-transform duration-200 group-data-[pressed=true]:scale-95">
        <PlayIcon className="size-[70.48%]" />
      </span>
    </button>
  );
}

export { PlayButton };
