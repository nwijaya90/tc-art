"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  PageWrapper,
  GalleryHeader,
  HeaderLeft,
  HeaderEyebrow,
  HeaderTitle,
  HeaderSub,
  HeaderRight,
  ResultCount,
  SortSelect,
  GalleryLayout,
  Sidebar,
  FilterSection,
  FilterTitle,
  FilterOption,
  FilterCheckbox,
  FilterCount,
  ColorRow,
  ColorDot,
  PriceRow,
  PriceInput,
  ClearBtn,
  MobileFilterBar,
  MobileChip,
  GridArea,
  TopBar,
  ViewToggle,
  ViewBtn,
  ArtGrid,
  ArtCard,
  ArtCardImage,
  ArtCardOverlay,
  OverlayBtn,
  ArtCardBadge,
  WishlistBtn,
  ArtCardBody,
  ArtCardMeta,
  ArtCardTitle,
  ArtCardArtist,
  ArtCardFooter,
  ArtCardPrice,
  ArtCardSize,
  ListActions,
  QuickBuyBtn,
  EmptyState,
  LoadMoreWrapper,
  LoadMoreBtn,
} from "./elements";

// ─── MOCK DATA ────────────────────────────────────────────────
const ARTWORKS = [
  {
    id: 1,
    title: "Crimson Reverie",
    artist: "Layla Moreira",
    country: "🇧🇷",
    medium: "Oil on Canvas",
    category: "Abstract",
    style: "Contemporary",
    price: 1250,
    originalPrice: 1600,
    size: "80×100 cm",
    color: "#E84545",
    badge: "Sale",
    image: "/images/art-1.avif",
  },
  {
    id: 2,
    title: "Azure Depths",
    artist: "Bima Santoso",
    country: "🇮🇩",
    medium: "Acrylic",
    category: "Landscape",
    style: "Modern",
    price: 890,
    size: "60×80 cm",
    color: "#2176AE",
    image: "/images/art-2.avif",
  },
  {
    id: 3,
    title: "Golden Meridian",
    artist: "Sari Dewi",
    country: "🇮🇩",
    medium: "Oil on Canvas",
    category: "Abstract",
    style: "Contemporary",
    price: 2100,
    size: "100×120 cm",
    color: "#F4A261",
    badge: "Featured",
    image: "/images/art-3.avif",
  },
  {
    id: 4,
    title: "Verdant Whisper",
    artist: "Eko Prasetyo",
    country: "🇮🇩",
    medium: "Watercolor",
    category: "Nature",
    style: "Impressionist",
    price: 540,
    size: "40×50 cm",
    color: "#2A9D8F",
    image: "/images/art-4.avif",
  },
  {
    id: 5,
    title: "Neon Solitude",
    artist: "Mira Yuliani",
    country: "🇮🇩",
    medium: "Mixed Media",
    category: "Abstract",
    style: "Modern",
    price: 320,
    size: "50×70 cm",
    color: "#7B2D8B",
    badge: "New",
    image: "/images/art-1.avif",
  },
  {
    id: 6,
    title: "Desert Storm",
    artist: "Ahmad Farouk",
    country: "🇸🇦",
    medium: "Oil on Canvas",
    category: "Landscape",
    style: "Realism",
    price: 3200,
    size: "120×150 cm",
    color: "#C77A3A",
    badge: "Featured",
    image: "/images/art-2.avif",
  },
  {
    id: 7,
    title: "Silent Forest",
    artist: "Yuki Tanaka",
    country: "🇯🇵",
    medium: "Watercolor",
    category: "Nature",
    style: "Impressionist",
    price: 680,
    size: "60×60 cm",
    color: "#4A7C59",
    image: "/images/art-3.avif",
  },
  {
    id: 8,
    title: "Urban Pulse",
    artist: "Layla Moreira",
    country: "🇧🇷",
    medium: "Acrylic",
    category: "Abstract",
    style: "Contemporary",
    price: 1100,
    size: "90×90 cm",
    color: "#E84545",
    image: "/images/art-4.avif",
  },
  {
    id: 9,
    title: "Moonlit Bay",
    artist: "Bima Santoso",
    country: "🇮🇩",
    medium: "Oil on Canvas",
    category: "Landscape",
    style: "Realism",
    price: 1750,
    size: "80×100 cm",
    color: "#2176AE",
    badge: "New",
    image: "/images/art-1.avif",
  },
];

