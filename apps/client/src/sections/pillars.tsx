import {
  Button,
  ErrorState,
  PillarBody,
  PillarContent,
  PillarNumber,
  PillarPanel,
  PillarTitle,
  SectionInner,
  Skeleton,
  Tabs,
  TabsList,
  TabsPanel,
  TabsPanels,
  TabsTrigger,
} from 'metatech-ui';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import { usePillarsState } from '../data';

const useStickyState = () => {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    if (!element) {
      setIsStuck(false);
      return;
    }

    const update = () => {
      const offset = parseFloat(getComputedStyle(element).top) || 0;
      setIsStuck(element.getBoundingClientRect().top <= offset + 1);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [element]);

  return { stickyRef: setElement, isStuck };
};

function PillarsSkeleton() {
  return (
    <>
      <SectionInner className="flex px-0 md:px-5 pt-4 md:pt-6">
        <span aria-hidden className="hidden w-[455px] shrink-0 xl:block" />
        <div className="mx-auto flex w-full min-w-0 gap-[10px] px-5 md:max-w-[612px] xl:mx-0">
          <Skeleton className="h-[50px] flex-1 rounded-btn" />
          <Skeleton className="h-[50px] flex-1 rounded-btn" />
          <Skeleton className="h-[50px] flex-1 rounded-btn" />
        </div>
      </SectionInner>
      <SectionInner className="pb-[50px] pt-[100px] md:py-[50px] md:pt-[50px]">
        <div className="flex flex-col gap-[30px] xl:flex-row xl:gap-[290px]">
          <Skeleton className="h-[80px] w-[120px]" />
          <div className="flex w-full max-w-[680px] flex-col gap-5">
            <Skeleton className="h-[34px] w-[70%]" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[60%]" />
            <Skeleton className="mt-3 h-[40px] w-[220px] lg:h-[50px]" />
          </div>
        </div>
      </SectionInner>
    </>
  );
}

export function Pillars({ children }: { children: ReactNode }) {
  const { data, error, isLoading } = usePillarsState();
  const { stickyRef, isStuck } = useStickyState();

  if (error || (!isLoading && (!data || data.length === 0))) {
    return (
      <div className="bg-muted pt-[10px]">
        <ErrorState title="Our solution pillars are unavailable" message={error?.message} />
        {children}
      </div>
    );
  }

  if (isLoading || !data || data.length === 0) {
    return (
      <div className="bg-muted pt-[10px]">
        <PillarsSkeleton />
        {children}
      </div>
    );
  }

  return (
    <Tabs defaultValue={data[0].value} className="bg-muted pt-[10px]">
      <div
        ref={stickyRef}
        data-stuck={isStuck}
        className="group/sticky sticky top-0 z-30 mb-7 pt-4 md:pt-6"
      >
        <SectionInner className="flex px-0 md:px-5">
          <span aria-hidden className="hidden w-[455px] shrink-0 xl:block" />
          <TabsList className="px-5 mx-auto w-full min-w-0 overflow-x-auto transition-shadow duration-300 ease-out md:max-w-[612px] md:group-data-[stuck=true]/sticky:shadow-[0_12px_30px_rgba(0,0,0,0.14)] xl:mx-0">
            {data.map((pillar) => (
              <TabsTrigger key={pillar.value} value={pillar.value}>
                {pillar.tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </SectionInner>
      </div>

      <TabsPanels>
        {data.map((pillar) => (
          <TabsPanel key={pillar.value} value={pillar.value}>
            <SectionInner className="pb-[50px] pt-[100px] md:py-[50px] md:pt-[50px]">
              <PillarPanel className="xl:gap-[290px]">
                <PillarNumber>{pillar.number}</PillarNumber>
                <PillarContent>
                  <PillarTitle>{pillar.title}</PillarTitle>
                  <PillarBody>{pillar.body}</PillarBody>
                  <Button variant="ink">{pillar.ctaLabel}</Button>
                </PillarContent>
              </PillarPanel>
            </SectionInner>
          </TabsPanel>
        ))}
      </TabsPanels>

      {children}
    </Tabs>
  );
}
