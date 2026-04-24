"use client";

import Link from "next/link";
import Image from "next/image";
import {
  PageWrapper,
  Container,
  HeroBanner,
  HeroBannerImage,
  HeroOverlay,
  HeroContent,
  HeroBadge,
  HeroTitle,
  HeroDesc,
  HeroButtons,
  HeroPrimaryBtn,
  HeroGhostBtn,
  StatsRow,
  StatItem,
  StatNumber,
  StatLabel,
  IntroGrid,
  IntroTextCard,
  IntroLabel,
  IntroHeading,
  IntroParagraph,
  IntroImageCard,
  IntroImageCardLarge,
  IntroImageCardSmall,
  IntroImageWrap,
  Panel,
  PanelTitle,
  ValuesGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDesc,
  Timeline,
  TimelineItem,
  TimelineYear,
  TimelineText,
  GallerySection,
  GalleryGrid,
  GalleryCard,
  GalleryCardImage,
  GalleryCardCaption,
  CTASection,
  CTAInner,
  CTATitle,
  CTADesc,
  CTAButtons,
  PrimaryBtn,
  GhostBtn,
} from "./elements";

const VALUES = [
  {
    icon: "🎨",
    title: "Artist First",
    desc: "We help independent artists build visibility and sell original work without heavy operational overhead.",
  },
  {
    icon: "🛡️",
    title: "Trust & Transparency",
    desc: "Every listing is curated with clear details, secure checkout, and reliable communication for collectors.",
  },
  {
    icon: "🌍",
    title: "Global Community",
    desc: "We connect artists and collectors across countries through a single, modern creative marketplace.",
  },
];

const MILESTONES = [
  { year: "2023", text: "TCart started as a curated pilot to showcase emerging local artists." },
  { year: "2024", text: "Expanded to international collectors and a multi-country artist catalog." },
  { year: "2025", text: "Launched richer artist profiles, artwork detail pages, and better checkout UX." },
  { year: "2026", text: "Focused on end-to-end collection journeys, from discovery to ownership." },
];

const GALLERY_SPOTLIGHT = [
  { src: "/images/art-1.avif", caption: "Curated Originals" },
  { src: "/images/art-2.avif", caption: "Global Perspectives" },
  { src: "/images/art-7.avif", caption: "Collector Favorites" },
];

const AboutPage = () => {
  return (
    <PageWrapper>
      <Container>
        <HeroBanner>
          <HeroBannerImage>
            <Image
              src="/images/art-3.avif"
              alt="TCart hero banner artwork"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </HeroBannerImage>
          <HeroOverlay />
          <HeroContent>
            <HeroBadge>About TCart</HeroBadge>
            <HeroTitle>
              Connecting independent artists
              <br />
              with modern collectors
            </HeroTitle>
            <HeroDesc>
              TCart is a curated platform for original art. We make discovering,
              buying, and collecting artwork feel as seamless as modern commerce,
              while preserving the emotional value behind every piece.
            </HeroDesc>
            <HeroButtons>
              <HeroPrimaryBtn as={Link} href="/gallery">
                Explore Gallery
              </HeroPrimaryBtn>
              <HeroGhostBtn as={Link} href="/artists">
                Meet Artists
              </HeroGhostBtn>
            </HeroButtons>
          </HeroContent>
        </HeroBanner>

        <StatsRow>
          <StatItem>
            <StatNumber>180+</StatNumber>
            <StatLabel>Artists</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>2,400+</StatNumber>
            <StatLabel>Original Works</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>50+</StatNumber>
            <StatLabel>Countries Reached</StatLabel>
          </StatItem>
        </StatsRow>

        <IntroGrid>
          <IntroTextCard>
            <IntroLabel>Our Story</IntroLabel>
            <IntroHeading>Built to make art discovery feel intentional</IntroHeading>
            <IntroParagraph>
              TCart began with a simple observation: exceptional artworks often get
              buried in generic marketplaces, while collectors want a more curated,
              high-context experience. We designed TCart to bridge that gap with a
              cleaner journey, stronger storytelling, and better trust signals.
            </IntroParagraph>
            <IntroLabel>Our Mission</IntroLabel>
            <IntroParagraph>
              We help artists grow sustainably and help collectors discover pieces
              that feel personal. Our mission is to make art commerce intuitive,
              transparent, and deeply human.
            </IntroParagraph>
          </IntroTextCard>

          <IntroImageCard>
            <IntroImageCardLarge>
              <IntroImageWrap>
                <Image
                  src="/images/artist-3.avif"
                  alt="Featured artist portrait"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </IntroImageWrap>
            </IntroImageCardLarge>
            <IntroImageCardSmall>
              <IntroImageWrap>
                <Image
                  src="/images/art-6.avif"
                  alt="Featured artwork detail"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 50vw, 240px"
                />
              </IntroImageWrap>
            </IntroImageCardSmall>
            <IntroImageCardSmall>
              <IntroImageWrap>
                <Image
                  src="/images/artist-1.avif"
                  alt="Artist in studio style portrait"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 50vw, 240px"
                />
              </IntroImageWrap>
            </IntroImageCardSmall>
          </IntroImageCard>
        </IntroGrid>

        <Panel>
          <PanelTitle>What We Value</PanelTitle>
          <ValuesGrid>
            {VALUES.map((value) => (
              <ValueCard key={value.title}>
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDesc>{value.desc}</ValueDesc>
              </ValueCard>
            ))}
          </ValuesGrid>
        </Panel>

        <Panel>
          <PanelTitle>Journey</PanelTitle>
          <Timeline>
            {MILESTONES.map((item) => (
              <TimelineItem key={item.year}>
                <TimelineYear>{item.year}</TimelineYear>
                <TimelineText>{item.text}</TimelineText>
              </TimelineItem>
            ))}
          </Timeline>
        </Panel>
        <GallerySection>
          <PanelTitle>Visual Spotlight</PanelTitle>
          <GalleryGrid>
            {GALLERY_SPOTLIGHT.map((item) => (
              <GalleryCard key={item.caption}>
                <GalleryCardImage>
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 860px) 100vw, 33vw"
                  />
                </GalleryCardImage>
                <GalleryCardCaption>{item.caption}</GalleryCardCaption>
              </GalleryCard>
            ))}
          </GalleryGrid>
        </GallerySection>

        <CTASection>
          <CTAInner>
            <CTATitle>Ready to find your next favorite piece?</CTATitle>
            <CTADesc>
              Explore curated artists or jump straight into the latest gallery drops.
            </CTADesc>
            <CTAButtons>
              <PrimaryBtn as={Link} href="/artists">
                Explore Artists
              </PrimaryBtn>
              <GhostBtn as={Link} href="/gallery">
                Browse Gallery
              </GhostBtn>
            </CTAButtons>
          </CTAInner>
        </CTASection>
      </Container>
    </PageWrapper>
  );
};

export default AboutPage;
