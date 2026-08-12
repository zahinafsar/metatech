import {
  ArrowRightIcon,
  Button,
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  ErrorState,
  Section,
  SectionInner,
  Showcase as ShowcaseLayout,
  ShowcaseBody,
  ShowcaseContent,
  ShowcaseLogo,
  ShowcaseMedia,
  ShowcaseTitle,
  Skeleton,
} from 'metatech-ui';

import { useShowcaseState } from '../data';

function ShowcaseSkeleton() {
  return (
    <>
      <ShowcaseContent>
        <Skeleton className="h-[50px] w-[190px]" />
        <div className="mt-20 flex flex-col gap-[30px] md:mt-0 md:gap-[50px]">
          <div className="flex max-w-[548px] flex-col gap-[15px]">
            <Skeleton className="h-[34px] w-full" />
            <Skeleton className="h-[34px] w-[70%]" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[85%]" />
          </div>
          <Skeleton className="h-[40px] w-[190px] lg:h-[50px]" />
        </div>
      </ShowcaseContent>
      <ShowcaseMedia>
        <Skeleton className="h-[380px] w-full rounded-[20px] lg:h-[640px]" />
      </ShowcaseMedia>
    </>
  );
}

export function Showcase() {
  const { data, error, isLoading } = useShowcaseState();

  if (error || (!isLoading && !data)) {
    return <ErrorState title="This case study is unavailable" message={error?.message} />;
  }

  return (
    <Section id="showcase" className="bg-brand-green-mid">
      <SectionInner>
        <ShowcaseLayout>
          {isLoading || !data ? (
            <ShowcaseSkeleton />
          ) : (
            <>
              <ShowcaseContent>
                <ShowcaseLogo src={data.logoSrc} alt={data.logoAlt} />
                <div className="flex flex-col gap-[30px] md:gap-[50px] mt-20 md:mt-0">
                  <div className="flex flex-col gap-[15px] max-w-[548px]">
                    <ShowcaseTitle>{data.title}</ShowcaseTitle>
                    <ShowcaseBody>{data.body}</ShowcaseBody>
                  </div>
                  <div>
                    <Button variant="outline">
                      {data.ctaLabel}
                      <ArrowRightIcon />
                    </Button>
                  </div>
                </div>
              </ShowcaseContent>
              <ShowcaseMedia>
                <Carousel loop autoplayDelay={5000} className="size-full">
                  <CarouselContent className="ml-0">
                    {data.slides.map((slide, index) => (
                      <CarouselItem key={index} className="pl-0">
                        <div className="relative">
                          <img
                            src={slide.src}
                            alt={slide.alt}
                            loading="lazy"
                            className="h-[380px] w-full rounded-[20px] object-cover sm:h-[380px] lg:h-[640px]"
                          />
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[129px] rounded-b-[20px] bg-gradient-to-t from-black/70 to-transparent" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselDots className="absolute bottom-[24px] left-[24px] lg:bottom-[34px] lg:left-[34px]" />
                </Carousel>
              </ShowcaseMedia>
            </>
          )}
        </ShowcaseLayout>
      </SectionInner>
    </Section>
  );
}
