import {
  Card,
  CardDescription,
  CardTitle,
  ErrorState,
  Section,
  SectionInner,
  Skeleton,
} from 'metatech-ui';

import { useHighlightsState } from '../data';

function HighlightsSkeleton() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton
          key={index}
          className="min-h-[350px] w-full shrink-0 rounded-[20px] md:min-h-[450px] md:w-[60%] lg:w-auto lg:shrink"
        />
      ))}
    </>
  );
}

export function Highlights() {
  const { data, error, isLoading } = useHighlightsState();

  if (error || (!isLoading && !data)) {
    return <ErrorState title="These highlights are unavailable" message={error?.message} />;
  }

  return (
    <Section className="bg-muted pb-[50px]">
      <SectionInner>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
          {isLoading || !data ? (
            <HighlightsSkeleton />
          ) : (
            data.map((highlight) => (
              <Card
                key={highlight.title}
                className="group/card relative w-full min-h-[350px] md:min-h-[450px] shrink-0 snap-start justify-between overflow-hidden border-deep bg-deep text-deep-foreground transition-colors duration-300 ease-out md:w-[60%] md:justify-center md:border-border md:bg-card md:text-card-foreground md:hover:justify-start md:hover:border-deep md:hover:bg-deep md:hover:text-deep-foreground lg:w-auto lg:shrink"
              >
                <CardTitle className="text-brand-green transition-colors duration-300 ease-out md:text-center md:text-inherit md:group-hover/card:text-left md:group-hover/card:text-brand-green">
                  {highlight.title}
                </CardTitle>
                <CardDescription className="text-inherit transition-opacity duration-300 ease-out md:absolute md:inset-x-[30px] md:bottom-[30px] md:opacity-0 md:group-hover/card:opacity-100">
                  {highlight.body}
                </CardDescription>
              </Card>
            ))
          )}
        </div>
      </SectionInner>
    </Section>
  );
}
