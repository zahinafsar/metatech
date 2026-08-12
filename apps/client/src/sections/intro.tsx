import { ErrorState, Eyebrow, Section, SectionInner, SectionSplit, Skeleton } from 'metatech-ui';

import { useIntroState } from '../data';

function IntroSkeleton() {
  return (
    <>
      <Skeleton className="h-6 w-[120px]" />
      <div className="flex w-full max-w-[680px] flex-col gap-3">
        <Skeleton className="h-[27px] w-full md:h-[39px]" />
        <Skeleton className="h-[27px] w-full md:h-[39px]" />
        <Skeleton className="h-[27px] w-[80%] md:h-[39px]" />
      </div>
    </>
  );
}

export function Intro() {
  const { data, error, isLoading } = useIntroState();

  if (error || (!isLoading && !data)) {
    return <ErrorState title="This section is unavailable" message={error?.message} />;
  }

  return (
    <Section id="solutions" className="bg-background py-[80px]">
      <SectionInner>
        <SectionSplit className="gap-5 lg:gap-[380px]">
          {isLoading || !data ? (
            <IntroSkeleton />
          ) : (
            <>
              <Eyebrow>{data.eyebrow}</Eyebrow>
              <p className="max-w-[680px] font-display text-[21px] md:text-[32px] leading-[27px] md:leading-[39px] tracking-[-0.96px]">
                <span className="font-extrabold">{data.lead}</span>
                {data.body}
              </p>
            </>
          )}
        </SectionSplit>
      </SectionInner>
    </Section>
  );
}
