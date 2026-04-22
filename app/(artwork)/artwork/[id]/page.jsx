"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import useCartStore from "@/lib/cartStore";
import {
  PageWrapper,
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbSep,
  BreadcrumbCurrent,
  DetailGrid,
  ImagePanel,
  MainImageWrapper,
  MagnifierLens,
  ZoomHint,
  ViewInRoomBtn,
  ThumbnailStrip,
  Thumbnail,
  ThumbnailImg,
  InfoPanel,
  ArtworkTag,
  ArtworkTitle,
  ArtistRow,
  ArtistAvatar,
  ArtistName,
  ArtistCountry,
  Divider,
  PriceRow,
  Price,
  PriceOriginal,
  PriceBadge,
  ShippingNote,
  BtnAddToCart,
  BtnMakeOffer,
  TrustRow,
  TrustItem,
  AccordionWrapper,
  AccordionItem,
  AccordionHeader,
  AccordionIcon,
  AccordionBody,
  AccordionContent,
  DetailRow,
  DetailLabel,
  DetailValue,
  AboutText,
  ArtistSection,
  ArtistCard,
  ArtistCardAvatar,
  ArtistCardInfo,
  ArtistCardName,
  ArtistCardCountry,
  ArtistCardBio,
  ArtistCardBtn,
  RelatedSection,
  RelatedTitle,
  RelatedGrid,
  RelatedCard,
  RelatedCardImg,
  RelatedCardBody,
  RelatedCardTitle,
  RelatedCardArtist,
  RelatedCardPrice,
  ModalOverlay,
  ModalCloseBtn,
  ModalImageBox,
  ModalThumbnailStrip,
  ModalThumb,
} from "./elements";
import Modal from "@mui/material/Modal";

// ─── MOCK DATA ────────────────────────────────────────────────
const ARTWORKS_DB = {
  1: {
    id: 1,
    title: "Crimson Reverie",
    artist: "Layla Moreira",
    country: "🇧🇷 Brazil",
    medium: "Oil on Canvas",
    category: "Abstract",
    price: 1250,
    originalPrice: 1600,
    size: "80 × 100 × 2 cm",
    year: 2023,
    style: "Contemporary",
    rarity: "One-of-a-kind Artwork",
    readyToHang: "Yes",
    frame: "Not Framed",
    certificate: "Included",
    shipsFrom: "Brazil",
    color: "#E84545",
    tag: "Sale",
    about: `"Crimson Reverie" explores the tension between stillness and motion — a landscape caught between dusk and dream. Using layered oil glazes, Moreira builds surfaces that shift with changing light, creating a sense of depth that draws the viewer inward.`,
    images: [
      "/images/art-1.avif",
      "/images/art-1-a.avif",
      "/images/art-1-b.avif",
    ],
  },
  2: {
    id: 2,
    title: "Azure Depths",
    artist: "Bima Santoso",
    country: "🇮🇩 Indonesia",
    medium: "Acrylic",
    category: "Landscape",
    price: 890,
    originalPrice: null,
    size: "60 × 80 × 2 cm",
    year: 2024,
    style: "Contemporary",
    rarity: "One-of-a-kind Artwork",
    readyToHang: "Yes",
    frame: "Not Framed",
    certificate: "Included",
    shipsFrom: "Indonesia",
    color: "#2176AE",
    tag: "Hot",
    about: `"Azure Depths" captures the serene beauty of ocean twilight. Santoso's masterful use of acrylic creates layers of depth that mirror the vastness of the sea.`,
    images: [
      "/images/art-2.avif",
      "/images/art-2.avif",
      "/images/art-2.avif",
      "/images/art-2.avif",
    ],
  },
  3: {
    id: 3,
    title: "Golden Meridian",
    artist: "Sari Dewi",
    country: "🇮🇩 Indonesia",
    medium: "Mixed Media",
    category: "Abstract",
    price: 2100,
    originalPrice: null,
    size: "100 × 120 × 3 cm",
    year: 2023,
    style: "Contemporary",
    rarity: "One-of-a-kind Artwork",
    readyToHang: "Yes",
    frame: "Framed",
    certificate: "Included",
    shipsFrom: "Indonesia",
    color: "#F4A261",
    tag: "Featured",
    about: `"Golden Meridian" blends traditional techniques with modern aesthetics. Dewi's mixed media approach creates a rich tapestry of texture and color.`,
    images: [
      "/images/art-3.avif",
      "/images/art-3.avif",
      "/images/art-3.avif",
      "/images/art-3.avif",
    ],
  },
  4: {
    id: 4,
    title: "Verdant Whisper",
    artist: "Eko Prasetyo",
    country: "🇮🇩 Indonesia",
    medium: "Watercolour",
    category: "Nature",
    price: 540,
    originalPrice: 680,
    size: "40 × 50 × 2 cm",
    year: 2024,
    style: "Impressionist",
    rarity: "Limited Edition (5/50)",
    readyToHang: "Yes",
    frame: "Not Framed",
    certificate: "Included",
    shipsFrom: "Indonesia",
    color: "#2A9D8F",
    tag: "Sale",
    about: `"Verdant Whisper" celebrates nature's quiet moments. Prasetyo's delicate watercolour technique brings life to botanical beauty.`,
    images: [
      "/images/art-7.avif",
      "/images/art-7.avif",
      "/images/art-7.avif",
      "/images/art-7.avif",
      "/images/art-7.avif",
    ],
  },
  5: {
    id: 5,
    title: "Neon Solitude",
    artist: "Mira Yuliani",
    country: "🇮🇩 Indonesia",
    medium: "Digital Print",
    category: "Portrait",
    price: 320,
    originalPrice: null,
    size: "50 × 70 × 1 cm",
    year: 2024,
    style: "Contemporary",
    rarity: "Limited Edition (10/100)",
    readyToHang: "Yes",
    frame: "Not Framed",
    certificate: "Included",
    shipsFrom: "Indonesia",
    color: "#7B2D8B",
    tag: "New",
    about: `"Neon Solitude" explores modern isolation through vibrant digital art. Yuliani's work bridges traditional portraiture with digital innovation.`,
    images: [
      "/images/art-5.avif",
      "/images/art-5.avif",
      "/images/art-5.avif",
      "/images/art-5.avif",
    ],
  },
  6: {
    id: 6,
    title: "Terracotta Dreams",
    artist: "Bagas Wibowo",
    country: "🇮🇩 Indonesia",
    medium: "Oil on Canvas",
    category: "Abstract",
    price: 1780,
    originalPrice: null,
    size: "90 × 110 × 2 cm",
    year: 2023,
    style: "Contemporary",
    rarity: "One-of-a-kind Artwork",
    readyToHang: "Yes",
    frame: "Not Framed",
    certificate: "Included",
    shipsFrom: "Indonesia",
    color: "#C1440E",
    tag: null,
    about: `"Terracotta Dreams" draws inspiration from traditional Indonesian pottery. Wibowo's bold strokes and earthy palette create a powerful visual narrative.`,
    images: [
      "/images/art-6.avif",
      "/images/art-6.avif",
      "/images/art-6.avif",
      "/images/art-6.avif",
    ],
  },
};

