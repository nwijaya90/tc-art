"use client";

import { useState, useEffect } from "react";
import {
  PageWrapper,
  HeroSection,
  HeroBgGlow,
  HeroContent,
  HeroBadge,
  HeroBadgeDot,
  HeroTitle,
  HeroTitleAccent,
  HeroDesc,
  HeroCTA,
  BtnPrimary,
  BtnOutline,
  HeroStats,
  StatItem,
  StatNumber,
  StatLabel,
  HeroVisual,
  HeroCardMain,
  HeroCardMainImg,
  HeroCardBadge,
  HeroCardInfo,
  HeroCardTitle,
  HeroCardSub,
  HeroCardPrice,
  HeroCardSecondary,
  HeroCardSecImg,
  HeroCardSecInfo,
  HeroCardSecTitle,
  HeroCardSecPrice,
  FloatingDot,
  FilterSection,
  FilterRow,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  CategoryBtn,
  GallerySection,
  GalleryHeader,
  GalleryTitle,
  GalleryCount,
  SortSelect,
  ArtGrid,
  CardWrapper,
  CardImage,
  CardImageEmoji,
  CardAccentBlur,
  CardTag,
  WishlistBtn,
  CardOverlay,
  OverlayBtn,
  CardBody,
  CardRow,
  CardTitle,
  CardArtist,
  CardSize,
  CardPrice,
  CardAddBtn,
  ArtistsSection,
  ArtistsBgGlow,
  ArtistsInner,
  SectionHeader,
  SectionEyebrow,
  SectionTitle,
  SectionLink,
  ArtistsGrid,
  ArtistCard,
  ArtistAvatar,
  ArtistName,
  ArtistCountry,
  ArtistWorksTag,
  CTASection,
  CTATitle,
  CTADesc,
  CTABtn,
} from "./elements";

// ─── DATA ────────────────────────────────────────────────────
const artworks = [
  {
    id: 1,
    title: "Crimson Reverie",
    artist: "Layla Moreira",
    medium: "Oil on Canvas",
    price: 1250,
    size: "80 × 100 cm",
    tag: "New",
    color: "#E84545",
    category: "Abstract",
  },
  {
    id: 2,
    title: "Azure Depths",
    artist: "Bima Santoso",
    medium: "Acrylic",
    price: 890,
    size: "60 × 80 cm",
    tag: "Hot",
    color: "#2176AE",
    category: "Landscape",
  },
  {
    id: 3,
    title: "Golden Meridian",
    artist: "Sari Dewi",
    medium: "Mixed Media",
    price: 2100,
    size: "100 × 120 cm",
    tag: "Featured",
    color: "#F4A261",
    category: "Abstract",
  },
  {
    id: 4,
    title: "Verdant Whisper",
    artist: "Eko Prasetyo",
    medium: "Watercolour",
    price: 540,
    size: "40 × 50 cm",
    tag: "Sale",
    color: "#2A9D8F",
    category: "Nature",
  },
  {
    id: 5,
    title: "Neon Solitude",
    artist: "Mira Yuliani",
    medium: "Digital Print",
    price: 320,
    size: "50 × 70 cm",
    tag: "New",
    color: "#7B2D8B",
    category: "Portrait",
  },
  {
    id: 6,
    title: "Terracotta Dreams",
    artist: "Bagas Wibowo",
    medium: "Oil on Canvas",
    price: 1780,
    size: "90 × 110 cm",
    tag: null,
    color: "#C1440E",
    category: "Abstract",
  },
];

const artists = [
  { name: "Layla Moreira", works: 24, country: "🇧🇷 Brazil", color: "#E84545" },
  {
    name: "Bima Santoso",
    works: 18,
    country: "🇮🇩 Indonesia",
    color: "#2176AE",
  },
  { name: "Sari Dewi", works: 31, country: "🇮🇩 Indonesia", color: "#F4A261" },
  {
    name: "Mira Yuliani",
    works: 15,
    country: "🇮🇩 Indonesia",
    color: "#7B2D8B",
  },
];

const categories = ["All", "Abstract", "Landscape", "Nature", "Portrait"];
const heroColors = ["#E84545", "#2176AE", "#F4A261", "#7B2D8B"];

const floatingDots = [
  { top: 60, left: 30, size: 50, color: "#E84545", duration: 4, delay: 0 },
  { top: 180, right: 10, size: 35, color: "#F4A261", duration: 5, delay: 1 },
  { bottom: 100, left: 10, size: 25, color: "#2A9D8F", duration: 6, delay: 2 },
];

// ─── ART CARD COMPONENT ─────────────────────────────────────
function ArtworkCard({ art, index }) {
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <CardWrapper
      $index={index}
      $hovered={hovered}
      color={art.color}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardImage color={art.color}>
        <CardImageEmoji>🖼</CardImageEmoji>
        <CardAccentBlur color={art.color} />

        {art.tag && <CardTag tag={art.tag}>{art.tag.toUpperCase()}</CardTag>}

        <WishlistBtn
          $liked={liked}
          color={art.color}
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
        >
          {liked ? "❤️" : "🤍"}
        </WishlistBtn>

        <CardOverlay color={art.color} $visible={hovered}>
          <OverlayBtn color={art.color}>View Artworks</OverlayBtn>
        </CardOverlay>
      </CardImage>

      <CardBody>
        <CardRow>
          <div>
            <CardTitle>{art.title}</CardTitle>
            <CardArtist>
              {art.artist} · {art.medium}
            </CardArtist>
            <CardSize>{art.size}</CardSize>
          </div>
          <CardPrice color={art.color}>${art.price.toLocaleString()}</CardPrice>
        </CardRow>
        <CardAddBtn color={art.color}>Add to Cart</CardAddBtn>
      </CardBody>
    </CardWrapper>
  );
}