const CATEGORIES = [
  "Abstract",
  "Landscape",
  "Nature",
  "Portrait",
  "Still Life",
];
const MEDIUMS = [
  "Oil on Canvas",
  "Acrylic",
  "Watercolor",
  "Mixed Media",
  "Digital",
];
const STYLES = [
  "Contemporary",
  "Modern",
  "Impressionist",
  "Realism",
  "Minimalist",
];
const PALETTE = [
  "#E84545",
  "#2176AE",
  "#F4A261",
  "#2A9D8F",
  "#7B2D8B",
  "#4A7C59",
  "#C77A3A",
  "#111",
];

export default function GalleryPage() {
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("featured");
  const [wishlist, setWishlist] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);
  const [activeMediums, setActiveMediums] = useState([]);
  const [activeColors, setActiveColors] = useState([]);
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [mobileFilter, setMobileFilter] = useState("All");

  const toggleFilter = (list, setList, val) => {
    setList((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val],
    );
  };

  const toggleWishlist = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    );
  };

  const clearAll = () => {
    setActiveCategories([]);
    setActiveMediums([]);
    setActiveColors([]);
    setPriceMin("");
    setPriceMax("");
    setMobileFilter("All");
  };

  const filtered = useMemo(() => {
    let result = [...ARTWORKS];

    if (activeCategories.length)
      result = result.filter((a) => activeCategories.includes(a.category));
    if (activeMediums.length)
      result = result.filter((a) => activeMediums.includes(a.medium));
    if (priceMin) result = result.filter((a) => a.price >= Number(priceMin));
    if (priceMax) result = result.filter((a) => a.price <= Number(priceMax));
    if (mobileFilter !== "All")
      result = result.filter((a) => a.category === mobileFilter);

    switch (sort) {
      case "price-asc":
        return result.sort((a, b) => a.price - b.price);
      case "price-desc":
        return result.sort((a, b) => b.price - a.price);
      case "newest":
        return result.sort((a, b) => b.id - a.id);
      default:
        return result;
    }
  }, [
    activeCategories,
    activeMediums,
    activeColors,
    priceMin,
    priceMax,
    sort,
    mobileFilter,
  ]);

  const hasFilters =
    activeCategories.length ||
    activeMediums.length ||
    activeColors.length ||
    priceMin ||
    priceMax;

  return (
    <PageWrapper>
      {/* Header */}
      <GalleryHeader>
        <HeaderLeft>
          <HeaderEyebrow>✦ Original Art</HeaderEyebrow>
          <HeaderTitle>Discover & Collect</HeaderTitle>
          <HeaderSub>
            Curated original artworks from emerging and established artists
            worldwide.
          </HeaderSub>
        </HeaderLeft>
        <HeaderRight>
          <ResultCount>
            <strong>{filtered.length}</strong> works found
          </ResultCount>
          <SortSelect value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </SortSelect>
        </HeaderRight>
      </GalleryHeader>

      <GalleryLayout>
        {/* ── SIDEBAR ── */}
        <Sidebar>
          {/* Category */}
          <FilterSection>
            <FilterTitle>Category</FilterTitle>
            {CATEGORIES.map((cat) => {
              const count = ARTWORKS.filter((a) => a.category === cat).length;
              const active = activeCategories.includes(cat);
              return (
                <FilterOption
                  key={cat}
                  $active={active}
                  onClick={() =>
                    toggleFilter(activeCategories, setActiveCategories, cat)
                  }
                >
                  <FilterCheckbox $active={active}>
                    {active && "✓"}
                  </FilterCheckbox>
                  {cat}
                  <FilterCount>{count}</FilterCount>
                </FilterOption>
              );
            })}
          </FilterSection>

          {/* Medium */}
          <FilterSection>
            <FilterTitle>Medium</FilterTitle>
            {MEDIUMS.map((med) => {
              const count = ARTWORKS.filter((a) => a.medium === med).length;
              const active = activeMediums.includes(med);
              return (
                <FilterOption
                  key={med}
                  $active={active}
                  onClick={() =>
                    toggleFilter(activeMediums, setActiveMediums, med)
                  }
                >
                  <FilterCheckbox $active={active}>
                    {active && "✓"}
                  </FilterCheckbox>
                  {med}
                  <FilterCount>{count}</FilterCount>
                </FilterOption>
              );
            })}
          </FilterSection>

          {/* Price */}
          <FilterSection>
            <FilterTitle>Price Range (USD)</FilterTitle>
            <PriceRow>
              <PriceInput
                type="number"
                placeholder="Min"
                value={priceMin}
                onChange={(e) => setPriceMin(e.target.value)}
              />
              <span style={{ color: "#ccc", fontSize: 12 }}>—</span>
              <PriceInput
                type="number"
                placeholder="Max"
                value={priceMax}
                onChange={(e) => setPriceMax(e.target.value)}
              />
            </PriceRow>
          </FilterSection>

          {/* Color */}
          <FilterSection>
            <FilterTitle>Color Palette</FilterTitle>
            <ColorRow>
              {PALETTE.map((c) => (
                <ColorDot
                  key={c}
                  $color={c}
                  $active={activeColors.includes(c)}
                  onClick={() => toggleFilter(activeColors, setActiveColors, c)}
                  title={c}
                />
              ))}
            </ColorRow>
          </FilterSection>

          {hasFilters && (
            <ClearBtn onClick={clearAll}>✕ Clear All Filters</ClearBtn>
          )}
        </Sidebar>

        {/* ── GRID AREA ── */}
        <GridArea>
          {/* Mobile filter chips */}
          <MobileFilterBar>
            {["All", ...CATEGORIES].map((cat) => (
              <MobileChip
                key={cat}
                $active={mobileFilter === cat}
                onClick={() => setMobileFilter(cat)}
              >
                {cat}
              </MobileChip>
            ))}
          </MobileFilterBar>

          {/* Top bar */}
          <TopBar>
            <div style={{ fontSize: 13, color: "#aaa" }}>
              Showing{" "}
              <strong style={{ color: "#111" }}>{filtered.length}</strong>{" "}
              artworks
            </div>
            <ViewToggle>
              <ViewBtn
                $active={view === "grid"}
                onClick={() => setView("grid")}
                title="Grid"
              >
                ⊞
              </ViewBtn>
              <ViewBtn
                $active={view === "large"}
                onClick={() => setView("large")}
                title="Large"
              >
                ◻
              </ViewBtn>
              <ViewBtn
                $active={view === "list"}
                onClick={() => setView("list")}
                title="List"
              >
                ☰
              </ViewBtn>
            </ViewToggle>
          </TopBar>

          {/* Grid */}
          <ArtGrid $view={view}>
            {filtered.length === 0 ? (
              <EmptyState>
                <div>🎨</div>
                <h3>No artworks found</h3>
                <p>Try adjusting your filters</p>
              </EmptyState>
            ) : (
              filtered.map((art, i) => (
                <Link
                  key={art.id}
                  href={`/artwork/${art.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <ArtCard $view={view} $index={i}>
                    <ArtCardImage $view={view} $color={art.color}>
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <ArtCardOverlay>
                        <OverlayBtn
                          $delay="0s"
                          onClick={(e) => e.preventDefault()}
                        >
                          👁 View
                        </OverlayBtn>
                        <OverlayBtn
                          $delay="0.05s"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleWishlist(e, art.id);
                          }}
                        >
                          {wishlist.includes(art.id) ? "❤️" : "🤍"} Save
                        </OverlayBtn>
                      </ArtCardOverlay>
                      {art.badge && (
                        <ArtCardBadge
                          $color={
                            art.badge === "Sale"
                              ? "#E84545"
                              : art.badge === "New"
                                ? "#2A9D8F"
                                : "#7B2D8B"
                          }
                        >
                          {art.badge}
                        </ArtCardBadge>
                      )}
                      <WishlistBtn onClick={(e) => toggleWishlist(e, art.id)}>
                        {wishlist.includes(art.id) ? "❤️" : "🤍"}
                      </WishlistBtn>
                    </ArtCardImage>

                    <ArtCardBody $view={view}>
                      <ArtCardMeta>
                        {art.medium} · {art.country}
                      </ArtCardMeta>
                      <ArtCardTitle $view={view}>{art.title}</ArtCardTitle>
                      <ArtCardArtist>{art.artist}</ArtCardArtist>
                      <ArtCardFooter>
                        <ArtCardPrice $color={art.color}>
                          ${art.price.toLocaleString()}
                        </ArtCardPrice>
                        <ArtCardSize>{art.size}</ArtCardSize>
                      </ArtCardFooter>
                    </ArtCardBody>

                    <ListActions $view={view}>
                      <QuickBuyBtn onClick={(e) => e.preventDefault()}>
                        Add to Cart
                      </QuickBuyBtn>
                    </ListActions>
                  </ArtCard>
                </Link>
              ))
            )}
          </ArtGrid>

          <LoadMoreWrapper>
            <LoadMoreBtn>Load More Artworks</LoadMoreBtn>
          </LoadMoreWrapper>
        </GridArea>
      </GalleryLayout>
    </PageWrapper>
  );
}
