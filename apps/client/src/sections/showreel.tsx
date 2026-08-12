import { ErrorState, MediaBanner, Skeleton } from 'metatech-ui';

import { useShowreelState } from '../data';

function ShowreelSkeleton() {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-2 md:px-5">
      <Skeleton className="aspect-[16/10] w-full rounded-[20px] md:aspect-[1400/700]" />
    </div>
  );
}

export function Showreel() {
  const { data, error, isLoading } = useShowreelState();

  if (error || (!isLoading && !data)) {
    return <ErrorState title="The showreel is unavailable" message={error?.message} />;
  }

  if (isLoading || !data) {
    return <ShowreelSkeleton />;
  }

  return (
    <MediaBanner
      imageSrc={data.imageSrc}
      imageAlt={data.imageAlt}
      maskSrc={data.maskSrc}
      shapeSrc={data.shapeSrc}
      videoSrc={data.videoSrc}
      wordmarkSrc={data.wordmarkSrc}
    />
  );
}
