import {
  Button,
  Card,
  CardDescription,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  Eyebrow,
  ArrowRightIcon,
  LogoGrid,
  MediaBanner,
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarInner,
  NavbarLink,
  NavbarMobileNav,
  NavbarMobileDisclosure,
  NavbarMobileExpand,
  NavbarMobileItem,
  NavbarMobileSubLink,
  NavbarMobileSubNav,
  NavbarNav,
  NavbarItem,
  NavbarPanel,
  NavbarPanelCard,
  NavbarPanelCardTitle,
  NavbarRow,
  NavbarToggle,
  PillarBody,
  PillarContent,
  PillarNumber,
  PillarPanel,
  PillarTitle,
  Section,
  SectionBody,
  SectionInner,
  SectionSplit,
  SectionTitle,
  Showcase,
  ShowcaseBody,
  ShowcaseContent,
  ShowcaseLogo,
  ShowcaseMedia,
  ShowcaseTitle,
  SiteFooter,
  SiteFooterLink,
  SiteFooterTop,
  SiteFooterWordmark,
  Tabs,
  TabsList,
  TabsPanel,
  TabsPanels,
  TabsTrigger,
  TechGrid,
  type TechGridItem,
} from 'metatech-ui';

const solutionCards = [
  {
    title: 'Custom Software Development',
    href: '#solutions',
    imageSrc: '/brand/nav-custom-software.jpg',
  },
  {
    title: 'Data+AI First Innovation',
    href: '#solutions',
    imageSrc: '/brand/nav-data-ai.jpg',
  },
  {
    title: 'Tech Staff Augmentation',
    href: '#solutions',
    imageSrc: '/brand/nav-tech-staffing.jpg',
  },
];

const clientLogos = [
  {
    name: 'Databricks',
    src: '/brand/client-databricks.png',
    width: 172,
    height: 48,
  },
  {
    name: 'Google Cloud',
    src: '/brand/client-google-cloud.png',
    width: 172,
    height: 45,
  },
  { name: 'UiPath', src: '/brand/client-uipath.png', width: 112, height: 50 },
  { name: 'Alteryx', src: '/brand/client-alteryx.png', width: 132, height: 40 },
  { name: 'Alteryx', src: '/brand/client-alteryx.png', width: 132, height: 40 },
  { name: 'Figma', src: '/brand/client-figma.png', width: 132, height: 39 },
  {
    name: 'Amazon Web Services',
    src: '/brand/client-aws.png',
    width: 80,
    height: 80,
  },
  {
    name: 'Google Cloud',
    src: '/brand/client-google-cloud.png',
    width: 172,
    height: 45,
  },
];

const pillars = [
  {
    value: 'data-ai',
    tab: 'Data + AI',
    number: '01',
    title: 'Data + AI Settings Innovation',
    body: 'Our Data and AI services combine engineering, analytics, and applied AI to help organizations understand data, predict outcomes, and automate decisions. From trusted analytics to production grade AI systems, we deliver intelligence that works in the real world.',
  },
  {
    value: 'custom-software',
    tab: 'Custom Software',
    number: '02',
    title: 'Custom Software Built To Scale',
    body: 'Our Data and AI services combine engineering, analytics, and applied AI to help organizations understand data, predict outcomes, and automate decisions. From trusted analytics to production grade AI systems, we deliver intelligence that works in the real world.',
  },
  {
    value: 'tech-staffing',
    tab: 'Tech Staffing',
    number: '03',
    title: 'Elite Talent On Demand',
    body: 'Our Data and AI services combine engineering, analytics, and applied AI to help organizations understand data, predict outcomes, and automate decisions. From trusted analytics to production grade AI systems, we deliver intelligence that works in the real world.',
  },
];

const solutionHighlights = [
  {
    title: 'Data Integrity First',
    body: 'AI outputs are only as reliable as the data feeding them. We design, validate, and strengthen your data foundation from the ground up. Garbage in, garbage out is not a risk we take with your business.',
  },
  {
    title: 'Workflows Before Automation',
    body: 'Before we build anything, we map your business workflows end to end by surveying the ambiguity. We understand the decisions being made, the people making them, and the systems involved. That clarity determines how and where automation creates real leverage, not just activity.',
  },
  {
    title: 'Governance With Same Standard',
    body: 'We implement data governance frameworks that carry the same accountability as human oversight. Your agents operate within defined boundaries. Auditability, control, and compliance are built in, not added on.',
  },
];

