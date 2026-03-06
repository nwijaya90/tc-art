"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
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

const artwork = {
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
    "/images/art-2.avif",
    "/images/art-3.avif",
    "/images/art-4.avif",
  ],
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
    image: "/images/art-1.avif",
  },
  {
    id: 5,
    title: "Neon Solitude",
    artist: "Mira Yuliani",
    price: 320,
    color: "#7B2D8B",
    image: "/images/art-2.avif",
  },
];

// ─── MAGNIFIER ───────────────────────────────────────────────
function Magnifier({ src, color, lensSize = 160, zoom = 2.5, height = 500 }) {
  const wrapperRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const onMove = useCallback((e) => {
    const r = wrapperRef.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  const w = wrapperRef.current?.offsetWidth || 600;

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
            backgroundSize: `${w * zoom}px ${height * zoom}px`,
            backgroundPosition: `${-(pos.x * zoom) + lensSize / 2}px ${-(pos.y * zoom) + lensSize / 2}px`,
            backgroundRepeat: "no-repeat",
          }}
        />
      )}

      <ZoomHint>🔍 Hover · Click to expand</ZoomHint>
    </MainImageWrapper>
  );
}

// ─── FULLSCREEN MODAL ────────────────────────────────────────
function Modal({ images, activeIndex, setActiveIndex, color, onClose }) {
  const imgRef = useRef(null);
  const wrapperRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const onImgLoad = useCallback(() => {
    if (imgRef.current) {
      sizeRef.current = {
        w: imgRef.current.offsetWidth,
        h: imgRef.current.offsetHeight,
      };
    }
  }, []);

  const sizeRef = useRef({ w: 800, h: 600 });
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

  const onMove = useCallback((e) => {
    const r = wrapperRef.current?.getBoundingClientRect();
    if (!r) return;
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  }, []);

  const LENS = 200;
  const ZOOM = 3;
  const { w, h } = sizeRef.current;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalCloseBtn onClick={onClose}>✕</ModalCloseBtn>

      <ModalImageBox
        ref={wrapperRef}
        onClick={(e) => e.stopPropagation()}
        onMouseMove={onMove}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        style={{ position: "relative", cursor: "crosshair" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src={images[activeIndex]}
          alt="Fullscreen artwork"
          onLoad={onImgLoad}
          style={{
            maxWidth: "88vw",
            maxHeight: "75vh",
            width: "auto",
            height: "auto",
            display: "block",
            borderRadius: 16,
          }}
        />

        {/* Magnifier lens */}
        {show && (
          <div
            style={{
              position: "absolute",
              left: pos.x,
              top: pos.y,
              width: LENS,
              height: LENS,
              borderRadius: "50%",
              border: "3px solid rgba(255,255,255,0.9)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              overflow: "hidden",
              zIndex: 10,
              backgroundImage: `url(${images[activeIndex]})`,
              backgroundSize: `${w * ZOOM}px ${h * ZOOM}px`,
              backgroundPosition: `${-(pos.x * ZOOM) + LENS / 2}px ${-(pos.y * ZOOM) + LENS / 2}px`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.12), transparent 60%)",
              }}
            />
          </div>
        )}
      </ModalImageBox>

      <ModalThumbnailStrip onClick={(e) => e.stopPropagation()}>
        {images.map((img, i) => (
          <ModalThumb
            key={i}
            $active={activeIndex === i}
            $color={color}
            onClick={() => setActiveIndex(i)}
          >
            <Image
              src={img}
              alt={`Thumb ${i + 1}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="64px"
            />
          </ModalThumb>
        ))}
      </ModalThumbnailStrip>
    </ModalOverlay>
  );
}

// ─── ACCORDION ───────────────────────────────────────────────
function Accordion({ art }) {
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
}

// ─── PAGE ────────────────────────────────────────────────────
export default function ArtworkDetailPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [added, setAdded] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <PageWrapper>
      {modal && (
        <Modal
          images={artwork.images}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          color={artwork.color}
          onClose={() => setModal(false)}
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
        {/* LEFT */}
        <ImagePanel>
          <div onClick={() => setModal(true)} style={{ cursor: "zoom-in" }}>
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
          <ViewInRoomBtn onClick={(e) => e.stopPropagation()}>
            🏠 View in a Room
          </ViewInRoomBtn>
        </ImagePanel>

        {/* RIGHT */}
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

          <BtnAddToCart
            onClick={() => {
              setAdded(true);
              setTimeout(() => setAdded(false), 2000);
            }}
          >
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
              Moreira's work captures fleeting emotional states through bold
              colour and layered texture, inviting the viewer to find their own
              narrative within each piece.
            </ArtistCardBio>
          </ArtistCardInfo>
          <ArtistCardBtn>View Profile →</ArtistCardBtn>
        </ArtistCard>
      </ArtistSection>

      <RelatedSection>
        <RelatedTitle>You May Also Like</RelatedTitle>
        <RelatedGrid>
          {related.map((art) => (
            <RelatedCard key={art.id}>
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
}
