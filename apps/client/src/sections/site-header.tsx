import {
  Button,
  ErrorState,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarInner,
  NavbarItem,
  NavbarLink,
  NavbarMobileDisclosure,
  NavbarMobileExpand,
  NavbarMobileItem,
  NavbarMobileNav,
  NavbarMobileSubLink,
  NavbarMobileSubNav,
  NavbarNav,
  NavbarPanel,
  NavbarPanelCard,
  NavbarPanelCardTitle,
  NavbarRow,
  NavbarToggle,
  Skeleton,
} from 'metatech-ui';

import { useNavigationState } from '../data';

function SiteHeaderSkeleton() {
  return (
    <Navbar>
      <NavbarInner>
        <NavbarRow>
          <Skeleton className="h-5 w-[126px] md:h-[25px] md:w-[155px]" />
          <NavbarNav>
            <Skeleton className="h-4 w-[70px]" />
            <Skeleton className="h-4 w-[80px]" />
            <Skeleton className="h-4 w-[62px]" />
          </NavbarNav>
          <NavbarActions>
            <Skeleton className="hidden h-[50px] w-[160px] rounded-btn md:block" />
            <NavbarToggle />
          </NavbarActions>
        </NavbarRow>
      </NavbarInner>
    </Navbar>
  );
}

export function SiteHeader() {
  const { data, error, isLoading } = useNavigationState();

  if (error || (!isLoading && !data)) {
    return (
      <Navbar>
        <NavbarInner>
          <ErrorState
            title="The menu is unavailable"
            message={error?.message}
            className="py-[20px]"
          />
        </NavbarInner>
      </Navbar>
    );
  }

  if (isLoading || !data) {
    return <SiteHeaderSkeleton />;
  }

  return (
    <Navbar>
      <NavbarInner>
        <NavbarRow>
          <NavbarBrand href={data.brand.href} aria-label={`${data.brand.label} home`}>
            <img
              src={data.brand.logoSrc}
              alt={data.brand.label}
              className="h-5 w-[126px] md:h-[25px] md:w-[155px]"
            />
          </NavbarBrand>
          <NavbarNav>
            <NavbarItem>
              <NavbarLink
                href={data.solutions.href}
                className="group-hover/navbar-item:text-brand-green"
              >
                {data.solutions.label}
              </NavbarLink>
            </NavbarItem>
            {data.links.map((link) => (
              <NavbarLink key={link.href} href={link.href}>
                {link.label}
              </NavbarLink>
            ))}
          </NavbarNav>
          <NavbarActions>
            <Button variant="glass" size="compact" className="hidden md:inline-flex">
              {data.cta.label}
            </Button>
            <NavbarToggle />
          </NavbarActions>
        </NavbarRow>
        <NavbarPanel>
          {data.solutions.cards.map((card) => (
            <NavbarPanelCard key={card.title} href={card.href} imageSrc={card.imageSrc}>
              <NavbarPanelCardTitle>{card.title}</NavbarPanelCardTitle>
            </NavbarPanelCard>
          ))}
        </NavbarPanel>
        <NavbarMobileNav>
          <NavbarMobileDisclosure>
            <NavbarMobileItem>
              <NavbarLink href={data.solutions.href}>{data.solutions.label}</NavbarLink>
              <NavbarMobileExpand />
            </NavbarMobileItem>
            <NavbarMobileSubNav>
              {data.solutions.cards.map((card) => (
                <NavbarMobileSubLink key={card.title} href={card.href}>
                  {card.title}
                </NavbarMobileSubLink>
              ))}
            </NavbarMobileSubNav>
          </NavbarMobileDisclosure>
          {data.links.map((link) => (
            <NavbarMobileItem key={link.href}>
              <NavbarLink href={link.href}>{link.label}</NavbarLink>
            </NavbarMobileItem>
          ))}
          <Button variant="glass" size="compact" className="mt-auto w-full shrink-0">
            {data.cta.label}
          </Button>
        </NavbarMobileNav>
      </NavbarInner>
    </Navbar>
  );
}
