import * as React from 'react';

import { ChevronDownIcon, CloseIcon, NavToggleIcon } from '../icons';
import { cn } from '../utils';

function Navbar({ className, ...props }: React.ComponentProps<'header'>) {
  return (
    <header
      data-slot="navbar"
      className={cn('relative z-50 h-0 w-full p-0', className)}
      {...props}
    />
  );
}

function NavbarInner({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="navbar-inner"
      className={cn(
        'absolute top-[10px] left-1/2 flex w-[calc(100%-20px)] -translate-x-1/2 flex-col overflow-hidden rounded-[5px] bg-nav-surface/85 backdrop-blur-md',
        'max-md:h-14 max-md:transition-[height] max-md:duration-300 max-md:ease-out',
        'max-md:has-[[data-slot=navbar-toggle]_input:checked]:h-[calc(100dvh-20px)]',
        '[&:has([data-slot=navbar-toggle]_input:checked)_[data-slot=navbar-mobile-nav]]:pointer-events-auto',
        '[&:has([data-slot=navbar-toggle]_input:checked)_[data-slot=navbar-mobile-nav]]:opacity-100',
        'md:top-5 md:w-[calc(100%-40px)] md:max-w-[1400px] md:max-h-20 md:rounded-pill',
        'md:transition-[max-height] md:duration-300 md:ease-out',
        'md:has-[[data-slot=navbar-item]:hover]:max-h-[444px]',
        'md:has-[[data-slot=navbar-item]:focus-within]:max-h-[444px]',
        'md:has-[[data-slot=navbar-panel]:hover]:max-h-[444px]',
        'md:has-[[data-slot=navbar-panel]:focus-within]:max-h-[444px]',
        '[&:has([data-slot=navbar-item]:hover)_[data-slot=navbar-panel]]:opacity-100',
        '[&:has([data-slot=navbar-item]:focus-within)_[data-slot=navbar-panel]]:opacity-100',
        '[&:has([data-slot=navbar-panel]:hover)_[data-slot=navbar-panel]]:opacity-100',
        '[&:has([data-slot=navbar-panel]:focus-within)_[data-slot=navbar-panel]]:opacity-100',
        '[&:has([data-slot=navbar-panel]:hover)_[data-slot=navbar-item]_[data-slot=navbar-link]]:text-brand-green',
        '[&:has([data-slot=navbar-panel]:focus-within)_[data-slot=navbar-item]_[data-slot=navbar-link]]:text-brand-green',
        className,
      )}
      {...props}
    />
  );
}

function NavbarRow({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="navbar-row"
      className={cn(
        'flex w-full shrink-0 items-center gap-6 p-4 md:min-h-20 md:px-5 md:py-[15px]',
        className,
      )}
      {...props}
    />
  );
}

function NavbarBrand({ className, ...props }: React.ComponentProps<'a'>) {
  return <a data-slot="navbar-brand" className={cn('shrink-0', className)} {...props} />;
}

function NavbarNav({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      data-slot="navbar-nav"
      className={cn(
        'hidden min-w-0 flex-1 items-center justify-center gap-[25px] md:flex',
        className,
      )}
      {...props}
    />
  );
}

function NavbarItem({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="navbar-item"
      className={cn('group/navbar-item flex items-center md:-my-[28px] md:py-[28px]', className)}
      {...props}
    />
  );
}

function NavbarLink({ className, ...props }: React.ComponentProps<'a'>) {
  return (
    <a
      data-slot="navbar-link"
      className={cn(
        'text-2xl leading-8 font-bold tracking-[-0.7px] whitespace-nowrap text-white transition-colors hover:text-brand-green md:text-sm md:leading-6',
        className,
      )}
      {...props}
    />
  );
}

function NavbarActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="navbar-actions"
      className={cn('ml-auto flex items-center gap-3', className)}
      {...props}
    />
  );
}

function NavbarToggle({ className, ...props }: React.ComponentProps<'label'>) {
  return (
    <label
      data-slot="navbar-toggle"
      className={cn(
        'relative flex size-6 cursor-pointer items-center justify-center text-white transition-colors hover:text-brand-green md:hidden',
        className,
      )}
      {...props}
    >
      <input type="checkbox" className="peer sr-only" aria-label="Toggle menu" />
      <NavToggleIcon className="absolute transition-all duration-300 ease-out peer-checked:scale-75 peer-checked:rotate-90 peer-checked:opacity-0" />
      <CloseIcon className="absolute scale-75 -rotate-90 opacity-0 transition-all duration-300 ease-out peer-checked:scale-100 peer-checked:rotate-0 peer-checked:opacity-100" />
    </label>
  );
}