const techRows: TechGridItem[][] = [
  [
    {
      name: 'React',
      src: '/tech/react.png',
      cell: 214,
      width: 130,
      height: 73,
    },
    {
      name: 'Next.js',
      src: '/tech/nextjs.png',
      cell: 250,
      width: 132,
      height: 132,
    },
    {
      name: 'Tailwind CSS',
      src: '/tech/tailwind.png',
      cell: 250,
      width: 200,
      height: 200,
    },
    {
      name: 'TypeScript',
      src: '/tech/typescript.png',
      cell: 250,
      width: 138,
      height: 34,
    },
    {
      name: 'Angular',
      src: '/tech/angular.svg',
      cell: 250,
      width: 147,
      height: 40,
    },
    { name: 'Vue.js', src: '/tech/vue.png', cell: 176, width: 120, height: 60 },
  ],
  [
    { name: 'Go', src: '/tech/go.png', cell: 174, width: 107, height: 40 },
    {
      name: 'Python',
      src: '/tech/python.png',
      cell: 250,
      width: 169,
      height: 50,
    },
    {
      name: 'Node.js',
      src: '/tech/nodejs.png',
      cell: 250,
      width: 148,
      height: 40,
    },
    {
      name: '.NET',
      src: '/tech/dotnet.png',
      cell: 250,
      width: 124,
      height: 70,
    },
    { name: 'Ruby', src: '/tech/ruby.png', cell: 250, width: 216, height: 100 },
    { name: 'PHP', src: '/tech/php.png', cell: 216, width: 111, height: 60 },
  ],
  [
    {
      name: 'Django',
      src: '/tech/django.png',
      cell: 216,
      width: 128,
      height: 50,
    },
    {
      name: 'Laravel',
      src: '/tech/laravel.png',
      cell: 250,
      width: 138,
      height: 40,
    },
    {
      name: 'Flutter',
      src: '/tech/flutter.png',
      cell: 250,
      width: 140,
      height: 40,
    },
    {
      name: 'MySQL',
      src: '/tech/mysql.png',
      cell: 250,
      width: 150,
      height: 100,
    },
    {
      name: 'MongoDB',
      src: '/tech/mongodb.png',
      cell: 250,
      width: 185,
      height: 50,
    },
    { name: 'HTML5', src: '/tech/html5.png', cell: 174, width: 70, height: 70 },
  ],
];

const showcaseSlides = [
  {
    src: '/brand/amicredible-shot.png',
    alt: 'AmiCredible dashboard on a tablet',
  },
  {
    src: '/brand/amicredible-shot.png',
    alt: 'AmiCredible quick check view',
  },
  {
    src: '/brand/amicredible-shot.png',
    alt: 'AmiCredible deep check view',
  },
];

const footerLinks = [
  { label: 'Terms of Use', href: '#terms' },
  { label: 'Privacy Policy', href: '#privacy' },
];

const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Linkedin', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Youtube', href: 'https://youtube.com' },
];

