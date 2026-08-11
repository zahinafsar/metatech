import * as React from 'react';

import { PlayButton } from '../atoms/play-button';
import { cn } from '../lib/utils';

function MediaBanner({
  className,
  imageSrc,
  imageAlt,
  maskSrc,
  playIconSrc,
  wordmarkSrc,
  onPlay,
  ...props
}: React.ComponentProps<'div'> & {
  imageSrc: string;
  imageAlt: string;
  maskSrc: string;
  playIconSrc: string;
  wordmarkSrc: string;
  onPlay?: () => void;
}) {
  return (
    <div data-slot="media-banner" className={cn('relative w-full', className)} {...props}>
      <div
        data-slot="media-banner-frame"
        className="relative aspect-[1400/571] w-full overflow-hidden"
        style={{
          maskImage: `url(${maskSrc})`,
          maskSize: '100% 100%',
          maskRepeat: 'no-repeat',
          WebkitMaskImage: `url(${maskSrc})`,
          WebkitMaskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
        }}
      >
        <img src={imageSrc} alt={imageAlt} className="size-full object-cover" />
        <img
          src={wordmarkSrc}
          alt=""
          className="pointer-events-none absolute bottom-0 left-1/2 w-[71.5%] -translate-x-1/2"
        />
      </div>
      <PlayButton
        iconSrc={playIconSrc}
        onClick={onPlay}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}

export { MediaBanner };
