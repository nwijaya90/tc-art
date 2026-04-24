"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  PageWrapper,
  ContentContainer,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbSep,
  BreadcrumbCurrent,
  HeroCard,
  HeroImageWrap,
  HeroMeta,
  HeroEyebrow,
  ArtistName,
  ArtistCountry,
  ShortBio,
  HeroStats,
  StatCard,
  StatNumber,
  StatLabel,
  ActionRow,
  PrimaryBtn,
  GhostBtn,
  InfoGrid,
  Panel,
  PanelTitle,
  AboutText,
  TagList,
  Tag,
  TimelineList,
  TimelineItem,
  TimelineDate,
  TimelineText,
  WorksList,
  WorkItem,
  WorkTop,
  WorkTitle,
  WorkYear,
  WorkMeta,
  WorkPrice,
  NotFoundState,
  NotFoundTitle,
  NotFoundDesc,
} from "./elements";

const ARTISTS_DETAIL_DB = {
  1: {
    id: 1,
    name: "Layla Moreira",
    country: "🇧🇷 Brazil",
    image: "/images/artist-1.avif",
    bio: "Contemporary artist exploring emotion through color and layered texture.",
    fullBio:
      "Layla blends expressive brushwork with translucent glazes to build atmospheric abstract scenes. Her recent studio practice focuses on memory, transition, and emotional topography inspired by coastal sunsets in São Paulo.",
    works: 24,
    collectors: 180,
    years: 7,
    specialties: ["Abstract", "Oil on Canvas", "Large Scale"],
    events: [
      { date: "Jun 2026", text: "Solo show · Chromatic Silence, Jakarta" },
      { date: "Aug 2026", text: "Art Fair · LatAm Contemporary Week" },
    ],
    featuredWorks: [
      { title: "Crimson Reverie", year: 2023, medium: "Oil on Canvas", price: "$1,250" },
      { title: "Afterimage Tide", year: 2024, medium: "Mixed Media", price: "$1,480" },
      { title: "Velvet Drift", year: 2025, medium: "Acrylic", price: "$1,190" },
    ],
  },
  2: {
    id: 2,
    name: "Bima Santoso",
    country: "🇮🇩 Indonesia",
    image: "/images/artist-2.avif",
    bio: "Landscape painter capturing tropical atmosphere and shifting natural light.",
    fullBio:
      "Bima’s work is rooted in plein-air studies from Java and Lombok. He combines traditional landscape composition with modern color fields to create contemplative scenes that feel both familiar and cinematic.",
    works: 18,
    collectors: 142,
    years: 5,
    specialties: ["Landscape", "Acrylic", "Plein-air"],
    events: [
      { date: "May 2026", text: "Group show · Island Horizon, Bali" },
      { date: "Sep 2026", text: "Workshop · Painting Light in Nature" },
    ],
    featuredWorks: [
      { title: "Azure Depths", year: 2024, medium: "Acrylic", price: "$890" },
      { title: "Monsoon Valley", year: 2025, medium: "Acrylic", price: "$940" },
      { title: "Quiet Mangrove", year: 2025, medium: "Oil", price: "$1,020" },
    ],
  },
  3: {
    id: 3,
    name: "Hana Kim",
    country: "🇰🇷 South Korea",
    image: "/images/artist-3.avif",
    bio: "Modern illustrator known for bold characters and symbolic storytelling.",
    fullBio:
      "Hana merges editorial illustration with gallery-ready composition. Her figures often appear in dreamlike city settings, reflecting themes of identity, digital culture, and social memory.",
    works: 27,
    collectors: 210,
    years: 8,
    specialties: ["Illustration", "Digital + Print", "Character Design"],
    events: [
      { date: "Jul 2026", text: "Residency · Seoul Graphic Lab" },
      { date: "Oct 2026", text: "Talk · Narrative in Contemporary Illustration" },
    ],
    featuredWorks: [
      { title: "Signal Bloom", year: 2025, medium: "Archival Print", price: "$620" },
      { title: "Night Persona", year: 2024, medium: "Mixed Media", price: "$780" },
      { title: "Echo Figures", year: 2026, medium: "Digital Print", price: "$540" },
    ],
  },
  4: {
    id: 4,
    name: "Kenji Tanaka",
    country: "🇯🇵 Japan",
    image: "/images/artist-4.avif",
    bio: "Ink artist focused on minimalism, negative space, and meditative rhythm.",
    fullBio:
      "Kenji works primarily with sumi ink on washi paper, creating precise marks that emphasize silence and restraint. His series investigates balance between intention and spontaneity.",
    works: 22,
    collectors: 165,
    years: 10,
    specialties: ["Ink", "Minimalism", "Washi Paper"],
    events: [
      { date: "Jun 2026", text: "Museum program · Contemporary Sumi" },
      { date: "Nov 2026", text: "Solo show · Between Two Breaths" },
    ],
    featuredWorks: [
      { title: "Still Axis", year: 2023, medium: "Sumi Ink", price: "$1,050" },
      { title: "Blank Current", year: 2025, medium: "Ink on Washi", price: "$1,180" },
      { title: "Measured Quiet", year: 2026, medium: "Ink", price: "$980" },
    ],
  },
  5: {
    id: 5,
    name: "Emily Carter",
    country: "🇺🇸 USA",
    image: "/images/artist-5.avif",
    bio: "Abstract painter with vibrant palette and gestural movement.",
    fullBio:
      "Emily’s paintings are built through rapid, layered gestures and saturated color. Her current body of work explores urban tempo, improvisation, and emotional impact through scale.",
    works: 30,
    collectors: 250,
    years: 9,
    specialties: ["Abstract", "Color Field", "Large Canvas"],
    events: [
      { date: "May 2026", text: "Art Fair · New Voices NYC" },
      { date: "Aug 2026", text: "Solo booth · Summer Contemporary" },
    ],
    featuredWorks: [
      { title: "Neon Spill", year: 2026, medium: "Acrylic", price: "$1,700" },
      { title: "Pulse Grid", year: 2025, medium: "Mixed Media", price: "$1,520" },
      { title: "Heatwave Study", year: 2024, medium: "Oil", price: "$1,430" },
    ],
  },
  6: {
    id: 6,
    name: "Oliver Smith",
    country: "🇬🇧 UK",
    image: "/images/artist-6.avif",
    bio: "Portrait artist blending classical composition with contemporary mood.",
    fullBio:
      "Oliver’s portrait practice combines realistic anatomy with softened palettes and modern framing. His commissions and gallery works frequently center on introspection and quiet tension.",
    works: 19,
    collectors: 130,
    years: 6,
    specialties: ["Portrait", "Oil", "Figurative"],
    events: [
      { date: "Jul 2026", text: "Commission salon · London" },
      { date: "Oct 2026", text: "Group show · New Figurative Voices" },
    ],
    featuredWorks: [
      { title: "Grey Morning", year: 2025, medium: "Oil on Linen", price: "$1,280" },
      { title: "Second Gaze", year: 2024, medium: "Oil", price: "$1,120" },
      { title: "Window Figure", year: 2026, medium: "Acrylic", price: "$980" },
    ],
  },
  7: {
    id: 7,
    name: "Claire Dubois",
    country: "🇫🇷 France",
    image: "/images/artist-7.avif",
    bio: "Impressionist-inspired painter with soft atmospheric brushstrokes.",
    fullBio:
      "Claire revisits impressionist principles through modern subjects and color transitions. Her practice emphasizes natural movement in light, often painted from early-morning studies in Provence.",
    works: 25,
    collectors: 175,
    years: 11,
    specialties: ["Impressionist", "Oil", "Outdoor Studies"],
    events: [
      { date: "Jun 2026", text: "Open studio · Marseille" },
      { date: "Sep 2026", text: "Curated show · Light as Subject" },
    ],
    featuredWorks: [
      { title: "Lavender Air", year: 2025, medium: "Oil", price: "$1,330" },
      { title: "Blue Orchard", year: 2024, medium: "Oil on Canvas", price: "$1,240" },
      { title: "Soft Riverbank", year: 2026, medium: "Acrylic", price: "$1,080" },
    ],
  },
  8: {
    id: 8,
    name: "Lukas Müller",
    country: "🇩🇪 Germany",
    image: "/images/artist-8.avif",
    bio: "Conceptual artist investigating structure, geometry, and social space.",
    fullBio:
      "Lukas creates layered compositions that map architecture and movement. His pieces use restrained palettes and precise forms to examine how environments shape behavior and memory.",
    works: 21,
    collectors: 150,
    years: 7,
    specialties: ["Conceptual", "Geometric", "Mixed Media"],
    events: [
      { date: "Aug 2026", text: "Panel · Art & Urban Design" },
      { date: "Nov 2026", text: "Installation preview · Transit Lines" },
    ],
    featuredWorks: [
      { title: "Axis Study 04", year: 2025, medium: "Mixed Media", price: "$1,060" },
      { title: "Transit Block", year: 2026, medium: "Acrylic", price: "$1,190" },
      { title: "Urban Layer", year: 2024, medium: "Collage", price: "$920" },
    ],
  },
  9: {
    id: 9,
    name: "Giulia Rossi",
    country: "🇮🇹 Italy",
    image: "/images/artist-9.avif",
    bio: "Modern artist drawing from Renaissance composition and symbolism.",
    fullBio:
      "Giulia fuses classical proportion with contemporary abstraction, often referencing fresco color systems and mythological motifs. Her work bridges historical discipline with present-day themes.",
    works: 23,
    collectors: 168,
    years: 8,
    specialties: ["Contemporary Classicism", "Oil", "Symbolic Themes"],
    events: [
      { date: "May 2026", text: "Gallery lecture · From Fresco to Canvas" },
      { date: "Oct 2026", text: "Solo room · Echoes of Florence" },
    ],
    featuredWorks: [
      { title: "Florentine Echo", year: 2024, medium: "Oil", price: "$1,360" },
      { title: "Roman Light", year: 2025, medium: "Tempera Mix", price: "$1,240" },
      { title: "Myth Fragment", year: 2026, medium: "Acrylic", price: "$1,110" },
    ],
  },
  10: {
    id: 10,
    name: "Carlos Mendoza",
    country: "🇲🇽 Mexico",
    image: "/images/artist-10.avif",
    bio: "Mural-focused artist rooted in cultural narratives and bold textures.",
    fullBio:
      "Carlos translates mural energy into collectible-format works while preserving social storytelling. His process includes stencil layering, textured grounds, and vivid narrative color blocks.",
    works: 20,
    collectors: 140,
    years: 6,
    specialties: ["Mural Language", "Textured Acrylic", "Narrative Art"],
    events: [
      { date: "Jul 2026", text: "Community mural project · Yogyakarta" },
      { date: "Dec 2026", text: "Group show · Contemporary Latin Currents" },
    ],
    featuredWorks: [
      { title: "Barrio Pulse", year: 2025, medium: "Acrylic", price: "$980" },
      { title: "Voices Wall", year: 2026, medium: "Mixed Media", price: "$1,120" },
      { title: "Sunbrick Stories", year: 2024, medium: "Acrylic on Board", price: "$890" },
    ],
  },
};

const ArtistDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const artistId = Number(params?.id);
  const artist = ARTISTS_DETAIL_DB[artistId];

  if (!artist) {
    return (
      <PageWrapper>
        <ContentContainer>
          <NotFoundState>
            <NotFoundTitle>Artist tidak ditemukan</NotFoundTitle>
            <NotFoundDesc>
              ID `{params?.id}` belum tersedia di data hardcoded.
            </NotFoundDesc>
            <PrimaryBtn onClick={() => router.push("/artists")}>
              Kembali ke Artist List
            </PrimaryBtn>
          </NotFoundState>
        </ContentContainer>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <ContentContainer>
        <Breadcrumb>
          <BreadcrumbLink onClick={() => router.push("/")}>Home</BreadcrumbLink>
          <BreadcrumbSep>/</BreadcrumbSep>
          <BreadcrumbLink onClick={() => router.push("/artists")}>
            Artists
          </BreadcrumbLink>
          <BreadcrumbSep>/</BreadcrumbSep>
          <BreadcrumbCurrent>{artist.name}</BreadcrumbCurrent>
        </Breadcrumb>

        <HeroCard>
          <HeroImageWrap>
            <Image
              src={artist.image}
              alt={artist.name}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 420px"
              priority
            />
          </HeroImageWrap>

          <HeroMeta>
            <HeroEyebrow>Artist Profile</HeroEyebrow>
            <ArtistName>{artist.name}</ArtistName>
            <ArtistCountry>{artist.country}</ArtistCountry>
            <ShortBio>{artist.bio}</ShortBio>

            <HeroStats>
              <StatCard>
                <StatNumber>{artist.works}</StatNumber>
                <StatLabel>Artworks</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>{artist.collectors}</StatNumber>
                <StatLabel>Collectors</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>{artist.years} yrs</StatNumber>
                <StatLabel>Experience</StatLabel>
              </StatCard>
            </HeroStats>

            <ActionRow>
              <PrimaryBtn onClick={() => router.push("/artists")}>
                Back to Artists
              </PrimaryBtn>
              <GhostBtn onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Share Profile
              </GhostBtn>
            </ActionRow>
          </HeroMeta>
        </HeroCard>

        <InfoGrid>
          <Panel>
            <PanelTitle>About</PanelTitle>
            <AboutText>{artist.fullBio}</AboutText>
          </Panel>

          <Panel>
            <PanelTitle>Specialties</PanelTitle>
            <TagList>
              {artist.specialties.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </TagList>
          </Panel>

          <Panel>
            <PanelTitle>Upcoming Activities</PanelTitle>
            <TimelineList>
              {artist.events.map((event) => (
                <TimelineItem key={event.text}>
                  <TimelineDate>{event.date}</TimelineDate>
                  <TimelineText>{event.text}</TimelineText>
                </TimelineItem>
              ))}
            </TimelineList>
          </Panel>

          <Panel>
            <PanelTitle>Featured Works</PanelTitle>
            <WorksList>
              {artist.featuredWorks.map((work) => (
                <WorkItem key={work.title}>
                  <WorkTop>
                    <WorkTitle>{work.title}</WorkTitle>
                    <WorkYear>{work.year}</WorkYear>
                  </WorkTop>
                  <WorkMeta>{work.medium}</WorkMeta>
                  <WorkPrice>{work.price}</WorkPrice>
                </WorkItem>
              ))}
            </WorksList>
          </Panel>
        </InfoGrid>
      </ContentContainer>
    </PageWrapper>
  );
};

export default ArtistDetailPage;