// ─── PAGE ────────────────────────────────────────────────────
export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [heroIdx, setHeroIdx] = useState(0);
  const [hoveredArtist, setHoveredArtist] = useState(null);

  useEffect(() => {
    const t = setInterval(
      () => setHeroIdx((i) => (i + 1) % heroColors.length),
      3000,
    );
    return () => clearInterval(t);
  }, []);

  const filtered = artworks.filter(
    (a) =>
      (activeCategory === "All" || a.category === activeCategory) &&
      (a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.artist.toLowerCase().includes(search.toLowerCase())),
  );

  return (
    <PageWrapper>
      {/* ── HERO ── */}
      <HeroSection>
        <HeroBgGlow color={heroColors[heroIdx]} />

        <HeroContent>
          <HeroBadge>
            <HeroBadgeDot>✦</HeroBadgeDot>
            Curated Original Art · Updated Weekly
          </HeroBadge>

          <HeroTitle>
            Discover Art
            <br />
            That <HeroTitleAccent>Speaks</HeroTitleAccent>
            <br />
            To Your Soul
          </HeroTitle>

          <HeroDesc>
            Original paintings from independent artists worldwide. Each piece is
            unique, handcrafted, and comes with a certificate of authenticity.
          </HeroDesc>

          <HeroCTA>
            <BtnPrimary>Explore Gallery →</BtnPrimary>
            <BtnOutline>Meet Artists</BtnOutline>
          </HeroCTA>

          <HeroStats>
            {[
              ["2,400+", "Original Works"],
              ["180+", "Artists"],
              ["50+", "Countries"],
            ].map(([num, label]) => (
              <StatItem key={label}>
                <StatNumber>{num}</StatNumber>
                <StatLabel>{label}</StatLabel>
              </StatItem>
            ))}
          </HeroStats>
        </HeroContent>

        {/* Floating visual cards */}
        <HeroVisual>
          <HeroCardMain>
            <HeroCardMainImg color={heroColors[heroIdx]}>
              🖼
              <HeroCardBadge>FEATURED</HeroCardBadge>
            </HeroCardMainImg>
            <HeroCardInfo>
              <HeroCardTitle>Crimson Reverie</HeroCardTitle>
              <HeroCardSub>Layla Moreira · Oil on Canvas</HeroCardSub>
              <HeroCardPrice>$1,250</HeroCardPrice>
            </HeroCardInfo>
          </HeroCardMain>

          <HeroCardSecondary>
            <HeroCardSecImg>🎨</HeroCardSecImg>
            <HeroCardSecInfo>
              <HeroCardSecTitle>Azure Depths</HeroCardSecTitle>
              <HeroCardSecPrice>$890</HeroCardSecPrice>
            </HeroCardSecInfo>
          </HeroCardSecondary>

          {floatingDots.map((dot, i) => (
            <FloatingDot key={i} {...dot} />
          ))}
        </HeroVisual>
      </HeroSection>

      {/* ── FILTER ── */}
      <FilterSection>
        <FilterRow>
          <SearchWrapper>
            <SearchIcon>🔍</SearchIcon>
            <SearchInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search artworks, artists..."
            />
          </SearchWrapper>

          {categories.map((cat) => (
            <CategoryBtn
              key={cat}
              $active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </CategoryBtn>
          ))}
        </FilterRow>
      </FilterSection>

      {/* ── GALLERY GRID ── */}
      <GallerySection>
        <GalleryHeader>
          <div>
            <GalleryTitle>
              {activeCategory === "All" ? "All Artworks" : activeCategory}
            </GalleryTitle>
            <GalleryCount>{filtered.length} works available</GalleryCount>
          </div>
          <SortSelect>
            <option>Best Match</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </SortSelect>
        </GalleryHeader>

        <ArtGrid>
          {filtered.map((art, i) => (
            <ArtworkCard key={art.id} art={art} index={i} />
          ))}
        </ArtGrid>
      </GallerySection>

      {/* ── FEATURED ARTISTS ── */}
      <ArtistsSection>
        <ArtistsBgGlow />
        <ArtistsInner>
          <SectionHeader>
            <div>
              <SectionEyebrow>Featured Artists</SectionEyebrow>
              <SectionTitle>
                Meet the
                <br />
                Creators
              </SectionTitle>
            </div>
            <SectionLink>View all artists →</SectionLink>
          </SectionHeader>

          <ArtistsGrid>
            {artists.map((artist, i) => (
              <ArtistCard
                key={artist.name}
                $index={i}
                $hovered={hoveredArtist === artist.name}
                color={artist.color}
                onMouseEnter={() => setHoveredArtist(artist.name)}
                onMouseLeave={() => setHoveredArtist(null)}
              >
                <ArtistAvatar color={artist.color}>👤</ArtistAvatar>
                <ArtistName>{artist.name}</ArtistName>
                <ArtistCountry>{artist.country}</ArtistCountry>
                <ArtistWorksTag color={artist.color}>
                  {artist.works} works
                </ArtistWorksTag>
              </ArtistCard>
            ))}
          </ArtistsGrid>
        </ArtistsInner>
      </ArtistsSection>

      {/* ── CTA ── */}
      <CTASection>
        <CTATitle>Are You an Artist?</CTATitle>
        <CTADesc>
          Join 180+ artists selling original work to collectors worldwide. No
          upfront fees.
        </CTADesc>
        <CTABtn>Start Selling Today →</CTABtn>
      </CTASection>
    </PageWrapper>
  );
}
