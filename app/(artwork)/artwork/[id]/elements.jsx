"use client";

import Image from "next/image";

import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ─── PAGE ───────────────────────────────────────────────────
export const PageWrapper = styled.div`
  background: var(--color-bg);
  min-height: 100vh;
  animation: ${fadeIn} 0.5s ease both;
`;

export const Breadcrumb = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px 5vw 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #999;
`;

export const BreadcrumbLink = styled.span`
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--color-red);
  }
`;

export const BreadcrumbSep = styled.span`
  color: #ddd;
`;

export const BreadcrumbCurrent = styled.span`
  color: var(--color-dark);
  font-weight: 500;
`;

// ─── MAIN GRID ──────────────────────────────────────────────
export const DetailGrid = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 32px 5vw 80px;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 64px;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

// ─── LEFT: IMAGE PANEL ──────────────────────────────────────
export const ImagePanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: 88px;
`;

export const MainImageWrapper = styled.div`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: ${({ $color }) => `${$color}10`};
  width: 100%;
  height: 500px;
  cursor: crosshair;
`;

export const MainImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 120px;
  opacity: 0.15;
  user-select: none;
`;

export const MagnifierLens = styled.div.attrs(({ $x, $y, $lensSize }) => ({
  style: {
    left: `${$x}px`,
    top: `${$y}px`,
    width: `${$lensSize || 160}px`,
    height: `${$lensSize || 160}px`,
  },
}))`
  position: absolute;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.9);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(255, 255, 255, 0.4);
  pointer-events: none;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(
      circle at 35% 35%,
      rgba(255, 255, 255, 0.15),
      transparent 60%
    );
    pointer-events: none;
  }
`;

export const ZoomHint = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 11px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 20px;
  backdrop-filter: blur(8px);
  letter-spacing: 0.5px;
  pointer-events: none;
`;

export const ViewInRoomBtn = styled.button`
  position: absolute;
  bottom: 116px;
  left: 5px;
  background: rgba(255, 255, 255, 0.92);
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-dark);
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.2s ease;
  font-family: var(--font-outfit);

  &:hover {
    background: #fff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  }
`;

// ─── THUMBNAILS ─────────────────────────────────────────────
export const ThumbnailStrip = styled.div`
  display: flex;
  gap: 12px;
`;

export const Thumbnail = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid
    ${({ $active, $color }) => ($active ? $color : "transparent")};
  background: ${({ $color }) => `${$color}15`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  opacity: ${({ $active }) => ($active ? 1 : 0.55)};
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
    border-color: ${({ $color }) => $color};
  }
`;

export const ThumbnailImg = styled(Image)`
  object-fit: cover;
`;

// ─── RIGHT: INFO PANEL ──────────────────────────────────────
export const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  animation: ${slideUp} 0.6s ease 0.1s both;
`;

export const ArtworkTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${({ $color }) => `${$color}15`};
  color: ${({ $color }) => $color};
  border-radius: 50px;
  padding: 5px 14px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
  width: fit-content;
`;

export const ArtworkTitle = styled.h1`
  font-family: var(--font-playfair);
  font-size: 36px;
  font-weight: 800;
  color: var(--color-dark);
  line-height: 1.15;
  margin-bottom: 8px;
`;

export const ArtistRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  cursor: pointer;

  &:hover span {
    color: var(--color-red);
  }
`;