const related = [
  {
    id: 2,
    title: "Azure Depths",
    artist: "Bima Santoso",
    price: 890,
    color: "#2176AE",
    image: "/images/art-2.avif",
  },
  {
    id: 3,
    title: "Golden Meridian",
    artist: "Sari Dewi",
    price: 2100,
    color: "#F4A261",
    image: "/images/art-3.avif",
  },
  {
    id: 4,
    title: "Verdant Whisper",
    artist: "Eko Prasetyo",
    price: 540,
    color: "#2A9D8F",
    image: "/images/art-7.avif",
  },
  {
    id: 5,
    title: "Neon Solitude",
    artist: "Mira Yuliani",
    price: 320,
    color: "#7B2D8B",
    image: "/images/art-5.avif",
  },
];

// ─── REUSABLE COMPONENTS ──────────────────────────────────────
const Magnifier = ({ src, color, lensSize = 160, zoom = 2.5 }) => {
  const wrapperRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const onMove = useCallback((e) => {
    const r = wrapperRef.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  const w = wrapperRef.current?.offsetWidth || 600;
  const h = wrapperRef.current?.offsetHeight || 500;

  return (
    <MainImageWrapper
      $color={color}
      ref={wrapperRef}
      onMouseMove={onMove}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Image
        src={src}
        alt="Artwork"
        fill
        style={{ objectFit: "contain", padding: 24 }}
        sizes="55vw"
        priority
      />
      {show && (
        <MagnifierLens
          $x={pos.x}
          $y={pos.y}
          $lensSize={lensSize}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: `${w * zoom}px ${h * zoom}px`,
            backgroundPosition: `${-(pos.x * zoom) + lensSize / 2}px ${-(pos.y * zoom) + lensSize / 2}px`,
            backgroundRepeat: "no-repeat",
          }}
        />
      )}
      <ZoomHint>🔍 Hover · Click to expand</ZoomHint>
    </MainImageWrapper>
  );
};

const ImageModal = ({ images, activeIndex, onClose }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalCloseBtn onClick={onClose}>✕</ModalCloseBtn>
      <ModalImageBox onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[activeIndex]}
          alt="Fullscreen artwork"
          style={{
            maxWidth: "88vw",
            maxHeight: "75vh",
            width: "auto",
            height: "auto",
            display: "block",
            borderRadius: 16,
          }}
        />
      </ModalImageBox>
      <ModalThumbnailStrip
        onClick={(e) => e.stopPropagation()}
      ></ModalThumbnailStrip>
    </ModalOverlay>
  );
};

