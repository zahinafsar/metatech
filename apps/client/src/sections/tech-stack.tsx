import {
  ErrorState,
  Eyebrow,
  Section,
  SectionBody,
  SectionInner,
  SectionSplit,
  SectionTitle,
  Skeleton,
  TechGrid,
} from 'metatech-ui';

import { useTechStackState } from '../data';

function TechStackSkeleton() {
  return (
    <>
      <SectionInner>
        <SectionSplit className="gap-5 lg:gap-[340px]">
          <Skeleton className="h-6 w-[140px]" />
          <div className="flex w-full max-w-[680px] flex-col gap-5">
            <Skeleton className="h-[34px] w-[60%]" />
            <div className="flex flex-col gap-[10px]">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[70%]" />
            </div>
          </div>
        </SectionSplit>
      </SectionInner>
      <div className="mt-[50px] flex w-full flex-col gap-[10px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="h-[140px] w-full" />
        ))}
      </div>
    </>
  );
}

export function TechStack() {
  const { data, error, isLoading } = useTechStackState();

  if (error || (!isLoading && !data)) {
    return <ErrorState title="The tech stack is unavailable" message={error?.message} />;
  }

  return (
    <Section className="bg-background pb-[80px] pt-[100px] lg:pt-[150px]">
      {isLoading || !data ? (
        <TechStackSkeleton />
      ) : (
        <>
          <SectionInner>
            <SectionSplit className="gap-5 lg:gap-[340px]">
              <Eyebrow>{data.eyebrow}</Eyebrow>
              <div className="flex max-w-[680px] flex-col gap-5">
                <SectionTitle className="text-[28px] md:leading-[27px] leading-[34px] tracking-[-0.96px] md:text-[32px] md:leading-[39px]">
                  {data.title}
                </SectionTitle>
                <SectionBody className="text-sm leading-5 md:text-lg md:leading-[27px]">
                  {data.body}
                </SectionBody>
              </div>
            </SectionSplit>
          </SectionInner>
          <TechGrid rows={data.rows} className="mt-[50px]" />
        </>
      )}
    </Section>
  );
}