export function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar>
        <NavbarInner>
          <NavbarRow>
            <NavbarBrand href="#top" aria-label="MetaTech home">
              <img
                src="/brand/logo-metatech.svg"
                alt="MetaTech"
                className="h-5 w-[126px] md:h-[25px] md:w-[155px]"
              />
            </NavbarBrand>
            <NavbarNav>
              <NavbarItem>
                <NavbarLink href="#solutions" className="group-hover/navbar-item:text-brand-green">
                  Solutions
                </NavbarLink>
              </NavbarItem>
              <NavbarLink href="#showcase">Showcase</NavbarLink>
              <NavbarLink href="#contact">Contact</NavbarLink>
            </NavbarNav>
            <NavbarActions>
              <Button variant="glass" size="compact" className="hidden md:inline-flex">
                Book a meeting
              </Button>
              <NavbarToggle />
            </NavbarActions>
          </NavbarRow>
          <NavbarPanel>
            {solutionCards.map((card) => (
              <NavbarPanelCard key={card.title} href={card.href} imageSrc={card.imageSrc}>
                <NavbarPanelCardTitle>{card.title}</NavbarPanelCardTitle>
              </NavbarPanelCard>
            ))}
          </NavbarPanel>
          <NavbarMobileNav>
            <NavbarMobileDisclosure>
              <NavbarMobileItem>
                <NavbarLink href="#solutions">Solutions</NavbarLink>
                <NavbarMobileExpand />
              </NavbarMobileItem>
              <NavbarMobileSubNav>
                {solutionCards.map((card) => (
                  <NavbarMobileSubLink key={card.title} href={card.href}>
                    {card.title}
                  </NavbarMobileSubLink>
                ))}
              </NavbarMobileSubNav>
            </NavbarMobileDisclosure>
            <NavbarMobileItem>
              <NavbarLink href="#showcase">Showcase</NavbarLink>
            </NavbarMobileItem>
            <NavbarMobileItem>
              <NavbarLink href="#contact">Contact</NavbarLink>
            </NavbarMobileItem>
            <Button variant="glass" size="compact" className="mt-auto w-full shrink-0">
              Book a meeting
            </Button>
          </NavbarMobileNav>
        </NavbarInner>
      </Navbar>

      <div className="bg-deep text-deep-foreground">
        <Section
          id="top"
          className="px-6 pt-[168px] pb-[50px] md:pb-[168px] md:pt-[212px] lg:px-[50px]"
        >
          <div className="mx-auto flex w-full max-w-[1340px] flex-col items-start gap-5 lg:flex-row lg:items-center lg:gap-[180px]">
            <h1 className="max-w-[664px] font-display text-[48px] leading-[1] font-extrabold capitalize tracking-[-2.4px] lg:text-[72px] lg:leading-[72px] lg:tracking-[-3.6px]">
              Building <span className="text-brand-green">Intelligence to Power</span> Scalable
              Innovation
            </h1>
            <div className="flex w-full max-w-[388px] flex-col gap-8">
              <p className="text-sm lg:text-base leading-[23px] font-light">
                MetaTech integrates custom software engineering, advanced data and AI systems, and
                strategic staff augmentation to power scalable, high impact digital transformation.
              </p>
              <div>
                <Button variant="primary">Book for Demo</Button>
              </div>
            </div>
          </div>
        </Section>

        <MediaBanner
          imageSrc="/brand/banner-photo.png"
          imageAlt="MetaTech team collaborating"
          maskSrc="/brand/banner-mask.svg"
          shapeSrc="/brand/banner-shape.svg"
          videoSrc="/showreel.mp4"
          wordmarkSrc="/brand/banner-wordmark.svg"
        />

        <Section className="px-5 pt-[100px] pb-5">
          <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-10 lg:flex-row">
            <Eyebrow className="text-lg leading-6 whitespace-normal max-w-[216px] md:max-w-[178px]">
              <span className="text-brand-green">Trusted by</span> product teams and enterprise{' '}
              <span className="text-brand-green">innovators.</span>
            </Eyebrow>
            <LogoGrid items={clientLogos} className="w-full lg:w-[925px]" />
          </div>
        </Section>
      </div>

      <Section id="solutions" className="bg-background py-[80px]">
        <SectionInner>
          <SectionSplit className="gap-5 lg:gap-[380px]">
            <Eyebrow>{'We Are />'}</Eyebrow>
            <p className="max-w-[680px] font-display text-[21px] md:text-[32px] leading-[27px] md:leading-[39px] tracking-[-0.96px]">
              <span className="font-extrabold">
                Engineering business solutions through three strategic pillars{' '}
              </span>
              AI powered delivery combining intelligent software engineering, data driven insight,
              and elite talent to accelerate scale, quality, and competitive advantage.
            </p>
          </SectionSplit>
        </SectionInner>
      </Section>

      <Section className="bg-muted py-[50px]">
        <Tabs defaultValue={pillars[0].value}>
          <SectionInner className="flex">
            <span aria-hidden className="hidden w-[455px] shrink-0 xl:block" />
            <TabsList className="mx-auto w-full min-w-0 overflow-x-auto md:max-w-[612px] xl:mx-0">
              {pillars.map((pillar) => (
                <TabsTrigger key={pillar.value} value={pillar.value}>
                  {pillar.tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </SectionInner>

          <TabsPanels>
            {pillars.map((pillar) => (
              <TabsPanel key={pillar.value} value={pillar.value}>
                <SectionInner className="pb-[50px] pt-[100px] md:py-[50px] md:pt-[100px]">
                  <PillarPanel className="xl:gap-[290px]">
                    <PillarNumber>{pillar.number}</PillarNumber>
                    <PillarContent>
                      <PillarTitle>{pillar.title}</PillarTitle>
                      <PillarBody>{pillar.body}</PillarBody>
                      <Button variant="ink">Book a consultation</Button>
                    </PillarContent>
                  </PillarPanel>
                </SectionInner>
              </TabsPanel>
            ))}
          </TabsPanels>
        </Tabs>
      </Section>

      <Section className="bg-muted pb-[50px]">
        <SectionInner>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
            {solutionHighlights.map((highlight) => (
              <Card
                key={highlight.title}
                className="group/card relative w-full min-h-[350px] md:min-h-[450px] shrink-0 snap-start justify-between overflow-hidden border-deep bg-deep text-deep-foreground transition-colors duration-300 ease-out md:w-[60%] md:justify-center md:border-border md:bg-card md:text-card-foreground md:hover:justify-start md:hover:border-deep md:hover:bg-deep md:hover:text-deep-foreground lg:w-auto lg:shrink"
              >
                <CardTitle className="text-brand-green transition-colors duration-300 ease-out md:text-center md:text-inherit md:group-hover/card:text-left md:group-hover/card:text-brand-green">
                  {highlight.title}
                </CardTitle>
                <CardDescription className="text-inherit transition-opacity duration-300 ease-out md:absolute md:inset-x-[30px] md:bottom-[30px] md:opacity-0 md:group-hover/card:opacity-100">
                  {highlight.body}
                </CardDescription>
              </Card>
            ))}
          </div>
        </SectionInner>
      </Section>

      <Section id="showcase" className="bg-brand-green-mid">
        <SectionInner>
          <Showcase>
            <ShowcaseContent>
              <ShowcaseLogo src="/brand/amicredible-logo.png" alt="AmiCredible" />
              <div className="flex flex-col gap-[30px] md:gap-[50px] mt-20 md:mt-0">
                <div className="flex flex-col gap-[15px] max-w-[548px]">
                  <ShowcaseTitle>An AI-powered credibility checking platform</ShowcaseTitle>
                  <ShowcaseBody>
                    that helps users verify claims, analyze sources, and make informed decisions
                    with Quick Check, Deep Check, and Image Check features.
                  </ShowcaseBody>
                </div>
                <div>
                  <Button variant="outline">
                    Explore more
                    <ArrowRightIcon />
                  </Button>
                </div>
              </div>
            </ShowcaseContent>
            <ShowcaseMedia>
              <Carousel loop autoplayDelay={5000} className="size-full">
                <CarouselContent className="ml-0">
                  {showcaseSlides.map((slide, index) => (
                    <CarouselItem key={index} className="pl-0">
                      <div className="relative">
                        <img
                          src={slide.src}
                          alt={slide.alt}
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
          </Showcase>
        </SectionInner>
      </Section>

      <Section className="bg-background pb-[80px] pt-[100px] lg:pt-[150px]">
        <SectionInner>
          <SectionSplit className="gap-5 lg:gap-[340px]">
            <Eyebrow>{'Tech Stacks />'}</Eyebrow>
            <div className="flex max-w-[680px] flex-col gap-5">
              <SectionTitle className="text-[28px] md:leading-[27px] leading-[34px] tracking-[-0.96px] md:text-[32px] md:leading-[39px]">
                Built With Modern Technologies
              </SectionTitle>
              <SectionBody className="text-sm leading-5 md:text-lg md:leading-[27px]">
                We use modern, reliable technologies to design, build, and scale high-performance
                software systems. Our team works with proven tools to deliver secure, scalable,
                production-ready solutions.
              </SectionBody>
            </div>
          </SectionSplit>
        </SectionInner>
        <TechGrid rows={techRows} className="mt-[50px]" />
      </Section>

      <SiteFooter id="contact">
        <SiteFooterTop>
          <p className="w-[323px]">
            @2022-2026 <span className="text-brand-green">MetaTech LLC </span>
            {'// All Rights Reserved'}
          </p>
          <div className="flex items-center gap-[30px]">
            {footerLinks.map((link) => (
              <SiteFooterLink key={link.href} href={link.href}>
                {link.label}
              </SiteFooterLink>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-[30px]">
            {socialLinks.map((link) => (
              <SiteFooterLink key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </SiteFooterLink>
            ))}
          </div>
        </SiteFooterTop>
        <SiteFooterWordmark src="/brand/footer-wordmark.svg" alt="MetaTech" />
      </SiteFooter>
    </div>
  );
}
