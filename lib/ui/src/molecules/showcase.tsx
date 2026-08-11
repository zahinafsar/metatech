import * as React from 'react';

import { cn } from '../lib/utils';

function Showcase({ className, ...props }: React.ComponentProps<'section'>) {
  return (
    <section
      data-slot="showcase"
      className={cn(
        'flex w-full flex-col items-center bg-brand-green-mid lg:flex-row lg:justify-center',
        className,
      )}
      {...props}
    />
  );
}

function ShowcaseContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="showcase-content"
      className={cn(
        'flex w-full max-w-[680px] flex-col justify-center gap-[50px] px-6 py-16 text-white lg:h-[700px] lg:px-0 lg:py-0',
        className,
      )}
      {...props}
    />
  );
}

function ShowcaseLogo({
  className,
  src,
  alt,
  ...props
}: React.ComponentProps<'img'> & { alt: string }) {
  return (
    <img
      data-slot="showcase-logo"
      src={src}
      alt={alt}
      className={cn('h-10 w-[279px] object-contain object-left', className)}
      {...props}
    />
  );
}

function ShowcaseTitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      data-slot="showcase-title"
      className={cn(
        'max-w-[539px] font-display text-[48px] leading-[54px] font-extrabold tracking-[-2.4px]',
        className,
      )}
      {...props}
    />
  );
}

function ShowcaseBody({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="showcase-body"
      className={cn(
        'max-w-[542px] text-lg leading-[27px] font-medium tracking-[-0.54px]',
        className,
      )}
      {...props}
    />
  );
}

function ShowcaseMedia({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="showcase-media"
      className={cn(
        'relative w-full max-w-[700px] shrink-0 overflow-hidden rounded-pill lg:size-[700px] lg:rounded-none',
        className,
      )}
      {...props}
    />
  );
}

export { Showcase, ShowcaseContent, ShowcaseLogo, ShowcaseTitle, ShowcaseBody, ShowcaseMedia };