function NavbarMobileNav({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      data-slot="navbar-mobile-nav"
      className={cn(
        'pointer-events-none flex min-h-0 flex-1 flex-col overflow-y-auto px-4 pt-2 pb-6 opacity-0 transition-opacity duration-300 ease-out md:hidden',
        className,
      )}
      {...props}
    />
  );
}

function NavbarMobileItem({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="navbar-mobile-item"
      className={cn(
        'flex w-full items-center justify-between gap-4 border-b border-white/15 py-5',
        className,
      )}
      {...props}
    />
  );
}

function NavbarMobileDisclosure({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="navbar-mobile-disclosure"
      className={cn(
        'w-full',
        '[&:has([data-slot=navbar-mobile-expand]_input:checked)_[data-slot=navbar-mobile-subnav]]:grid-rows-[1fr]',
        className,
      )}
      {...props}
    />
  );
}

function NavbarMobileExpand({ className, ...props }: React.ComponentProps<'label'>) {
  return (
    <label
      data-slot="navbar-mobile-expand"
      className={cn(
        'flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25',
        className,
      )}
      {...props}
    >
      <input type="checkbox" className="peer sr-only" aria-label="Show solutions" />
      <ChevronDownIcon className="transition-transform duration-300 ease-out peer-checked:rotate-180" />
    </label>
  );
}

function NavbarMobileSubNav({ className, children, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="navbar-mobile-subnav"
      className={cn(
        'grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out',
        className,
      )}
      {...props}
    >
      <div className="overflow-hidden">
        <div className="flex flex-col items-start gap-4 py-4 pl-4">{children}</div>
      </div>
    </div>
  );
}

function NavbarMobileSubLink({ className, ...props }: React.ComponentProps<'a'>) {
  return (
    <a
      data-slot="navbar-mobile-sublink"
      className={cn(
        'text-lg leading-7 font-medium tracking-[-0.7px] text-white/70 transition-colors hover:text-brand-green',
        className,
      )}
      {...props}
    />
  );
}

function NavbarPanel({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="navbar-panel"
      className={cn(
        'hidden shrink-0 gap-[7px] px-[18px] pt-[6px] pb-[19px] opacity-0',
        'transition-opacity duration-300 ease-out',
        'md:grid md:grid-cols-3',
        className,
      )}
      {...props}
    />
  );
}

function NavbarPanelCard({
  className,
  imageSrc,
  imageAlt = '',
  children,
  ...props
}: React.ComponentProps<'a'> & { imageSrc: string; imageAlt?: string }) {
  return (
    <a
      data-slot="navbar-panel-card"
      className={cn(
        'group/navbar-card relative flex h-[339px] flex-col overflow-hidden rounded-[20px] border border-hairline-dark bg-black px-[29px] pt-[26px] pb-8',
        className,
      )}
      {...props}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        aria-hidden={imageAlt === ''}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full scale-[1.03] object-cover opacity-0 transition-opacity duration-300 ease-out group-hover/navbar-card:opacity-100"
      />
      <span className="absolute inset-0 bg-black/0 transition-colors duration-300 ease-out group-hover/navbar-card:bg-black/25" />
      <span className="relative">{children}</span>
    </a>
  );
}

function NavbarPanelCardTitle({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="navbar-panel-card-title"
      className={cn(
        'max-w-[240px] font-display text-[30px] leading-[30px] font-extrabold tracking-[-1.5px] text-brand-green transition-colors duration-300 ease-out group-hover/navbar-card:text-[#f4f6f5]',
        className,
      )}
      {...props}
    />
  );
}

export {
  Navbar,
  NavbarInner,
  NavbarRow,
  NavbarBrand,
  NavbarNav,
  NavbarItem,
  NavbarLink,
  NavbarActions,
  NavbarToggle,
  NavbarMobileNav,
  NavbarMobileItem,
  NavbarMobileExpand,
  NavbarMobileDisclosure,
  NavbarMobileSubNav,
  NavbarMobileSubLink,
  NavbarPanel,
  NavbarPanelCard,
  NavbarPanelCardTitle,
};
