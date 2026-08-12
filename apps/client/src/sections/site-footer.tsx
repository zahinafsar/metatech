import {
  ErrorState,
  HighlightedText,
  Separator,
  SiteFooter as SiteFooterLayout,
  SiteFooterLink,
  SiteFooterTop,
  SiteFooterWordmark,
  Skeleton,
} from 'metatech-ui';

import { useFooterState } from '../data';

function SiteFooterSkeleton() {
  return (
    <SiteFooterTop>
      <div className="flex flex-col gap-5 lg:order-2 lg:flex-row lg:items-center lg:gap-[30px]">
        <Skeleton className="h-4 w-[110px]" />
        <Skeleton className="h-4 w-[110px]" />
      </div>
      <Separator className="w-5 bg-white/60 lg:hidden" />
      <div className="flex flex-col gap-5 lg:order-3 lg:flex-row lg:flex-wrap lg:items-center lg:gap-[30px]">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="h-4 w-[90px]" />
        ))}
      </div>
      <Separator className="w-5 bg-white/60 lg:hidden" />
      <Skeleton className="h-4 lg:order-1 lg:w-[323px]" />
    </SiteFooterTop>
  );
}

export function SiteFooter() {
  const { data, error, isLoading } = useFooterState();

  if (error || (!isLoading && !data)) {
    return (
      <SiteFooterLayout id="contact">
        <ErrorState title="The footer is unavailable" message={error?.message} />
      </SiteFooterLayout>
    );
  }

  return (
    <SiteFooterLayout id="contact">
      {isLoading || !data ? (
        <SiteFooterSkeleton />
      ) : (
        <>
          <SiteFooterTop>
            <div className="flex flex-col gap-5 lg:order-2 lg:flex-row lg:items-center lg:gap-[30px]">
              {data.links.map((link) => (
                <SiteFooterLink key={link.href} href={link.href}>
                  {link.label}
                </SiteFooterLink>
              ))}
            </div>
            <Separator className="w-5 bg-white/60 lg:hidden" />
            <div className="flex flex-col gap-5 lg:order-3 lg:flex-row lg:flex-wrap lg:items-center lg:gap-[30px]">
              {data.social.map((link) => (
                <SiteFooterLink key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </SiteFooterLink>
              ))}
            </div>
            <Separator className="w-5 bg-white/60 lg:hidden" />
            <p className="lg:order-1 text-sm lg:w-[323px]">
              <HighlightedText text={data.copyright} highlights={data.highlights} />
            </p>
          </SiteFooterTop>
          <SiteFooterWordmark src={data.wordmarkSrc} alt={data.wordmarkAlt} />
        </>
      )}
    </SiteFooterLayout>
  );
}
