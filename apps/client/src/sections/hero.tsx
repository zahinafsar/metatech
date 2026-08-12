import { Button, ErrorState, HighlightedText, Section, Skeleton } from 'metatech-ui';

import { useHeroState } from '../data';

function HeroSkeleton() {
  return (
    <>
      <div className="flex w-full max-w-[664px] flex-col gap-4">
        <Skeleton className="h-[48px] w-full lg:h-[72px]" />
        <Skeleton className="h-[48px] w-[85%] lg:h-[72px]" />
        <Skeleton className="h-[48px] w-[60%] lg:h-[72px]" />
      </div>
      <div className="flex w-full max-w-[388px] flex-col gap-8">
        <div className="flex flex-col gap-[10px]">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[70%]" />
        </div>
        <Skeleton className="h-[40px] w-[180px] lg:h-[50px]" />
      </div>
    </>
  );
}

export function Hero() {
  const { data, error, isLoading } = useHeroState();

  if (error || (!isLoading && !data)) {
    return <ErrorState title="The hero content is unavailable" message={error?.message} />;
  }

  return (
    <Section
      id="top"
      className="px-6 pt-[168px] pb-[50px] md:pb-[168px] md:pt-[212px] lg:px-[50px]"
    >
      <div className="mx-auto flex w-full max-w-[1340px] flex-col items-start gap-5 lg:flex-row lg:items-center lg:gap-[180px]">
        {isLoading || !data ? (
          <HeroSkeleton />
        ) : (
          <>
            <h1 className="max-w-[664px] font-display text-[48px] leading-[1] font-extrabold capitalize tracking-[-1px] lg:text-[72px] lg:leading-[72px] lg:tracking-[-0.5px]">
              <HighlightedText text={data.title} highlights={data.highlights} />
            </h1>
            <div className="flex w-full max-w-[388px] flex-col gap-8">
              <p className="text-sm lg:text-base leading-[23px] font-light">{data.description}</p>
              <div>
                <Button variant="primary">{data.cta.label}</Button>
              </div>
            </div>
          </>
        )}
      </div>
    </Section>
  );
}
