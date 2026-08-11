import * as React from 'react';

import { cn } from '../lib/utils';

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
        'flex flex-col items-start gap-6 px-6 pt-[68px] text-sm leading-6 font-bold tracking-[-0.7px] text-white lg:flex-row lg:items-center lg:justify-between lg:px-[88px]',
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
        'underline underline-offset-2 transition-colors hover:text-brand-green',
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
    <img
      data-slot="site-footer-wordmark"
      src={src}
      alt={alt}
      className={cn('mt-10 w-full select-none', className)}
      {...props}
    />
  );
}

export { SiteFooter, SiteFooterTop, SiteFooterLink, SiteFooterWordmark };
