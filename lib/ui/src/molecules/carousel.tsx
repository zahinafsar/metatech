import * as React from 'react';

import { Button } from '../atoms/button';
import { Glyph } from '../atoms/glyph';
import { cn } from '../lib/utils';

type CarouselContextValue = {
  viewportRef: React.RefObject<HTMLDivElement | null>;
  selectedIndex: number;
  snapCount: number;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
};

const CarouselContext = React.createContext<CarouselContextValue | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

function getItems(viewport: HTMLDivElement) {
  return Array.from(viewport.querySelectorAll<HTMLElement>('[data-slot="carousel-item"]'));
}

function Carousel({
  className,
  loop = false,
  autoplayDelay,
  children,
  ...props
}: React.ComponentProps<'section'> & {
  loop?: boolean;
  autoplayDelay?: number;
}) {
  const viewportRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [snapCount, setSnapCount] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const sync = React.useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const items = getItems(viewport);
    const viewportLeft = viewport.getBoundingClientRect().left;

    let closest = 0;
    let smallest = Number.POSITIVE_INFINITY;

    items.forEach((item, index) => {
      const distance = Math.abs(item.getBoundingClientRect().left - viewportLeft);

      if (distance < smallest) {
        smallest = distance;
        closest = index;
      }
    });

    const maxScroll = viewport.scrollWidth - viewport.clientWidth;

    setSnapCount(items.length);
    setSelectedIndex(closest);
    setCanScrollPrev(loop ? items.length > 1 : viewport.scrollLeft > 1);
    setCanScrollNext(loop ? items.length > 1 : viewport.scrollLeft < maxScroll - 1);
  }, [loop]);

  const scrollTo = React.useCallback((index: number) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const items = getItems(viewport);
    const target = items[index];

    if (!target) {
      return;
    }

    const delta = target.getBoundingClientRect().left - viewport.getBoundingClientRect().left;
    viewport.scrollTo({ left: viewport.scrollLeft + delta, behavior: 'smooth' });
  }, []);

  const scrollPrev = React.useCallback(() => {
    if (selectedIndex > 0) {
      scrollTo(selectedIndex - 1);
    } else if (loop && snapCount > 0) {
      scrollTo(snapCount - 1);
    }
  }, [loop, scrollTo, selectedIndex, snapCount]);

  const scrollNext = React.useCallback(() => {
    if (selectedIndex < snapCount - 1) {
      scrollTo(selectedIndex + 1);
    } else if (loop) {
      scrollTo(0);
    }
  }, [loop, scrollTo, selectedIndex, snapCount]);

  React.useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    sync();

    const observer = new ResizeObserver(sync);
    observer.observe(viewport);
    viewport.addEventListener('scroll', sync, { passive: true });

    return () => {
      observer.disconnect();
      viewport.removeEventListener('scroll', sync);
    };
  }, [sync]);

  React.useEffect(() => {
    if (!autoplayDelay || snapCount < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      if (selectedIndex < snapCount - 1) {
        scrollTo(selectedIndex + 1);
      } else {
        scrollTo(0);
      }
    }, autoplayDelay);

    return () => {
      window.clearInterval(timer);
    };
  }, [autoplayDelay, scrollTo, selectedIndex, snapCount]);

  const value = React.useMemo<CarouselContextValue>(() => {
    return {
      viewportRef,
      selectedIndex,
      snapCount,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
      scrollTo,
    };
  }, [canScrollNext, canScrollPrev, scrollNext, scrollPrev, scrollTo, selectedIndex, snapCount]);

  return (
    <CarouselContext.Provider value={value}>
      <section
        data-slot="carousel"
        role="region"
        aria-roledescription="carousel"
        className={cn('relative', className)}
        {...props}
      >
        {children}
      </section>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { viewportRef } = useCarousel();

  return (
    <div
      ref={viewportRef}
      data-slot="carousel-viewport"
      className="w-full overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <div data-slot="carousel-content" className={cn('-ml-4 flex', className)} {...props} />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="carousel-item"
      role="group"
      aria-roledescription="slide"
      className={cn('min-w-0 shrink-0 grow-0 basis-full snap-start pl-4', className)}
      {...props}
    />
  );
}

function CarouselPrevious({ className, ...props }: React.ComponentProps<typeof Button>) {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      variant="ink"
      size="icon"
      aria-label="Previous slide"
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      className={cn(className)}
      {...props}
    >
      <Glyph name="chevron-left" />
    </Button>
  );
}

function CarouselNext({ className, ...props }: React.ComponentProps<typeof Button>) {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      variant="ink"
      size="icon"
      aria-label="Next slide"
      disabled={!canScrollNext}
      onClick={scrollNext}
      className={cn(className)}
      {...props}
    >
      <Glyph name="chevron-right" />
    </Button>
  );
}

function CarouselDots({ className, ...props }: React.ComponentProps<'div'>) {
  const { snapCount, selectedIndex, scrollTo } = useCarousel();

  return (
    <div
      data-slot="carousel-dots"
      className={cn('flex items-center gap-[5px]', className)}
      {...props}
    >
      {Array.from({ length: snapCount }).map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === selectedIndex}
          onClick={() => scrollTo(index)}
          className={cn(
            'h-[10px] rounded-pill transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50',
            index === selectedIndex
              ? 'w-[50px] bg-white'
              : 'w-[20px] bg-white/50 hover:bg-white/70',
          )}
        />
      ))}
    </div>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
  useCarousel,
};
