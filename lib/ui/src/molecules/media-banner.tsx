import * as React from 'react';

import { PlayButton } from '../atoms/play-button';
import { cn } from '../lib/utils';
import { Dialog } from './dialog';
import { SectionInner } from './section';

function MediaBanner({
  className,
  imageSrc,
  imageAlt,
  maskSrc,
  shapeSrc,
  wordmarkSrc,
  videoSrc,
  ...props
}: React.ComponentProps<'div'> & {
  imageSrc: string;
  imageAlt: string;
  maskSrc: string;
  shapeSrc: string;
  wordmarkSrc: string;
  videoSrc: string;
}) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (isPlaying) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isPlaying]);

  const RenderPlayButton = React.useMemo(() => {
    return (
      <PlayButton
        onClick={() => setIsPlaying(true)}
        className="w-[26cqw] max-w-[130px] md:absolute md:top-0 md:left-1/2 md:ml-0 md:w-[9.2857cqw] md:max-w-none md:-translate-x-1/2 md:-translate-y-1/2"
      />
    );
  }, []);

  return (
    <div>
      <SectionInner className="block md:hidden mb-[25px]">{RenderPlayButton}</SectionInner>
      <div
        data-slot="media-banner"
        className={cn(
          '@container relative flex w-full flex-col-reverse gap-[6cqw] md:block md:gap-0 px-2 mx-auto w-full max-w-[1400px] md:px-5 ',
          className,
        )}
        {...props}
      >
        <div
          data-slot="media-banner-frame"
          className="relative aspect-[16/9] w-full overflow-hidden rounded-[20px] md:aspect-[1400/571] md:rounded-none md:[mask-image:var(--banner-mask)] md:[-webkit-mask-image:var(--banner-mask)]"
          style={
            {
              '--banner-mask': `url(${maskSrc})`,
              maskSize: '100% 100%',
              maskRepeat: 'no-repeat',
              WebkitMaskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat',
            } as React.CSSProperties
          }
        >
          <img src={imageSrc} alt={imageAlt} className="size-full object-cover" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-30 md:hidden"
            style={{
              backgroundImage: 'linear-gradient(112.4deg, #161616 25%, #06FF70 48%, #161616 75%)',
            }}
          />
          <img
            src={shapeSrc}
            alt=""
            className="pointer-events-none absolute inset-0 hidden size-full md:block"
          />
          <img
            src={wordmarkSrc}
            className="pointer-events-none absolute bottom-0 left-1/2 w-[71.5%] -translate-x-1/2"
          />
        </div>
        <div className="hidden md:block">{RenderPlayButton}</div>
      </div>
      <Dialog open={isPlaying} onClose={() => setIsPlaying(false)} closeLabel="Close video">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={imageSrc}
          controls
          playsInline
          preload="metadata"
          className="aspect-video w-full rounded-[20px] bg-black"
        />
      </Dialog>
    </div>
  );
}

export { MediaBanner };
