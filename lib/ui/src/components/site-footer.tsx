import * as React from 'react';

import { cn } from '../utils';

function SiteFooter({ className, ...props }: React.ComponentProps<'footer'>) {
  return (
    <footer
      data-slot="site-footer"
      className={cn('relative w-full overflow-hidden bg-ink', className)}
      {...props}
    />
  );
}

function SiteFooterTop({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="site-footer-top"
      className={cn(
        'flex flex-col items-start gap-10 px-6 pt-[68px] text-base leading-6 font-bold tracking-[-0.7px] text-white lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-[88px] lg:text-sm',
        className,
      )}
      {...props}
    />
  );
}

function SiteFooterLink({ className, ...props }: React.ComponentProps<'a'>) {
  return (
    <a
      data-slot="site-footer-link"
      className={cn(
        'underline underline-offset-2 text-base lg:text-sm transition-colors hover:text-brand-green',
        className,
      )}
      {...props}
    />
  );
}

function SiteFooterWordmark({
  className,
  src,
  alt,
  ...props
}: React.ComponentProps<'img'> & { alt: string }) {
  return (
    <div className="relative mt-10">
      <img
        data-slot="site-footer-wordmark"
        src={src}
        alt={alt}
        className={cn('w-full select-none', className)}
        {...props}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"
      />
    </div>
  );
}

export { SiteFooter, SiteFooterTop, SiteFooterLink, SiteFooterWordmark };