const Accordion = ({ art }) => {
  const [openId, setOpenId] = useState("about");

  const items = [
    {
      id: "about",
      label: "About the Artwork",
      content: <AboutText>{art.about}</AboutText>,
    },
    {
      id: "details",
      label: "Details & Dimensions",
      content: [
        ["Medium", art.medium],
        ["Size", art.size],
        ["Year", art.year],
        ["Style", art.style],
        ["Subject", art.category],
        ["Rarity", art.rarity],
        ["Ready to Hang", art.readyToHang],
        ["Frame", art.frame],
        ["Certificate", art.certificate],
      ].map(([l, v]) => (
        <DetailRow key={l}>
          <DetailLabel>{l}</DetailLabel>
          <DetailValue>{v}</DetailValue>
        </DetailRow>
      )),
    },
    {
      id: "shipping",
      label: "Shipping & Returns",
      content: [
        ["Ships From", art.shipsFrom],
        ["Delivery", "7–14 business days"],
        ["Packaging", "Ships in a secure box"],
        ["Returns", "Free 14-day returns"],
        ["Cost", "Free shipping"],
      ].map(([l, v]) => (
        <DetailRow key={l}>
          <DetailLabel>{l}</DetailLabel>
          <DetailValue>{v}</DetailValue>
        </DetailRow>
      )),
    },
  ];

  return (
    <AccordionWrapper>
      {items.map((item) => (
        <AccordionItem key={item.id}>
          <AccordionHeader
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
          >
            {item.label}
            <AccordionIcon $open={openId === item.id}>+</AccordionIcon>
          </AccordionHeader>
          <AccordionBody $open={openId === item.id}>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionBody>
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
};

// ─── PAGE ─────────────────────────────────────────────────────
const ArtworkDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const artworkId = parseInt(params?.id);
  const artwork = ARTWORKS_DB[artworkId];

  const [activeIndex, setActiveIndex] = useState(0);
  const [added, setAdded] = useState(false);
  const [imageModal, setImageModal] = useState(false);
  const [viewInRoom, setViewInRoom] = useState(false);
  const [copied, setCopied] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  // Redirect jika artwork tidak ada
  if (!artwork) {
    router.push("/gallery");
    return null;
  }

  const arUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/ar/${artwork.id}`
      : "";

  const handleCopy = () => {
    navigator.clipboard.writeText(arUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isMobile = () =>
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

  const handleViewInRoom = () => {
    if (isMobile()) {
      window.location.href = `/ar/${artwork.id}`;
    } else {
      setViewInRoom(true);
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: artwork.id,
      title: artwork.title,
      artist: artwork.artist,
      price: artwork.price,
      image: artwork.images[0],
      color: artwork.color,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Filter related artworks (bukan artwork yang sama)
  const relatedFiltered = related
    .filter((r) => r.id !== artwork.id)
    .slice(0, 4);

  return (
    <PageWrapper>
      <Modal open={viewInRoom} onClose={() => setViewInRoom(false)}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            borderRadius: 24,
            padding: "32px 40px",
            textAlign: "center",
            maxWidth: 400,
            width: "90vw",
            outline: "none",
          }}
        >
          <div style={{ fontSize: 40, marginBottom: 12 }}>📱</div>
          <div
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 22,
              fontWeight: 800,
              color: "#111",
              marginBottom: 8,
            }}
          >
            View in Your Space
          </div>
          <div
            style={{
              fontSize: 13,
              color: "#999",
              marginBottom: 24,
              lineHeight: 1.6,
            }}
          >
            Open this link on your phone or tablet to place this artwork in your
            room using AR.
          </div>
          <div
            style={{
              display: "flex",
              gap: 8,
              background: "#f5f5f3",
              borderRadius: 12,
              padding: "10px 14px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: 12,
                color: "#888",
                flex: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                textAlign: "left",
              }}
            >
              {arUrl}
            </div>
            <button
              onClick={handleCopy}
              style={{
                background: copied ? "#2A9D8F" : "#111",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "6px 14px",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                flexShrink: 0,
                fontFamily: "var(--font-outfit)",
              }}
            >
              {copied ? "✓ Copied!" : "Copy"}
            </button>
          </div>
          <div
            style={{
              fontSize: 11,
              color: "#ccc",
              marginTop: 16,
              lineHeight: 1.6,
            }}
          >
            Works best on iOS Safari & Android Chrome
          </div>
        </div>
      </Modal>

      {imageModal && (
        <ImageModal
          images={artwork.images}
          activeIndex={activeIndex}
          onClose={() => setImageModal(false)}
        />
      )}

      <Breadcrumb>
        <BreadcrumbLink>Home</BreadcrumbLink>
        <BreadcrumbSep>/</BreadcrumbSep>
        <BreadcrumbLink>Gallery</BreadcrumbLink>
        <BreadcrumbSep>/</BreadcrumbSep>
        <BreadcrumbLink>{artwork.category}</BreadcrumbLink>
        <BreadcrumbSep>/</BreadcrumbSep>
        <BreadcrumbCurrent>{artwork.title}</BreadcrumbCurrent>
      </Breadcrumb>

      <DetailGrid>
        <ImagePanel>
          <div
            onClick={() => setImageModal(true)}
            style={{ cursor: "zoom-in", position: "relative" }}
          >
            <Magnifier
              src={artwork.images[activeIndex]}
              color={artwork.color}
            />
          </div>
          <ThumbnailStrip>
            {artwork.images.map((img, i) => (
              <Thumbnail
                key={i}
                $active={activeIndex === i}
                $color={artwork.color}
                onClick={() => setActiveIndex(i)}
              >
                <ThumbnailImg
                  src={img}
                  alt={`Thumb ${i + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="80px"
                />
              </Thumbnail>
            ))}
          </ThumbnailStrip>
          <ViewInRoomBtn onClick={handleViewInRoom}>
            🏠 View in a Room
          </ViewInRoomBtn>
        </ImagePanel>

        <InfoPanel>
          <ArtworkTag $color={artwork.color}>
            ✦ {artwork.tag || artwork.category}
          </ArtworkTag>
          <ArtworkTitle>{artwork.title}</ArtworkTitle>
          <ArtistRow>
            <ArtistAvatar $color={artwork.color}>👤</ArtistAvatar>
            <div>
              <ArtistName>{artwork.artist}</ArtistName>{" "}
              <ArtistCountry>{artwork.country}</ArtistCountry>
            </div>
          </ArtistRow>
          <Divider />
          <PriceRow>
            <Price $color={artwork.color}>
              ${artwork.price.toLocaleString()}
            </Price>
            {artwork.originalPrice && (
              <>
                <PriceOriginal>
                  ${artwork.originalPrice.toLocaleString()}
                </PriceOriginal>
                <PriceBadge>
                  -
                  {Math.round(
                    (1 - artwork.price / artwork.originalPrice) * 100,
                  )}
                  %
                </PriceBadge>
              </>
            )}
          </PriceRow>
          <ShippingNote>
            ✈️ Free shipping · Certificate of authenticity
          </ShippingNote>
          <BtnAddToCart onClick={handleAddToCart}>
            {added ? "✓ Added to Cart!" : "Add to Cart"}
          </BtnAddToCart>
          <BtnMakeOffer>Make an Offer</BtnMakeOffer>
          <TrustRow>
            <TrustItem>
              <span>🔒</span>Secure Payment
            </TrustItem>
            <TrustItem>
              <span>↩️</span>14-Day Returns
            </TrustItem>
            <TrustItem>
              <span>📜</span>Certificate
            </TrustItem>
          </TrustRow>
          <Accordion art={artwork} />
        </InfoPanel>
      </DetailGrid>

      <ArtistSection>
        <ArtistCard>
          <ArtistCardAvatar $color={artwork.color}>👤</ArtistCardAvatar>
          <ArtistCardInfo>
            <ArtistCardName>{artwork.artist}</ArtistCardName>
            <ArtistCardCountry>{artwork.country}</ArtistCardCountry>
            <ArtistCardBio>
              {artwork.artist.split(" ")[0]}'s work captures emotion and texture
              through masterful technique, inviting viewers to find their own
              narrative within each piece.
            </ArtistCardBio>
          </ArtistCardInfo>
          <ArtistCardBtn>View Profile →</ArtistCardBtn>
        </ArtistCard>
      </ArtistSection>

      <RelatedSection>
        <RelatedTitle>You May Also Like</RelatedTitle>
        <RelatedGrid>
          {relatedFiltered.map((art) => (
            <RelatedCard
              key={art.id}
              onClick={() => router.push(`/artwork/${art.id}`)}
            >
              <RelatedCardImg $color={art.color}>
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="25vw"
                />
              </RelatedCardImg>
              <RelatedCardBody>
                <RelatedCardTitle>{art.title}</RelatedCardTitle>
                <RelatedCardArtist>{art.artist}</RelatedCardArtist>
                <RelatedCardPrice $color={art.color}>
                  ${art.price.toLocaleString()}
                </RelatedCardPrice>
              </RelatedCardBody>
            </RelatedCard>
          ))}
        </RelatedGrid>
      </RelatedSection>
    </PageWrapper>
  );
};

export default ArtworkDetailPage;
