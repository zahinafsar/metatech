import * as React from 'react';

import { cn } from '../lib/utils';

function Navbar({ className, ...props }: React.ComponentProps<'header'>) {
  return <header data-slot="navbar" className={cn('w-full p-5', className)} {...props} />;
}

function NavbarInner({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="navbar-inner"
      className={cn(
        'flex min-h-[80px] w-full items-center gap-6 rounded-pill bg-white/25 px-5 py-[15px]',
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
      className={cn('hidden items-center gap-[25px] md:flex', className)}
      {...props}
    />
  );
}

function NavbarLink({ className, ...props }: React.ComponentProps<'a'>) {
  return (
    <a
      data-slot="navbar-link"
      className={cn(
        'text-sm leading-6 font-bold tracking-[-0.7px] whitespace-nowrap text-white transition-colors hover:text-brand-green',
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

export { Navbar, NavbarInner, NavbarBrand, NavbarNav, NavbarLink, NavbarActions };