export const ArtistAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: ${({ $color }) => `${$color}25`};
  border: 1.5px solid ${({ $color }) => `${$color}50`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
`;

export const ArtistName = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: var(--color-dark);
  transition: color 0.2s;
`;

export const ArtistCountry = styled.span`
  font-size: 13px;
  color: #999;
`;

export const Divider = styled.div`
  height: 1px;
  background: #eee;
  margin: 24px 0;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 8px;
`;

export const Price = styled.div`
  font-family: var(--font-playfair);
  font-size: 40px;
  font-weight: 800;
  color: ${({ $color }) => $color};
`;

export const PriceOriginal = styled.div`
  font-size: 18px;
  color: #bbb;
  text-decoration: line-through;
`;

export const PriceBadge = styled.div`
  background: #e84545;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 20px;
  letter-spacing: 0.5px;
`;

export const ShippingNote = styled.div`
  font-size: 13px;
  color: #888;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const BtnAddToCart = styled.button`
  width: 100%;
  background: linear-gradient(135deg, var(--color-red), var(--color-orange));
  border: none;
  border-radius: 50px;
  padding: 18px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  font-family: var(--font-outfit);
  box-shadow: 0 8px 24px rgba(232, 69, 69, 0.3);
  transition: all 0.2s ease;
  margin-bottom: 12px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(232, 69, 69, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const BtnMakeOffer = styled.button`
  width: 100%;
  background: transparent;
  border: 2px solid var(--color-dark);
  border-radius: 50px;
  padding: 16px;
  font-size: 15px;
  font-weight: 700;
  color: var(--color-dark);
  font-family: var(--font-outfit);
  transition: all 0.2s ease;
  margin-bottom: 20px;

  &:hover {
    background: var(--color-dark);
    color: #fff;
  }
`;

export const TrustRow = styled.div`
  display: flex;
  gap: 0;
  border: 1.5px solid #eee;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 28px;
`;

export const TrustItem = styled.div`
  flex: 1;
  padding: 14px 10px;
  text-align: center;
  border-right: 1.5px solid #eee;
  font-size: 11px;
  color: #666;
  line-height: 1.5;

  &:last-child {
    border-right: none;
  }

  span {
    display: block;
    font-size: 18px;
    margin-bottom: 4px;
  }
`;

// ─── ACCORDION ──────────────────────────────────────────────
export const AccordionWrapper = styled.div`
  border-top: 1.5px solid #eee;
`;

export const AccordionItem = styled.div`
  border-bottom: 1.5px solid #eee;
`;

export const AccordionHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  background: transparent;
  border: none;
  font-family: var(--font-outfit);
  font-size: 14px;
  font-weight: 700;
  color: var(--color-dark);
  cursor: pointer;
  letter-spacing: 0.3px;
  text-align: left;
  transition: color 0.2s;

  &:hover {
    color: var(--color-red);
  }
`;

export const AccordionIcon = styled.span`
  font-size: 18px;
  color: #999;
  transition: transform 0.3s ease;
  transform: ${({ $open }) => ($open ? "rotate(45deg)" : "rotate(0deg)")};
`;

export const AccordionBody = styled.div`
  max-height: ${({ $open }) => ($open ? "400px" : "0")};
  overflow: hidden;
  transition: max-height 0.35s ease;
`;

export const AccordionContent = styled.div`
  padding-bottom: 20px;
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 0;
  font-size: 13px;
  border-bottom: 1px solid #f5f5f5;

  &:last-child {
    border-bottom: none;
  }
`;

export const DetailLabel = styled.span`
  color: #999;
  font-weight: 500;
  flex-shrink: 0;
  min-width: 120px;
`;

export const DetailValue = styled.span`
  color: var(--color-dark);
  font-weight: 500;
  text-align: right;
`;

export const AboutText = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.75;
`;

// ─── ARTIST CARD ────────────────────────────────────────────
export const ArtistSection = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 5vw 80px;
`;

export const ArtistCard = styled.div`
  background: #111;
  border-radius: 24px;
  padding: 40px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 28px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const ArtistCardAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: ${({ $color }) => `${$color}25`};
  border: 2px solid ${({ $color }) => `${$color}50`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  flex-shrink: 0;
`;

export const ArtistCardInfo = styled.div``;

export const ArtistCardName = styled.div`
  font-family: var(--font-playfair);
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
`;

export const ArtistCardCountry = styled.div`
  font-size: 13px;
  color: #666;
  margin-bottom: 10px;
`;

export const ArtistCardBio = styled.div`
  font-size: 13px;
  color: #888;
  line-height: 1.65;
  max-width: 500px;
`;

export const ArtistCardBtn = styled.button`
  background: transparent;
  border: 1.5px solid #333;
  border-radius: 50px;
  padding: 12px 24px;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  font-family: var(--font-outfit);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    border-color: var(--color-red);
    color: var(--color-red);
  }
`;

// ─── RELATED ────────────────────────────────────────────────
export const RelatedSection = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 5vw 80px;
`;

export const RelatedTitle = styled.h2`
  font-family: var(--font-playfair);
  font-size: 28px;
  font-weight: 800;
  color: var(--color-dark);
  margin-bottom: 28px;
`;

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

export const RelatedCard = styled.div`
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }
`;

export const RelatedCardImg = styled.div`
  height: 180px;
  position: relative;
  background: ${({ $color }) => `${$color}15`};
  overflow: hidden;
`;

export const RelatedCardBody = styled.div`
  padding: 14px 16px;
`;

export const RelatedCardTitle = styled.div`
  font-family: var(--font-playfair);
  font-size: 14px;
  font-weight: 700;
  color: var(--color-dark);
  margin-bottom: 2px;
`;

export const RelatedCardArtist = styled.div`
  font-size: 11px;
  color: #999;
  margin-bottom: 6px;
`;

export const RelatedCardPrice = styled.div`
  font-size: 15px;
  font-weight: 800;
  color: ${({ $color }) => $color};
`;

// ─── FULLSCREEN MODAL ────────────────────────────────────────

export const ModalCloseBtn = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: 1.5px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10000;
  font-family: var(--font-outfit);
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const ModalImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30%;
`;

export const ModalThumbnailStrip = styled.div`
  display: flex;
  gap: 10px;
  z-index: 10000;
`;

export const ModalThumb = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 2px solid
    ${({ $active, $color }) => ($active ? $color : "rgba(255,255,255,0.2)")};
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  transition: all 0.2s;

  &:hover {
    opacity: 1;
    border-color: ${({ $color }) => $color};
  }
`;
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.93);
  z-index: 9999;
  display: grid;
  place-items: center;
`;
