import * as React from 'react';

import { cn } from '../lib/utils';

function Showcase({ className, ...props }: React.ComponentProps<'section'>) {
  return (
    <section
      data-slot="showcase"
      className={cn('flex w-full flex-col lg:flex-row', className)}
      {...props}
    />
  );
}

function ShowcaseContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="showcase-content"
      className={cn(
        'flex w-full flex-1 flex-col justify-between gap-[50px] py-12 text-white lg:h-[700px] lg:py-[60px]',
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
      className={cn('h-10 w-[209px] md:w-[279px] object-contain object-left', className)}
      {...props}
    />
  );
}

function ShowcaseTitle({ className, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2
      data-slot="showcase-title"
      className={cn(
        'max-w-[539px] font-display text-[32px] md:text-[48px] leading-[38px] md:leading-[54px] font-extrabold tracking-[-1px]',
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
        'max-w-[542px] text-sm md:text-lg leading-[20px] md:leading-[27px] font-medium tracking-[-0.64px]',
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
      className={cn('relative w-full flex-1 py-4 lg:h-[700px] lg:py-[30px]', className)}
      {...props}
    />
  );
}

export { Showcase, ShowcaseContent, ShowcaseLogo, ShowcaseTitle, ShowcaseBody, ShowcaseMedia };
