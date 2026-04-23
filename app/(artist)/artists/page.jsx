"use client";

import { useState } from "react";
import Image from "next/image";
import {
  PageWrapper,
  HeroSection,
  HeroEyebrow,
  HeroTitle,
  HeroDesc,
  HeroStats,
  StatItem,
  StatNumber,
  StatLabel,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  GridSection,
  GridHeader,
  GridCount,
  FilterTabs,
  FilterTab,
  ArtistsGrid,
  ArtistCard,
  ArtistImage,
  ArtistOverlay,
  ArtistInfo,
  ArtistName,
  ArtistCountry,
  ArtistStats,
  StatBadge,
  ArtistHover,
  ViewProfileBtn,
  EmptyState,
  EmptyIcon,
  EmptyText,
} from "./elements";

// ─── MOCK DATA ────────────────────────────────────────────────
const ARTISTS = [
  {
    id: 1,
    name: "Layla Moreira",
    country: "🇧🇷 Brazil",
    countryCode: "Brazil",
    works: 24,
    collectors: 180,
    bio: "Contemporary artist exploring emotion through color",
    image: "/images/artist-1.avif",
    featured: true,
  },
  {
    id: 2,
    name: "Bima Santoso",
    country: "🇮🇩 Indonesia",
    countryCode: "Indonesia",
    works: 18,
    collectors: 142,
    bio: "Landscape painter capturing nature's essence",
    image: "/images/artist-2.avif",
    wide: true,
  },
  {
    id: 3,
    name: "Hana Kim",
    country: "🇰🇷 South Korea",
    countryCode: "South Korea",
    works: 27,
    collectors: 210,
    bio: "Modern illustrator with bold characters",
    image: "/images/artist-3.avif",
  },
  {
    id: 4,
    name: "Kenji Tanaka",
    country: "🇯🇵 Japan",
    countryCode: "Japan",
    works: 22,
    collectors: 165,
    bio: "Ink artist focused on minimalism",
    image: "/images/artist-4.avif",
  },
  {
    id: 5,
    name: "Emily Carter",
    country: "🇺🇸 USA",
    countryCode: "USA",
    works: 30,
    collectors: 250,
    bio: "Abstract painter with vibrant palette",
    image: "/images/artist-5.avif",
    wide: true,
  },
  {
    id: 6,
    name: "Oliver Smith",
    country: "🇬🇧 UK",
    countryCode: "UK",
    works: 19,
    collectors: 130,
    bio: "Portrait artist with classical influence",
    image: "/images/artist-6.avif",
  },
  {
    id: 7,
    name: "Claire Dubois",
    country: "🇫🇷 France",
    countryCode: "France",
    works: 25,
    collectors: 175,
    bio: "Impressionist inspired painter",
    image: "/images/artist-7.avif",
  },
  {
    id: 8,
    name: "Lukas Müller",
    country: "🇩🇪 Germany",
    countryCode: "Germany",
    works: 21,
    collectors: 150,
    bio: "Conceptual artist exploring structure",
    image: "/images/artist-8.avif",
  },
  {
    id: 9,
    name: "Giulia Rossi",
    country: "🇮🇹 Italy",
    countryCode: "Italy",
    works: 23,
    collectors: 168,
    bio: "Renaissance inspired modern artist",
    image: "/images/artist-9.avif",
  },
  {
    id: 10,
    name: "Carlos Mendoza",
    country: "🇲🇽 Mexico",
    countryCode: "Mexico",
    works: 20,
    collectors: 140,
    bio: "Mural artist rooted in culture",
    image: "/images/artist-10.avif",
  },
];

const COUNTRIES = [
  "All",
  "Indonesia",
  "Brazil",
  "South Korea",
  "Japan",
  "USA",
  "UK",
  "France",
  "Germany",
  "Italy",
  "Spain",
  "Mexico",
  "India",
  "China",
  "Australia",
  "Canada",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
];

// ─── PAGE ─────────────────────────────────────────────────────
const ArtistsPage = () => {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All");

  // Filter artists
  const filtered = ARTISTS.filter((artist) => {
    const matchSearch =
      artist.name.toLowerCase().includes(search.toLowerCase()) ||
      artist.bio.toLowerCase().includes(search.toLowerCase());
    const matchCountry = country === "All" || artist.countryCode === country;
    return matchSearch && matchCountry;
  });

  // Stats
  const totalWorks = ARTISTS.reduce((sum, a) => sum + a.works, 0);
  const totalCollectors = ARTISTS.reduce((sum, a) => sum + a.collectors, 0);

  return (
    <PageWrapper>
      {/* ── HERO ── */}
      <HeroSection>
        <HeroEyebrow>Our Community</HeroEyebrow>
        <HeroTitle>Meet Our Artists</HeroTitle>
        <HeroDesc>
          Discover talented creators from around the world. Each artist brings
          their unique vision, passion, and craftsmanship to every piece they
          create.
        </HeroDesc>

        <HeroStats>
          <StatItem>
            <StatNumber>{ARTISTS.length}+</StatNumber>
            <StatLabel>Artists</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{totalWorks}+</StatNumber>
            <StatLabel>Artworks</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{totalCollectors}+</StatNumber>
            <StatLabel>Collectors</StatLabel>
          </StatItem>
        </HeroStats>

        <SearchWrapper>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search artists by name or style..."
          />
        </SearchWrapper>
      </HeroSection>

      {/* ── GRID ── */}
      <GridSection>
        <GridHeader>
          <GridCount>
            {filtered.length} {filtered.length === 1 ? "artist" : "artists"}
          </GridCount>

          <FilterTabs>
            {COUNTRIES.map((c) => (
              <FilterTab
                key={c}
                $active={country === c}
                onClick={() => setCountry(c)}
              >
                {c}
              </FilterTab>
            ))}
          </FilterTabs>
        </GridHeader>

        {/* Empty state */}
        {filtered.length === 0 ? (
          <EmptyState>
            <EmptyIcon>🎨</EmptyIcon>
            <EmptyText>No artists found matching "{search}"</EmptyText>
          </EmptyState>
        ) : (
          <ArtistsGrid>
            {filtered.map((artist, index) => (
              <ArtistCard
                key={artist.id}
                href={`/artist/${artist.id}`}
                $index={index}
                $featured={artist.featured}
                $wide={artist.wide}
              >
                {/* Image */}
                <ArtistImage>
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </ArtistImage>

                {/* Gradient overlay */}
                <ArtistOverlay />

                {/* Info */}
                <ArtistInfo>
                  <ArtistName>{artist.name}</ArtistName>
                  <ArtistCountry>{artist.country}</ArtistCountry>
                  <ArtistStats>
                    <StatBadge>
                      <span>🎨</span> {artist.works} works
                    </StatBadge>
                    <StatBadge>
                      <span>👥</span> {artist.collectors} collectors
                    </StatBadge>
                  </ArtistStats>
                </ArtistInfo>

                {/* Hover state */}
                <ArtistHover>
                  <ViewProfileBtn>View Profile →</ViewProfileBtn>
                </ArtistHover>
              </ArtistCard>
            ))}
          </ArtistsGrid>
        )}
      </GridSection>
    </PageWrapper>
  );
};

export default ArtistsPage;
