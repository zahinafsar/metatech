import { ErrorState, Eyebrow, HighlightedText, LogoGrid, Section, Skeleton } from 'metatech-ui';

import { useClientsState } from '../data';

function ClientsSkeleton() {
  return (
    <>
      <div className="flex w-full max-w-[216px] flex-col gap-[10px] md:max-w-[178px]">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-[80%]" />
      </div>
      <div className="grid w-full grid-cols-2 sm:grid-cols-4 lg:w-[925px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={index} className="h-[120px] rounded-none border border-current/10" />
        ))}
      </div>
    </>
  );
}

export function Clients() {
  const { data, error, isLoading } = useClientsState();

  if (error || (!isLoading && !data)) {
    return <ErrorState title="Client logos are unavailable" message={error?.message} />;
  }

  return (
    <Section className="px-5 pt-[100px] pb-5">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-10 lg:flex-row">
        {isLoading || !data ? (
          <ClientsSkeleton />
        ) : (
          <>
            <Eyebrow className="text-lg leading-6 whitespace-normal max-w-[216px] md:max-w-[178px]">
              <HighlightedText text={data.eyebrow} highlights={data.highlights} />
            </Eyebrow>
            <LogoGrid items={data.logos} className="w-full lg:w-[925px]" />
          </>
        )}
      </div>
    </Section>
  );
}
